
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
  title: '我们结婚一周年啦！',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '虽然来的有些迟了', },
    { key: 's', wording: '但希望你能喜欢', },
    { key: 'd', wording: '结婚后，依然可以浪漫', },
  ],
  // 最终解释权归属人
  owner: '启先森',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 3000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,

  // 指定礼物顺序
  targetGiftIndexList: [0, 2, 4, 6, 7],
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '一周年纪念木刻', alias: '纪念木刻', image: '/images/wood.png',  description: '「始于初见，止于终老」' },
  { key: 'w', name: 'DIOR 迪奥小姐玫舞轻旋淡香水', alias: 'DIOR香水', image: '/images/dior.png',  description: '“每一天都是香香的”' },
  { key: 'e', name: '一周年纪念小册', alias: '纪念小册', image: '/images/book.png',  description: '「余生有你，何其欢喜」' },
  { key: 'r', name: 'EOS R10 相机', alias: 'R10', image: '/images/eosr10.png',  description: '“留下你的每一份美丽”' },
  { key: 't', name: 'AirPods pro 2', alias: 'Airpods', image: '/images/airpods2.png',  description: '「特别的一刻，只属于你」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: 'IPhone 15 Pro', alias: 'IPhone15Pro', image: '/images/ipone15pro.png',  description: '“是时候换个新手机啦！”' },
  { key: 'i', name: 'NOE BB', alias: 'LV女包', image: '/images/lvbag.png',  description: '「何以解忧，唯有包包」' },
];
