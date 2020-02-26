export default {
  changeName(state,name){
    state.name=name
    try {
      localStorage.name=name   //step 1   //step5
    }catch (e){

    }

  }
}
