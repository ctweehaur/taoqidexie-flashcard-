// ==========================================
// 1. 初始化变量与状态管理
// ==========================================
let currentPlan = [];       // 今日学习的生词队列
let currentIndex = 0;       // 当前学习的生词索引
let isFlipped = false;      // 卡片是否翻转
let isWeaknessMode = false;  // 是否处于错题专项训练模式

// --- Quiz 测验专用变量 ---
let quizQuestions = [];     // 测验题目队列
let quizCurrentIndex = 0;   // 当前题号
let quizScore = 0;          // 答对题数
const QUIZ_TOTAL = 5;       // 每次测验固定 5 题

if (typeof allIdioms === 'undefined') {
    console.error("错误：未找到生词数据，请检查 data.js 是否正确引入！");
}

// ==========================================
// 2. 核心初始化函数 (学习卡片)
// ==========================================
function initApp() {
    try {
        const savedProgress = localStorage.getItem('vocabulary_progress');
        const todayStr = new Date().toDateString();
        
        let wrongList = JSON.parse(localStorage.getItem('vocabulary_wrong_list')) || [];
        updateWeaknessButton(wrongList.length);

        if (!savedProgress || JSON.parse(savedProgress).date !== todayStr) {
            const shuffled = [...allIdioms].sort(() => 0.5 - Math.random());
            currentPlan = shuffled.slice(0, Math.min(10, allIdioms.length));
            
            localStorage.setItem('vocabulary_progress', JSON.stringify({
                date: todayStr,
                plan: currentPlan,
                index: 0
            }));
            currentIndex = 0;
        } else {
            const progressData = JSON.parse(savedProgress);
            currentPlan = progressData.plan;
            currentIndex = progressData.index;
        }

        isWeaknessMode = false;
        
        const statusEl = document.getElementById('daily-status');
        if (statusEl) statusEl.innerText = "每日复习计划（今日 10 词）";

        setupFlipEvent();
        renderCard();
    } catch (error) {
        console.error("初始化失败:", error);
    }
}

function renderCard() {
    if (currentPlan.length === 0) {
        showEmptyState();
        return;
    }
    if (currentIndex >= currentPlan.length) { currentIndex = 0; }

    const currentWord = currentPlan[currentIndex];
    const flipCardEl = document.getElementById('flip-card');
    if (flipCardEl) flipCardEl.classList.remove('rotate-y-180');
    isFlipped = false;

    // 正面渲染
    const rubyContainer = document.getElementById('card-idiom-ruby');
    if (rubyContainer) {
        const wordText = currentWord.word || "未知生词";
        const pinyinText = currentWord.pinyin || "";

        if (pinyinText) {
            const pinyinArray = pinyinText.split(/\s+/);
            let rubyHtml = "";
            for (let i = 0; i < wordText.length; i++) {
                const char = wordText[i];
                const py = pinyinArray[i] || "";
                rubyHtml += `
                    <ruby class="flex flex-col items-center mx-1">
                        <rt class="text-lg sm:text-xl text-stone-500 font-sans tracking-normal lowercase mb-2 font-medium">${py}</rt>
                        <span class="font-serif font-bold">${char}</span>
                    </ruby>
                `;
            }
            rubyContainer.innerHTML = rubyHtml;
        } else {
            rubyContainer.innerHTML = `<span class="font-serif font-bold">${wordText}</span>`;
        }
    }

    // 显示分类标签
    const categoryEl = document.getElementById('card-category');
    if (categoryEl) {
        categoryEl.innerText = `🏷️ ${currentWord.category || '未分类'}`;
    }

    // 反面渲染
    const defZhEl = document.getElementById('card-def-zh');
    if (defZhEl) defZhEl.innerText = currentWord.defZh || '暂无释义';

    const defEnEl = document.getElementById('card-def-en');
    if (defEnEl) defEnEl.innerText = currentWord.defEn || 'No English translation available.';

    const defBmEl = document.getElementById('card-def-bm');
    if (defBmEl) defBmEl.innerText = currentWord.defBm || 'Tiada terjemahan.';

    const exampleEl = document.getElementById('card-example');
    if (exampleEl) {
        const wordText = currentWord.word || '';
        let exampleText = currentWord.example || '暂无例句。';
        if (wordText && exampleText.includes(wordText)) {
            exampleText = exampleText.replace(wordText, `______`);
        }
        exampleEl.innerText = exampleText;
    }

    const progressEl = document.getElementById('progress-indicator');
    if (progressEl) {
        progressEl.innerText = `进度：${currentIndex + 1} / ${currentPlan.length} ${isWeaknessMode ? '（错题训练中）' : ''}`;
    }
}

function setupFlipEvent() {
    const container = document.getElementById('card-container');
    const flipCardEl = document.getElementById('flip-card');
    if (container && flipCardEl) {
        container.onclick = null;
        container.onclick = function() {
            isFlipped = !isFlipped;
            flipCardEl.classList.toggle('rotate-y-180', isFlipped);
        };
    }
}

function markMastery(isMastered) {
    if (currentPlan.length === 0) return;
    const currentWord = currentPlan[currentIndex];
    let wrongList = JSON.parse(localStorage.getItem('vocabulary_wrong_list')) || [];
    const currentWordText = currentWord.word || '';

    if (!isMastered) {
        if (!wrongList.some(item => item.word === currentWordText)) { wrongList.push(currentWord); }
        showToast("📌 已加入待加强训练库");
    } else {
        wrongList = wrongList.filter(item => item.word !== currentWordText);
        showToast("🎉 太棒了，这个词已经熟练掌握！");
    }

    localStorage.setItem('vocabulary_wrong_list', JSON.stringify(wrongList));
    updateWeaknessButton(wrongList.length);
    updateMasteryProgress();
    currentIndex++;
    
    if (currentIndex >= currentPlan.length) {
        if (isWeaknessMode) {
            showToast("👑 太棒了！本轮错题专项集训全部通关！");
            isWeaknessMode = false;
            initApp(); 
            return;
        } else {
            showToast("🎉 今日生词已全部浏览完毕！");
            currentIndex = currentPlan.length - 1; 
        }
    }
    renderCard();
}

function startWeaknessTraining() {
    const wrongList = JSON.parse(localStorage.getItem('vocabulary_wrong_list')) || [];
    if (wrongList.length === 0) {
        showToast("✨ 赞！当前没有待加强的生词！");
        return;
    }
    isWeaknessMode = true;
    currentPlan = [...wrongList].sort(() => 0.5 - Math.random()); 
    currentIndex = 0;
    const statusEl = document.getElementById('daily-status');
    if (statusEl) statusEl.innerText = `🎯 错题专项集训中（共 ${currentPlan.length} 词）`;
    renderCard();
}

function updateWeaknessButton(count) {
    const btn = document.querySelector('button[onclick="startWeaknessTraining()"]');
    if (btn) btn.innerHTML = `🎯 开启错题专项训练 (<span class="text-amber-600 font-bold">${count}</span>)`;
}

function showEmptyState() {
    const rubyContainer = document.getElementById('card-idiom-ruby');
    if (rubyContainer) rubyContainer.innerHTML = `<span class="text-base text-stone-400">今日暂无生词任务</span>`;
}

// ==========================================
// 3. Toast 通知系统
// ==========================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    const bgClass = type === 'success' 
        ? 'bg-stone-800 text-white' 
        : 'bg-red-50 border border-red-200 text-red-800';
    toast.className = `${bgClass} px-4 py-2.5 rounded-xl shadow-lg text-xs font-semibold tracking-wide flex items-center gap-1.5 animate-bounce pointer-events-auto transition-all duration-300`;
    toast.innerHTML = message;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('opacity-0', '-translate-y-2');
        setTimeout(() => { toast.remove(); }, 300);
    }, 2500);
}

// ==========================================
// 4. 进度追踪
// ==========================================
function updateMasteryProgress() {
    if (typeof allIdioms === 'undefined' || allIdioms.length === 0) {
        return;
    }
    
    let wrongList = JSON.parse(localStorage.getItem('vocabulary_wrong_list')) || [];
    const totalWords = allIdioms.length;
    const wrongCount = wrongList.length;
    const masteredCount = Math.max(0, totalWords - wrongCount);
    
    const percent = totalWords > 0 ? Math.round((masteredCount / totalWords) * 100) : 0;
    
    const bar = document.getElementById('mastery-progress-bar');
    if (bar) bar.style.width = `${percent}%`;
    
    const txt = document.getElementById('mastery-status');
    if (txt) txt.innerText = `已掌握 ${masteredCount} / ${totalWords} 词 (${percent}%)`;
}

// ==========================================
// 5. 分类筛选
// ==========================================
let activeCategory = '全部';

function filterCategory(categoryName) {
    activeCategory = categoryName;
    
    // 更新按钮样式
    const buttons = document.querySelectorAll('#filterNav button');
    buttons.forEach(btn => {
        const btnText = btn.innerText.replace(/[📍🏠🪑👤🎨🏃📊]/g, '').trim();
        if (btnText === categoryName || (categoryName === '全部' && btnText === '全部')) {
            btn.classList.add('bg-stone-800', 'text-white', 'border-stone-800');
            btn.classList.remove('bg-white', 'text-stone-600', 'border-stone-200');
        } else {
            btn.classList.remove('bg-stone-800', 'text-white', 'border-stone-800');
            btn.classList.add('bg-white', 'text-stone-600', 'border-stone-200');
        }
    });

    // 切换分类
    if (categoryName === '全部') {
        // 恢复每日计划
        const savedProgress = localStorage.getItem('vocabulary_progress');
        if (savedProgress) {
            const progressData = JSON.parse(savedProgress);
            currentPlan = progressData.plan;
            currentIndex = progressData.index;
        } else {
            const shuffled = [...allIdioms].sort(() => 0.5 - Math.random());
            currentPlan = shuffled.slice(0, Math.min(10, allIdioms.length));
            currentIndex = 0;
        }
        const statusEl = document.getElementById('daily-status');
        if (statusEl) statusEl.innerText = '每日复习计划（今日 10 词）';
    } else {
        // 按分类筛选
        const filtered = allIdioms.filter(item => item.category === categoryName);
        currentPlan = filtered.length > 0 ? filtered : [];
        currentIndex = 0;
        const statusEl = document.getElementById('daily-status');
        if (statusEl) statusEl.innerText = `📂 ${categoryName}（${currentPlan.length} 词）`;
    }
    
    renderCard();
    updateMasteryProgress();
}


// ==========================================
// 6. 核心 Quiz (小测验) 控制逻辑
// ==========================================

// 开启测验
function startQuiz() {
    if (!allIdioms || allIdioms.length < 4) {
        showToast("⚠️ 数据源生词数量不足 4 个，无法生成选择题选项！", "error");
        return;
    }

    document.getElementById('quiz-question-container').classList.remove('hidden');
    document.getElementById('quiz-result-container').classList.add('hidden');

    const shuffled = [...allIdioms].sort(() => 0.5 - Math.random());
    quizQuestions = shuffled.slice(0, Math.min(QUIZ_TOTAL, allIdioms.length));
    
    // 随机分配三种题型
    quizQuestions = quizQuestions.map(q => {
        return {
            ...q,
            qType: Math.floor(Math.random() * 3)
        };
    });

    quizCurrentIndex = 0;
    quizScore = 0;

    document.getElementById('quiz-modal').classList.remove('hidden');
    renderQuizQuestion();
}

// 关闭测验
function closeQuiz() {
    document.getElementById('quiz-modal').classList.add('hidden');
}

// 渲染单道选择题
function renderQuizQuestion() {
    const currentQ = quizQuestions[quizCurrentIndex];
    
    // 更新题号与进度条
    document.getElementById('quiz-q-num').innerText = `题目 ${quizCurrentIndex + 1} / ${quizQuestions.length}`;
    const percent = ((quizCurrentIndex) / quizQuestions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${percent}%`;

    const questionWordEl = document.getElementById('quiz-question-word');

    const distractors = allIdioms
        .filter(item => item.word !== currentQ.word)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    const options = [currentQ, ...distractors].sort(() => 0.5 - Math.random());
    const optionsContainer = document.getElementById('quiz-options');

    // 根据随机分配的题型进行多样化渲染
    if (currentQ.qType === 0) {
        // 【题型 0】：看词，选释义
        questionWordEl.innerHTML = `<span class="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded mr-2 font-sans font-medium">看词猜意</span><br>${currentQ.word}`;
        
        optionsContainer.innerHTML = options.map(opt => {
            const isCorrect = (opt.word === currentQ.word);
            return `
                <button onclick="handleQuizAnswer(this, ${isCorrect})" class="w-full text-left p-4 rounded-xl border-2 border-stone-100 hover:border-amber-400 hover:bg-amber-50/50 transition-all font-sans text-stone-700 text-sm leading-relaxed">
                    ${opt.defZh}
                </button>
            `;
        }).join('');

    } else if (currentQ.qType === 1) {
        // 【题型 1】：看释义，选词
        questionWordEl.innerHTML = `<span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-sans font-medium block w-max mx-auto mb-2">根据释义选生词</span><p class="text-base font-medium font-sans px-4 text-stone-700 leading-relaxed text-left">${currentQ.defZh}</p>`;
        
        optionsContainer.innerHTML = options.map(opt => {
            const isCorrect = (opt.word === currentQ.word);
            return `
                <button onclick="handleQuizAnswer(this, ${isCorrect})" class="w-full text-center p-4 rounded-xl border-2 border-stone-100 hover:border-amber-400 hover:bg-amber-50/50 transition-all font-serif font-bold text-stone-800 text-base">
                    ${opt.word}
                </button>
            `;
        }).join('');

    } else if (currentQ.qType === 2) {
        // 【题型 2】：看例句填空，选词
        let exampleText = currentQ.example || '暂无例句。';
        if (currentQ.word && exampleText.includes(currentQ.word)) {
            exampleText = exampleText.replace(currentQ.word, ` ______ `);
        }
        
        questionWordEl.innerHTML = `<span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-sans font-medium block w-max mx-auto mb-2">生词语境填空</span><p class="text-base font-normal font-sans px-4 text-stone-700 leading-relaxed text-left">${exampleText}</p>`;
        
        optionsContainer.innerHTML = options.map(opt => {
            const isCorrect = (opt.word === currentQ.word);
            return `
                <button onclick="handleQuizAnswer(this, ${isCorrect})" class="w-full text-center p-4 rounded-xl border-2 border-stone-100 hover:border-amber-400 hover:bg-amber-50/50 transition-all font-serif font-bold text-stone-800 text-base">
                    ${opt.word}
                </button>
            `;
        }).join('');
    }
}

// 处理用户点击选项响应
function handleQuizAnswer(buttonEl, isCorrect) {
    const allButtons = document.getElementById('quiz-options').querySelectorAll('button');
    allButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        quizScore++;
        buttonEl.classList.remove('border-stone-100', 'hover:border-amber-400');
        buttonEl.classList.add('border-green-500', 'bg-green-50/60', 'text-green-800');
    } else {
        buttonEl.classList.remove('border-stone-100', 'hover:border-amber-400');
        buttonEl.classList.add('border-red-500', 'bg-red-50/60', 'text-red-800');
        
        allButtons.forEach(btn => {
            if (btn.getAttribute('onclick').includes('true')) {
                btn.classList.add('border-green-500', 'bg-green-50/40');
            }
        });

        let wrongList = JSON.parse(localStorage.getItem('vocabulary_wrong_list')) || [];
        const currentQ = quizQuestions[quizCurrentIndex];
        if (!wrongList.some(item => item.word === currentQ.word)) {
            wrongList.push(currentQ);
            localStorage.setItem('vocabulary_wrong_list', JSON.stringify(wrongList));
            updateWeaknessButton(wrongList.length);
            updateMasteryProgress();
        }
    }

    setTimeout(() => {
        quizCurrentIndex++;
        if (quizCurrentIndex < quizQuestions.length) {
            renderQuizQuestion();
        } else {
            showQuizResults();
        }
    }, 1200);
}

// 结算小测验结果
function showQuizResults() {
    document.getElementById('quiz-progress-bar').style.width = `100%`;
    document.getElementById('quiz-question-container').classList.add('hidden');
    document.getElementById('quiz-result-container').classList.remove('hidden');

    document.getElementById('quiz-score').innerText = `${quizScore} / ${quizQuestions.length}`;
    
    let evaluation = "再接再厉，多刷刷闪卡吧！";
    if (quizScore === quizQuestions.length) {
        evaluation = "👑 太厉害了！满分通关！";
    } else if (quizScore >= 4) {
        evaluation = "🌟 优秀！底子非常扎实！";
    } else if (quizScore >= 3) {
        evaluation = "👍 及格啦，答错的词已经自动帮你放入错题库啰！";
    }
    document.getElementById('quiz-eval').innerText = evaluation;
}

// 启动执行
window.onload = function() {
    initApp();
    // 延迟一帧更新进度
    setTimeout(() => {
        updateMasteryProgress();
    }, 100);
};
