<template>
  <div>
    <div class="header">
      <div class="headerLogo">花百科</div>
      <div class="headerInput">
        <span class="iconfont searchIcon">&#xe61d;</span>
        <input class="searchInput" v-model="keyword" placeholder="搜植物名称，找养护知识">
      </div>
      <div class="headerMore">
        <span class="iconfont moreIcon">&#xe6d1;</span>
      </div>
    </div>

    <ul class="searchResult" v-show="keyword">

      <li v-for="item in list">{{item}}</li>
      <li v-show="isShow">暂时没有数据</li>

    </ul>
  </div>
</template>

<script>
  export default {
    name:'IndexHeader',
    props:{
      cities:Object
    },
    data(){
      return {
        show:false,
        keyword:'',
        list:[],
        timer:null
      }
    },
    watch:{
      keyword(){
        if(this.timer){
          clearTimeout(this.timer)
        }

  this.timer=setTimeout(()=>{
    const searchResult=[]
    for(let i in this.cities){
      // console.log(this.cities[i])
      for(let j in this.cities[i]){
        // console.log(this.cities[i][j])
        if(this.cities[i][j].name.indexOf(this.keyword)>-1){
          searchResult.push(this.cities[i][j].name)
        }
      }

    }
    this.list=searchResult
  },100)

      }
    },
    computed:{
      isShow(){
        return !this.list.length
      }
    }
  }

</script>

<style lang="stylus" scoped>
  @import "~styles/varible.styl"
 .header
    position :fixed
    top:0
    left:0
    width:100%
    height:.86rem
    line-height:.86rem
    z-index:1000
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
      width:75%
      background:#ffffff
      border-radius:.5rem
      display :flex
      flex-direction :row
      justify-content :flex-start
      .searchIcon
        width: 10%
        line-height:.68rem
        height:.68rem
      .searchInput
        height:.64rem
        line-height:.64rem
        display :inline-block
        color:#AAAAAA
        font-size:.3rem
        width:80%
        border-radius :.5rem
    .headerMore
      width:10%
      text-align:center
      .moreIcon
        color:#fff
  .searchResult
    z-index:1
    position:absolute
    overflow :hidden
    top:$lineHeight
    left:0
    right:0
    bottom:0
    background:red

</style>
