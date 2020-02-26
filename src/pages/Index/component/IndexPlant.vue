<template>
    <div class="Item">

      <div class="DailyTitleWrapper">
        <div class="DailyTitle">
          <div class="DailyTitleLeft">每日养花分享</div>
          <div class="DailyTitleMore">更多</div>
        </div>
      </div>

      <div class="ItemWrapper">

        <div class="DailyToday">
          <div class="DailyTodayDate">21<span class="normal">日</span></div>
          <div class="DailyTodayDes">定期给花浇“酸”水，不用换盆，土照样松软透气！</div>
        </div>

         <ul class="DailyList">

          <router-link to="" tag="li" class="DailyItem">
            <div class="DailyItemLeft">20日</div>
            <div class="DailyItemRight">别让这花长太高，小心变成韭菜</div>
          </router-link>

          <router-link to="" tag="li" class="DailyItem">
            <div class="DailyItemLeft">20日</div>
            <div class="DailyItemRight">别让这花长太高，小心变成韭菜</div>
          </router-link>

           <router-link to="" tag="li" class="DailyItem">
             <div class="DailyItemLeft">20日</div>
             <div class="DailyItemRight">别让这花长太高，小心变成韭菜</div>
           </router-link>

           <router-link to="" tag="li" class="DailyItem">
             <div class="DailyItemLeft">20日</div>
             <div class="DailyItemRight">别让这花长太高，别让这花长太高，别让这花长太高，别让这花长太高，小心变成韭菜</div>
           </router-link>

           <router-link to="" tag="li" class="DailyItem">
             <div class="DailyItemLeft">20日</div>
             <div class="DailyItemRight">别让这花长太高，小心变成韭菜</div>
           </router-link>

           <router-link to="" tag="li" class="DailyItem">
             <div class="DailyItemLeft">20日</div>
             <div class="DailyItemRight">别让这花长太高，小心变成韭菜</div>
           </router-link>

        </ul>

      </div>


    </div>

</template>

<script>
  export default {
    name:'IndexPlant'
  }

</script>

<style lang="stylus" scoped>
  @import "~styles/varible.styl"
  .Item
    margin:.2rem 0
    width: 100%
    background :#fff
    .DailyTitleWrapper
      width: 100%
      border-bottom:1px solid #eaeaea
      .DailyTitle
        display :flex
        flex-direction :row
        justify-content:space-between
        align-items :center
        color: $color
        width: 96%
        padding:2%
        .DailyTitleLeft
          font-size:.4rem
        .DailyTitleMore
          font-size:.3rem
    .ItemWrapper
       width:96%
       padding: 2%
      .DailyToday
        display :flex
        flex-direction :row
        justify-content :space-around
        border:1px solid #e3e3e3
        padding:.3rem
        margin-bottom:.3rem
        .DailyTodayDate
          font-size:.8rem
          color: $bgColor
          border-right:1px solid $bgColor
          width:45%
          .normal
            font-size:.5rem
        .DailyTodayDes
          line-height: .4rem
          font-size:.3rem
          padding-left:.5rem
          color:#999
      .DailyItem
        display :flex
        flex-direction :row
        justify-content :space-around
        text-align :center
        border-top:1px solid #eee
        line-height:$lineHeight
        color:$textColor
        font-size:.3rem
        .DailyItemLeft
          width:30%
        .DailyItemRight
          width:70%
          text-align :left
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;



</style>
