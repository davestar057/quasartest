<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section>
        <h2>Bank Holidays 2020</h2>
        <q-list bordered separator>
        <q-item clickable v-ripple v-for="date in bankHolidays" :key="date.date">
          <q-item-section>
            <q-item-label>{{ date.title }}</q-item-label>
            <q-item-label caption>{{ date.date }}</q-item-label>
          </q-item-section>
        </q-item>
        </q-list>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>

export default {
  name: 'Dashboard',
  data() {
    return {
      bankHolidays: null
    }
  },

  methods: {
    loadDates() {
      this.$q.loading.show()

      this.$axios.get('api/bankholidays/list').then(response => {
        this.bankHolidays = response.data.data
        this.$q.loading.hide()

      })

    },
  },

  mounted(){
    this.loadDates();
  }
}
</script>
