<template>
  <div class="flex flex-col h-full p-3">
    <div>
      <div class="p-2 pb-0.5 mb-4">
        <div class="flex items-center mb-5">
          <div
            class="inline-flex flex-center w-12 h-12 rounded-lg bg-color1 ml-2"
          >
            <user-icon class="fill-primary w-8 h-8" />
          </div>
          <div class="font-medium">
            <p class="text-color3 text-sm !mb-0.5">مرجان خلیل پور</p>
            <p class="text-primary text-xs !mb-0">سطح 3 کاربری</p>
          </div>
        </div>
        <div class="w-full h-px bg-body relative">
          <div
            style="width: 50%"
            class="h-px absolute top-0 right-0 bg-success1"
          ></div>
          <div
            class="absolute top-0 left-0 -translate-y-1/2 w-full flex justify-between items-center px-0.5"
          >
            <div class="bg-success1 w-2 h-2 rounded-sm"></div>
            <div
              class="bg-success1 w-5 h-5 rounded inline-flex flex-center text-xs font-medium text-white"
            >
              2
            </div>
            <div class="bg-body w-2 h-2 rounded-sm"></div>
            <div class="bg-body w-2 h-2 rounded-sm"></div>
          </div>
        </div>
      </div>
      <div>
        <v-list>
          <v-list-item
            v-for="(item, index) in links"
            :key="index"
            :class="
              $route.path === item.to
                ? 'bg-primary !text-white'
                : 'bg-white !text-color4'
            "
            @click="$router.push(item.to)"
          >
            <v-list-item-icon>
              <component
                :is="item.icon"
                :class="[
                  'w-6 h-6',
                  $route.path === item.to ? 'fill-white' : 'fill-color4',
                ]"
              />
            </v-list-item-icon>

            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </div>
    <v-list class="mt-auto">
      <v-list-group v-if="externalLinks">
        <template #prependIcon>
          <home-icon class="fill-color4 w-6 h-6" />
        </template>
        <template #activator>
          <v-list-item-title class="!text-color4"
            >بازگشت به خانه</v-list-item-title
          >
        </template>
        <v-list-item v-for="(item, index) in externalLinks" :key="index" link>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-item link>
        <v-list-item-icon>
          <logout-icon class="fill-color4" />
        </v-list-item-icon>
        <v-list-item-title class="!text-color4">خروج</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import DashboardIcon from "~/components/Icon/DashboardIcon.vue";
import UserIcon from "~/components/Icon/UserIcon.vue";
import BagIcon from "~/components/Icon/BagIcon.vue";
import ClockIcon from "~/components/Icon/ClockIcon.vue";
import SettingsIcon from "~/components/Icon/SettingsIcon.vue";
import SupportIcon from "~/components/Icon/SupportIcon.vue";
import HomeIcon from "~/components/Icon/HomeIcon.vue";
import LogoutIcon from "~/components/Icon/LogoutIcon.vue";

export default {
  components: {
    DashboardIcon,
    UserIcon,
    BagIcon,
    ClockIcon,
    SettingsIcon,
    SupportIcon,
    HomeIcon,
    LogoutIcon,
  },
  data() {
    return {
      links: [
        {
          icon: "DashboardIcon",
          to: "/",
          title: "داشبورد",
        },
        {
          icon: "UserIcon",
          to: "/a",
          title: "حساب کاربری",
        },
        {
          icon: "BagIcon",
          to: "/a",
          title: "کیف پول",
        },
        {
          icon: "ClockIcon",
          to: "/a",
          title: "تاریخچه",
        },
        {
          icon: "SettingsIcon",
          to: "/a",
          title: "تنظیمات",
        },
        {
          icon: "SupportIcon",
          to: "/a",
          title: "پشتیبانی",
        },
      ],
    };
  },
  props: {
    externalLinks: Array,
  },
};
</script>

<style scoped>
</style>