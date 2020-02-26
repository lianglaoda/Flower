<template>
  <div>
    <div>只是没有如果</div>
    <button @click="togglebox">展开</button>
    <transition name="mybox">
      <div class="box" v-show="boxshow"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'MyAnimate',
    data() {
      return {
        boxshow: false
      }
    },
    methods: {

      togglebox: function () {
        this.boxshow = !this.boxshow;
      }
    }
  }
</script>

<style scoped>
  .box {height: 2rem;background-color:#fefefe;overflow: hidden; }
  .mybox-leave-active,.mybox-enter-active {transition:all 1s ease;}
  .mybox-leave-active, .mybox-enter {height: 0px !important;}
  .mybox-leave, .mybox-enter-active {height: 2rem;}
</style>
