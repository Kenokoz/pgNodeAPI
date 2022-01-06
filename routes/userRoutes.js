const Router = require('express');
const userController = require('../controllers/userController');

const router = new Router();

router.post('/user', userController.createUser);
router.get('/user/:id', userController.getOneUser);
router.get('/users', userController.getUsers);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
