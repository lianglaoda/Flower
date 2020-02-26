let defaultName='武汉加油'
try {
  if(localStorage.name){
    defaultName=localStorage.name
  }
}catch (e){

}
export default {
  name:defaultName           //step4
}
