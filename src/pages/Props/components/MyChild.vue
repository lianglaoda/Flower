<template>
  <div>
      <div>{{newName}}</div>
    <div>{{NewNumber}}</div>

  </div>
</template>

<script>
  export default {
    name:'MyChild',
    props:{
      name:String,
      number:Number
    },
    data(){
      return{
        newName:this.name
      }
    },
    computed:{
        NewNumber(){
          console.log('改变了一次')
          return this.number+1
        }
    },
    watch:{
      name:function (newval,oldval) {
        console.log(oldval+" "+newval)
        this.newName=newval
      }
    }
  }

</script>

<style lang="stylus" scoped>

</style>
