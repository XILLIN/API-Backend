const mongoose = require('mongoose');
const { Schema } = mongoose;

const PopulationSchema = new Schema({
    year: { type: Number },
    chiledren : {
        male: {
            babe : {type : Number, required: true},
            age_0_6 : { type: Number, required: true},
            age_7_17: { type: Number },
            age_18_25: { type: Number },
        },
        female:{
            babe : {type : Number, required: true},
            age_0_6 : { type: Number, required: true},
            age_7_17: { type: Number },
            age_18_25: { type: Number },
        }
    },
    male: {  
        age_0_17: { type: Number },
        age_18_25: { type: Number },
        age_26_59: {type: Number, required : true},
        age_60plus: {type : Number, required : true},
    },
    female: {
        age_0_17: { type: Number },
        age_18_25: { type: Number },
        age_26_59: {type: Number, required : true},
        age_60plus: {type : Number, required : true},
    },
});

const ChildDependencyRatioSchema = new Schema({
    year: { type: Number },
    ratio: { type: Number }
});

const NewbornSchema = new Schema({
    year: Number,
    male: Number,
    female: Number,
    total: Number,
    rate: Number
});

const ChildWelfareSchema = new Schema({
    proportion_good_height_for_age: { type: Number }
});

const OrphanageChildSchema = new Schema({
    year: { type: Number },
    number_of_children: { type: Number }
});

const OrphanageFamilySchema = new Schema({
    number_of_families: { type: Number }
});

const ChildCareSchema = new Schema({
    year: { type: Number },
    pregnant_under_15: { type: Number },
    pregnant_under_20_repeat: { type: Number },
    children_born_to_mothers_15_19_per_thousand: { type: Number },
    children_born_to_mothers_10_14_per_thousand: { type: Number },
    single_registered_mother: { type: Number },
    single_registered_mother_privilege: { type: Number },
    single_registered_mother_compensation: { type: Number },
    registered_mother_young: { type: Number },
    registered_mother_young_privilege: { type: Number },
    registered_mother_young_compensation: { type: Number },
    single_registered_mother_young: { type: Number },
    single_registered_mother_young_privilege: { type: Number },
    single_registered_mother_young_compensation: { type: Number }
});

const StreetChildrenSchema = new Schema({
    number_of_children: { type: Number }
});


const PopulationDataSchema = new Schema({
    Population: [PopulationSchema],
    ChildDependencyRatio: [ChildDependencyRatioSchema],
    Newborn: [NewbornSchema],
    ChildWelfare: [ChildWelfareSchema],
    OrphanageChild: [OrphanageChildSchema],
    OrphanageFamily: [OrphanageFamilySchema],
    ChildCare: [ChildCareSchema],
    StreetChildren: [StreetChildrenSchema],
});


module.exports = { schema: PopulationDataSchema };
