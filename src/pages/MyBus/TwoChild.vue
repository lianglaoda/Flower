<template>
  <div>
    <child-one></child-one>
    <child-two></child-two>
  </div>
</template>

<script>

  import ChildOne from './ChildOne'
  import ChildTwo from './ChildTwo'
  export default {
    name:'TwoChild',
    components:{
      ChildOne,
      ChildTwo
    }
  }

</script>

<style lang="stylus" scoped>

</style>
