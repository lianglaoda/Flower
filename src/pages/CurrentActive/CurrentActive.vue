<template>
  <div>
    <ul>
      <li v-for="(item,index) in list"
          :class="current===index?'active':''"
          @click="clickAcitve(index)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'CurrentActive',
    data(){
      return {
        list:[1,2,3,4,5],
        current:0
      }
    },
    methods:{
      clickAcitve(index){
        this.current=index
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .active
    color:red
</style>
