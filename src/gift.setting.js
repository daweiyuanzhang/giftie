
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
  RESTART_COUNT_KEY: 'RESTART_COUNT',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 允许重试次数
export const RESTART_COUNT = 5;

// 首页配置
export const homeConfig = {
  // 标题
  title: '璐璐专属来啦',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '可能不够惊喜', },
    { key: 's', wording: '但希望你能喜欢', },
  ],
  // 最终解释权归属人
  owner: '宇峰',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 3000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,

  // 指定礼物顺序
  targetGiftIndexList: [0, 3, 5, 6],
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '全身按摩(30min)', alias: '按摩(30min)', image: './images/spa.png',  description: '「奢华享受, 感受轻松」' },
  { key: 'i', name: 'LAMER精华乳霜30ml', alias: 'LAMER乳霜', image: './images/lamer.png',  description: '「柔韧修护, 纵享年轻」' },
  { key: 'r', name: 'Sony XT5相机', alias: 'XT5', image: '/images/xt5.jpg',  description: '“留下你的每一份美丽”' },
  { key: 'w', name: '全定制旅行', alias: '全定制旅行', image: './images/travel.png',  description: '「说走就走, 私享定制」' },
  { key: 't', name: '竹哩大餐一顿', alias: '竹哩·栩', image: '/images/zhuli.jpg',  description: '「只要你喜欢，我就陪你去」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“我会永远在你旁边”' },
  { key: 'u', name: '赫莲娜黑绷带', alias: '赫莲娜', image: './images/helianna.jpg',  description: '「极致呵护, 轻松自在」' },
  { key: 'i', name: '黄金(10g)', alias: '黄金(10g)', image: './images/gold.png',  description: '「金诚可贵, 情比金坚」' },
];
