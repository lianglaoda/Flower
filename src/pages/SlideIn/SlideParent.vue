<template>
  <div>
      <slide-button @Click="MenuShow"></slide-button>
    <transition name="bounce">
      <slide-content v-show="isShow"></slide-content>
    </transition>
  </div>
</template>

<script>
  import SlideButton from './SlideButton'
  import SlideContent from './SlideContent'
  export default {
    name:'SlideParent',
    components:{
      SlideButton,
      SlideContent
    },
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      MenuShow(){
        this.isShow=!this.isShow
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bounce-enter-active
    animation:bounce-in 2s
  .bounce-leave-active
    animation:bounce-in 1s reverse
  @keyframes bounce-in
    0%
      transform :translateX(-100%)
      opacity:0
    100%
      transform :translateX(0)
      opacity:1
</style>
