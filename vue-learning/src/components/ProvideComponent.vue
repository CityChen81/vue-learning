<template>
  <Inject1Component></Inject1Component>
</template>

<script>
import Inject1Component from "./Inject1Component.vue";
export default {
  name: "ProviderComponent",
  components: {Inject1Component},
  data() {
    return {
      msg: '祖先数据'
    }
  },
  provide() {
    return {
      msg: this.msg
    }
  }
}
</script>

<style scoped>

</style>