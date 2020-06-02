<template>
  <div id="app">
      <page-header />
      <main>
          <router-view/>
      </main>
  </div>
</template>

<script>

import PageHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
}
</style>
