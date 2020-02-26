<template>
  <div class="container">

    <div class="area" v-for="item of CategoryLists" :key="item">

      <div class="title">
        <span class="titleLeft">{{item.title}}</span>
        <router-link tag="span" class="more" to="/FkAll">更多</router-link>
      </div>

      <ul class="Items">
        <router-link tag="li" :to="list[1]" class="item border-right"  v-for="list of item.items"  :key="item.items">{{list[0]}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:'MkCategory',
    data(){
      return {
        CategoryLists:[
          {
            id:'001',
            title:'养花知识',
            title1:'FlowerKnowledge',
            items:[
              ['家庭养花','/FkFamily'],
              ['水培花卉','/FkFlower'],
              ['养花技巧','/FkSkill'],
              ['花与健康','/FkHealth'],
              ['盆景制作','/FkMake'],
              ['阳台种草','/FkVegetable']
            ]
          },
          {
            id:'002',
            title:'养花知识',
            title1:'FlowerKnowledge',
            items:[
              ['家庭养花','/FkFamily'],
              ['水培花卉','/FkFlower'],
              ['养花技巧','/FkSkill'],
              ['花与健康','/FkHealth'],
              ['盆景制作','/FkMake'],
              ['阳台种草','/FkVegetable']
            ]
          },
          {
            id:'003',
            title:'养花知识',
            title1:'FlowerKnowledge',
            items:[
              ['家庭养花','/FkFamily'],
              ['水培花卉','/FkFlower'],
              ['养花技巧','/FkSkill'],
              ['花与健康','/FkHealth'],
              ['盆景制作','/FkMake'],
              ['阳台种草','/FkVegetable']
            ]
          },
          {
            id:'004',
            title:'养花知识',
            title1:'FlowerKnowledge',
            items:[
              ['家庭养花','/FkFamily'],
              ['水培花卉','/FkFlower'],
              ['养花技巧','/FkSkill'],
              ['花与健康','/FkHealth'],
              ['盆景制作','/FkMake'],
              ['阳台种草','/FkVegetable']
            ]
          },
          {
            id:'005',
            title:'养花知识',
            title1:'FlowerKnowledge',
            items:[
              ['家庭养花','/FkFamily'],
              ['水培花卉','/FkFlower'],
              ['养花技巧','/FkSkill'],
              ['花与健康','/FkHealth'],
              ['盆景制作','/FkMake'],
              ['阳台种草','/FkVegetable']
            ]
          },
          {
            id:'006',
            title:'养花知识',
            title1:'FlowerKnowledge',
            items:[
              ['家庭养花','/FkFamily'],
              ['水培花卉','/FkFlower'],
              ['养花技巧','/FkSkill'],
              ['花与健康','/FkHealth'],
              ['盆景制作','/FkMake'],
              ['阳台种草','/FkVegetable']
            ]
          },
          {
            id:'007',
            title:'养花知识',
            title1:'FlowerKnowledge',
            items:[
              ['家庭养花','/FkFamily'],
              ['水培花卉','/FkFlower'],
              ['养花技巧','/FkSkill'],
              ['花与健康','/FkHealth'],
              ['盆景制作','/FkMake'],
              ['阳台种草','/FkVegetable']
            ]
          }

         ],

      }
    }
  }

</script>

<style lang="stylus" scoped>
  .area
    background:#ffffff
    margin-top:.2rem
    padding:2%
    .Items
      width: 100%
      display :flex
      flex-direction :row
      flex-wrap :wrap
      justify-content :flex-start
      .item
        width:20%
        margin:3% 0% 3% 4%

      .item:nth-child(4n+4)
        margin-right:4%


</style>
