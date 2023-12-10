const authControllers = {
    login: (req, res) => res.send('Route for Login View'),
    loginUser: (req, res) => res.send('Route for go to user page'),
    register: (req, res) => res.send('Route for Register View'),
    registerComplete: (req, res) => res.send('Route for add a new user created')
}

module.exports = authControllers;