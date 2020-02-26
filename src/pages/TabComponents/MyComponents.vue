<template>
  <div>
    <div class="nav">
      <div @click="who='MyComponent1'">首页</div>
      <div @click="who='MyComponent2'">新闻</div>
      <div @click="who='MyComponent3'">攻略</div>
    </div>

    <div class="content">
        <component :is="who"></component>
    </div>

  </div>
</template>

<script>
  import MyComponent1 from './MyComponent1'
  import MyComponent2 from './MyComponent2'
  import MyComponent3 from './MyComponent3'
  export default {
    name:'MyComponents',
    components:{
      MyComponent1,
      MyComponent2,
      MyComponent3
    },
    data(){
      return {
        users:{
          name:'laoliang',
          id:'001',
          number:12
        },
        who:'MyComponent1'
      }
    },
    methods:{

    }
  }

</script>

<style lang="stylus" scoped>

</style>
