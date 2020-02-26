<template>
  <div>
    <index-header :cities="cities"></index-header>
    <search-list :letter="letter" :cities="cities" @receiveArea="receiveArea"></search-list>
    <my-letters  :letter2="letter2" :cities="cities" @receiveLetter="receiveLetter"></my-letters>
  </div>
  </div>
</template>

<script>
  import SearchList from './components/SearchList'
  import MyLetters from './components/MyLetters'
  export default {
    name:'MySearch',
    components:{
      SearchList,
      MyLetters
    },
    data(){
      return {
        letter:'',
        letter2:'',
        hotCities:[{
          id: 56,
          spell: 'aba',
          name: '矮牵牛'
        }, {
          id: 57,
          spell: 'akesu',
          name: '爱之蔓'
        },{
          id: 56,
          spell: 'aba',
          name: '矮牵牛'
        }, {
          id: 57,
          spell: 'akesu',
          name: '爱之蔓'
        },{
          id: 56,
          spell: 'aba',
          name: '矮牵牛'
        }, {
          id: 57,
          spell: 'akesu',
          name: '爱之蔓'
        },{
          id: 56,
          spell: 'aba',
          name: '矮牵牛'
        }, {
          id: 57,
          spell: 'akesu',
          name: '爱之蔓'
        }],
        cities: {
          A: [{
            id: 56,
            spell: 'aba',
            name: '矮牵牛'
          }, {
            id: 57,
            spell: 'akesu',
            name: '爱之蔓'
          }],
          B: [{
            id: 1,
            spell: 'beijing',
            name: '百合'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          C: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          D: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          E: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          F: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          G: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          H: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          I: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          J: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          K: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          L: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          M: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          N: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          O: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          P: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          Q: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          R: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          S: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          T: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          U: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          V: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          W: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }],
          X: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          Y: [{
            id: 1,
            spell: 'beijing',
            name: '北京'
          }, {
            id: 66,
            spell: 'baicheng',
            name: '白城'
          }],
          Z: [{
            id: 56,
            spell: 'aba',
            name: '阿坝'
          }, {
            id: 57,
            spell: 'akesu',
            name: '阿克苏'
          }]
        }

      }
    },
    methods:{
      receiveLetter(val){
        this.letter=val
      },
      receiveArea(val){
        console.log("aaaaa: "+val)
        this.letter2=val
      }
    }
  }
</script>

<style lang=stylus scoped>

</style>
