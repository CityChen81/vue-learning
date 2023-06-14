<template>
  <h3>父组件</h3>
  <Child msg="消息1" :msg2="msg2"></Child>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: {Child},
  data() {
    return {
      msg2: '消息2'
    }
  }
}
</script>

<style scoped>

</style>