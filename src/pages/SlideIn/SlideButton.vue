<template>
  <div>
       <button @click="handleClick">点击</button>
  </div>
</template>

<script>
  export default {
    name:'SlideButton',
    methods:{
      handleClick(){
        this.$emit('Click')
      }
    }
  }

</script>

<style lang="stylus" scoped>

</style>
