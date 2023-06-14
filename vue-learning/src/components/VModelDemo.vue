<template>
  <h3>表单输入绑定</h3>
  <p>message is: {{ msg }}</p>
  <input v-model="msg" />
</template>

<script>
export default {
  name: "VModelDemo",
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>

</style>