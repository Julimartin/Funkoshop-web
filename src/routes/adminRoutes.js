const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.new);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', adminControllers.update);
router.delete('/delete/:id', adminControllers.delete);

module.exports = router;