<template>
  <p>模板引用</p>
  <p ref="xxx">初始p标签</p>
  <button @click="getPMsg">获取p标签内容</button>
</template>

<script>
export default {
  name: "RefDemo",
  methods: {
    getPMsg() {
      console.log(this.$refs.xxx.innerText)
    }
  }
}
</script>

<style scoped>

</style>