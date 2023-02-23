<template>
  <div
    class="flex flex-col sm:flex-row sm:justify-between bg-white p-4 rounded-3xl"
  >
    <div id="chart">
      <client-only>
        <vueApexCharts
          type="donut"
          width="270"
          height="270"
          :options="chartOptions"
          :series="series"
        />
      </client-only>
    </div>
    <div class="flex justify-end">
      <div class="mt-2 space-y-1.5">
        <div v-for="i in 4" :key="i" class="flex justify-end items-center">
          <span class="text-color4 text-xs font-medium ml-1">Doge</span>
          <span class="text-sm text-color2 font-bold">7748</span>
        </div>
      </div>
      <div class="mr-11">
        <div class="flex text-xs font-medium">
          <div class="ml-4">
            <div class="w-10 h-10 bg-body flex flex-center rounded-lg">
              <deposit-icon class="fill-success1" />
            </div>
            <span class="block text-center text-success2 mt-1">واریز</span>
          </div>
          <div>
            <div class="w-10 h-10 bg-body flex flex-center rounded-lg">
              <decrease-icon class="fill-error" />
            </div>
            <span class="block text-center text-error mt-1">برداشت</span>
          </div>
        </div>
        <nuxt-link
          class="!text-primary text-xs font-bold flex justify-end mt-11"
          to="/"
          >مشاهده همه</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import DepositIcon from "@/components/Icon/DepositIcon.vue";
import DecreaseIcon from "~/components/Icon/DecreaseIcon.vue";
export default {
  components: { DepositIcon, DecreaseIcon },
  data() {
    return {
      total: 50,
      series: [20, 15, 10, 5],
      chartOptions: {
        plotOptions: {
          pie: {
            donut: {
              size: "90%",
              labels: {
                show: true,
                name: {
                  fontSize: "14px",
                  fontFamily: "iranSans",
                  fontWeight: "500",
                  color: "#707070",
                },
                value: {
                  fontSize: "24px",
                  fontFamily: "iranSans",
                  fontWeight: "900",
                  color: "#202020",
                  formatter: (v) => (v / this.total) * 100 + "%",
                },
                total: {
                  show: true,
                  label: "مجموع",
                  fontFamily: "iranSans",
                  fontWeight: "500",
                },
              },
            },
          },
        },
        colors: ["#8DC400", "#5841DA", "#F069C2", "#FACA21"],
        fill: {
          colors: ["#8DC400", "#5841DA", "#F069C2", "#FACA21"],
        },
        labels: ["دوج کوین", "بیت کوین", "اتریوم", "لات کوین"],
        // chart: {
        //   width: 127,
        //   type: "donut",
        // },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "left",
          offsetY: 0,
          height: 140,
        },
      },
    };
  },
};
</script>

<style>
#chart span {
  font-size: 14px !important;
  font-weight: 500 !important;
  font-family: "iranSans" !important;
}
.apexcharts-legend.apx-legend-position-left {
  top: 4px !important;
}
.apexcharts-legend-series {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>