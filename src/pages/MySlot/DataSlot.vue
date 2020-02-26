<template>
  <div>

    <slot :datalist="datalist">
      {{datalist.text}}
    </slot>

  </div>



</template>

<script>
  import MyChild from './MyChild'
  export default {
    name:'MyParent',
    data(){
      return {
        datalist:{
          text:'来自插槽的数据',
          des:'来自插槽的自述'
        }
      }
    },
    components:{
      MyChild
    }
  }

</script>

<style lang="stylus" scoped>

</style>
