<template>
  <q-layout view="hHh Lpr fFf">

      <q-toolbar class="bg-secondary text-white shadow-2">
        <div class="text-h4" v-if="CurrentUser">Welcome <b>{{ CurrentUser.name }}</b></div>
        <q-space />
        <q-btn active  label="Bank Holidays" no-caps  unelevated flat to="/dashboard/home" />
        <q-btn  label="User Logs" no-caps  unelevated flat to="/dashboard/logs"  />

        <q-btn label="Logout" no-caps  unelevated icon-right="exit_to_app" color="black" @click="signOutAction"  />
      </q-toolbar>


    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Dashboard',

  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      CurrentUser: 'auth/CurrentUser',
    })
  },
  methods: {

    signOutAction() {
      this.signOut().then(() => {
        this.$router.push({path:'/'});
      });


    },

    ...mapActions({
      signOut: 'auth/signOut',
    }),
  }
}
</script>
