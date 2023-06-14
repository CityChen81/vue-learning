<template>
  <BComponent @transferEvent="getData"></BComponent>
  {{msg}}
</template>

<script>
import BComponent from "./BComponent.vue";
export default {
  name: "AComponent",
  components: {BComponent},
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