<template>
    <div class="form">
      <form @submit.prevent class="login-form">
        <h2>Вход</h2>
        <input v-model="email" type="email" placeholder="Email"/>
        <input v-model="password" type="password" placeholder="Пароль"/>
        <div class="error" v-html="error" />
        <button @click="login">Войти</button>
        <p class="message">Не зарегистрированы?
          <router-link tag="a" class="nav-item" to="/signup">Создать аккаунт</router-link>
        </p>
      </form>
    </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.error = null
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({name: 'root'})
      } catch (e) {
        if (e) this.error = e.response.data.error
        else this.error = 'Server shutdown'
      }
    }
  }
}
</script>

<style scoped>
@import '../assets/css/loginForm.css';
</style>
