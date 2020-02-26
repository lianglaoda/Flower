<template>
  <div>
    <ul class="KnowledgeList"  ref="Items">
      <template v-for="item in ListData">
        <router-link to="" tag="li" class="KnowledgeItem">
          <div class="KnowledgeItemLeft">
            <div class="KnowledgeItemTitle">{{item.title}}</div>
            <div class="KnowledgeItemDes">{{item.des}}</div>
          </div>
          <div class="KnowledgeItemRight">
            <img :src="item.imgUrl" alt="">
          </div>
        </router-link>
        <router-link to="" class="KnowledgeTitle">{{item.theme}}</router-link>
      </template>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'FkFlower',
    data(){
      return {
        list:[]
      }
    },
    props:{
      dataList:Array
    },
    computed:{
      ListData:function(){
        for(let i in this.dataList){
          if(this.dataList[i].themeEn==="FkFlower"){
            this.list.push(this.dataList[i])
          }
        }
        return this.list
      }
    },
    mounted(){

    }
  }
</script>

<style lang="stylus" scoped>

</style>
