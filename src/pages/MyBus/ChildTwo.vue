<template>
  <div v-show="isShow">
      eeeee
  </div>
</template>

<script>
  export default {
    name:'ChildTwo',
    data(){
      return {
        isShow:true
      }
    },
    mounted(){

        this.bus.$on('handleOne',(val)=>{
          this.isShow=!this.isShow
          console.log(val)

      })
    }
  }

</script>

<style lang="stylus" scoped>

</style>
