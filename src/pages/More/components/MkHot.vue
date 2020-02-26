<template>
  <div class="container">

        <div class="title">
          <span class="titleLeft">热门植物</span>
          <span class="more">更多</span>
        </div>

        <ul class="Items">

          <router-link tag="li" to="" class="Item">
            <img src="https://www.huabaike.com/uploads/attachment/plt/201809/5b991998ed540.jpg" alt="">
            <p>绿萝</p>
          </router-link>

          <router-link tag="li" to="" class="Item">
            <img src="https://www.huabaike.com/uploads/attachment/plt/201809/5b991998ed540.jpg" alt="">
            <p>君子兰</p>
          </router-link>

          <router-link tag="li" to="" class="Item">
            <img src="https://www.huabaike.com/uploads/attachment/plt/201809/5b991998ed540.jpg" alt="">
            <p>兰花</p>
          </router-link>

          <router-link tag="li" to="" class="Item">
            <img src="https://www.huabaike.com/uploads/attachment/plt/201809/5b991998ed540.jpg" alt="">
            <p>绿萝</p>
          </router-link>

          <router-link tag="li" to="" class="Item">
            <img src="https://www.huabaike.com/uploads/attachment/plt/201809/5b991998ed540.jpg" alt="">
            <p>君子兰</p>
          </router-link>

          <router-link tag="li" to="" class="Item">
            <img src="https://www.huabaike.com/uploads/attachment/plt/201809/5b991998ed540.jpg" alt="">
            <p>兰花</p>
          </router-link>

        </ul>


  </div>
</template>

<script>
  export default {
    name:'MkHot'
  }

</script>

<style lang="stylus" scoped>
  @import "~styles/varible.styl"
  .container
    margin-top:$headerHeight
    background:#ffffff
    width: 96%
    padding:5% 2%
    .Items
      display :flex
      flex-direction :row
      justify-content :flex-start
      flex-wrap :wrap
      text-align :center
    .Item
      width:32%
      height:2rem
      margin-left:1%
      padding:.3rem 0
      .Item
      img
          width:100%
          height:100%
          margin-bottom:.1rem
</style>
