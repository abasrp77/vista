<template>
  <header class="flex justify-between items-center py-4 text-sm">
    <button v-ripple class="btn lg:hidden" @click="$emit('openDrawe')">
      <menu-icon class="fill-primary" />
    </button>
    <div class="inline-flex items-center space-x-8 space-x-reverse">
      <nuxt-link to="/" class="hidden lg:block">
        <img src="~/assets/img/logo.svg" />
      </nuxt-link>
      <nuxt-link
        v-for="(item, index) in links"
        :key="index"
        :to="item.to"
        class="!text-color2 hover:!text-primary duration-300 hidden lg:block"
        >{{ item.text }}</nuxt-link
      >
    </div>
    <div class="inline-flex space-x-2 space-x-reverse items-center">
      <button v-ripple class="btn">
        <dashboard-icon class="fill-primary ml-1" />
      </button>
      <button v-ripple class="btn">
        <bell-icon class="fill-primary ml-1" />
      </button>
      <button v-ripple class="btn md:pl-3">
        <user-icon class="fill-primary md:ml-1 w-6 h-6" />
        <span class="hidden md:block">مرجان خلیل پور</span>
      </button>
    </div>
  </header>
</template>

<script>
import MenuIcon from "@/components/Icon/MenuIcon.vue";
import UserIcon from "@/components/Icon/UserIcon.vue";
import BellIcon from "@/components/Icon/BellIcon.vue";
import DashboardIcon from "../Icon/DashboardIcon.vue";
export default {
  components: { MenuIcon, UserIcon, BellIcon, DashboardIcon },
  props: {
    links: Array,
  },
};
</script>

<style>
</style>