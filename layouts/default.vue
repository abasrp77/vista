<template>
  <v-app dark>
    <div class="bg-body min-h-screen">
      <v-container class="!py-0">
        <app-header :links="links" @openDrawe="drawer = true" />
        <v-navigation-drawer v-model="drawer" fixed color="white" right>
          <app-sidebar-content :externalLinks="links" />
        </v-navigation-drawer>
        <div class="w-full lg:flex my-8">
          <div
            class="hidden lg:flex flex-shrink-0 flex-col bg-white w-[224px] h-[631px] rounded-3xl ml-3"
          >
            <app-sidebar-content />
          </div>
          <div class="w-full" style="min-width: 0px">
            <Nuxt />
          </div>
        </div>
      </v-container>
      <app-footer />
    </div>
  </v-app>
</template>

<script>
import AppHeader from "@/components/UI/AppHeader.vue";
import UserIcon from "~/components/Icon/UserIcon.vue";
import AppSidebarContent from "~/components/UI/AppSidebarContent.vue";
import AppFooter from "~/components/UI/AppFooter.vue";
export default {
  name: "DefaultLayout",
  components: { AppHeader, UserIcon, AppSidebarContent, AppFooter },
  data() {
    return {
      links: [
        {
          to: "/",
          text: "بازارها",
        },
        {
          to: "/",
          text: "معامله پیشرفته",
        },
        {
          to: "/",
          text: "معامله آسان",
        },
        {
          to: "/",
          text: "درباره‌ما",
        },
        {
          to: "/",
          text: "تماس با ما",
        },
        {
          to: "/",
          text: "وبلاگ",
        },
      ],

      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
