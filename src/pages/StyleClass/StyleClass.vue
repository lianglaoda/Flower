<template>
  <div>
    <!--class 的样式设置-->
    <div :class="classObj">对象展示</div>
    <div :class="classArray">数组展示</div>
    <div :class="[activeClass1,activeClass2]"></div>
    <!--style的样式设置-->
    <div :style="styleObj">对象展示</div>
    <div :style="styleArray">数组展示</div>

  </div>
</template>

<script>
  export default {
    name:'StyleClass',
    data(){
        return {
          activeClass1:'a',
          activeClass2:'b',
          classObj:{
            a:true,
            b:true,
            c:false
          },
          classArray:['a','b'],
          styleObj:{
            fontSize:'30px',
            background:'red'
          },
          styleArray:[
            {fontSize:'45px'},
            {color:'blue'}
          ]
        }

    }
  }

</script>

<style lang="stylus" scoped>
  .a
   color:red
  .b
    background:#55c658
</style>
