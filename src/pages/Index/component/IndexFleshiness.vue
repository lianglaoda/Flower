<template>
  <div class="Item">

    <div class="Wrapper">

      <div class="Title">
        <div class="TitleLeft">多肉植物</div>
        <div class="TitleMore">更多</div>
      </div>

      <ul class="FleshinessList">
        <router-link tag="li" class="FleshinessItem" to="">
          <img src="https://www.huabaike.com/uploads/allimg/sltimg/201602/56c54a72e0f4c.jpg" alt="">
          <p>玉树</p>
        </router-link>

        <router-link tag="li" class="FleshinessItem" to="">
          <img src="https://www.huabaike.com/uploads/allimg/sltimg/201602/56c54a72e0f4c.jpg" alt="">
          <p>玉树</p>
        </router-link>

        <router-link tag="li" class="FleshinessItem" to="">
          <img src="https://www.huabaike.com/uploads/allimg/sltimg/201602/56c54a72e0f4c.jpg" alt="">
          <p>玉树</p>
        </router-link>



      </ul>

      <ul class="FleshinessList">
        <router-link tag="li" class="FleshinessItem" to="">
          <img src="https://www.huabaike.com/uploads/allimg/sltimg/201602/56c54a72e0f4c.jpg" alt="">
          <p>玉树</p>
        </router-link>

        <router-link tag="li" class="FleshinessItem" to="">
          <img src="https://www.huabaike.com/uploads/allimg/sltimg/201602/56c54a72e0f4c.jpg" alt="">
          <p>玉树</p>
        </router-link>

        <router-link tag="li" class="FleshinessItem" to="">
          <img src="https://www.huabaike.com/uploads/allimg/sltimg/201602/56c54a72e0f4c.jpg" alt="">
          <p>玉树</p>
        </router-link>
      </ul>

      <ul class="FleshinessList">
        <router-link tag="li" class="FleshinessItem" to="">
          <img src="https://www.huabaike.com/uploads/allimg/sltimg/201602/56c54a72e0f4c.jpg" alt="">
          <p>玉树</p>
        </router-link>

        <router-link tag="li" class="FleshinessItem" to="">
          <img src="https://www.huabaike.com/uploads/allimg/sltimg/201602/56c54a72e0f4c.jpg" alt="">
          <p>玉树</p>
        </router-link>

        <router-link tag="li" class="FleshinessItem" to="">
          <img src="https://www.huabaike.com/uploads/allimg/sltimg/201602/56c54a72e0f4c.jpg" alt="">
          <p>玉树</p>
        </router-link>
      </ul>

    </div>

  </div>
</template>

<script>
  export default {
    name:'IndexFleshiness'
  }

</script>

<style lang="stylus" scoped>

  .Item
    width: 100%
    margin:.2rem 0
    background: #ffffff
  .Wrapper
    width: 96%
    padding:2%
    .Title
      display:flex
      flex-direction :row
      justify-content :space-between
      align-items :center
      border-bottom:1px soild #eaeaea
      .TitleLeft
       color:$titleColor
       font-size:$TitleText
    .FleshinessList
      width: 100%
      display :flex
      flex-direction :row
      justify-content :flex-start
      flex-wrap :wrap
      text-align :center
      border-bottom:1px solid #eaeaea
      margin-bottom:.2rem
      .FleshinessItem
        width:29%
        padding:2%
        margin-bottom:.1rem
        border-right:1px solid #eaeaea
      .FleshinessItem:nth-child(3n+3)
        border-right:none
      .FleshinessItem img
        margin-bottom:.1rem
        width:100%

</style>
