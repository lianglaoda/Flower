<template>
  <div class="page-bar">
    <ul>
      <li v-for="item in list" @click="handleData(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name:'MyTest',
    props:{
      list:Array
    },
    data () {
      return {
      }
    },
    methods: {
      handleData(name){
        // this.$store.dispatch('changeName2',name)
        this.changeName(name)
      },
      ...mapMutations(['changeName']),

    },


  }

</script>

<style lang="stylus" scoped>


</style>
