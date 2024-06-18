const mongoose = require('mongoose')
const { Schema } = mongoose;

//sheet 73
const LaborForceSchema = new Schema({
    year: { type: Number },
    gender: { type: String, enum: ['male', 'female'] },
    employment_type: { type: String, enum: ['formal', 'informal'] },
    total_workers: { type: Number },
});

// sheet 24-25
const LaborSchema = new Schema({
    year: Number,
    in_system: { type: Number },
    out_system: { type: Number }
});
const ForeignWorkerSchema = new Schema({
    year: Number,
    total: { type: Number }
});
const HouseholdSavingSchema = new Schema({
    year: Number,
    percentage: { type: Number }
});

// sheet 21 and 22
const UnemploymentSchema = new Schema({
    total: { type: Number },
    male: { type: Number },
    female: { type: Number },
    unemployment_rate: {
        '63': { type: Number },
        '64': { type: Number },
        '65': { type: Number },
        '66': { type: Number }
    }
});

//sheet 84
const employmentSchema = new Schema({
    totalEmployed: { type: Number }, // ผู้มีงานทำทั้งหมด (รวม)
    maleEmployed: { type: Number }, // ผู้มีงานทำทั้งหมด (ชาย)
    femaleEmployed: { type: Number }, // ผู้มีงานทำทั้งหมด (หญิง)
    totalElderlyEmployed: { type: Number }, // ผู้สูงอายุที่ทำงาน (รวม)
    maleElderlyEmployed: { type: Number }, // ผู้สูงอายุที่ทำงาน (ชาย)
    femaleElderlyEmployed: { type: Number }, // ผู้สูงอายุที่ทำงาน (หญิง)
    elderlyToTotalEmploymentRatio: { type: Number }, // สัดส่วนแรงงานผู้สูงอายุต่อผู้มีงานทำทั้งหมด
});

const ArticleSchema = new Schema({
    year: {type: Number, required: true},
    article_33: { type: Number },
    article_39: { type: Number },
    article_40: { type: Number }
  });

const laborDataSchema = new Schema({
    Labor : [LaborSchema],
    ForeignWorker : [ForeignWorkerSchema],
    HouseholdSaving : [HouseholdSavingSchema],
    Unemployment: [UnemploymentSchema],
    employment: [employmentSchema],
    LaborForce: [LaborForceSchema],
    Article: [ArticleSchema]

})

module.exports = { schema: laborDataSchema };