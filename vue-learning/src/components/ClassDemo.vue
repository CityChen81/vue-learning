<template>
  <h3>class绑定</h3>
  <h3>0. 内联样式</h3>
  <p :class="{'active': isActive, 'text-danger': hasError}">测试</p>
  <h3>1. 绑定对象</h3>
  <p :class="classObj">测试</p>
  <h3>2. 绑定数组</h3>
  <p :class="classArr">测试</p>
  <h3>3. 数组嵌套对象</h3>
  <p :class="['active', {'text-danger': hasError}]">测试</p>
</template>

<script>
export default {
  name: "ClassDemo",
  data() {
    return {
      isActive: true,
      hasError: true,
      classObj: {
        'active': true,
        'text-danger': true,
      },
      classArr: ['active', 'text-danger']
    }
  }
}
</script>

<style scoped>
 .active {
   font-size: 30px;
 }
 .text-danger {
   background-color: red;
 }
</style>