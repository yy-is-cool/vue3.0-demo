<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Salary />
  <router-link to="/">home</router-link>
  &nbsp; &nbsp;
  <router-link to="/about">about</router-link>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Salary from './components/salary.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Salary
  }
}
</script>
