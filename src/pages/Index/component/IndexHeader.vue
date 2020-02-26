<template>
    <div class="header">
      <div class="headerLogo">花百科</div>
      <div class="headerInput">
        <span class="iconfont searchIcon">&#xe61d;</span>
        搜植物名称，找养护知识
      </div>
      <div class="headerMore">
        <span class="iconfont moreIcon">&#xe6d1;</span>
      </div>
    </div>
</template>

<script>
  export default {
    name:'IndexHeader',
    data(){
      return {
        keyword:''
      }
    }
  }

</script>

<style lang="stylus" scoped>
 .header
    position :fixed
    top:0
    left:0
    z-index:1000
    width:100%
    height:.86rem
    line-height:.86rem
    display :flex
    flex-direction row
    justify-content :space-between
    text-align :center
    font-size:.3rem
    background:#55c658
    .headerLogo
      width:18%
      color: #ffffff
      font-size:.4rem
    .headerInput
      margin:.1rem .2rem
      flex:1
      height: .64rem
      line-height:.64rem
      background:#ffffff
      padding-left:.2rem
      border-radius:.5rem
      text-align:left
      color:#AAAAAA
      .searchIcon
       margin-left: -.04rem
    .headerMore
      width:10%
      text-align:center
      .moreIcon
        color:#fff
</style>
