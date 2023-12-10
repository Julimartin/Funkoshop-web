const adminControllers = {
    admin: (req, res) => res.send('Route for Admin View'),
    create: (req, res) => res.send('Route for Create View'),
    new: (req, res) => res.send('Route for add a new item created'),
    edit: (req, res) => res.send('Route for find and retrieve a product from an id to edit'),
    update: (req, res) => res.send('Route for find and update an item id'),
    delete: (req, res) => res.send('Route for find and delete an item id'),

}

module.exports = adminControllers;