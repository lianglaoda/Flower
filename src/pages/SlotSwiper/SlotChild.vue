<template>
  <div>
    <swiper  :options="swiperOption">
      <!-- slides -->

    <slot v-for="item in swiperData" :item="item"></slot>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:'SlotChild',
    data() {
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
    },
  }

</script>

<style lang="stylus" scoped>

</style>
