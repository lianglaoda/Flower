<template>
  <div>
    <index-header></index-header>
    <index-swiper></index-swiper>
    <index-nav></index-nav>
    <index-plant></index-plant>
    <index-knowledge></index-knowledge>
    <index-fleshiness></index-fleshiness>
    <index-others>
      <template v-slot="slotProps">
       <h1>{{slotProps.item}}</h1>
      </template>
    </index-others>
  </div>
</template>
<script>

  import IndexSwiper from './component/IndexSwiper'
  import IndexNav from './component/IndexNav'
  import IndexPlant from './component/IndexPlant'
  import IndexKnowledge from './component/IndexKnowledge'
  import IndexFleshiness from './component/IndexFleshiness'
  import IndexOthers from './component/IndexOthers'
  export default {
    name:'Index',
    components:{
      IndexOthers,
      IndexSwiper,
      IndexNav,
      IndexPlant,
      IndexKnowledge,
      IndexFleshiness
    }
  }

</script>

<style lang="stylus" scoped>

</style>
