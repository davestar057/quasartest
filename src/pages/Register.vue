<template>
  <q-page class=" window-height window-width row justify-center items-center">
    <div class="column q-px-lg" style="width:500px">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Create Account</h5>
      </div>
      <div class="row text-center">
        <q-card bordered class="q-pa-lg shadow-1 login-card" style="width:100%">
          <q-card-section>
                <q-form class="q-gutter-md">
                  <q-input square clearable v-model="user.name" type="text" label="Your Name" :error-message="getError('name')" :error="getError('name')!==false">
                  </q-input>
                  <q-input square clearable v-model="user.email" type="email" label="Enter email" :error-message="getError('email')" :error="getError('email')!==false">
                  </q-input>
                  <q-input square clearable v-model="user.password" type="password" label="Create Password" :error-message="getError('password')" :error="getError('password')!==false">
                  </q-input>
                  <q-input square clearable v-model="user.password_confirmation" type="password" label="Confirm Password" :error-message="getError('password_confirmation')" :error="getError('password_confirmation')!==false">
                  </q-input>
                </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="light-blue-7" size="lg" class="full-width" label="Register" @click="RegisterNewUser"/>
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6 q-pt-lg"><router-link to="/">Already have an account? Click here to login</router-link></p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>




</template>

<script>
  import {mapActions} from 'vuex'

  export default {
  name: 'RegisterPage',
  data() {
    return {
      formErrors: [],
      user: {
        email: '',
        password: null,
        password_confirmation:null,
        name: ''
      }
    }
  },
  methods: {
    async RegisterNewUser() {
      // console.log(this.regDetails)
      let self = this
      try {
        await this.RegisterUser(this.user)
        self.$router.replace('/')

      } catch(e) {
        this.formErrors = e.response.data
      }
    },

    getError(nameOfField) {
      if (this.formErrors['errors'] && this.formErrors['errors'][nameOfField]) {
        return this.formErrors['errors'][nameOfField][0]
      }
      return false;
    },

    ...mapActions({
      RegisterUser: 'auth/RegisterUser',
    }),
  }
}
</script>
