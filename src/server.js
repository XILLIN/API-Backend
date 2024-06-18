// server.js
require('dotenv').config();
const Data_URI = process.env.Data_URI;

const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const countryRoute = require('./routes/contry')

const app = express();
const PORT = process.env.PORT || 3000;

// เชื่อมต่อกับ MongoDB
mongoose.connect(Data_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

  app.use(express.json());
  app.use('/api/users', userRoute);
  app.use('/api/country',countryRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


