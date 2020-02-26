<template>
  <div class="container">
    <ul class="ulWrapper">
      <router-link tag="li" to="">养花知识</router-link>
      <router-link tag="li" to="">多肉养护</router-link>
      <router-link tag="li" to="">花卉诊疗</router-link>
      <router-link tag="li" to="">百花图谱</router-link>
      <router-link tag="li" to="">花卉大全</router-link>
      <router-link tag="li" to="">多肉植物</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'IndexNav'
  }
</script>

<style lang="stylus" scoped>
  .container
    background:#fff
    width:90%
    padding:.2rem 5%
  .ulWrapper
    width:100%
    display :flex
    flex-direction row
    justify-content :space-between
    flex-wrap :wrap
  li
    margin:.2rem .2rem
    border-right:2px solid #eee
    width:22%
    color:#777
    font-size:.3rem
    line-height:.5rem
  ul li:nth-child(3n+3)
    border-right:none
</style>
