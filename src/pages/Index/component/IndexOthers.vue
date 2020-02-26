<template>
  <div>
   <slot v-for="item of List" :item="item"></slot>

  </div>
</template>

<script>
  export default {
    name:'IndexOthers',
    data(){
      return{
        List:[1,2,3,4],
      user:{
        lastName:'liang',
        firstName:'huimin'
      }
      }
    }
  }

</script>

<style lang="stylus" scoped>

</style>
