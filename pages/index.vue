<template>
  <div class="block">
    <dashboard-carousel class="mb-3" />
    <div class="xl:flex">
      <dashboard-chart class="w-full" />
      <div class="flex justify-center">
        <bank-card
          class="w-[282px] shrink-0 h-[169px] xl:h-full xl:mr-3 mt-3 xl:mt-0"
        />
      </div>
    </div>
    <div class="xl:flex mt-3">
      <dashboard-table class="w-full" />
      <div>
        <dashboard-invite
          class="w-full xl:w-[282px] shrink-0 h-[330px] xl:h-full xl:mr-3 mt-3 xl:mt-0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCarousel from "@/components/Views/Dashboard/DashboardCarousel.vue";
import DashboardChart from "@/components/Views/Dashboard/DashboardChart.vue";
import BankCard from "@/components/Views/Dashboard/BankCard.vue";
import DashboardTable from "~/components/Views/Dashboard/DashboardTable.vue";
import DashboardInvite from "~/components/Views/Dashboard/DashboardInvite.vue";
export default {
  components: {
    DashboardCarousel,
    DashboardChart,
    BankCard,
    DashboardTable,
    DashboardInvite,
  },
};
</script>
