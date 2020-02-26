<template>
  <div>
    <input type="checkbox" v-model="isCheckAll" @click="checkAll">全选
    <div class="checkboxes">
      <div v-for="item in fruits">
        <input type="checkbox" v-model="checkGroup" :value="item.value" @click="checkOne">{{item.value}}
      </div>

    </div>

    <div>
      {{checkGroup}}
    </div>

    <child-one></child-one>

  </div>
</template>


<script>
  import ChildOne from "../MyBus/ChildOne";

  export default {
    components: {ChildOne},
    name:'CheckAll',
    data () {
      return {
        isCheckAll:false,
        checkGroup:[],
        fruits:[{
          id:'1',
          value:'苹果'
        },{
          id:'2',
          value:'荔枝'
        },{
          id:'3',
          value:'香蕉'
        },{
          id:'4',
          value:'火龙果'
        }],

      }
    },
    methods:{
      //全选，当用户点击全选按钮时，把全选状态的数据都赋值给checkGroup
      checkAll(){
        // this.checkGroup=this.fruits
        const res=[]
        const fruitsObj=this.fruits
        for(let i of fruitsObj){
          console.log(i.value)
          res.push(i.value)
        }
        this.checkGroup=res
      },

      checkOne(){
        //当用户取消其中一个单选时，此时全选框的状态就是取消状态
        if(this.checkGroup.length!==this.fruits.length-1){
          this.isCheckAll=false
        }else{
          this.isCheckAll=true
        }
        console.log(this.checkGroup.length)
      }

    },
    watch:{
      isCheckAll(){
        console.log(`this.checkGroup:${this.checkGroup.length}`)
        console.log(`this.fruits.length-1:${this.fruits.length-1}`)

        // return this.isCheckAll=this.checkGroup.length!==this.fruits.length-1?true:false

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
  .checkboxes
    margin-top:.4rem
</style>
