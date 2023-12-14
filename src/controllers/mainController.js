const mainControllers = {
    home: (req,res) => res.send('Route for home view'),
    contact: (req,res) => res.send('Route for contact'),
    about: (req,res) => res.send('Route for about'),
    faqs: (req,res) => (req,res) => res.send('Route for faqs')
}

module.exports = mainControllers;