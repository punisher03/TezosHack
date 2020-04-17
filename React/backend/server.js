const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('MongoDB connection established');
})

const farmerRouter = require('./routes/farmer.js');
const buyerRouter = require('./routes/buyer.js');

app.use('/farmer',farmerRouter);
app.use('/buyer',buyerRouter);

app.listen(port, () => {
    console.log(`server is listning on port ${port}`);
});
