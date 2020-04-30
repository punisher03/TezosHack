const router = require('express').Router();
let Buyer = require('../models/buyer.model');


router.route('/signup').post((req, res) => {
  const name = req.body.name;
  const _id = req.body._id;
  const email = req.body.email;
  const pno = Number(req.body.pno);
  const password = (req.body.password);
  const location = (req.body.location);

  const newBuyer = new Buyer({
    _id,
    name,
    email,
    pno,
    password,
    location,
  });

  newBuyer.save()
    .then(() => res.json('Buyer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
  Buyer.find({ "email": req.body.email,"password": req.body.password})
    .then(Buyer => res.json(Buyer.length))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;