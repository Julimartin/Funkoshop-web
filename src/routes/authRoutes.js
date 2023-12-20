const express = require('express');
const router = express.Router();
const {login, 
    loginUser, 
    register, 
    registerComplete
} = require('../controllers/authControllers')

router.get('/login', login);
router.post('/login', loginUser);
router.get('/register',register);
router.post('/register', registerComplete);

module.exports = router;