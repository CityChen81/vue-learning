<template>
  <h3>事件处理</h3>
  <button v-on:click="addCount">加一</button>
  <button @click="count--">减一</button>
  count<p>{{count}}</p>
</template>

<script>
export default {
  name: "VOnDemoComponent",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count++
    }
  }
}
</script>

<style scoped>

</style>