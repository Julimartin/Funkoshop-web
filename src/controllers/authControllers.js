const path = require('path');

const authControllers = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/auth/login'));
    },
    loginUser: (req, res) => res.send('Route for go to user page'),
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/auth/register'));
    },
    registerComplete: (req, res) => res.send('Route for add a new user created')
}

module.exports = authControllers;