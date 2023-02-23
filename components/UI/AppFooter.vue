<template>
  <div class="bg-white">
    <v-container class="!py-0">
      <v-row>
        <v-col cols="12" sm="6" lg="4" class="!py-0">
          <div class="max-w-[220px] relative mx-auto sm:mx-0">
            <img
              src="~/assets/img/Line-left.svg"
              class="absolute top-0 left-0"
            />
            <img
              src="~/assets/img/Line-right.svg"
              class="absolute top-0 right-0"
            />
            <div class="flex justify-center pt-[62px]">
              <img src="~/assets/img/logo.svg" class="w-[73px] h-[73px]" />
            </div>
          </div>
          <div class="sm:max-w-[250px]">
            <h1 class="font-black text-color2 mt-4">صرافی هفت رمز</h1>
            <p class="mt-1 text-sm text-color4">
              صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در
              بستری مطمئن
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="2" class="!py-0">
          <h2 class="text-sm font-bold text-color3 mt-12 mb-4">
            ارز های دیجیتال
          </h2>
          <div class="space-y-3">
            <nuxt-link
              v-for="(item, index) in digitalCurrencies"
              :key="index"
              :to="item.to"
              class="!text-color2 hover:!text-primary text-xs font-medium duration-300 block"
              >{{ item.title }}</nuxt-link
            >
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="2" class="!py-0">
          <h2 class="text-sm font-bold text-color3 mt-12 mb-4">سایت هفت رمز</h2>
          <div class="space-y-3">
            <nuxt-link
              v-for="(item, index) in haftRamzLink"
              :key="index"
              :to="item.to"
              class="!text-color2 hover:!text-primary text-xs font-medium duration-300 block"
              >{{ item.title }}</nuxt-link
            >
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="4" class="!py-0">
          <h2 class="text-sm font-bold text-color3 mt-12 mb-4">
            هفت رمز در شبکه های اجتماعی
          </h2>
          <div class="space-y-4">
            <div class="flex items-center text-xs text-color2 font-medium">
              <email-icon class="fill-color4 ml-2" />
              <span>7Arz2022@Gmail.com</span>
            </div>
            <div class="flex items-center text-xs text-color2 font-medium">
              <phone-icon class="fill-color4 ml-2" />
              <span>۰۲۱- ۴۴۹۸۸۷۵۷</span>
            </div>
            <div class="flex items-center text-xs text-color2 font-medium">
              <map-icon class="fill-color4 ml-2" />
              <span
                >میدان ولی عصر - نرسیده به سینما آفریقا - کوچه عتیقی نژاد
                ..</span
              >
            </div>
          </div>
          <div class="flex items-center space-x-3 space-x-reverse mt-6">
            <a href="#">
              <telegram-icon class="fill-primary" />
            </a>
            <a href="#">
              <instagram-icon class="fill-primary" />
            </a>
            <a href="#">
              <whatsapp-icon class="fill-primary" />
            </a>
            <a href="#">
              <tweeter-icon class="fill-primary" />
            </a>
          </div>
        </v-col>
      </v-row>
      <div class="mt-8 border-t border-[#B6ADEA] pt-3 pb-[22px]">
        <p class="text-sm text-color4 !mb-0">
          کلیه حقوق متعلق به شرکت ویستا است.
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
import EmailIcon from "@/components/Icon/EmailIcon.vue";
import PhoneIcon from "@/components/Icon/PhoneIcon.vue";
import MapIcon from "@/components/Icon/MapIcon.vue";
import TelegramIcon from "@/components/Icon/TelegramIcon.vue";
import InstagramIcon from "@/components/Icon/InstagramIcon.vue";
import WhatsappIcon from "@/components/Icon/WhatsappIcon.vue";
import TweeterIcon from "@/components/Icon/TweeterIcon.vue";
export default {
  components: {
    EmailIcon,
    PhoneIcon,
    MapIcon,
    TelegramIcon,
    InstagramIcon,
    WhatsappIcon,
    TweeterIcon,
  },
  data() {
    return {
      digitalCurrencies: [
        {
          title: "معامله بیت‌کوین",
          to: "/",
        },
        {
          title: "معامله لایت‌کوین",
          to: "/",
        },
        {
          title: "معامله بایننس‌کوین",
          to: "/",
        },
        {
          title: "معامله اتریوم‌",
          to: "/",
        },
        {
          title: "معامله دوج‌کوین‌",
          to: "/",
        },
      ],
      haftRamzLink: [
        {
          title: "درباره ما",
          to: "/",
        },
        {
          title: "تماس با ما",
          to: "/",
        },
        {
          title: "سوالات متداول",
          to: "/",
        },
        {
          title: "کارمزد معاملات",
          to: "/",
        },
        {
          title: "قوانین و مقررات",
          to: "/",
        },
      ],
    };
  },
};
</script>

<style>
</style>