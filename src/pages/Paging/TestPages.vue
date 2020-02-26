<template>
  <div>
    <table>
      <tr>
        <th>title</th>
        <th>des</th>
        <th>number</th>
      </tr>
      <tr v-for="item of list">
        <td>{{item.title}}</td>
        <td>{{item.des}}</td>
        <td>{{item.number}}</td>
      </tr>
    </table>

    <div id="example">
    <button :disabled="nowPage==1" @click="prePage">上一页</button>
    <button @click="choosePage(tmp)" :class="{btnSelect:nowPage==tmp}" v-for="tmp in pageList1">
      {{tmp}}
    </button>
    <button :disabled="nowPage==5" @click="choosePage(tmp+1)">下一页</button>
  </div>
  </div>
</template>

<script>

  export default {
    name:'TestPages',
    data(){
      return {
      totalPages:0,
      pageList:[1,2,3,4,5],
      nowPage:1,
      list:[]
      }
    },
    methods:{
      choosePage:function(page){
        this.nowPage=page;
        this.getInfo(page)
      },
      prePage:function(){
        let preP=this.nowPage-1
        this.getInfo(preP)
        this.nowPage=this.nowPage-1;
      },
      nextPage:function(){
        let nextP=this.nowPage+1
        this.getInfo(nextP)
        this.nowPage=this.nowPage+1;
      },
      getInfo:function (currentPage) {
        this.axios.post('http://localhost:8080/api/list',{
          size:10,
          index:currentPage,
        }).then(res=>{
          this.list=res.data.data.rows
          this.totalPages=res.data.data.totalPages
          console.log(this.totalPages)
        }).catch(res=>{
          console.log('data error')
        })
      }
    },
    computed:{
      pageList1:function () {
        let pages=[]
        for(let i=0;i<this.totalPages;i++){
          pages.push(i+1);
        }
        return pages
      }
    },
    mounted(){
      this.getInfo(1)

    }

  }

</script>

<style lang="stylus" scoped>
.btnSelect
  color:red

</style>
