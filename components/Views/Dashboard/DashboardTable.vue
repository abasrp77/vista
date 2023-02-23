<template>
  <div class="bg-white p-4 rounded-3xl">
    <div class="flex justify-end mb-4 sm:hidden">
      <button class="!text-error text-xs font-medium">لغو همه</button>
    </div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="500"
      hide-default-footer
      :height="$vuetify.breakpoint.xs ? '490px' : '303px'"
      fixed-header
      :mobile-breakpoint="576"
    >
      <template v-slot:[`header.order`]>
        <div class="flex items-center">
          <div class="w-[7px] h-[7px] bg-error rounded-full ml-1"></div>
          <span>سفارش فعال</span>
        </div>
      </template>
      <template v-slot:[`header.cancle`]>
        <div class="flex justify-end">
          <button class="!text-error text-xs font-medium">لغو همه</button>
        </div>
      </template>
      <template v-slot:[`item.order`]="{ item }">
        <div class="text-success2">
          {{ item.order }}
        </div>
      </template>
      <template v-slot:[`item.cancle`]="{ item }">
        <button v-ripple class="opacity-50 p-2 rounded-full">
          <delete-icon />
        </button>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import DeleteIcon from "~/components/Icon/DeleteIcon.vue";
export default {
  components: { DeleteIcon },
  data() {
    return {
      headers: [
        {
          text: "سفارش فعال",
          align: "start",
          sortable: false,
          value: "order",
        },
        { text: "زمان و تاریخ", value: "date", sortable: false },
        { text: "نوع", value: "type", sortable: false },
        { text: "قیمت واحد", value: "price", sortable: false },
        { text: "مقدار", value: "some", sortable: false },
        { text: "مبلغ کل", value: "totalPrice", sortable: false },
        { text: "پرشده", value: "full", sortable: false },
        { text: "", value: "cancle", sortable: false },
      ],
      desserts: [
        {
          order: "TMN-BTC",
          date: "۰۰/۱۲/۰۳ | ۱۴:۳۳",
          type: "حد",
          price: "۱۰٬۱۱۲٬۴۵۶",
          some: "0.01",
          totalPrice: "۱۰٬۱۱۲٬۴۵۶",
          full: "۰ %",
        },
        {
          order: "TMN-BTC",
          date: "۰۰/۱۲/۰۳ | ۱۴:۳۳",
          type: "حد",
          price: "۱۰٬۱۱۲٬۴۵۶",
          some: "0.01",
          totalPrice: "۱۰٬۱۱۲٬۴۵۶",
          full: "۰ %",
        },
        {
          order: "TMN-BTC",
          date: "۰۰/۱۲/۰۳ | ۱۴:۳۳",
          type: "حد",
          price: "۱۰٬۱۱۲٬۴۵۶",
          some: "0.01",
          totalPrice: "۱۰٬۱۱۲٬۴۵۶",
          full: "۰ %",
        },
        {
          order: "TMN-BTC",
          date: "۰۰/۱۲/۰۳ | ۱۴:۳۳",
          type: "حد",
          price: "۱۰٬۱۱۲٬۴۵۶",
          some: "0.01",
          totalPrice: "۱۰٬۱۱۲٬۴۵۶",
          full: "۰ %",
        },
        {
          order: "TMN-BTC",
          date: "۰۰/۱۲/۰۳ | ۱۴:۳۳",
          type: "حد",
          price: "۱۰٬۱۱۲٬۴۵۶",
          some: "0.01",
          totalPrice: "۱۰٬۱۱۲٬۴۵۶",
          full: "۰ %",
        },
        {
          order: "TMN-BTC",
          date: "۰۰/۱۲/۰۳ | ۱۴:۳۳",
          type: "حد",
          price: "۱۰٬۱۱۲٬۴۵۶",
          some: "0.01",
          totalPrice: "۱۰٬۱۱۲٬۴۵۶",
          full: "۰ %",
        },
        {
          order: "TMN-BTC",
          date: "۰۰/۱۲/۰۳ | ۱۴:۳۳",
          type: "حد",
          price: "۱۰٬۱۱۲٬۴۵۶",
          some: "0.01",
          totalPrice: "۱۰٬۱۱۲٬۴۵۶",
          full: "۰ %",
        },
        {
          order: "TMN-BTC",
          date: "۰۰/۱۲/۰۳ | ۱۴:۳۳",
          type: "حد",
          price: "۱۰٬۱۱۲٬۴۵۶",
          some: "0.01",
          totalPrice: "۱۰٬۱۱۲٬۴۵۶",
          full: "۰ %",
        },
        {
          order: "TMN-BTC",
          date: "۰۰/۱۲/۰۳ | ۱۴:۳۳",
          type: "حد",
          price: "۱۰٬۱۱۲٬۴۵۶",
          some: "0.01",
          totalPrice: "۱۰٬۱۱۲٬۴۵۶",
          full: "۰ %",
        },
      ],
    };
  },
};
</script>

<style scoped>
::v-deep .v-data-table-header tr th span {
  color: #b0b0b0;
  font-size: 12px;
  font-weight: 500;
}
::v-deep .v-data-table__wrapper tbody tr td {
  color: #707070;
  font-size: 14px;
}
::v-deep
  .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:not(.v-data-table__mobile-row),
::v-deep
  .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:not(.v-data-table__mobile-row) {
  border-bottom: 0.75px solid #f0f0f0;
}

::v-deep
  .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border-bottom: 0;
}
::v-deep .v-data-table__wrapper::-webkit-scrollbar {
  width: 0px;
}

::v-deep .v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
::v-deep .v-data-table > .v-data-table__wrapper > table > thead > tr > td,
::v-deep .v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
::v-deep .v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  padding-left: 8px;
  padding-right: 8px;
}
</style>