const vocabularyData = [
    {
        word: "左脚",
        pinyin: "zuǒ jiǎo",
        defZh: "人体左侧的脚，与右脚相对。",
        defEn: "Left foot.",
        defBm: "Kaki kiri.",
        example: "他的左脚受伤了，走路有点不方便。",
        category: "空间方位"
    },
    {
        word: "右脚",
        pinyin: "yòu jiǎo",
        defZh: "人体右侧的脚，与左脚相对。",
        defEn: "Right foot.",
        defBm: "Kaki kanan.",
        example: "他用右脚踢了一下足球。",
        category: "空间方位"
    },
    {
        word: "楼上",
        pinyin: "lóu shàng",
        defZh: "楼房中较高的楼层，相对于楼下而言。",
        defEn: "Upstairs.",
        defBm: "Tingkat atas.",
        example: "他住在楼上，我住在楼下。",
        category: "空间方位"
    },
    {
        word: "楼下",
        pinyin: "lóu xià",
        defZh: "楼房中较低的楼层，相对于楼上而言。",
        defEn: "Downstairs.",
        defBm: "Tingkat bawah.",
        example: "我在楼下等你一起上学。",
        category: "空间方位"
    },
    {
        word: "屋里",
        pinyin: "wū lǐ",
        defZh: "房屋的内部空间。",
        defEn: "Indoors / Inside the house.",
        defBm: "Di dalam rumah.",
        example: "外面下雨了，我们快回屋里去吧。",
        category: "空间方位"
    },
    {
        word: "屋外",
        pinyin: "wū wài",
        defZh: "房屋的外部空间。",
        defEn: "Outdoors / Outside the house.",
        defBm: "Di luar rumah.",
        example: "屋外阳光明媚，很适合出去玩。",
        category: "空间方位"
    },
    {
        word: "周围",
        pinyin: "zhōu wéi",
        defZh: "环绕在中心附近的区域。",
        defEn: "Surroundings / Around.",
        defBm: "Sekeliling.",
        example: "学校周围有很多商店和餐馆。",
        category: "空间方位"
    },
    {
        word: "树上",
        pinyin: "shù shàng",
        defZh: "树木的高处或枝干上。",
        defEn: "On the tree.",
        defBm: "Di atas pokok.",
        example: "一只小鸟停在树上唱歌。",
        category: "空间方位"
    },
    {
        word: "地面",
        pinyin: "dì miàn",
        defZh: "地球表面的土地，也指房间内的地板表面。",
        defEn: "Ground / Floor.",
        defBm: "Permukaan tanah / lantai.",
        example: "秋天的树叶落了一地，地面像铺了一层毯子。",
        category: "空间方位"
    },
    {
        word: "晚上",
        pinyin: "wǎn shang",
        defZh: "太阳落山后到深夜前的一段时间。",
        defEn: "Evening / Night.",
        defBm: "Malam.",
        example: "晚上，我们一家人会一起看电视。",
        category: "日常生活"
    },
    {
        word: "睡觉",
        pinyin: "shuì jiào",
        defZh: "进入睡眠状态，身体和大脑得到休息。",
        defEn: "Sleep.",
        defBm: "Tidur.",
        example: "我每天晚上十点睡觉。",
        category: "日常生活"
    },
    {
        word: "起床",
        pinyin: "qǐ chuáng",
        defZh: "早晨睡醒后从床上起来。",
        defEn: "Get up / Wake up.",
        defBm: "Bangun tidur.",
        example: "妈妈早上七点叫我起床。",
        category: "日常生活"
    },
    {
        word: "上班",
        pinyin: "shàng bān",
        defZh: "到工作的地方去工作。",
        defEn: "Go to work.",
        defBm: "Pergi bekerja.",
        example: "爸爸每天八点开车去上班。",
        category: "日常生活"
    },
    {
        word: "上学",
        pinyin: "shàng xué",
        defZh: "到学校去学习。",
        defEn: "Go to school.",
        defBm: "Pergi ke sekolah.",
        example: "我每天吃完早饭就去上学。",
        category: "日常生活"
    },
    {
        word: "迷路",
        pinyin: "mí lù",
        defZh: "在陌生的地方找不到正确的道路。",
        defEn: "Get lost.",
        defBm: "Sesat jalan.",
        example: "他在森林里迷路了，心里很害怕。",
        category: "日常生活"
    },
    {
        word: "窗户",
        pinyin: "chuāng hu",
        defZh: "墙壁上用于通风和采光的开口。",
        defEn: "Window.",
        defBm: "Tingkap.",
        example: "教室的窗户很大，很明亮。",
        category: "日常事物"
    },
    {
        word: "椅子",
        pinyin: "yǐ zi",
        defZh: "有靠背的坐具，通常供一个人坐。",
        defEn: "Chair.",
        defBm: "Kerusi.",
        example: "请坐在那把椅子上稍等片刻。",
        category: "日常事物"
    },
    {
        word: "邻居",
        pinyin: "lín jū",
        defZh: "住在隔壁或附近的人家。",
        defEn: "Neighbor.",
        defBm: "Jiran.",
        example: "我和邻居家的孩子是好朋友。",
        category: "日常事物"
    },
    {
        word: "社区",
        pinyin: "shè qū",
        defZh: "人们共同生活、活动的区域，比如一个小区或村子。",
        defEn: "Community.",
        defBm: "Komuniti.",
        example: "我们社区举办了一场有趣的运动会。",
        category: "日常事物"
    },
    {
        word: "泥地",
        pinyin: "ní dì",
        defZh: "含有水的湿软土地。",
        defEn: "Muddy ground.",
        defBm: "Tanah berlumpur.",
        example: "下雨后，门前的泥地很滑，要小心走。",
        category: "日常事物"
    },
    {
        word: "皮鞋",
        pinyin: "pí xié",
        defZh: "用皮革制成的鞋子。",
        defEn: "Leather shoes.",
        defBm: "Kasut kulit.",
        example: "爸爸上班时喜欢穿黑色的皮鞋。",
        category: "日常事物"
    },
    {
        word: "拖鞋",
        pinyin: "tuō xié",
        defZh: "在家穿的后跟没有鞋帮的鞋子。",
        defEn: "Slippers.",
        defBm: "Selipar.",
        example: "他换好拖鞋走进客厅。",
        category: "日常事物"
    },
    {
        word: "凉鞋",
        pinyin: "liáng xié",
        defZh: "夏天穿的鞋面通风的鞋子。",
        defEn: "Sandals.",
        defBm: "Kasut sandal.",
        example: "天气太热了，我穿了一双凉鞋出门。",
        category: "日常事物"
    },
    {
        word: "老人",
        pinyin: "lǎo rén",
        defZh: "年纪大的人。",
        defEn: "Old person / Elderly.",
        defBm: "Orang tua.",
        example: "我们要尊敬老人，在公车上给他们让座。",
        category: "人物自然"
    },
    {
        word: "孩子",
        pinyin: "hái zi",
        defZh: "年龄较小的儿童。",
        defEn: "Child / Children.",
        defBm: "Anak-anak.",
        example: "公园里有很多孩子在玩耍。",
        category: "人物自然"
    },
    {
        word: "太阳",
        pinyin: "tài yáng",
        defZh: "太阳系的中心恒星，为地球带来光和热。",
        defEn: "Sun.",
        defBm: "Matahari.",
        example: "太阳从东方升起来了。",
        category: "人物自然"
    },
    {
        word: "早晨",
        pinyin: "zǎo chén",
        defZh: "天亮之后到中午之前的一段时间。",
        defEn: "Morning.",
        defBm: "Pagi.",
        example: "早晨的空气很清新。",
        category: "人物自然"
    },
    {
        word: "光线",
        pinyin: "guāng xiàn",
        defZh: "光，指照亮物体的光亮。",
        defEn: "Light / Ray of light.",
        defBm: "Cahaya.",
        example: "房间里的光线很暗，适合睡觉。",
        category: "人物自然"
    },
    {
        word: "黑暗",
        pinyin: "hēi àn",
        defZh: "没有光的、昏暗的状态。",
        defEn: "Darkness / Dark.",
        defBm: "Kegelapan.",
        example: "他在黑暗中摸索着打开了灯。",
        category: "人物自然"
    },
    {
        word: "蓝色",
        pinyin: "lán sè",
        defZh: "像晴朗天空一样的颜色。",
        defEn: "Blue.",
        defBm: "Warna biru.",
        example: "她穿了一件蓝色的裙子，很好看。",
        category: "基础颜色"
    },
    {
        word: "金色",
        pinyin: "jīn sè",
        defZh: "像黄金一样闪闪发亮的颜色。",
        defEn: "Gold / Golden.",
        defBm: "Warna emas.",
        example: "秋天来了，稻田变成了金色。",
        category: "基础颜色"
    },
    {
        word: "棕色",
        pinyin: "zōng sè",
        defZh: "像咖啡或树皮一样的颜色。",
        defEn: "Brown.",
        defBm: "Warna coklat.",
        example: "他的书包是棕色的。",
        category: "基础颜色"
    },
    {
        word: "桃红色",
        pinyin: "táo hóng sè",
        defZh: "像桃花一样鲜艳的粉红色。",
        defEn: "Peach red / Pink.",
        defBm: "Warna merah jambu.",
        example: "春天，公园里开满了桃红色的花。",
        category: "基础颜色"
    },
    {
        word: "告诉",
        pinyin: "gào su",
        defZh: "把事情说给人听，使人知道。",
        defEn: "Tell.",
        defBm: "Beritahu.",
        example: "老师告诉我们要认真学习。",
        category: "动作行为"
    },
    {
        word: "敞开",
        pinyin: "chǎng kāi",
        defZh: "打开，毫无遮掩地开放。",
        defEn: "Open wide.",
        defBm: "Terbuka luas.",
        example: "教室里开着窗户，门也敞开着。",
        category: "动作行为"
    },
    {
        word: "爬",
        pinyin: "pá",
        defZh: "手和脚一齐着地向前移动，或攀援上升。",
        defEn: "Crawl / Climb.",
        defBm: "Merangkak / memanjat.",
        example: "小宝宝正在地上学爬。",
        category: "动作行为"
    },
    {
        word: "撞开",
        pinyin: "zhuàng kāi",
        defZh: "用力冲撞，使门或障碍物打开。",
        defEn: "Bump open / Crash open.",
        defBm: "Membuka dengan menghentak.",
        example: "他用力撞开那扇锁着的木门。",
        category: "动作行为"
    },
    {
        word: "询问",
        pinyin: "xún wèn",
        defZh: "向别人打听情况或征求意见。",
        defEn: "Inquire / Ask.",
        defBm: "Bertanya.",
        example: "他向警察询问去火车站的路。",
        category: "动作行为"
    },
    {
        word: "喊叫",
        pinyin: "hǎn jiào",
        defZh: "大声呼叫。",
        defEn: "Shout / Yell.",
        defBm: "Menjerit.",
        example: "他听到有人在外面大声喊叫。",
        category: "动作行为"
    },
    {
        word: "踏过",
        pinyin: "tà guò",
        defZh: "用脚踩在上面走过去。",
        defEn: "Step over / Tread on.",
        defBm: "Melangkah di atas.",
        example: "他踏过泥泞的小路，鞋子都脏了。",
        category: "动作行为"
    },
    {
        word: "踮起",
        pinyin: "diǎn qǐ",
        defZh: "抬起脚跟，用脚尖站立，使身体增高。",
        defEn: "Stand on tiptoe.",
        defBm: "Berjengket.",
        example: "他踮起脚尖想把书从书架上拿下来。",
        category: "动作行为"
    },
    {
        word: "绕过",
        pinyin: "rào guò",
        defZh: "从旁边或者后面弯着走过去，不直接通过。",
        defEn: "Bypass / Go around.",
        defBm: "Mengelilingi / memintas.",
        example: "前面有个水坑，我们得绕过它走。",
        category: "动作行为"
    },
    {
        word: "跌跌撞撞",
        pinyin: "diē diē zhuàng zhuàng",
        defZh: "走路不稳，摇摇晃晃的样子。",
        defEn: "Stumble along / Stagger.",
        defBm: "Terhuyung-hayang.",
        example: "他喝醉了酒，在路上跌跌撞撞地走着。",
        category: "动作行为"
    },
    {
        word: "刮风",
        pinyin: "guā fēng",
        defZh: "风从外面吹来。",
        defEn: "Blow wind / Windy.",
        defBm: "Berangin.",
        example: "今天刮风了，出门要穿件外套。",
        category: "动作行为"
    },
    {
        word: "永远",
        pinyin: "yǒng yuǎn",
        defZh: "时间长久，没有终止。",
        defEn: "Forever / Always.",
        defBm: "Selamanya.",
        example: "我会永远记得今天这个美好的日子。",
        category: "状态形容"
    },
    {
        word: "烦透",
        pinyin: "fán tòu",
        defZh: "非常厌烦，达到了极点。",
        defEn: "Extremely annoyed.",
        defBm: "Sangat jengkel.",
        example: "这件事反复说了很多遍，他真是烦透了。",
        category: "状态形容"
    },
    {
        word: "连忙",
        pinyin: "lián máng",
        defZh: "急忙，赶紧，表示动作很快。",
        defEn: "Promptly / Hastily.",
        defBm: "Segera.",
        example: "看到客人来了，他连忙起身去倒茶。",
        category: "状态形容"
    },
    {
        word: "漆黑",
        pinyin: "qī hēi",
        defZh: "非常黑暗，没有一点光亮。",
        defEn: "Pitch-black.",
        defBm: "Gelap gelita.",
        example: "今晚没有月亮，外面一片漆黑。",
        category: "状态形容"
    },
    {
        word: "独立",
        pinyin: "dú lì",
        defZh: "不依赖别人，自己单独地站立或生活。",
        defEn: "Independent.",
        defBm: "Berdiri sendiri.",
        example: "他已经长大了，要学会独立生活。",
        category: "状态形容"
    },
    {
        word: "继续",
        pinyin: "jì xù",
        defZh: "在某件事之后，接着做下去，不中断。",
        defEn: "Continue.",
        defBm: "Teruskan.",
        example: "大家休息一下，一会儿继续上课。",
        category: "状态形容"
    },
    {
        word: "迟缓",
        pinyin: "chí huǎn",
        defZh: "行动、动作或思考的速度很慢。",
        defEn: "Slow / Sluggish.",
        defBm: "Perlahan.",
        example: "老人行动迟缓，我们要耐心等待。",
        category: "状态形容"
    },
    {
        word: "稳重",
        pinyin: "wěn zhòng",
        defZh: "举止沉着、冷静，不浮躁。",
        defEn: "Steady / Sedate.",
        defBm: "Tenang dan mantap.",
        example: "他做事很稳重，老师总是把任务交给他。",
        category: "状态形容"
    },
    {
        word: "瞬间",
        pinyin: "shùn jiān",
        defZh: "形容极短的时间，一眨眼之间。",
        defEn: "Instant / Moment.",
        defBm: "Sekejap.",
        example: "流星从天空划过，瞬间就消失了。",
        category: "状态形容"
    },
    {
        word: "混乱",
        pinyin: "hùn luàn",
        defZh: "没有秩序，乱七八糟。",
        defEn: "Confusion / Chaos.",
        defBm: "Kacau.",
        example: "放学时校门口很混乱，车辆和行人挤在一起。",
        category: "状态形容"
    }
];

// ⭐ 关键：将数据暴露为全局变量，供 script.js 使用
var allIdioms = vocabularyData;
