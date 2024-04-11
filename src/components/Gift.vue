<template>
  <div class="gift-component full-screen">
    <h1>恭喜你中奖啦！</h1>
    <div class="gift-image-area">
      <img :src="giftImageUrl" alt="" class="gift-image">
    </div>
    <h3>{{ giftName }}</h3>
    <div v-if="isShowRestart && restartCount > 0" class="replay-button" @click="replay">再来一次</div>
    <div v-else>抽奖次数已用完</div>
  </div>
</template>

<script>
import { GLOBAL_KEYS, IS_SHOW_RESTART } from '../gift.setting.js';
export default {
  name: 'Gift',
  data() {
    return {
      giftName: '',
      giftImageUrl: '',
      isShowRestart: false,
      restartCount: 0,
    }
  },
  methods: {
    getLocalGift() {
      const giftName = localStorage.getItem(GLOBAL_KEYS.NAME_KEY);
      const giftImageUrl = localStorage.getItem(GLOBAL_KEYS.IMAGE_KEY);
      const restartCount = localStorage.getItem(GLOBAL_KEYS.RESTART_COUNT_KEY);
      console.log(restartCount);
      console.log(restartCount > 0);
      this.giftName = giftName;
      this.giftImageUrl = giftImageUrl;
      this.isShowRestart = IS_SHOW_RESTART;
      this.restartCount = restartCount;
    },
    replay() {
      localStorage.removeItem(GLOBAL_KEYS.EXIST_KEY);
      location.replace('/');
    },
  },
  mounted() {
    this.getLocalGift();
  },
}
</script>

<style scoped>
.gift-component {
  background-color: #fad3e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gift-image-area {
  margin: 30px 0 15px 0;
  width: 240px;
  height: 240px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gift-image {
  display: block;
  width: 220px;
  height: 220px;
}
.replay-button {
  text-align: center;
  position: fixed;
  bottom: 20px;
  width: 100%;
}
</style>