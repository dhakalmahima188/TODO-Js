
var express = require('express');
var router = express.Router();

const todos =require('../resources/todos')

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', { title: 'TODO-APP' , todoList:todos});
});

router.get('/addTodo',function(req,res,next){
res.render('addTodo',{title: 'Add TODO'});
});
router.post('/save-todo',function(req,res,next){
 // console.log(req.body)
todos.push({ ...req.body, _id: `00${todos.length}`});
res.redirect('/');
});

router.get('/editTodo/:id',function(req,res,next){
  const todo=todos.find(todo=> todo._id===req.params.id);

  res.render('editTodo',{title:'Edit Todo',todo:todo });
});

router.post('/updateTodo/:id',function(req,res,next){
  const index=todos.findIndex(todo=> todo._id===req.params.id);
  todos.splice(index,1,{ ...req.body,_id: req.params.id});
  res.redirect('/');
});
router.get('/deleteTodo/:id',function(req,res,next){
  const index=todos.findIndex(todo=> todo._id===req.params.id);
  todos.splice(index,1);
  res.redirect('/');
});






module.exports = router;
