import IndexHeader from '@/common/components/IndexHeader' // ComponentA

export default {
  install: function(Vue) {
    // 注册并获取组件，然后在main.js中引用，在Vue.use()就可以了
    Vue.component('IndexHeader', IndexHeader)
  },
}
