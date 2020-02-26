<template>
  <div class="container">

    <ul class="Items">
      <li :class="['Item',currentLetter===item?'active':'']"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @click="handleLetter(item)"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
      >
        {{item}}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name:'MyLetters',
    props:{
      cities:Object,
      letter:String,
      letter2:String
    },
    data(){
      return {
        currentLetter:'',
        touchStatus:false,
        startY:0
      }
    },
    updated(){
      //当页面把真实数据重新渲染时执行的钩子
      this.startY=this.$refs['A'][0].offsetTop
    },
    methods:{
      handleLetter(val){
        this.$emit('receiveLetter',val)
        this.currentLetter=val
      },
      handleTouchStart(){
        this.touchStatus=true
      },
      handleTouchMove(e){
        if(this.touchStatus){
          //'A'字母距离它最近的父元素的距离，即A字母距离导航栏下沿的距离
          // const startY=this.$refs['A'][0].offsetTop
          /*当前手指触摸到的字母 到导航栏下沿的距离,其中:
              e.touches[0]:手指事件
              e.touches[0].clientY 手指当前触摸位置距离页面顶部距离
              43:绿色导航栏的高度
              touchY:手指当前位置距离导航栏下沿的距离
          */
          const touchY=e.touches[0].clientY-43
          /*touchY-startY:手指当前触摸地距离A字母的距离
            14:每个容纳字母的 li标签的高度
           (touchY-startY)/14:得到当前手指触摸的字母 是 letters数组中的第几个
          */
          const index=Math.floor((touchY-this.startY)/14)
          //给父组件传递对应字母
          this.$emit('receiveLetter',this.letters[index])
          this.currentLetter=this.letters[index]
        }
      },
      handleTouchEnd(){
        this.touchStatus=false
      }

    },
    computed:{
      letters(){
        const letters=[]
        for(let i in this.cities){
          letters.push(i)
        }
        return letters
      }
         },
    mounted(){
      // console.log("b:"+this.letter2)
      this.bus.$on('receiveArea',(val)=>{
        this.currentLetter=val
      })
    }
  }

</script>

<style lang="stylus" scoped>
  .Items
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: .86rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
  .active
    color:#55c658
</style>
