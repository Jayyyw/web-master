<template>
  <div id="app">
<!--    <button id='homeButton' @click="homeClick">首页</button>-->
<!--    <button id='managementButton' @click="managementClick">工作区</button>-->
<!--    <router-link to="/" tag="button">index</router-link>-->
<!--    <router-link to="/home" tag="button">home</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick() {
      this.$router.push('/home');
    },
    managementClick() {
      this.$router.push('/management');
    }
  }
}
</script>

<style>

</style>
