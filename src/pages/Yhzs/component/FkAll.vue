<template>
  <div>
    <ul class="KnowledgeList"  ref="Items">
      <template v-for="(item,index) in dataList">
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
    name:'FkAll',
    props:{
      dataList:Array,
      pageList:Array
    },
    data(){
      return {
        nowPage:1,
      }
    },
    methods:{

    },
    mounted(){

    }

  }

</script>

<style lang="stylus">

</style>
