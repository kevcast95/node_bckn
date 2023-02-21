const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const router = express.Router()

router.get('/', (req, res) => {
  const filterMessages = req.query.user || null
  controller.getMessages(filterMessages)
  .then((msgList) => {
    response.success(req, res, msgList)
  }).catch(e => {
    response.error(req, res, "Unexpected error", 500, e)

  })
})

router.post('/', (req, res) => {
  controller.addMessage(req.body.user, req.body.message)
  .then((fullMsg)=> {
    response.success(req, res, fullMsg, 201)
  }).catch(e => {
    response.error(req, res, 'Información invalida', 400, "Error en el controlador")
  })
  
})

router.patch('/:id', (req, res) => {
  console.log(req.params.id);
  controller.updateMessage(req.params.id, req.body.message)
  .then((data) => {
    response.success(req, res, data, 201)
  }).catch(e => {
    response.error(req, res, 'Error interno', 500, e)
  })
})

router.delete('/:id', (req, res) => {
  console.log(req.params.id);
  controller.delMessage(req.params.id)
  .then(() => {
    response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
  }).catch(e => {
    response.error(req, res, 'Error interno', 500, e)
  })
})

module.exports = router