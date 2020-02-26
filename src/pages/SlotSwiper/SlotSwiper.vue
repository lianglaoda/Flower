<template>
  <div>
    <slot-child>
      <template v-slot:default="slotProps">
       <swiper-slide>
         <img :src="slotProps.item.imgUrl">
         <p style="text-align: center">{{slotProps.item.title}}</p>
       </swiper-slide>
      </template>
    </slot-child>
  </div>
</template>

<script>
  import SlotChild from './SlotChild'
  export default {
    name:'SlotSwiper',
    components:{
      SlotChild
    }
  }

</script>

<style lang="stylus" scoped>

</style>
