<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">

          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Главная</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/register" active-class="active">
            <a class="nav-link" >Регистрация</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
