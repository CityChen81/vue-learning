<template>
  <button @click="msg2Parent">传递数据</button>
</template>

<script>
export default {
  name: "BComponent",
  data() {
    return {
      childMsg: '子组件数据'
    }
  },
  methods: {
    msg2Parent() {
      this.$emit("transferEvent", this.childMsg);
    }
  }
}
</script>

<style scoped>

</style>