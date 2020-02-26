import Mock from 'mockjs' // 引入mockjs

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let dataList=[],totalPages

Mock.mock('http://localhost:8080/api/list', 'post', (params) => {
  let info = JSON.parse(params.body)
  for(let i=0;i<200;i++){
    let listObj={
      "title":Random.csentence(5,10),//随机生成一段中文文本
      "des":Random.csentence(16,25),
      "imgUrl":Random.image('200x120',Random.color(), 'Hello'),
      "themeEn":Mock.mock({
        "themeEn|1":['FkFamily', 'FkFlower','FkHealth','FkMake','FkSkill','FkVegetable']
      }).themeEn,
      //从指定字符串 数组 中 随机选一个
      "theme":Mock.mock({
        "theme|1":['家庭养花', '花培水卉','花与健康','盆景制作','养花技巧','阳台种菜'],
      }).theme
    }
    //由于数据的随机性，所以暂时需要进行如下判断（即主题跟主题英文简写要一致）
    if(listObj.theme==='家庭养花'&&listObj.themeEn==='FkFamily'
      ||listObj.theme==='花培水卉'&&listObj.themeEn==='FkFlower'
      ||listObj.theme==='花与健康'&&listObj.themeEn==='FkHealth'
      ||listObj.theme==='盆景制作'&&listObj.themeEn==='FkMake'
      ||listObj.theme==='养花技巧'&&listObj.themeEn==='FkSkill'
      ||listObj.theme==='阳台种菜'&&listObj.themeEn==='FkVegetable')
    {
        dataList.push(listObj)
    }
  }
  totalPages=Math.ceil(dataList.length/info.size)===0?1:Math.ceil(dataList.length/info.size)
  let newDataList = dataList.slice((info.index-1) * info.size, info.index  * info.size)
  return {
    'code': '0',
    'message': 'success',
    'data': {
      'pageIndex': info.index,
      'pageSize': info.size,
      'rows': newDataList,
      'themeIndex':info.themeIndex,
      'totalPages': totalPages,
      'dataList':dataList
    }
  }
})
