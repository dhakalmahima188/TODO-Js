var express = require('express');
var router = express.Router();
const Todo=require('../resources/todos')
/* GET users listing. */


router.get('/',  async function(req, res, next) {
  let todos=await Todo.find()
  res.send('respond with a resource');
});

router.get('/',  async function(req, res, next) {

  res.send('respond with a resource');
});

module.exports = router;
