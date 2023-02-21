const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
  controller.listUsers()
  .then((users) => {
    response.success(req, res, users)
  }).catch(e => {
    response.error(req, res, "Unexpected error", 500, e)

  })
})

router.post('/', (req, res) => {
  controller.addUser(req.body.name)
  .then((data)=> {
    response.success(req, res, data, 201);
  }).catch(e => {
    response.error(req, res, 'Información invalida', 400, "Error en el controlador");
  });
});

module.exports = router;