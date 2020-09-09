<template>
  <q-page class=" window-height window-width row justify-center items-center">
    <div class="column q-px-lg" style="width:500px">

      <div class="row text-center">

        <q-card bordered class="q-pa-lg shadow-1 login-card" style="width:100%">
          <h5 class="text-h3  q-my-md text-center">Holiday Log</h5>

          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input bottom-slots square filled v-model="user.email" type="email" label="email"  :error-message="getError('email')" :error="getError('email')!==false">
                <template v-slot:prepend>
                  <q-icon name="email"/>
                </template>
              </q-input>

              <q-input bottom-slots square filled v-model="user.password" type="password" label="password"  :error-message="getError('password')" :error="getError('password')!==false">
                <template v-slot:prepend>
                  <q-icon name="lock"/>
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="light-green-7" size="lg" class="full-width" label="Login" @click="login"/>
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6 q-pt-lg">
              <router-link to="register">Not registered? Create an account</router-link>
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>

</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import {Store} from '../store/index'

  export default {
    name: 'PageIndex',
    data() {
      return {
        formErrors: [],
        user: {
          email: '',
          password: null,
        }
      }
    },

    methods: {

      ...mapActions({
        SignIn: 'auth/SignIn',
        me: 'auth/me',
        signOut: 'auth/signOut',
      }),

      async login() {
        let self = this
        try {
          await this.SignIn(this.user);
          self.$router.push({path: '/dashboard/home'});

        } catch (e) {
          this.formErrors = e.response.data

        }
      },

      getError(nameOfField) {
        if (this.formErrors['errors'] && this.formErrors['errors'][nameOfField]) {
          return this.formErrors['errors'][nameOfField][0]
        }
        return false;
      },

    },

    computed: {
      ...mapGetters({
        CurrentUser: 'auth/CurrentUser',
        authenticated: 'auth/authenticated',

      })
    },

    mounted() {
      console.log(Store.state.auth.authenticated)
    },


  }
</script>
