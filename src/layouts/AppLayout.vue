<template>
  <q-layout view="hHh Lpr fFf">

      <q-toolbar class="bg-secondary text-white shadow-2 q-py-md">
        <div class="text-h5" v-if="CurrentUser">Welcome<br/><b>{{ CurrentUser.name }}</b></div>
        <q-space />
        <q-btn active  label="Holidays" no-caps  unelevated flat to="/dashboard/home" />
        <q-btn  label="Logs" no-caps  unelevated flat to="/dashboard/logs"  />

        <q-btn label="Logout" no-caps  unelevated  color="black" @click="signOutAction"  />
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
