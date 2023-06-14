<template>
  <div>子组件内容开始</div>
  <div>
    {{msg}}-{{msg2}}
    <ul>
      <li v-for="(name, index) in names" :key="index">{{name}}</li>
    </ul>
  </div>
  <div>子组件内容结束</div>
</template>

<script>
export default {
  name: "Child",
  props: {
    msg: {
      type: String,
      default: '初始msg',
      required: true
    },
    msg2: {
      type: String
    },
    names: {
      type: Array,
      default() {
        return ['Ann','Bob']
      }
    }
  }
}
</script>

<style scoped>

</style>