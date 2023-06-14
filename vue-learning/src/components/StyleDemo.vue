<template>
  <h3>style绑定</h3>
  <p :style="styleObj">style绑定对象</p>
  <p :style="[styleObj, styleObj2]">style绑定数组</p>
</template>

<script>
export default {
  name: "StyleDemo",
  data() {
    return {
      styleObj: {
        color: 'red',
        fontWeight: 'bold'
      },
      styleObj2: {
        fontSize: '30px'
      }
    }
  }
}
</script>

<style scoped>

</style>