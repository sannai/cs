<template>
  <div id="app">
    <transition>
      <!-- <router-view></router-view> -->
      <shopping></shopping>
    </transition>
  </div>
</template>

<script>
import shopping from './pages/shopping/shopping'
export default {
  name: "app",
  components: {
    shopping
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
