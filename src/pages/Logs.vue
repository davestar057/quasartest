<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section>
        <h2>User Activity Logs</h2>
        <q-list bordered separator>
        <q-item clickable v-ripple v-for="activity in activityLogs" :key="activity.created_at">
          <q-item-section>
            <q-item-label><b>Activity:</b> {{ activity.activity }}</q-item-label>
            <q-item-label caption><b>User:</b>{{ activity.user.name }} | UID:{{ activity.user.id }}</q-item-label>
            <q-item-label caption><b>Date:</b>{{ dateInstance(activity.created_at) }}</q-item-label>
          </q-item-section>
        </q-item>
        </q-list>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
  import { date } from 'quasar'
export default {
  name: 'Dashboard',
  data() {
    return {
      activityLogs: null
    }
  },

  methods: {
    loadLogs() {
      this.$q.loading.show()
      this.$axios.get('api/users/logs').then(response => {
        this.activityLogs = response.data.data
        this.$q.loading.hide()

      })

    },

    dateInstance(created_date) {
      let newDate =  new Date(created_date)
      let formattedString = date.formatDate(newDate, 'DD-MM-YYYY HH:MM')
      return formattedString;
    }
  },

  mounted(){
    this.loadLogs();
  }
}
</script>
