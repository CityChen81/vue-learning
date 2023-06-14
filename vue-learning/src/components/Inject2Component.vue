<template>
  <p>孙子组件获取祖先数据：{{inject2Msg}}-{{globalData}}</p>
</template>

<script>
export default {
  name: "Inject2Component",
  inject: ['msg','globalData'],
  data() {
    return {
      inject2Msg: this.msg
    }
  }
}
</script>

<style scoped>

</style>