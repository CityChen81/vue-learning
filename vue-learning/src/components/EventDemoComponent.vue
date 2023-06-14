<template>
  <h3>事件传参</h3>
  <button @click="eventHandler">传递event</button>
  <button @click="paramAndEventHandler('自定义参数', $event)">传递自定义参数和event</button>
</template>

<script>
export default {
  name: "EventDemoComponent",
  methods: {
    eventHandler(e) {
      console.log(e)
    },
    paramAndEventHandler(param, e) {
      console.log(param)
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>