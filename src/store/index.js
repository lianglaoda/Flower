import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
// import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

//step3
// let defaultName='laoli'
// try {
//   if(localStorage.name){
//     defaultName=localStorage.name
//   }
// }catch (e){
//
// }


export default new Vuex.Store({
  // state:{
  //   // name:localStorage.name||'laoli' 改成下面
  //   //   name:defaultName           //step4
  // },

  // actions:{
  //   changeName(ctx,name){
  //     ctx.commit('changeName',name)
  //   }
  // },
  // mutations:{
  //   changeName(state,name){
  //     state.name=name
  //     try {
  //       localStorage.name=name   //step 1   //step5
  //     }catch (e){
  //
  //     }
  //
  //   }
  // }
  state:state,
  // actions:actions,
  mutations:mutations,
  getters:{
    doubleName(state){
      return state.name+" "+state.name
    }
  }



})

