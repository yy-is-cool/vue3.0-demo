<template>
    <h1>{{money}}</h1>
    <h1>{{salary}}</h1>
    <button @click="add">点击</button>
</template>

<script>
import { ref, reactive, toRefs, onMounted, watchEffect } from 'vue'
export default {
  name: 'Salary',
  setup () {
    const money = ref(22000)
    const state = reactive({
      salary: 28000
    })
    const add = () => {
      state.salary++
    }
    onMounted(() => {
      console.log('w唔唔唔')
    })
    watchEffect(() => {
      console.log(`现在的工资是${state.salary}`)
    })
    return {
      money,
      ...toRefs(state),
      add
    }
  }
}
</script>

<style></style>
