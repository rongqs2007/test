<template>
  <div class="StoreTest">
    count 数据 {{ appShowCount }}
    <button @click="handleChange">改变数据 -- 测试55666</button>
  </div>
</template>

<script>
export default {
  name: 'StoreTest',
  methods: {
    handleChange () {
      // this.$store.state.count 也是可以操作的，但是官方使用下面的方式
      this.$store.commit('increment', { count: 1 })
    }
  },
  computed: {
    appShowCount () {
      return this.$store.getters._getCount
    }
  }
}
</script>

<style scoped>

</style>
