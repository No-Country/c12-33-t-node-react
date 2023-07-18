const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getUsuarios);
router.get('/protected', controllers.getUserToken);
router.get('/:id', controllers.getUsuario);
router.put('/:id', middlewares.usuarioValidation, controllers.changeUsuario);
router.delete('/:id', controllers.deleteUsuario);
<<<<<<< HEAD
router.post('/',/*middlewares.verificarToken,*/middlewares.authMiddlewares, controllers.createUsuario);
=======
router.post('/', middlewares.authMiddlewares, controllers.createUsuario);
>>>>>>> 7d5e83c851e38be11c1e4f8d7ab33eed1d3474f3
module.exports = router;    