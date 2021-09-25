const getList = () => {
  const list = localStorage.getItem('list');
  let listArr;
  if(!list){
    listArr = []
  }else{
    listArr = JSON.parse(list)
  }
  return listArr;
}

const setTolocal = (list) => {
  localStorage.setItem('list', JSON.stringify(list))
}
const addToLocal = (item) => {
  const list = getList()
  list.push(item)
  setTolocal(list)
}

export {getList, addToLocal}