const store = require('./store')


function addMessage(user, message) {
  console.log("body:", user, message);
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log("aqui que pasa=?");
      console.error('[controller-message]=> No hay usuario o mense')
      reject('Info incorrecta')
      return false
    }
    const fullMsg = {
      user,
      message,
      date: new Date()
    }
    store.add(fullMsg)
    resolve(fullMsg)
  })
}

function getMessages(filterMessages) {
  return new Promise((resolve, reject)=>{
    resolve(store.list(filterMessages))
  }) 
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject)=>{
    if (!id || !message) {
      reject('Invalid data')
      return false
    }
    const result  = await store.updateText(id, message)
    resolve(result)
  }) 
}

function delMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid Id')
      return false
    }
    store.remove(id)
    .then(()=> resolve())
    .catch(e=>{reject(e)})
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  delMessage
}