<template>
  <div>
    <index-header></index-header>
    <mk-hot></mk-hot>
    <mk-category></mk-category>
  </div>
</template>

<script>
  import MkHot from './components/MkHot'
  import MkCategory from './components/MkCategory'
  export default {
    name:'MoreList',
    components:{
      MkHot,
      MkCategory
    }
  }

</script>

<style lang="stylus" scoped>

</style>
