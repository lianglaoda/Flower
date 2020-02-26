<template>
  <div class="swiperContent">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperData" :key="index">
        <img class="swiperImg" :src="item.imgUrl" :alt="item.title">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
  export default {
    name:'IndexSwiper',
    data(){
      return {
        swiperOption: {
          obsever:true, /*当li节点被修改的时候自动更新Swiper*/
          observerParents:true, /*当容器cotainer宽度改变时*/
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        swiperData:[
          {
            imgUrl:'https://www.huabaike.com/uploads/allimg/sltimg/202001/5e24361151c17.jpg',
            title:'虎头茉莉扦插'
          },
          {
            imgUrl:'https://www.huabaike.com/uploads/allimg/sltimg/202001/5e24349da8bb7.jpg',
            title:'旱金莲播种要选好时间'
          },
          {
            imgUrl:'https://www.huabaike.com/uploads/allimg/sltimg/202001/5e24336c47130.jpg',
            title:'滴水观音可通过分株来实现繁殖'
          },
          {
            imgUrl:'https://www.huabaike.com/uploads/allimg/sltimg/202001/5e24342b5d790.jpg',
            title:'光棍树一般是在温暖的季节中扦插'
          }
        ]
      }
    }
  }

</script>

<style lang="stylus" scoped>
  @import "~styles/varible.styl"
  .swiperContent
    margin-top:$headerHeight
  .swiperContent>>>.swiper-pagination-bullet
        background:#cacaca
  .swiperContent>>>.swiper-pagination-bullet-active
        background:$bgColor
  .swiper-container
      width:100%
      height:0
      overflow:hidden
      padding-bottom:50%
</style>
