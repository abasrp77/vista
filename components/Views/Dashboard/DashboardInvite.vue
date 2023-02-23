<template>
  <div class="bg-white rounded-3xl flex flex-col">
    <div class="mb-auto">
      <h1 class="font-black text-primary p-4">دعوت از دوستان</h1>
      <div class="flex justify-end ml-0.5 -mt-6 mb-1">
        <img src="~/assets/img/3d-cryptocurrency-rendering-design 44 1.png" />
      </div>
      <div class="p-4">
        <div class="flex justify-between items-center mb-6">
          <div class="flex">
            <gift-icon />
            <span class="text-sm font-bold text-color4 mr-0.5">سود من</span>
          </div>
          <div class="flex justify-end items-center">
            <span class="text-lg font-black text-color3">77,565,000</span>
            <span class="text-sm font-medium text-color5">تومان</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex">
            <users-icon />
            <span class="text-sm font-bold text-color4 mr-0.5">دوستان من</span>
          </div>
          <div class="flex justify-end items-center">
            <span class="text-lg font-black text-color3">12</span>
            <span class="text-sm font-medium text-color5">نفر</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        v-ripple
        class="w-full h-12 bg-primary flex flex-center text-white font-black rounded-b-3xl"
      >
        دعوت از دوستان
      </button>
    </div>
  </div>
</template>

<script>
import GiftIcon from "@/components/Icon/GiftIcon.vue";
import UsersIcon from "~/components/Icon/UsersIcon.vue";
export default {
  components: { GiftIcon, UsersIcon },
};
</script>

<style>
</style>