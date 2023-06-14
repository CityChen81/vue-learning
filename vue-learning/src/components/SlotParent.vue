<template>
  <h3>这是父组件</h3>
  <BaseSlot>
    <template v-slot:slot1="obj">
      <div>这是slot1 - {{obj.msg1}}</div>
    </template>
    <template #slot2="obj">
      <div>这是slot2 - {{obj.msg2}}</div>
    </template>
  </BaseSlot>
</template>

<script>
import BaseSlot from "./BaseSlot.vue";
export default {
  name: "SlotParent",
  components: {BaseSlot}
}
</script>

<style scoped>

</style>