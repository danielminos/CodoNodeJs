const adminControllers={
    admin: (req,res) => (req,res) => res.send('Route for admin view'),
    create: (req,res) => res.send('Route for create view'),
    edit: (req,res) => res.send('Route for edit view'),
    delete: (req,res) => res.send('Route for borrar usuario')
}

module.exports = adminControllers;