<template>
  <div>

    <!--<slot name="header">{{obj.name}}</slot>-->
    <!--<slot name="content"></slot>-->
    <!--<slot name="footer"></slot>-->
    <!--<slot name="header" v-bind:obj="obj">{{obj.name}}</slot>-->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'MyChild',
    data(){
      return{
        obj:{
          name:'zhangsan',
          age:12
        }
      }
    }
  }

</script>

<style lang="stylus" scoped>

</style>
