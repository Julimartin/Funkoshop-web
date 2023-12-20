const path = require('path');

const adminControllers = {
    adminView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/admin'));
    },
    createView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create')); //
    },
    addItem: (req, res) => res.send('Route for add a new item created'),
    editView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit'));
    },
    updateItem: (req, res) => res.send('Route for find and update an item id'),
    deleteItem: (req, res) => res.send('Route for find and delete an item id'),

}

module.exports = adminControllers;