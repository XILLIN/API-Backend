const mongoose = require('mongoose')
const { Schema } = mongoose;

const screeningSchema = new Schema({
  year: {
      type: Number,
      required: true
  },
  category: {
      type: String,
      enum: ['social', 'home', 'bed'],
      required: true
  },
  numberOfElderlyScreened: {
      type: Number,
      required: true
  },
  percentage: {
      type: Number,
      required: true
  }
});

// sheet 86
const EldersocialAssistanceSchema = new Schema({
    count : { type : Number }
})

//sheet 87
// Schema สำหรับการปรับสภาพที่อยู่อาศัยผู้สูงอายุ
const housingAdjustmentSchema = new Schema({
    year: { type: Number }, // ปีที่เก็บข้อมูล
    count: { type: Number }, // จำนวนครั้งที่มีการปรับสภาพที่อยู่อาศัยผู้สูงอายุ
});

// Schema สำหรับคลังปัญญาผู้สูงอายุ
const elderlyKnowledgeSchema = new Schema({
    count: { type: Number }, // จำนวนคนในคลังปัญญาผู้สูงอายุ
});

// Schema สำหรับศพอส.
const elderlyFuneralHomeSchema = new Schema({
    count: { type: Number }, // จำนวนศพที่มีการจัดการในศาสนสถานที่อสม.
});

// Schema สำหรับโรงเรียนผู้สูงอายุ
const elderlySchoolSchema = new Schema({
    count: { type: Number }, // จำนวนโรงเรียนผู้สูงอายุ
});

// sheet 83
const elderlyLoanSchema = new Schema({
    year: { type: Number }, // ปี
    numberOfBorrowers: { type: Number }, // จำนวนผู้กู้ยืม
  });

// sheet 78-79
const ElderlyPopulationSchema = new Schema({
    year: { type: Number },
    age_groups: {
      male_60_69: { type: Number },
      female_60_69: { type: Number },
      total_60_69: { type: Number },
      male_70_79: { type: Number },
      female_70_79: { type: Number },
      total_70_79: { type: Number },
      male_80_above: { type: Number },
      female_80_above: { type: Number },
      total_80_above: { type: Number },
      total_60_above: { type: Number },
    },
    total_population: { type: Number },
    elderly_population_ratio: { type: Number },
  });
  
// sheet 89
  const ElderlyAllowanceSchema = new Schema({
    year: Number, // ปี
    recipientCount: Number, // จำนวนผู้รับเงินเบี้ยยังชีพผู้สูงอายุ
});

const elderdataSchema = new Schema({
  EldersocialAssistance : [EldersocialAssistanceSchema],
  housingAdjustment : [housingAdjustmentSchema],
  elderlyKnowledge : [elderlyKnowledgeSchema],
  elderlyFuneralHome : [elderlyFuneralHomeSchema],
  elderlySchool : [elderlySchoolSchema],
  elderlyLoan : [elderlyLoanSchema],
  ElderlyPopulation : [ElderlyPopulationSchema],
  ElderlyAllowance : [ElderlyAllowanceSchema],
  screening : [screeningSchema]

})

module.exports = {schema: elderdataSchema};