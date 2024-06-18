const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProvinceSchema = require('./model_province');

const CountrySchema = new Schema({
  country: String,
  administrative_region: String,
  region: String,
  database_year: Number,
  provinces: [ProvinceSchema.schema], // เก็บข้อมูลของแต่ละจังหวัดในประเทศ
});

module.exports = mongoose.model('Country', CountrySchema);
