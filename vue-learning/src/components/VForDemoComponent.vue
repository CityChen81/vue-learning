<template>
  <h3>列表渲染</h3>
  <ul>
    <li v-for="film in films">{{ film }}</li>
  </ul>
  <p v-for="(per, index) in result" :key="index">{{per.name}}-的能力是-{{per.ability}}</p>
  <p v-for="(value, key, index) of book">{{value}}-{{key}}-{{index}}</p>
</template>

<script>
export default {
  name: "VForDemoComponent",
  data() {
    return {
      films: ['钢铁侠', '变形金刚', '绿巨人'],
      result: [
        {
          id: 1,
          name: '猎鹰',
          ability: '激光'
        },
        {
          id: 2,
          name: '大黄蜂',
          ability: '变身'
        },
      ],
      book: {
        id: 1,
        name: '钢铁是怎样炼成的'
      }
    }
  }
}
</script>

<style scoped>

</style>