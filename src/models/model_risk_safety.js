const mongoose = require('mongoose');
const { Schema } = mongoose;

//sheet 85
const funeralAssistanceSchema = new Schema({
    year: { type: Number }, // ปีที่เก็บข้อมูล
    count: { type: Number }, // จำนวนผู้สูงอายุที่ได้รับการสงเคราะห์ในการจัดการศพตามประเพณี
});
//sheet 70
const ViolenceCauseSchema = new Schema({
    drug_abuse: { type: Number },
    alcohol_abuse: { type: Number },
    gambling: { type: Number },
    divorce: { type: Number },
    jealousy: { type: Number },
    revenge: { type: Number },
    economic_stress: { type: Number },
    physical_health_issues: { type: Number },
    mental_health_issues: { type: Number },
    feeling_of_empowerment: { type: Number },
    alcohol_and_drug_abuse: { type: Number },
    jealousy_and_revenge: { type: Number },
    jealousy_and_divorce: { type: Number },
    alcohol_and_revenge: { type: Number },
    drug_and_revenge: { type: Number },
});
// sheet 69.1
const DomesticViolenceSchema = new Schema({
    male_victims: { type: Number },
    female_victims: { type: Number },
    total_victims: { type: Number },
    aspects: {
        physical: { type: Number },
        sexual: { type: Number },
        emotional: { type: Number },
        fatalities: { type: Number },
    },
});

//sheet 58-60
const InappropriateBehaviorSchema = new Schema({
    year: { type: Number },
    behavior_type: { type: String }, // ประเภทของพฤติกรรมไม่เหมาะสม เช่น ดื่มเครื่องดื่มที่มีแอลกอฮอล์, มั่วสุม, ติดเกมส์ เป็นต้น
    count: { type: Number }
});
const SexualBehaviorSchema = new Schema({
    year: { type: Number },
    behavior_type: { type: String }, // ประเภทของพฤติกรรมทางเพศ เช่น มีพฤติกรรมทางเพศ, อื่น ๆ
    count: { type: Number }
});

const OtherBehaviorSchema = new Schema({
    year: { type: Number },
    behavior_type: { type: String }, // ประเภทของพฤติกรรมอื่น ๆ เช่น ทำความรำคาญ, อื่น ๆ
    count: { type: Number }
});


const ChildAndYouthSchema = new Schema({
    year: { type: Number },
    behavior_type: { type: String, enum: ['behavior', 'substance_abuse', 'annoyance', 'gambling', 'sexual_behavior', 'other'] }, // ประเภทของพฤติกรรม เช่น พฤติกรรมทางเพศ, ดื่มเครื่องดื่มที่มีแอลกอฮอล์, อื่น ๆ
    count: { type: Number }
});

//sheet 38-41
const RoadAccidentSchema = new Schema({
    year: Number,
    injuries: Number,
    disabilities: Number,
    fatalities: Number
    
});

//sheet 36.1-37
const CaseSchema = new Schema({
    year: Number,
    life: {
        male: Number,
        female: Number,
        unspecified: Number,
        total: Number
    },
    property: {
        male: Number,
        female: Number,
        unspecified: Number,
        total: Number
    },
    population_mid_66: Number,
    life_per_100k: Number,
    property_per_100k: Number,
    life_ranking: Number,
    property_ranking: Number,
    drug_crime: {
        cases: {
            male: Number,
            female: Number,
            unspecified: Number,
            total: Number
        },
        arrests: {
            male: Number,
            female: Number,
            unspecified: Number,
            total: Number
        },
        cases_per_100k_population_mid_66: Number,
        arrests_ranking: Number
    },
    child_trafficking_victims: {
        male: Number,
        female: Number,
        total: Number
    },
    adult_trafficking_victims: {
        male: Number,
        female: Number,
        total: Number
    },
    total_trafficking_victims: Number
});

const riskandsafeDataSchema = new Schema({
    funeralAssistance: [funeralAssistanceSchema],
    ViolenceCause: [ViolenceCauseSchema],
    DomesticViolence: [DomesticViolenceSchema],
    InappropriateBehavior: [InappropriateBehaviorSchema],
    SexualBehavior: [SexualBehaviorSchema],
    OtherBehavior: [OtherBehaviorSchema],
    ChildAndYouth: [ChildAndYouthSchema],
    RoadAccident: [RoadAccidentSchema],
    Case: [CaseSchema],
})


module.exports = { schema: riskandsafeDataSchema };