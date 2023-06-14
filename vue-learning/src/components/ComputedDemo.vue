<template>
  <h3>计算属性</h3>
  <p>是否有出版的书籍：{{ownedBooks}}</p>
</template>

<script>
export default {
  name: "ComputedDemo",
  data() {
    return {
      author: {
        name: 'Doe',
        books: ['Vue2','Vue3','Vue4']
      }
    }
  },
  computed: {
    ownedBooks() {
      return this.author.books.length > 0 ? 'yes' : 'no'
    }
  }
}
</script>

<style scoped>

</style>