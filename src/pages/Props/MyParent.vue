<template>
  <div>
    <my-child :list="list" :name="name" :number="number"></my-child>

    <button @click="changeName">改变name的值</button>
    <div>{{name}}_</div>
  </div>
</template>

<script>
  import MyChild from './components/MyChild'
  export default {
    name:'MyParent',
    components:{
      MyChild
    },
    data(){
      return{
        list:[1,2,3],
        name:'laoliang',
        number:12
      }
    },
    methods:{
      changeName(e){
        console.log(e.target.innerHTML)
        this.name='laoliangliang'
        this.number=23
      }
    }
  }

</script>

<style lang="stylus" scoped>

</style>
