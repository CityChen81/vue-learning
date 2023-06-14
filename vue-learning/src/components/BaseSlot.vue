<template>
  <slot name="slot1" :msg1="msg1"></slot>
  <p>这是子组件</p>
  <slot name="slot2" :msg2="msg2"></slot>
</template>

<script>
export default {
  name: "BaseSlot",
  data() {
    return {
      msg1: '子组件数据1',
      msg2: '子组件数据2',
    }
  }
}
</script>

<style scoped>

</style>