const mongoose = require('mongoose')
const { Schema } = mongoose;

const GDPPerCapitaSchema = new Schema({
  year: { type: Number },
  gdp_per_capita: {
    '58': { type: Number },
    '59': { type: Number },
    '60': { type: Number },
    '61': { type: Number },
    '62': { type: Number },
    '63': { type: Number },
    '64': { type: Number }
  },
  growth_63_64: { type: Number }
});
const AverageMonthlyIncomeSchema = new Schema({
  income: {
      '60': { type: Number },
      '62': { type: Number },
      '64': { type: Number }
  }
});
const DebtSchema = new Schema({
  total_debt: {
    '60': { type: Number },
    '62': { type: Number },
    '64': { type: Number }
  },
  categories: {
    for_household_expenses: { type: Number },
    for_non_agricultural_business: { type: Number },
    for_agricultural_business: { type: Number },
    for_education: { type: Number },
    for_house_and_land: { type: Number },
    others: { type: Number }
  }
});
const InequalityCoefficientSchema = new Schema({
  coefficient: {
    '62': { type: Number },
    '63': { type: Number },
    '64': { type: Number },
    '65': { type: Number }
  }
});


const econamydataSchema = new Schema({
  GDPPerCapita: [GDPPerCapitaSchema],
  AverageMonthlyIncome: [AverageMonthlyIncomeSchema],
  Debt: [DebtSchema],
  InequalityCoefficient: [InequalityCoefficientSchema]
})

module.exports = { schema: econamydataSchema };