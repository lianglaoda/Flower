<template>
  <div>
      <div @click="handleClick">点击</div>



  </div>
</template>

<script>

  export default {
    name:'ChildOne',
    methods:{
      handleClick(){
        this.bus.$emit('handleOne','来自child-one的慰问')
        console.log('ass')
      }
    }

  }

</script>

<style lang="stylus" scoped>

</style>
