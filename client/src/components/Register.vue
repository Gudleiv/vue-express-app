<template>
  <div id="register">
  <v-layout column>
    <v-flex xs6>
      <h2>Регистрация</h2>
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Пароль"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Регистрация
        </v-btn>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = null
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (e) {
        this.error = e.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error{
    color: red;
  }

  #register {
    width: 500px;
    margin: 24px auto;
    border: 1px solid #ccc;
    padding: 16px;
  }

</style>
