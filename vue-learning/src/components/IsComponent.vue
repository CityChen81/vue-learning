<template>
  <component :is="switchComponent"></component>
  <button @click="changeC">切换</button>
</template>

<script>
import ComponentA from "./ComponentA.vue";
import {defineAsyncComponent} from "vue";
// import ComponentB from "./ComponentB.vue";
const ComponentB = defineAsyncComponent(() => {
  import("./ComponentB.vue")
})
export default {
  name: "isComponent",
  components: {ComponentA,ComponentB},
  data() {
    return {
      switchComponent: 'ComponentA'
    }
  },
  methods:{
    changeC(){
      this.switchComponent=this.switchComponent==='ComponentA'?'ComponentB':'ComponentA'
    }
  }
}
</script>

<style scoped>

</style>