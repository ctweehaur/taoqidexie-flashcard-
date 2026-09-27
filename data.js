// data.js 直接定义 allIdioms
var allIdioms = [
    { word: "精力充沛", pinyin: "jīng lì chōng pèi", defZh: "体力和精神都很旺盛。", defEn: "Full of energy / Energetic", defBm: "Penuh tenaga", example: "他虽然忙了一整天，但依然精力充沛。" },
    { word: "烦透了", pinyin: "fán tòu le", defZh: "非常厌烦，厌烦到了极点。", defEn: "Extremely annoyed / Fed up", defBm: "Sangat jengkel", example: "这件事反复说了很多遍，他真是烦透了。" },
    { word: "敞开", pinyin: "chǎng kāi", defZh: "打开，毫无遮掩地开放。", defEn: "Open wide", defBm: "Terbuka luas", example: "他敞开门窗，让清晨的空气流通进来。" },
    { word: "动静", pinyin: "dòng jìng", defZh: "声音或动作的变化。", defEn: "Movement / Sound of activity", defBm: "Bunyi / Pergerakan", example: "半夜里，屋外突然传来一阵动静。" },
    { word: "行列", pinyin: "háng liè", defZh: "排列整齐的队伍或行列。", defEn: "Rows / Line-up", defBm: "Barisan", example: "鞋子整齐地排列在行列中，仿佛一队士兵。" },
    { word: "漆黑", pinyin: "qī hēi", defZh: "非常黑暗，没有一点光亮。", defEn: "Pitch-black", defBm: "Gelap gelita", example: "今晚没有月亮，外面一片漆黑。" },
    { word: "纷纷", pinyin: "fēn fēn", defZh: "多而杂乱地（出现或行动）。", defEn: "One after another / In succession", defBm: "Beramai-ramai", example: "鞋子们纷纷从鞋柜里跑了出来。" },
    { word: "聚拢", pinyin: "jù lǒng", defZh: "聚集到一起。", defEn: "Gather together", defBm: "Berkumpul", example: "大家聚拢在一起，商量着今晚的行动。" },
    { word: "仿佛", pinyin: "fǎng fú", defZh: "好像、似乎。", defEn: "As if / Seemingly", defBm: "Seolah-olah", example: "他仿佛听到了鞋子们在低声交谈。" },
    { word: "声势浩大", pinyin: "shēng shì hào dà", defZh: "声威和气势非常宏大。", defEn: "Great momentum / Grand scale", defBm: "Pengaruh yang besar", example: "这场游行声势浩大，引起了所有人的注意。" },
    { word: "巡逻队", pinyin: "xún luó duì", defZh: "来回巡查、警戒的队伍。", defEn: "Patrol team", defBm: "Pasukan rondaan", example: "保安人员组成巡逻队，在社区里来回巡视。" },
    { word: "栓好", pinyin: "shuān hǎo", defZh: "把门、窗等用栓子扣好关紧。", defEn: "Bolt / Latch properly", defBm: "Selak dengan betul", example: "临睡前，妈妈把大门栓好了。" },
    { word: "争先恐后", pinyin: "zhēng xiān kǒng hòu", defZh: "争着向前，唯恐落后。", defEn: "Strive to be first / Rush forward", defBm: "Berebut-rebut", example: "鞋子们争先恐后地涌出门口，兴奋极了。" },
    { word: "踮起", pinyin: "diǎn qǐ", defZh: "抬起脚跟，用脚尖站立，使身体增高。", defEn: "Stand on tiptoe", defBm: "Berjengket", example: "他踮起脚尖，悄悄地向门口走去。" },
    { word: "迈着", pinyin: "mài zhe", defZh: "抬腿向前走（某种步伐）。", defEn: "Stepping (with a certain gait)", defBm: "Melangkah", example: "他迈着轻快的步伐，走进了房间。" },
    { word: "迟缓", pinyin: "chí huǎn", defZh: "行动、动作或思考的速度很慢。", defEn: "Slow / Sluggish", defBm: "Perlahan", example: "老人行动迟缓，我们要耐心等待。" },
    { word: "稳重", pinyin: "wěn zhòng", defZh: "举止沉着、冷静，不浮躁。", defEn: "Steady / Sedate", defBm: "Tenang dan mantap", example: "他做事很稳重，老师总是把任务交给他。" },
    { word: "受束缚", pinyin: "shòu shù fù", defZh: "受到限制，不能自由行动。", defEn: "Restricted / Bound", defBm: "Terikat / Terbatas", example: "鞋子们白天受束缚，只能在夜里偷偷活动。" },
    { word: "纵情狂欢", pinyin: "zòng qíng kuáng huān", defZh: "尽情地欢乐、放纵地庆祝。", defEn: "Revel / Indulge in merrymaking", defBm: "Bersenang-senang sepuasnya", example: "鞋子们在夜里纵情狂欢，跳个不停。" },
    { word: "一宿", pinyin: "yī xiǔ", defZh: "一整夜。", defEn: "One whole night", defBm: "Sepanjang malam", example: "他们玩了一宿，直到天亮才停下来。" },
    { word: "惊恐万状", pinyin: "jīng kǒng wàn zhuàng", defZh: "非常惊慌恐惧的样子。", defEn: "Extremely terrified", defBm: "Sangat ketakutan", example: "听到主人的脚步声，鞋子们惊恐万状，四处躲藏。" },
    { word: "乱了方寸", pinyin: "luàn le fāng cùn", defZh: "心里慌乱，失去主张和镇定。", defEn: "Lose one's head / Panic", defBm: "Hilang pertimbangan", example: "突如其来的声音让它们乱了方寸。" },
    { word: "绊倒", pinyin: "bàn dǎo", defZh: "被东西挡住脚而跌倒。", defEn: "Trip over / Stumble", defBm: "Tersandung", example: "他跑得太快，被门槛绊倒了。" },
    { word: "纠缠", pinyin: "jiū chán", defZh: "缠绕在一起，也指烦扰不休。", defEn: "Entangle / Pester", defBm: "Terbelit / Mengganggu", example: "鞋带纠缠在一起，怎么也解不开。" },
    { word: "马不停蹄", pinyin: "mǎ bù tíng tí", defZh: "比喻一刻也不停地前进。", defEn: "Without stopping / Non-stop", defBm: "Tanpa berhenti", example: "他马不停蹄地赶路，终于在天亮前回到了家。" },
    { word: "安顿", pinyin: "ān dùn", defZh: "安排妥当，使人或事物有着落。", defEn: "Settle down / Arrange", defBm: "Menempatkan / Menyelesaikan", example: "妈妈把鞋子一双双安顿好，才安心去睡觉。" }
];

// 将数据暴露为全局变量
var allIdioms = vocabularyData;
