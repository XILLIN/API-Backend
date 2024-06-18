const mongoose = require('mongoose');
const { Schema } = mongoose;

// Import schemas (not models)
const econamydata = require('./model_economy');
const educationSchema = require('./model_education');
const elderdata = require('./model_elder');
const HospitalDataSchema = require('./model_Healty');
const laborDataSchema = require ('./model_labor');
const PopulationDataSchema = require('./model_population_and_family');
const riskandsafedata = require('./model_risk_safety');
const supportdata = require('./model_support');
const otherdata = require('./model_other');

const ProvinceSchema = new Schema({
  year: { type: Number },
  province_code: { type: String },
  province_name: { type: String },
  administrative_region: { type: String },
  base_year: { type: Number },
  area: { type: Number },
  population_2566: { type: Number },
  population_density: { type: Number },
  number_households: { type: Number },
  municipality: [{
    province_municipality: { type: Number },
    city_municipality: { type: Number },
    town_municipality: { type: Number },
    district_municipality: { type: Number },
    local_administration_organization: { type: Number }
  }],
  Populationdata: [PopulationDataSchema.schema],
  labordata: [laborDataSchema.schema],
  Educationdata: [educationSchema.schema],
  Riskandsafedata: [riskandsafedata.schema],
  Econamydata: [econamydata.schema],
  Healtydata: [HospitalDataSchema.schema],
  Elderdata: [elderdata.schema],
  Supportdata: [supportdata.schema],
  Otherdata: [otherdata.schema]
});

module.exports = { schema: ProvinceSchema };
