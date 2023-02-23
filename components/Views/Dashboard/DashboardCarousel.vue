<template>
  <div class="sm:-ml-3 relative">
    <div
      class="absolute top-0 right-0 w-8 md:w-[50px] h-full flex flex-center gradient z-[1] rotate-180"
    >
      <button @click="$refs.slick.next()">
        <chevron-icon class="fill-primary" />
      </button>
    </div>
    <div
      class="absolute top-0 left-0 sm:left-3 w-8 md:w-[50px] h-full flex flex-center gradient z-[1]"
    >
      <button @click="$refs.slick.prev()">
        <chevron-icon class="fill-primary" />
      </button>
    </div>
    <vue-slick-carousel ref="slick" v-bind="settings" class="w-full">
      <div v-for="(item, index) in 8" :key="index" class="pl-3" dir="rtl">
        <div class="group bg-white rounded-3xl w-full p-4 font-medium">
          <div class="flex justify-between">
            <div class="flex">
              <img
                src="~/assets/img/ETH.png"
                class="w-8 h-8 ml-1 group-hover:w-10 group-hover:h-10 duration-300"
              />
              <div class="text-color2">
                <p class="text-sm !mb-0.5">اتریوم</p>
                <p class="text-xs !mb-0">EHT</p>
              </div>
            </div>
            <div>
              <div class="flex justify-end itemms-center pt-[10px] pb-[18px]">
                <span class="text-color4 text-sm ml-1">23.3</span>
                <swing-icon class="fill-success1" />
              </div>
              <div class="flex justify-end items-center">
                <span class="text-color4">۸,۷۷۳,۸۴۳</span>
                <span class="text-xs text-color5">تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import ChevronIcon from "~/components/Icon/ChevronIcon.vue";
import SwingIcon from "~/components/Icon/SwingIcon.vue";
export default {
  components: { SwingIcon, ChevronIcon },
  data() {
    return {
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        arrows: false,
        speed: 600,
        infinite: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              // slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              // slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              // slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(
    90deg,
    #ffffff 35.04%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 24px 0px 0px 24px;
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
}
</style>