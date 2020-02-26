<template>
  <div>
    <!--最简单的插槽引用-->
        <my-child>
          <!--<template v-slot:default>-->
          <!--</template>-->
          <!--<template v-slot:header="attr">-->
              <!--引用子组件插槽中的数据{{attr.obj.name}}-->
          <!--</template>-->

          <div>我在这呢!</div>
          <!--插槽里的内容可以访问该组件（父级）中的 所有实例属性和方法-->
          <div>{{list.name}}</div>
        </my-child>

    <!--数据来自于插槽的组件,默认插槽（即不具名插槽）的写法1：-->
    <!--<data-slot v-slot:default="slotProps">         直接写在插槽上-->
    <data-slot v-slot="slotProps">  <!-- 直接写在插槽上的简写方式 -->
        {{slotProps.datalist.des}}
    </data-slot>

    <!--数据来自于插槽的组件,默认插槽（即不具名插槽）的写法2：-->
    <data-slot >
        <template v-slot:default="slotProps">
          {{slotProps.datalist.des}}
        </template>
    </data-slot>

    <name-slot>

    </name-slot>

  </div>

</template>

<script>
  import MyChild from './MyChild'
  import NameSlot from './NameSlot'
  import DataSlot from './DataSlot'
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
      MyChild,
      NameSlot,
      DataSlot
    }
  }

</script>

<style lang="stylus" scoped>

</style>
