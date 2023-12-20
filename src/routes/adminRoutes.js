const express = require('express');
const router = express.Router();
const {adminView, 
    createView, 
    addItem, 
    editView, 
    updateItem, 
    deleteItem} = require('../controllers/adminControllers');

router.get('/', adminView);
router.get('/create', createView);
router.post('/create', addItem);
router.get('/edit/:id', editView);
router.put('/edit/:id', updateItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;