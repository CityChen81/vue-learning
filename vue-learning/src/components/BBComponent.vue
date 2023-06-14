<template>
  <h3>BBcomponent</h3>
  <p>{{ myEvent('子组件数据') }}</p>
</template>

<script>
export default {
  name: "BBComponent",
  props: {
    myEvent: Function
  }
}
</script>

<style scoped>

</style>