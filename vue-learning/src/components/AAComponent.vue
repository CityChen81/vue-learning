<template>
  <h3>AAcomponent</h3>
  <BBComponent :myEvent="getData"></BBComponent>
  <p>来自子组件的数据：{{msg}}</p>
</template>

<script>
import BBComponent from "./BBComponent.vue";
export default {
  name: "AAComponent",
  components: {BBComponent},
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    getData(data) {
      this.msg = data
    }
  }
}
</script>

<style scoped>

</style>