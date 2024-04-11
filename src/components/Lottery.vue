<template>
  <div class="lottery-component">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swiper-slide" key="home">
        <home />
      </swiper-slide>
      <swiper-slide class="swiper-slide" v-for="gift in gifts" :key="gift.key">
        <gift-displayer
          :name="gift.name"
          :image="gift.image"
          :description="gift.description"
        />
      </swiper-slide>
      <swiper-slide class="swiper-slide" key="turn">
        <turntable @success="handleTurntableSuccess" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Home from './Lottery.Home.vue';
import { gifts as GIFTS, GLOBAL_KEYS } from '@/gift.setting.js';
export default {
  name: 'Lottery',
  components: {
    Home,
    GiftDisplayer: () => import('./Lottery.GiftDisplayer.vue'),
    Turntable: () => import('./Lottery.Turntable.vue'),
  },
  data() {

    return {
      gifts: [],
      swiperOptions: {
        direction: 'vertical',
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
  },
  methods: {
    showGifts() {
      this.gifts = GIFTS;
      let restartCount = localStorage.getItem(GLOBAL_KEYS.RESTART_COUNT_KEY) || 0;
      if (restartCount > 0) {
        setTimeout(() => {
          this.$refs.mySwiper.$swiper.slideTo(9);
          console.log(this.$refs.mySwiper.$swiper.slideTo)
        }, 100);
      }
    },

    handleTurntableSuccess() {
      this.$emit('showGift');
    },
  },
  mounted() {
    this.showGifts();
  },
}
</script>

<style scoped>
.lottery-component {

}
.swiper {
  height: 100%;
  width: 100%;
}
.swiper-slide {
  height: 100%;
  width: 100%;
}
</style>