<template>
  <div class="container">

    <div class="wrapper" ref="wrapper">
      <div>
        <div class="hotPlant">

        <div class="title">
          <span class="titleLeft">热门植物</span>
        </div>

        <ul class="Items">

          <router-link tag="li" to="" v-for="item in hotCities" :key="item.id" :ref="item.id"  class="Item" >
            <img src="https://www.huabaike.com/uploads/attachment/plt/201809/5b991998ed540.jpg" alt="">
            <p>{{item.name}}</p>
          </router-link>

        </ul>

      </div>
        <div class="listPlant">

          <div class="area" v-for="(item,key) in cities" :ref="key"
               @touchstart="handleTouchStart"
               @touchmove="handleTouchMove($event,key)"
               @touchend="handleTouchEnd"
          >
            <div class="letter">{{key}}</div>
            <ul class="ListItems">
              <router-link tag="li" to="" class="ListItem" v-for="list in item" :key="list.id">
                <img src="https://www.huabaike.com/uploads/attachment/plt/201809/5b991998ed540.jpg" alt="">
                <p>{{list.name}}</p>
              </router-link>
            </ul>
          </div>

      </div>
      </div>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'Index',
    props:{
      hotCities:Object,
      cities:Object,
      letter:String
    },
    data(){
      return {
        touchStatus:false,
      }

    },

    methods:{
      handleTouchStart(){
        this.touchStatus=true
      },
      handleTouchMove(e,val){
        console.log(e,val)
        if(this.touchStatus) {
          const touchY = e.touches[0].clientY-43
          console.log('touchY:'+touchY)
          if (touchY === 0) {
          //给父组件传递对应字母
          // this.$emit('receiveArea', val)
           this.bus.$emit('receiveArea',val)
        }

        }
      },
      handleTouchEnd(){
        this.touchStatus=false
      }
    },
    watch:{
      letter(){
        if(this.letter){
          /*
          1.
          const element = this.$refs[this.letter]
          console.log("eul:"+element)   // [div.area] 展开： 0:div.area length:1 _proto_:Arrray(0)
         2.
         const element = this.$refs.A
          console.log("eul:"+element)   // [div.area] 展开： 0:div.area length:1 _proto_:Arrray(0)
         */
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper)

    },
    updated(){
      this.startY=this.$refs['A'][0].offsetTop
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varible.styl"
    .wrapper
      overflow:hidden
      position:absolute
      top:$lineHeight
      right:0
      bottom:0
      left:0
    .hotPlant
      padding-top:.5rem
      margin-top:.2rem
      background:#ffffff
      padding-right:.3rem
      .Items
        display :flex
        flex-direction :row
        flex-wrap :wrap
        justify-content :flex-start
        width: 100%
        .Item
          width: 15%
          margin: 4% 0% 4% 4%
          text-align :center
          .Item
          img
              margin-bottom:.1rem
              width: 1rem
              height: 1rem
              border-radius:.1rem
    .letter
      padding:.2rem
    .ListItems
      background:#ffffff
      display :flex
      flex-direction :row
      flex-wrap :wrap
      justify-content :flex-start
      width: 100%
      .ListItem
        width: 20%
        margin: 4% 0% 4% 4%
        text-align :center
        .ListItem
        img
          margin-bottom:.1rem
          width: 1rem
          height: 1rem
          border-radius:.1rem


</style>
