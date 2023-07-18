const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getReservas);
router.post('/', controllers.createReserva);

module.exports = router;