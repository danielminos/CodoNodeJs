const shopControllers = {
    shop: (req,res) => res.send('Route for shop view'),
    item: (req,res) => (req,res) => res.send('Route para buscar producto por id'),
    cart: (req,res) => (req,res) => res.send('Route for cart view')
}

module.exports = shopControllers;