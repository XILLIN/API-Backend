const mongoose = require('mongoose');
const Schema = mongoose;
//sheet 90 - 102
// Define schema
const DisabledPopulationSchema = new Schema({
    year: Number, // ปี
    maleCount: Number, // จำนวนคนพิการเพศชาย
    femaleCount: Number, // จำนวนคนพิการเพศหญิง
    totalDisabledCount: Number, // จำนวนคนพิการรวม
    disabledPercentage: Number, // สัดส่วนคนพิการต่อประชากร (ร้อยละ)
    ageGroups: {
        male: {
            age0_6: Number,
            age7_17: Number,
            age18_25: Number,
            age26_59: Number,
            age60_plus: Number,
            total: Number
        },
        female: {
            age0_6: Number,
            age7_17: Number,
            age18_25: Number,
            age26_59: Number,
            age60_plus: Number,
            total: Number
        },
        total: {
            age0_6: Number,
            age7_17: Number,
            age18_25: Number,
            age26_59: Number,
            age60_plus: Number,
            total: Number
        }
    },
    disabilityTypes: {
        visual: Number,
        hearing: Number,
        physical: Number,
        mental: Number,
        intellectual: Number,
        learning: Number,
        autistic: Number,
        moreThanOne: Number,
        unspecified: Number
    },
    education: {
        inclusiveKindergarten: {
            male: Number,
            female: Number,
            total: Number
        },
        inclusivePrimarySchool: {
            male: Number,
            female: Number,
            total: Number
        },
        inclusiveSecondarySchool: {
            male: Number,
            female: Number,
            total: Number
        },
        inclusiveIntegratedEducation: {
            male: Number,
            female: Number,
            total: Number
        }
    },
    specialEducation: {
        specialSchool: Number,
        welfareSchool: Number,
        specialEducationCenter: Number,
        total: Number
    },
    employment: {
        largeEnterprises: Number,
        employmentQuota: Number,
        hireUnder33: Number,
        sendFund34: Number,
        provideAid35: Number,
        hireUnder33AndAid35: Number,
        sendFund34AndAid35: Number,
        hireUnder33Fund34AndAid35: Number,
        complyPartially: Number,
        notComply: Number
    },
    serviceProviders: {
        provincialDisabilityCenter: Number,
        generalDisabilityCenter: Number,
        disabilityOrganization: Number
    },
    assistanceServices: {
        assistiveDevices: Number,
        promoteQualityOfLifeFund: {
            '63': Number,
            '64': Number,
            '65': Number,
            '66': Number
        },
        personalAssistant: Number,
        disabilityService: Number,
        signLanguageInterpreter: Number, // บริการล่ามภาษามือ
        personalAssistantForDisabled: Number, // บริการผู้ช่วยคนพิการ (PA)
        disabilityAllowance63: Number, // จำนวนผู้รับเงินเบี้ยความพิการ (คน) ปี 63
        disabilityAllowance64: Number, // จำนวนผู้รับเงินเบี้ยความพิการ (คน) ปี 64
        disabilityAllowance65: Number, // จำนวนผู้รับเงินเบี้ยความพิการ (คน) ปี 65
        disabilityAllowance66: Number, // จำนวนผู้รับเงินเบี้ยความพิการ (คน) ปี 66
    }
  });

// Create model
const DisabledPopulationModel = mongoose.model('DisabledPopulation', DisabledPopulationSchema);

module.exports = { schema: DisabledPopulationModel };