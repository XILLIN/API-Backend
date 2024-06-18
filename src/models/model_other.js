const mongoose = require('mongoose')
const { Schema } = mongoose;

// sheet 27
const OfficeSchema = new Schema({
    name: String,
    total_offices: { type: Number, default: 0 }
  });
// sheet 64
const NumberofchildprotectioncommunitycentersSchema = new Schema({
    area: Number
  })
// sheet 105
const PerformanceSchema = new mongoose.Schema({
    music: Number, // ด้านการแสดงดนตรี
    dance: Number, // ด้านการแสดงนาฏศิลป์
    drama: Number, // ด้านการแสดงละคร
    art: Number, // ด้านการแสดงศิลปะ
    danceDrama: Number, // ด้านการแสดงกายกรรม
    other: Number, // อื่น ๆ
    totalPerformers: Number // ผู้แสดงความสามารถ รวม
});

const other = new Schema({
  Office : [OfficeSchema],
  Numberofchildprotectioncommunitycenters : [NumberofchildprotectioncommunitycentersSchema],
  Performance : [PerformanceSchema]
})

module.exports = { schema: other };
