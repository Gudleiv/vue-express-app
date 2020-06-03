<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Главная</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <router-link tag="li" class="nav-item" to="/login" active-class="active" v-if="!$store.state.isUserLoggedIn">
            <a class="nav-link" >Вход</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/signup" active-class="active" v-if="!$store.state.isUserLoggedIn">
            <a class="nav-link" >Регистрация</a>
          </router-link>
          <li class="nav-item c-pointer" @click="logout" v-if="$store.state.isUserLoggedIn"><a class="nav-link" >Выход</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'root'})
      location.reload()
    }
  }
}
</script>

<style scoped>
.c-pointer {
  cursor: pointer;
}
</style>
