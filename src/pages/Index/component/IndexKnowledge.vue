<template>
  <div class="Item">

    <div class="TitleWrapper">
      <div class="Title">
        <div class="TitleLeft">养花知识</div>
        <div class="TitleMore">更多</div>
      </div>
    </div>

    <ul class="KnowledgeList">
      <template>
      <router-link to="" tag="li" class="KnowledgeItem">
          <div class="KnowledgeItemLeft">
            <div class="KnowledgeItemTitle">结香花怎么扦结香花怎么扦插，什么时候扦插</div>
            <div class="KnowledgeItemDes">
              先从结香花母株上剪下一段健康、
              长势良好的枝条，并...</div>
          </div>
          <div class="KnowledgeItemRight">
            <img src="https://www.huabaike.com/uploads/allimg/artimg/202001/20200120225554_85764.jpg" alt="">
          </div>
      </router-link>
      <router-link to="" class="KnowledgeTitle">养花技巧</router-link>
    </template>

      <template>
        <router-link to="" tag="li" class="KnowledgeItem">
          <div class="KnowledgeItemLeft">
            <div class="KnowledgeItemTitle">结香花怎么扦结香花怎么扦插，什么时候扦插</div>
            <div class="KnowledgeItemDes">
              先从结香花母株上剪下一段健康、
              长势良好的枝条，并...</div>
          </div>
          <div class="KnowledgeItemRight">
            <img src="https://www.huabaike.com/uploads/allimg/artimg/202001/20200120225554_85764.jpg" alt="">
          </div>
        </router-link>
        <router-link to="" class="KnowledgeTitle">养花技巧</router-link>
      </template>

      <template>
        <router-link to="" tag="li" class="KnowledgeItem">
          <div class="KnowledgeItemLeft">
            <div class="KnowledgeItemTitle">结香花怎么扦结香花怎么扦插，什么时候扦插</div>
            <div class="KnowledgeItemDes">
              先从结香花母株上剪下一段健康、
              长势良好的枝条，并...</div>
          </div>
          <div class="KnowledgeItemRight">
            <img src="https://www.huabaike.com/uploads/allimg/artimg/202001/20200120225554_85764.jpg" alt="">
          </div>
        </router-link>
        <router-link to="" class="KnowledgeTitle">养花技巧</router-link>
      </template>

      <template>
        <router-link to="" tag="li" class="KnowledgeItem">
          <div class="KnowledgeItemLeft">
            <div class="KnowledgeItemTitle">结香花怎么扦结香花怎么扦插，什么时候扦插</div>
            <div class="KnowledgeItemDes">
              先从结香花母株上剪下一段健康、
              长势良好的枝条，并...</div>
          </div>
          <div class="KnowledgeItemRight">
            <img src="https://www.huabaike.com/uploads/allimg/artimg/202001/20200120225554_85764.jpg" alt="">
          </div>
        </router-link>
        <router-link to="" class="KnowledgeTitle">养花技巧</router-link>
      </template>

      <template>
        <router-link to="" tag="li" class="KnowledgeItem">
          <div class="KnowledgeItemLeft">
            <div class="KnowledgeItemTitle">结香花怎么扦结香花怎么扦插，什么时候扦插</div>
            <div class="KnowledgeItemDes">
              先从结香花母株上剪下一段健康、
              长势良好的枝条，并...</div>
          </div>
          <div class="KnowledgeItemRight">
            <img src="https://www.huabaike.com/uploads/allimg/artimg/202001/20200120225554_85764.jpg" alt="">
          </div>
        </router-link>
        <router-link to="" class="KnowledgeTitle">养花技巧</router-link>
      </template>


    </ul>



  </div>

</template>

<script>
  export default {
    name:'IndexKnowledge'
  }

</script>

<style lang="stylus" scoped>
  @import "~styles/varible.styl"
  .Item>>>a
    color:$titleColor
  .Item
    margin:.2rem 0
    width: 100%
    background :#fff
    .TitleWrapper
      width: 100%
      margin-bottom:-.3rem
    .Title
      width: 96%
      padding:2%
      display :flex
      flex-direction :row
      justify-content:space-between
      align-items :center
      color:$titleColor
    .TitleLeft
      font-size:$TitleText
    .TitleRight
      font-size:$moreText
  .KnowledgeList
    width: 96%
    padding:2%
  .KnowledgeItem
    display :flex
    flex-direction :row
    justify-content :space-between
    padding-top:.3rem
    margin-top:.3rem
    border-top:1px solid #eaeaea
    .KnowledgeItemLeft
      width: 70%
      .KnowledgeItemTitle
        color:$titleColor
        font-size:$moreText
        line-height:.4rem
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      .KnowledgeItemDes
        color:$textColor
        font-size:$moreText
        line-height:.4rem
    .KnowledgeItemRight
      width:30%
    .KnowledgeItemRight img
        width:100%
        height:auto
</style>

