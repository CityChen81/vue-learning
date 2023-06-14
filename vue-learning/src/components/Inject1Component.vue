<template>
  <Inject2Component></Inject2Component>
  <p>儿子组件获取祖先的数据:{{ inject1Msg }}</p>
</template>

<script>
import Inject2Component from "./Inject2Component.vue";
export default {
  name: "Inject1Component",
  components: {Inject2Component},
  inject: ['msg'],
  data() {
    return {
      inject1Msg: this.msg
    }
  }

}
</script>

<style scoped>

</style>