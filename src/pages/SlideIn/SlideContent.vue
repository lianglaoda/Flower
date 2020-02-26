<template>
  <div>
       <ul>
         <li v-for="item of list">{{item}}</li>
       </ul>
  </div>
</template>

<script>
  export default {
    name:'SlideContent',
    data(){
      return{
      list:['加油中国','加油武汉','武汉崛起','英雄城市']
      }
    }
  }

</script>

<style lang="stylus" scoped>

</style>
