const MENU_DATA = [
  {
    name: "精選菜色",
    multiple: false,
    subbanner: "/src/images/menu-seb-banner/10001.jpg",
    title: "https://www.lebledor.com/img/menu/signature-kv-title.png",
    data: [
      {
        id: 0,
        src: "//lebledor-img.s3.amazonaws.com/cover/7b942d07cdd519e2d815ed7f632c27e2.png",
        title: "金色三麥現釀啤酒蝦",
        description:
          " 精選新鮮大蝦事先去除蝦殼，加入蔥蒜、辣椒乾煎後以啤酒調味，蝦肉鮮甜略帶淡淡啤酒麥香，是不可錯過的下酒良伴。",
      },
      {
        id: 1,
        src: "//lebledor-img.s3.amazonaws.com/cover/45bde60ce8bab51f706ca2a5b1d6a6b8.png",
        title: "金色三麥經典大拼盤",
        description:
          "經典招牌組合，含酥炸椒麻雞、德國豬腳、美式薯條、德式香腸，一次享受所有經典、品味異國特色料理。",
      },
      {
        id: 2,
        src: "//lebledor-img.s3.amazonaws.com/cover/fcb1903e38bbf04a580bd835022346a3.png",
        title: "墨魚醉嗆烏魚子",
        description:
          "大火將墨魚煎至金黃酥脆口感，再與烘烤過的烏魚子、培根丁拌炒，濃郁鹹香，一口接一口。",
      },
      {
        id: 3,
        src: "//lebledor-img.s3.amazonaws.com/cover/3f003b081f2f681fa9a6102a852fb369.png",
        title: "海陸交響曲",
        description:
          "以墨魚醉嗆烏魚子與椒香滿天飛共譜驚豔味蕾的磅礡交響曲，一次擁有海陸美味。",
      },
      {
        id: 4,
        src: "//lebledor-img.s3.amazonaws.com/cover/0c80741437f6c0a2184b482cad162ca1.png",
        title: "蜜香滿天飛",
        description:
          "尾韻輕盈的蜂蜜香氣，好吃到讓心飛起來！來自精選中段雞翅先炸再爆炒，飽滿吸收主廚的天然蜂蜜蔬果醬，香甜卻不膩口，蜜香迴盪久久。",
      },
      {
        id: 5,
        src: "//lebledor-img.s3.amazonaws.com/cover/536c9e8a9dc058d004a0294b55840313.png",
        title: "極鮮和風紅鮪魚〔季節限定〕",
        description:
          "嚴選紅鮪魚以慢火微烤至半熟， 保留鮪魚新鮮微霜口感與風味， 灑上烏魚子、海苔絲，拌上特調芥末海苔粉， 極致鮮美、風味高雅。",
      },
      {
        id: 6,
        src: "//lebledor-img.s3.amazonaws.com/cover/63493099d98cbfc19122939985cfd720.png",
        title: "櫻桃鴨椒響曲",
        description:
          "麻辣界的交響樂團，由櫻桃鴨腿領軍，火熱拌炒燈籠椒、乾辣椒、泡山椒、花椒，風味麻中帶香、香中帶辣；皮香酥、肉彈嫩，與味蕾共舞出再三回合的「椒響曲」。",
      },
      {
        id: 7,
        src: "//lebledor-img.s3.amazonaws.com/cover/6b1f37ccb3cf8fe181c1a76f53f7b914.png",
        title: "舞味鮮蝦拌墨魚",
        description:
          "為了加倍襯出新鮮海鮮的清甜，主廚由經典「五味醬」為靈感創作醬汁，拌入彈脆的鮮蝦、墨魚與當季沙拉時蔬，舞動蒜香與酸甜鹹的滋味，又清爽又開胃！",
      },
    ],
  },
  {
    name: "開胃菜",
    subbanner: "/src/images/menu-seb-banner/10002.jpg",
    title: "https://www.lebledor.com/img/menu/starter-kv-title.png",
    data: [
      {
        id: 0,
        src: "//lebledor-img.s3.amazonaws.com/cover/5294b559fd934a8e9ab367de93e4844b.png",
        title: "涼拌墨魚",
        description:
          "彈脆墨魚汆燙切片，灑上香菜、蔥絲、辣椒絲，拌上特調微辣墨魚醬，噴香開胃。",
      },
      {
        id: 1,
        src: "//lebledor-img.s3.amazonaws.com/cover/e422d258991d8f566cfd179f426e2520.png",
        title: "冠軍蜂蜜啤酒麥芽麵包（奶油/起司）",
        description:
          "傳統質樸的麵包，加入冠軍蜂蜜啤酒麥渣製作，麥香回甘加上蜂蜜啤酒餘韻，越嚼越香。(蛋奶素可食)",
      },
      {
        id: 2,
        src: "//lebledor-img.s3.amazonaws.com/cover/c6fa01fa3f30b8b88bb7824ddf46fc9a.png",
        title: "翹臀豬嫩拌山蕨(新品)",
        description:
          "端出稀少部位的豬臀腿上蓋肉，彷彿跳舞的咀嚼感，澆淋甘醇慢熬熟成的和風洋蔥醬，讓純淨肉香越來嚼越香，與太陽能溫室精品級蕨菜一起爽滑入口，清鮮開胃。",
      },
    ],
  },
  {
    name: "沙拉類",
    multiple: false,
    subbanner: "/src/images/menu-seb-banner/10003.jpg",
    title: "https://www.lebledor.com/img/menu/starter-kv-title.png",
    data: [
      {
        id: 0,
        src: "//lebledor-img.s3.amazonaws.com/cover/ad50eb7e0a527ea2fe8dcf6557c995d9.png",
        title: "握握手小農溫沙拉",
        description:
          "安心與美味，都跟小農約定好了！來自臺灣小農的四種頂級生菜，不同的鮮脆拌勻煎烤蕈菇、鮮蝦、堅果與義大利酒醋醬汁，交融出多層次的開胃享受。(可做素食)",
      },
      {
        id: 1,
        src: "//lebledor-img.s3.amazonaws.com/cover/58dcda455a1f5087797301f6d6f47300.png",
        title: "凱薩沙拉",
        description:
          "特調凱薩醬拌勻蘿蔓心、培根絲、葡萄乾、小黃瓜、小番茄，最後灑上帕瑪森起司與麵包丁，清爽風味適合餐前享用，開啟味蕾饗宴。(可做素食)",
      },
      {
        id: 2,
        src: "//lebledor-img.s3.amazonaws.com/cover/fcdb71737592d0d347d0a6dec30fd6a6.png",
        title: "南洋松阪豬",
        description:
          "慢烤頂級松阪豬，嚼勁十足，搭配新鮮蘿蔓心、小黃瓜、番茄與濃郁的南洋風味醬拌勻，最後撒上夏威夷豆，香氣迷人，爽口開胃!",
      },
      {
        id: 3,
        src: "//lebledor-img.s3.amazonaws.com/cover/05937adacba1effdbff40a652a373034.png",
        title: "海鮮水果沙拉",
        description:
          "以法式芥末沙拉醬拌勻奶油生菜、芝麻葉、白蝦、干貝、墨魚、洋蔥絲、甜椒、小番茄，再巧妙搭配新鮮水果丁，清爽開胃，鮮美驚艷。",
      },
      {
        id: 4,
        src: "//lebledor-img.s3.amazonaws.com/cover/12c0fcc12e41fe28bc3a6ad21afc2302.png",
        title: "貝里斯鮮蔬蝦仁拌檸檬優格",
        description:
          "冰鎮的清脆蝦子，搭配各式新鮮生菜，拌上清爽的特調檸檬優格醬，最後灑上薄薄紅椒粉，酸甜滋味，爽口開胃。(可做素食)",
      },
    ],
  },
  {
    name: "蔬食類",
    multiple: false,
    subbanner: "/src/images/menu-seb-banner/10003.jpg",
    title: "https://www.lebledor.com/img/menu/starter-kv-title.png",
    data: [
      {
        id: 0,
        src: "//lebledor-img.s3.amazonaws.com/cover/92451a9228a1b351ef6aa3648984bcbb.png",
        title: "酥炸高鈣起司條（蛋奶素）",
        description:
          "由天然新鮮乳酪精製而成，外酥脆內香濃，享受拉絲美味。(蛋奶素可食)",
      },
      {
        id: 1,
        src: "//lebledor-img.s3.amazonaws.com/cover/2404199fb2d1f66bed561804124d77e1.png",
        title: "花心蔬脆披薩（蛋奶素）",
        description:
          "雙層薄皮鋪上各式彩椒、菇類、黑橄欖、番茄再加上酸甜蘋果丁以及起司絲，清爽不膩的好滋味，是健康無負擔的新選擇。",
      },
      {
        id: 2,
        src: "//lebledor-img.s3.amazonaws.com/cover/5a182f80efd8bd500cadc8f197a61a1f.png",
        title: "番茄爆炸頭",
        description:
          "番茄先生頂著爆炸頭新登場啦！一口咬下，有酥脆菇絲、有軟嫩菇片、還有多汁的「番茄方舟」溫室果園番茄，為你喜愛的蔬食，創造全新口感層次。(蛋奶素可食)",
      },
      {
        id: 3,
        src: "//lebledor-img.s3.amazonaws.com/cover/a36081410a6921b06fe87475070cef26.png",
        title: "炸鮮菇降落傘",
        description:
          "在地新鮮香菇也能炸出歐洲森林裡的蕈菇香氣！創意天外飛來，乾燥牛肝菌打碎後融合麵衣，濃郁蕈香結合鮮菇的多汁口感，讓美味的驚喜降臨餐桌。(蛋奶素)",
      },
      {
        id: 4,
        src: "//lebledor-img.s3.amazonaws.com/cover/dd4c8c3495eeeacee5ba8636fff25c79.png",
        title: "超越未來蔬食堡（全素）",
        description:
          "不管是不是素食者都會愛上它！選用好萊塢明星喜愛的 Beyond Meat 未來漢堡排，純植物製作，卻能煎出肉排的香氣與質地，挾進清新酪梨莎莎醬與酥烤潛艇麵包，鮮美多汁好juicy！(五辛素/蛋奶素）",
      },
      {
        id: 5,
        src: "//lebledor-img.s3.amazonaws.com/cover/3b5d3cc5b0bb736a7d526595ba268fe8.png",
        title: "BBQ美腿燒",
        description:
          "精挑細選白嫩如美腿的杏鮑菇，一次帶來酸甜鮮麻多層次風味，不只緊密吸附獨特的花椒燒烤醬，同時保有驚艷的多汁口感，兼顧天然原味與精緻調味，扭轉蔬食平淡的刻板印象。",
      },
      {
        id: 6,
        src: "//lebledor-img.s3.amazonaws.com/cover/85f9f5f69f4b568d26103e6e09efd8d0.png",
        title: "南瓜濃湯",
        description: "上選日本南瓜與台灣金瓜熬煮，自然甘甜、營養滿分。",
      },
      {
        id: 7,
        src: "//lebledor-img.s3.amazonaws.com/cover/bcc2648a2320cef35cd52a1b63e2dd8e.png",
        title: "纖主義涼涮秋葵（蛋奶素）",
        description:
          "新鮮鳳梨搭配培根、鮮蝦與爽脆洋蔥，酸甜的口感結合風味濃郁的培根搭配，是經典中的經典。",
      },
      {
        id: 8,
        src: "//lebledor-img.s3.amazonaws.com/cover/a7b2ea5284a866d50679794be6698f9a.png",
        title: "歐式炸蔬球（五辛素）",
        description: "",
      },
      {
        id: 9,
        src: "//lebledor-img.s3.amazonaws.com/cover/01d262c6890077937c0de3e750a86ceb.png",
        title: "夢幻茄醬海鮮餅（全素）",
        description:
          "列入超級食物的「鷹嘴豆泥」要讓下酒菜也有健康概念！搭配明太子醬，讓酥炸豆泥球清爽再升級，搭配酥炸青龍椒，口感超豐富，展現蔬食魅力。",
      },
      {
        id: 10,
        src: "https://lebledor-img.s3.amazonaws.com/cover/49172e7a3bad851799d26bd4040a0647.png",
        title: "酥麻川辣新魚柳(全素)）",
        description:
          "川字輩的蔬食，也有鮮辣噴香的爽快！先炸再炒，以不同火侯翻滾「新魚柳」，渾身裹滿宮保乾辣椒與花椒香氣的最大值，外酥內嫩，刷新你對蔬食魚柳的口感想像。",
      },
    ],
  },
  {
    name: "鍋湯類",
    subbanner: "/src/images/menu-seb-banner/10005.jpg",
    title: "https://www.lebledor.com/img/menu/pot-kv-title.png",
    data: [
      {
        id: 0,
        src: "//lebledor-img.s3.amazonaws.com/cover/d508c3b35aef826342d403cceb397fb8.png",
        title: "現釀啤酒海鮮鍋",
        description:
          "上選大蝦、大蛤、墨魚等海鮮，海鮮鍋底加入特製醬料，最後以金色三麥琥珀現釀啤酒慢火熬煮，聞得到麥香卻不會有嗆鼻酒味。",
      },
      {
        id: 1,
        src: "//lebledor-img.s3.amazonaws.com/cover/07eba666112af6105d9b4c11c5588303.png",
        title: "精選麻辣鍋",
        description:
          "以五十種天然辛香料熬煮而成的麻辣鍋底，加入秀珍菇、杏鮑菇、白菜等鮮甜蔬菜，搭配精選豬肉片，香麻順口。",
      },
      {
        id: 2,
        src: "//lebledor-img.s3.amazonaws.com/cover/08d421a91212d06cea2092225a1e08e6.png",
        title: "蝦皇暹羅浴鍋",
        description:
          "見紅有喜氣的湯底，是蝦子熬出的鮮香濃滑！取自泰式經典冬蔭功風味，以香茅、南薑、檸檬葉，融合椰奶的溫潤與檸檬的酸香，再點綴泰國小辣椒的香與辣，不必沾醬的湯頭，超夠味！",
      },
      {
        id: 3,
        src: "//lebledor-img.s3.amazonaws.com/cover/4b6b77054b296c79ec36e48b5d509d94.png",
        title: "南洋風味叻沙鍋",
        description:
          "新加坡精典叻沙風味，散發濃郁的蝦醬與椰汁香氣，帶勁的辣味混搭清新的香茅與微酸口感，再搭配豐富海鮮，特殊風味，讓人回味無窮。",
      },
      {
        id: 4,
        src: "//lebledor-img.s3.amazonaws.com/cover/481629b6e6dcf09590f944cb12a4a5c0.png",
        title: "酥皮南瓜濃湯",
        description:
          "上選日本南瓜與台灣金瓜熬煮，自然甘甜、營養滿分，鋪上酥皮烘烤，一同品嘗酥脆餅皮與濃湯，濃郁香甜好滋味。(可做素食)",
      },
      {
        id: 5,
        src: "//lebledor-img.s3.amazonaws.com/cover/7ce85cbf5141f5f892616d738f4ddca9.png",
        title: "酥皮海鮮濃湯",
        description:
          "以墨魚、蝦仁加入鮮奶油燉煮至濃郁湯頭，鋪上酥皮烘烤，酥脆餅皮融入濃湯中，美味再升級。",
      },
      {
        id: 6,
        src: "//lebledor-img.s3.amazonaws.com/cover/f1e1ad6ba04cb4ee0b30bf3cad25a01a.png",
        title: "酸菜白肉富貴鍋",
        description:
          "鮮甜高湯搭配上主廚手工醃漬的酸白菜燉煮，帶出自然甘甜的發酵酸度，再佐以蛤蠣、鮮蝦、曼波魚、曼波魚丸與精選肉片，滿滿一鍋的豐富食材，吃得您口水直流!",
      },
      {
        id: 7,
        src: "//lebledor-img.s3.amazonaws.com/cover/3d390f4bdc50a7c55c4980a8fad40ded.png",
        title: "海鮮濃湯",
        description: "以墨魚、蝦仁加入鮮奶油燉煮至濃郁湯頭，鮮甜美味。",
      },
    ],
  },
  {
    name: "義大利麵",
    subbanner: "/src/images/menu-seb-banner/10006.jpg",
    title: "https://www.lebledor.com/img/menu/pasta-kv-title.png",
    data: [
      {
        id: 0,
        src: "/src/images/pasta/10034.png",
        title: "義大利海鮮麵",
        description:
          "香濃白醬拌炒義大利麵，再加入精選鮮蝦、干貝、墨魚、蛤蠣，濃郁鮮美，意猶未盡。",
      },
      {
        id: 1,
        src: "/src/images/pasta/10023.png",
        title: "奶油雙菇雞肉麵",
        description:
          "以濃郁白醬拌炒秀珍菇、杏鮑菇、鮮嫩雞肉、彩椒，是濃郁香滑卻清爽不膩的奶油風味義大利麵。",
      },
      {
        id: 2,
        src: "/src/images/pasta/10036.png",
        title: "辣味義式蔬菜麵（全素",
        description:
          "清炒新鮮彩椒、菇類、花椰菜，再加入特調辣醬拌炒義大利麵，將蔬食美味引入香辣新境界。",
      },
      {
        id: 3,
        src: "/src/images/pasta/10037.png",
        title: "義式番茄海鮮麵",
        description:
          "使用精選鮮蝦、干貝、墨魚、蛤蠣，拌炒經典番茄紅醬，酸甜清爽，香氣濃郁。",
      },
      {
        id: 4,
        src: "/src/images/pasta/10038.png",
        title: "西西里鯷鮮烏魚子義麵",
        description:
          "餐桌彷彿吹來西西里海風，以當地著名的鯷魚風味，融合台灣在地烏魚子，還讓烘乾番茄、曬乾辣椒帶來濃縮的甜與香氣，詮釋出獨一無二的鮮辣海味。",
      },
      {
        id: 5,
        src: "/src/images/pasta/10039.png",
        title: "兒童餐海鮮義大利麵",
        description: "義大利海鮮麵搭配新鮮時蔬與經典炸物。",
      },
      {
        id: 6,
        src: "/src/images/pasta/10040.png",
        title: "椒麻天使冷麵",
        description:
          "一下清爽可人，一下椒麻帶勁，雙面性格的天使冷麵準備征服食慾！先吃冷麵裡義式蕃茄沙拉醬汁原味，再拌進椒麻雞沾醬增添花椒香氣，搭配酥嫩椒麻雞，十分清爽卻雙重滿足！",
      },
    ],
  },
  {
    subbanner: "/src/images/menu-seb-banner/10007.jpg",
    name: "飯類",
    title: "https://www.lebledor.com/img/menu/rice-kv-title.png",
    data: [
      {
        id: 0,
        src: "/src/images/rice/10041.png",
        title: "鮭魚什香拌飯",
        description:
          "不惜成本鋪上滿滿晶瑩飽滿的鱒鮭魚卵，搭配鮮烤鮭魚肉、海苔香鬆、夏威夷果仁，口感絕佳，滿口都是鮮美的好滋味。",
      },
      {
        id: 1,
        src: "/src/images/rice/10042.png",
        title: "西班牙海鮮燉飯",
        description:
          "以多種海鮮料、雞肉、德式香腸及數十種香料燉煮而成，米粒吸飽精華，口口精彩，鮮美豐盛，適合多人享用。",
      },
      {
        id: 2,
        src: "/src/images/rice/10043.png",
        title: "海陸雙拼濃香拌飯",
        description:
          "大火快炒新鮮野菇和香腸丁，米粒以鮮奶油燉煮至鮮美濃香，再鋪上招牌椒麻雞與現釀啤酒蝦，一次享有多種經典滋味。",
      },
      {
        id: 3,
        src: "/src/images/rice/10044.png",
        title: "松露野菇燉飯",
        description:
          "以松露醬與松露油調製而成的醬汁淋入米粒與柳松菇、香菇、杏鮑菇等多種野菇，慢火燉煮，最後灑上夏威夷果仁，濃郁滑順，每一口都滿足。",
      },
      {
        id: 4,
        src: "/src/images/rice/10046.png",
        title: "紐奧良什錦飯",
        description:
          "以鮮嫩雞肉、歐式香腸、脆彈蝦仁及濃郁紅醬拌炒，鋪上特色啤酒蛋，食材豐富、風味獨特，最後灑上口感十足的夏威夷果仁為美味加分。",
      },
      {
        id: 5,
        src: "/src/images/rice/10045.png",
        title: "兒童餐烤鮭魚拌飯",
        description: "鮮烤鮭魚拌飯搭配新鮮時蔬與經典炸物。",
      },
    ],
  },
  {
    name: "燒烤",
    subbanner: "/src/images/menu-seb-banner/10008.jpg",
    title: "https://www.lebledor.com/img/menu/grilled-kv-title.png",
    data: [
      {
        id: 0,
        src: "/src/images/grilled/10045.png",
        title: "德國豬腳",
        description:
          "正統德式作法，將豬腳慢火烘烤至外皮酥脆、肉質Ｑ彈富嚼勁，再搭配濃郁黃芥末醬，帶出味覺新層次，最後夾上特製酸菜解膩，完美呈現。",
      },
      {
        id: 1,
        src: "/src/images/grilled/10046.png",
        title: "德式綜合香腸",
        description:
          "同時享有經典的黑胡椒香腸、煙燻香腸，搭配黃芥末醬與酸菜，肉味鮮香。",
      },
      {
        id: 2,
        src: "/src/images/grilled/10047.png",
        title: "大窯大擺烤肋排",
        description:
          "美式粗獷煙燻香氣將圍繞你，彷彿置身大烤窯前，讓人大口咬下的軟嫩多汁，來自四小時低溫料理，連同獨門醬汁烤出的香甜醇厚，一起氣勢登場。",
      },
      {
        id: 3,
        src: "/src/images/grilled/10048.png",
        title: "烤鮮嫩雞腿軟骨串",
        description:
          "鮮嫩雞腿軟骨薄塗上特調醬汁及麻辣醬，經燒烤後口感柔軟多汁，鹹香微辣的下酒良伴。",
      },
      {
        id: 4,
        src: "/src/images/grilled/10049.png",
        title: "墨西哥雞肉餅",
        description:
          "鮮嫩多汁的酥炸雞肉丁，搭配香濃乳酪、洋蔥、黑橄欖與各式香料，包至餅皮內烤至外表酥脆，微辣的墨西哥風味讓您一吃上癮！",
      },
      {
        id: 5,
        src: "/src/images/grilled/10050.png",
        title: "嫩烤戰斧豬排",
        description:
          "一刀剖面，驚豔粉嫩肉質與鮮美肉汁！先煎再烤，釋放月桂葉、迷迭香氣息，記得先嚐大塊肉，享受最多汁時刻，感受雲林「究好豬」肋骨部位的魅力。",
      },
      {
        id: 6,
        src: "/src/images/grilled/10051.png",
        title: "啤酒慢跑雞",
        description:
          "特選小土雞每天都慢跑，肉質超彈嫩！ 不僅以160度慢火烤出細滑口感， 連續48小時吸收金色三麥啤酒醃醬美味，連皮帶肉每一口都是止不住的香！",
      },
      {
        id: 7,
        src: "/src/images/grilled/10052.png",
        title: "火焰秘辛烤串翅〔新品上市〕",
        description:
          "微辛、微焦、微甜，香氣卻如猛火般熱情撲向你！絕對秘方的主廚自製手工辛味烤醬，搭配獨特刀法讓雞翅鋪展為翅排深刻入味，烤出焦香外皮、滑嫩肉質，由內而外都是吃貨的寵愛。",
      },
      {
        id: 8,
        src: "/src/images/grilled/10053.png",
        title: "肋眼蓋極串烤豬(新品)",
        description:
          "每一口的軟嫩，來自每頭豬僅有五百公克的「肋眼蓋」霜降肉，再以「優格花麻醬」醃至更具深度的嬌嫩質地，精準的烤功釋放醃料裡芝麻花生、花椒的香氣，串起燒烤豬肉的精緻質感。",
      },
    ],
  },
  {
    name: "披薩類",
    subbanner: "/src/images/menu-seb-banner/10009.jpg",
    title: "https://www.lebledor.com/img/menu/pizza-kv-title.png",
    data: [
      {
        id: 0,
        src: "/src/images/pizza/10001.png",
        title: "德式香腸披薩",
        description:
          "雙層薄皮抹上香蒜醬，鋪上特製德國煙燻香腸、洋蔥、彩椒以及濃厚乳酪，慢火烘烤，薄脆可口。",
      },
      {
        id: 1,
        src: "/src/images/pizza/10002.png",
        title: "蝦仁鮭魚披薩",
        description:
          "雙層薄皮鋪上滿滿的煙燻鮭魚、蝦仁、洋蔥、甜椒，再灑上濃厚起司，每一口都吃得到海鮮的鮮甜美味。",
      },
      {
        id: 2,
        src: "/src/images/pizza/10003.png",
        title: "叫麻麻香雞披薩",
        description:
          "創意來自四川口水雞，逼出花椒的麻味與香氣，搭配薄脆披薩與滑嫩雞肉，給你渾身微微沁汗的川辣氣息，頭皮發麻、嘴裡大喊過癮。",
      },
      {
        id: 3,
        src: "/src/images/pizza/10004.png",
        title: "三星蔥披薩",
        description:
          "撒上蔥味濃郁、口味清甜的宜蘭三星蔥， 搭配酥脆的餅皮和香濃起司， 交織出滿滿的台灣特色。",
      },
    ],
  },
  {
    name: "酥炸類",
    subbanner: "/src/images/menu-seb-banner/10011.jpg",
    title: "https://www.lebledor.com/img/menu/fried-kv-title.png",
    data: [
      {
        id: 0,
        src: "/src/images/fried/10001.png",
        title: "酥炸椒麻雞",
        description:
          "翅腿裹粉酥炸，將雞汁封存，搭配特製椒麻醬汁，酥香椒麻，顛覆味蕾，是主廚大力推薦的招牌菜。",
      },
      {
        id: 1,
        src: "/src/images/fried/10002.png",
        title: "海陸雙拼",
        description:
          "以酥炸軟殼蟹、雞腿肉蹦出海陸料理新風貌，搭配香濃明太子醬，濃郁滋味，難以忘懷。",
      },
      {
        id: 2,
        src: "/src/images/fried/10003.png",
        title: "酥炸綜合拼盤",
        description:
          "集結高鈣起司條、黃金鱈魚塊、薯條，同時享有各式人氣酥炸餐點。",
      },
      {
        id: 3,
        src: "/src/images/fried/10004.png",
        title: "椒香滿天飛",
        description:
          "精選雞翅中段，酥炸至乾香酥脆，搭配滿滿的紅椒粉與胡椒粉，勁辣爽口，超級下酒！",
      },
      {
        id: 4,
        src: "/src/images/fried/10009.png",
        title: "酥炸薯條",
        description: "酥炸馬鈴薯條，傳統美式風味，經典不敗的好滋味！",
      },
      {
        id: 5,
        src: "/src/images/fried/10005.png",
        title: "海陸交響曲",
        description:
          "以墨魚醉嗆烏魚子與椒香滿天飛共譜驚艷味蕾的磅礡交響曲，一次擁有海陸美味。",
      },
      {
        id: 6,
        src: "/src/images/fried/10006.png",
        title: "獨享拼盤",
        description:
          "人氣炸物大集合，酥炸椒麻雞、墨魚醉嗆烏魚子、寶萊塢卡啦脆，獨享各式高人氣酥炸餐點。",
      },
      {
        id: 7,
        src: "/src/images/fried/10007.png",
        title: "辣拌長舌",
        description:
          "嘴巴止不住、舌頭停不了！天婦羅低溫慢炸至爽脆不膩，巧妙火侯逼出多種辣椒與花椒的香辣層次，襯出酥香脆口，是話匣子大開時的好夥伴！",
      },
      {
        id: 7,
        src: "/src/images/fried/10008.png",
        title: "黃金蝦餅",
        description:
          "以新鮮的白蝦經過不斷拍打及攪拌精製而成，口感獨特，每一口都吃得到蝦肉的鮮甜及酥脆。快來金色三麥嚐鮮！",
      },
    ],
  },
  {
    name: "餐後甜點",
    multiple: false,
    subbanner: "/src/images/menu-seb-banner/100010.jpg",
    title: "https://www.lebledor.com/img/menu/dessert-kv-title.png",
    data: [
      {
        id: 0,
        src: "//lebledor-img.s3.amazonaws.com/cover/b66fbb43e498960ff2c59727f7ded982.png",
        title: "焦糖葡萄塔",
        description: "酥脆奶油塔皮搭配微酸葡萄餡，溫熱享用，香氣四溢。",
      },
      {
        id: 1,
        src: "//lebledor-img.s3.amazonaws.com/cover/cc0b7cf73b01c19172441bf5093448c8.png",
        title: "蜂蜜起司小太陽",
        description: "酥脆奶油塔皮搭配蜂蜜起司餡，柔滑順口，香濃綿密的好滋味。",
      },
      {
        id: 2,
        src: "//lebledor-img.s3.amazonaws.com/cover/86afd68fa8058ba2f5d3511669f98127.png",
        title: "金色三麥經典蛋糕(6吋)",
        description:
          "使用了精緻烘培的蛋糕作為基底，每一口都是絕妙好滋味！ 隨季節變換不同口味，時時新美味。",
      },
      {
        id: 3,
        src: "//lebledor-img.s3.amazonaws.com/cover/517178b9d9dfdc48b25fc23c8339d246.png",
        title: "榴槤忘返甜披薩",
        description:
          "獨特的榴槤香氣融合馬札瑞拉起司，一口咬下濃郁香甜、香氣噴發，小心上癮！",
      },
      {
        id: 4,
        src: "//lebledor-img.s3.amazonaws.com/cover/8fc9761da9f49eb828e112223cc094d6.png",
        title: "黑巧克力提拉米蘇",
        description: "美味可口",
      },
      {
        id: 5,
        src: "//lebledor-img.s3.amazonaws.com/cover/f1752e6da86b911e469ba608e32db0c7.png",
        title: "波士頓派",
        description: "美味可口",
      },
      {
        id: 6,
        src: "//lebledor-img.s3.amazonaws.com/cover/798b25416b70a5efb66fb66afa198853.png",
        title: "焦糖黑雪山聖代",
        description:
          "以香草與黑巧克力冰淇淋為基底，交織出濃郁絲滑的綿密口感，搭配香蕉與焦糖堅果的多層次組合，每一口都是幸福滿足。",
      },
      {
        id: 7,
        src: "//lebledor-img.s3.amazonaws.com/cover/e8a7ea99e2c39fd2ed41535ae96a06cd.png",
        title: "熱帶風情聖代",
        description:
          "以繽紛水果搭配芒果及香草風味冰淇淋，豐富色彩結合酸甜滋味，同時滿足視覺與味蕾享受！",
      },
    ],
  },
  {
    name: "appetizer",
    multiple: true,
    selector: ["開胃菜", "沙拉類"],
    data: [
      {
        title: "https://www.lebledor.com/img/menu/starter-kv-title.png",
        items: [
          {
            id: 0,
            src: "//lebledor-img.s3.amazonaws.com/cover/5294b559fd934a8e9ab367de93e4844b.png",
            title: "涼拌墨魚",
          },
          {
            id: 1,
            src: "//lebledor-img.s3.amazonaws.com/cover/e422d258991d8f566cfd179f426e2520.png",
            title: "冠軍蜂蜜啤酒麥芽麵包（奶油/起司）",
          },
          {
            id: 2,
            src: "//lebledor-img.s3.amazonaws.com/cover/c6fa01fa3f30b8b88bb7824ddf46fc9a.png",
            title: "翹臀豬嫩拌山蕨(新品)",
          },
        ],
      },
      {
        title: "https://www.lebledor.com/img/menu/salad-kv-title.png",
        items: [
          {
            id: 0,
            src: "//lebledor-img.s3.amazonaws.com/cover/ad50eb7e0a527ea2fe8dcf6557c995d9.png",
            title: "握握手小農溫沙拉",
          },
          {
            id: 1,
            src: "//lebledor-img.s3.amazonaws.com/cover/58dcda455a1f5087797301f6d6f47300.png",
            title: "凱薩沙拉",
          },
          {
            id: 2,
            src: "//lebledor-img.s3.amazonaws.com/cover/fcdb71737592d0d347d0a6dec30fd6a6.png",
            title: "南洋松阪豬",
          },
          {
            id: 3,
            src: "//lebledor-img.s3.amazonaws.com/cover/05937adacba1effdbff40a652a373034.png",
            title: "海鮮水果沙拉",
          },
          {
            id: 4,
            src: "//lebledor-img.s3.amazonaws.com/cover/12c0fcc12e41fe28bc3a6ad21afc2302.png",
            title: "貝里斯鮮蔬蝦仁拌檸檬優格",
          },
          {
            id: 5,
            src: "//lebledor-img.s3.amazonaws.com/cover/efc8898954cc92420a16e1e179a5c174.png",
            title: "貓野菜扭臀沙拉",
          },
          ,
        ],
      },
    ],
  },
];

export default MENU_DATA;
