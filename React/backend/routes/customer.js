const router = require('express').Router();
let Customer = require('../models/customer.model');

router.route('/').get((req, res) => {
  Customer.find()
    .then(Customers => res.json(Customers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signup').post((req, res) => {
  const Customername = req.body.Customername;

  const newCustomer = new Customer({Customername});

  newCustomer.save()
    .then(() => res.json('Customer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    const Customername = req.body.Customername;
  
    const newCustomer = new Customer({Customername});
  
    newCustomer.save()
      .then(() => res.json('Customer added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;