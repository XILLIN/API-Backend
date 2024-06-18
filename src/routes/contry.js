const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Country = require('../models/model_country');

router.use(bodyParser.json());

// GET all country data
router.get('/', async (req, res) => {
  try {
    const country_data = await Country.find();
    res.json(country_data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET specific province data by province name
router.get('/province/:province_name', async (req, res) => {
  try {
    const country_data = await Country.findOne({ "provinces.province_name": req.params.province_name });
    if (!country_data) {
      return res.status(404).json({ message: 'Province not found' });
    }
    const province = country_data.provinces.find(province => province.province_name === req.params.province_name);
    res.json(province);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new country data
router.post('/', async (req, res) => {
  try {
    const country = new Country(req.body);
    await country.save();
    console.log('Country data inserted successfully!', country);
    res.status(201).json({ message: 'Country data inserted successfully!', country });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update specific province data by province name
router.put('/province/:province_name', async (req, res) => {
  try {
    const { province_name } = req.params;
    const updateData = req.body;

    const country_data = await Country.findOneAndUpdate(
      { "provinces.province_name": province_name },
      {
        $set: {
          "provinces.$[elem]": updateData
        }
      },
      {
        arrayFilters: [{ "elem.province_name": province_name }],
        new: true,
        runValidators: true
      }
    );

    if (!country_data) {
      return res.status(404).json({ message: 'Province not found' });
    }

    res.json({
      message: 'Province updated successfully!',
      province: country_data.provinces.find(province => province.province_name === province_name)
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
