const router = require('express').Router();
let Farmer = require('../models/farmer.model');


router.route('/signup').post((req, res) => {
  const name = req.body.name;
  const _id = req.body._id;
  const email = req.body.email;
  const pno = Number(req.body.pno);
  const password = (req.body.password);
  const location = (req.body.location);

  const newFarmer = new Farmer({
    _id,
    name,
    email,
    pno,
    password,
    location,
  });


  newFarmer.save()
    .then(() => res.json('Farmer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
  Farmer.find()
    .then(Farmer => res.json(Farmer))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;