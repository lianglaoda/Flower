<template>
  <div>
        <my-child>
          <template v-slot:header>
            <h1>{{header}}</h1>
          </template>

          <template v-slot:content>
            <div>{{content}}</div>
          </template>

          <template v-slot:footer>
            <small>{{footer}}</small>
          </template>

          <h1>I am {{header}}</h1>
          <h2>I am h2</h2>

          <template>
            <h2>我是默认插槽</h2>
          </template>

        </my-child>


    <div>{{list.name}}</div>

  </div>



</template>

<script>
  import MyChild from './MyChild'
  export default {
    name:'MyParent',
    data(){
      return {
        list:{
          name:'laoliang'
        },
        header:'header',
        content:'content',
        footer:'footer1'
      }
    },
    components:{
      MyChild
    }
  }

</script>

<style lang="stylus" scoped>

</style>
