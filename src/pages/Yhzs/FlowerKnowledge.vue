<template>
  <div class="container">
    <index-header></index-header>
    <ul class="NavList">
      <router-link tag="li" to="/FkAll" :class="['NavItem',isActive0]">全部分类</router-link>
      <router-link tag="li" to="/FkFamily" :class="['NavItem',isActive1]">家庭养花</router-link>
      <router-link tag="li" to="/FkFlower" :class="['NavItem',isActive2]">花培水卉</router-link>
      <router-link tag="li" to="/FkHealth" :class="['NavItem',isActive3]">花与健康</router-link>
      <router-link tag="li" to="/FkMake" :class="['NavItem',isActive4]">盆景制作</router-link>
      <router-link tag="li" to="/FkSkill" :class="['NavItem',isActive5]">养花技巧</router-link>
      <router-link tag="li" to="/FkVegetable" :class="['NavItem',isActive6]">阳台种菜</router-link>
    </ul>
    <router-view :dataList="dataList"/>
    <div id="example">
      <button :disabled="nowPage==1" @click="prePage()">上一页</button>
      <button @click="choosePage(tmp)" :class="{btnSelect:nowPage==tmp}" v-for="tmp in totalPages">
        {{tmp}}
      </button>
      <button :disabled="nowPage==totalPages" @click="nextPage()">下一页</button>
    </div>

  </div>

</template>

<script>
  export default {
    name:'FlowerKnowledge',
    data(){
      return {
        totalPages:0,
        nowPage:1,
        dataList:[]
      }
    },
    methods:{
      choosePage:function(page){
        this.nowPage=page
        this.getInfo(page)
      },
      prePage:function(){
        let preP=this.nowPage-1
        this.getInfo(preP)
        this.nowPage=this.nowPage-1
      },
      nextPage:function(){
        let nextP=this.nowPage+1
        this.getInfo(nextP)
        this.nowPage=this.nowPage+1
      },
      getInfo:function (currentPage) {
        this.axios.post('http://localhost:8080/api/list',{
          size:10,
          index:currentPage,
        }).then(res=> {
           for(let i=0,len=res.data.data.rows.length;i<len;i++){
               this.dataList.push(res.data.data.rows[i])
           }
          this.totalPages=res.data.data.totalPages
        }).catch(res=>{
           console.log('data error')
        })
      },
      // pages:function () {
      //   let list=[]
      //   console.log()
      //   for(let i=0;i<this.totalPages;i++){
      //     // console.log("length:"+this.dataList.length)
      //     list.push(i + 1);
      //   }
      //   // console.log("pages"+list)
      //   // console.log("aaaa")
      //   this.pageList=list
      //
      // }
    },
    computed:{
      isActive0:function(){
        return this.$route.meta.index===0?'active':''
      },
      isActive1:function(){
        return this.$route.meta.index===1?'active':''
      },
      isActive2:function(){
        return this.$route.meta.index===2?'active':''
      },
      isActive3:function(){
        return this.$route.meta.index===3?'active':''
      },
      isActive4:function(){
        return this.$route.meta.index===4?'active':''
      },
      isActive5:function(){
        return this.$route.meta.index===5?'active':''
      },
      isActive6:function(){
        return this.$route.meta.index===6?'active':''
      },

    },
    mounted(){
      this.getInfo(1)
      // this.pages()
    }
  }

</script>

<style lang="stylus" scoped>
  @import "~styles/varible.styl"

  .container
    margin-top: $lineHeight
    background:#ffffff
  .NavList
    display :flex
    flex-direction :row
    flex-wrap :wrap
    justify-content :flex-start
    text-align :center
    .NavItem
      width: 18%
      border-right:1px solid #eaeaea
      padding:1%
      margin:2%
    .NavItem:nth-child(4n+4)
      border-right:none
    .active
      background:$bgColor
      color:#ffffff
      border-radius:.5rem
  .container>>>.btnSelect
      color:red
</style>
