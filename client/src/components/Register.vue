<template>
    <div class="form">
      <form @submit.prevent class="register-form" autocomplete="off">
        <h2>Регистрация</h2>
        <input v-model="email" type="email" placeholder="Email"/>
        <input v-model="password" type="password" placeholder="Пароль"/>
        <input v-model="passwordConfirm" type="password" placeholder="Подтверждение пароля"/>
        <div class="error" v-html="error" />
        <button @click="register">Создать аккаунт</button>
        <p class="message">Уже зарегистрированы?
          <router-link tag="a" class="nav-item" to="/login">Войти</router-link>
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
      passwordConfirm: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = null
      try {
        const response = await AuthenticationService.register({
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
