<template>
  <div>
    <div>{{doubleName}}</div>
    <div>{{currentName}}</div>
    <div>{{name}}</div>
    <my-test :list="list"></my-test>

  </div>
</template>

<script>
import MyTest from './MyTest'
  import { mapState,mapGetters } from 'vuex'
  export default {
    name:'MyPages',
    components:{
      MyTest
    },
    data(){
      return {
        list:['laoliang6','laoliang2','laoliang3','laoliang4','laoliang5']
      }
    },
    methods:{

    },
    computed:{
      //mapState方式1
      ...mapState(['name']),
      //mapState方式2
      ...mapState({
        currentName:'name'
      }),
        ...mapGetters(['doubleName'])
    }


  }

</script>

<style lang="stylus" scoped>

</style>
