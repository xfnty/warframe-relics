<template>
  <div id="app">
    <RelicFinder/>
  </div>
</template>

<script>
import RelicFinder from './components/RelicFinder.vue'

export default {
  name: 'App',
  components: {
    RelicFinder
  }
}
</script>

<style lang="scss">
body {
  background-color: #222;
  padding: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
