<template>
  <h3 v-if="type === 'a'">a</h3>
  <h3 v-else-if="type === 'b'">b</h3>
  <h3 v-else-if="type === 'c'">c</h3>
  <h3 v-else>not abc</h3>

  <h3 v-show="show === true">show true</h3>
</template>

<script>
export default {
  name: "VIfDemoComponent",
  data() {
    return {
      type: 'a',
      show: true
    }
  }
}
</script>

<style scoped>

</style>