<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" v-model="email" placeholder="Email">
    <input type="password" name="password" v-model="password" placeholder="Password">
    <button @click="register">Зарегистрироваться</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
