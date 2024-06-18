const mongoose = require('mongoose')
const { Schema } = mongoose;

const HealthDataSchema = new Schema({
    total_patients: {
        '2022': { type: Number },
        '2023': { type: Number }
    },
    increase_decrease_rate_66: { type: Number },
});

const SuicideAttemptSchema = new Schema({
    attempts: {
        '63': { type: Number },
        '64': { type: Number },
        '65': { type: Number },
        '66': { type: Number }
    }
});
const SuicideSuccessSchema = new Schema({
    count: { type: Number },
    mid_year_population: { type: Number },
    success_rate: { type: Number }
});
const PatientSchema = new Schema({
    year: { type: Number },
    cumulativeCount: { type: Number },
    newCount: { type: Number },
    oldAndNewCount: { type: Number },
    ratePerHundredThousand: { type: Number }
});
const MedicalPersonSchema = new Schema({
    year: { type: Number },
    doc: { type: Number },
    dent: { type: Number },
    phar: { type: Number },
    nurse: { type: Number }
});

const AobSchema = new Schema({
    year: { type: Number },
    aob: { type: Number }
});

const AmountVolunteerSchema = new Schema({
    year: { type: Number },
    avt: { type: Number },
    population_mid_year: { type: Number },
    avt_per_people: { type: Number }
  });

const HospitalDataSchema = new Schema({
    year: { type: Number },
    types: {
        hospital_community: { type: Number },
        hospital_general: { type: Number },
        hospital_center: { type: Number },
        hospital_Subdistricthealthpromotion: { type: Number },
        DistrictPublicHealthOffice: { type: Number }
    },
    medical_personnel: [MedicalPersonSchema],
    aob_data: [AobSchema],
    volunteer_data: [AmountVolunteerSchema],
    patient_data: [PatientSchema],
    SuicideAttempt: [SuicideAttemptSchema],
    SuicideSuccess: [SuicideSuccessSchema],
    HealthData: [HealthDataSchema]
});

module.exports = {schema : HospitalDataSchema};