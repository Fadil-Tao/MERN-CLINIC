const express = require('express');

const UsersController = require('../Controller/user.controller');
const protect = require('../Middlewares/protect');
const router = express.Router();
const userController = new UsersController;


router.get('/getAll' , userController.getAll)
router.post('/login',userController.loginUser)
router.post('/register', userController.addUser)
router.put('/update/:id', protect,userController.update)
router.delete('/delete/:id', protect,userController.deleteById)
router.get('/getById/:id', userController.getById)

module.exports = router;