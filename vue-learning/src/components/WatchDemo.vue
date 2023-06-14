<template>
  <h3>侦听器</h3>
  <p>{{msg}}</p>
  <button @click="this.msg = 'World'">修改</button>
</template>

<script>
export default {
  name: "WatchDemo",
  data() {
    return {
      msg: 'Hello'
    }
  },
  watch: {
    msg(newVal, oldVal) {
      console.log('初始值是'+oldVal+',新值是'+newVal)
    }
  }
}
</script>

<style scoped>

</style>