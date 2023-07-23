const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getUsuarios);
router.get('/protected', controllers.getUserToken);
<<<<<<< HEAD
router.get('/:id', controllers.getUsuario);
router.put('/:id', middlewares.usuarioValidation, controllers.changeUsuario);
router.delete('/:id', controllers.deleteUsuario);
<<<<<<< HEAD
router.post('/',/*middlewares.verificarToken,*/middlewares.authMiddlewares, controllers.createUsuario);
=======
router.post('/', middlewares.authMiddlewares, controllers.createUsuario);
>>>>>>> 7d5e83c851e38be11c1e4f8d7ab33eed1d3474f3
module.exports = router;    
=======
router.get('/:id', middlewares.idValidation, controllers.getUsuario);
router.put('/:id', middlewares.idValidation, middlewares.usuarioValidation, controllers.changeUsuario);
router.put('/password/:id', middlewares.idValidation, controllers.changePassword);
router.delete('/:id', middlewares.idValidation, controllers.deleteUsuario);
router.post('/', middlewares.authMiddlewares, controllers.createUsuario);
module.exports = router;   
>>>>>>> e270dd3cd674567f589c86f8e544c96d48b3e6a4
