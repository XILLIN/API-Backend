const mongoose = require('mongoose')
const { Schema } = mongoose;

const CommunityOrganisationCouncilSchema = new Schema({
    area: Number
});
const ChildSupportSchema = new Schema({
    year: { type: Number },
    children_supported: { type: Number },
    families_supported: { type: Number }
});
const CommunityFamilyDevelopmentCenterSchema = new Schema({
    CFDAmount: Number,
    CFDRegisteredAmount: Number,
    OPCDVAmount: Number
});

const VolunteerSchema = new mongoose.Schema({
    thai: Number, // คนไทย
    foreigner: Number, // ต่างด้าว
    total: Number, // คนขอทานรวม
    humanDevelopment: {
        year63: Number, // อาสาสมัครพัฒนาสังคมและความมั่นคงของมนุษย์ ปี 63
        year64: Number, // อาสาสมัครพัฒนาสังคมและความมั่นคงของมนุษย์ ปี 64
        year65: Number, // อาสาสมัครพัฒนาสังคมและความมั่นคงของมนุษย์ ปี 65
        year66: Number, // อาสาสมัครพัฒนาสังคมและความมั่นคงของมนุษย์ ปี 66
    },
    corporateSocialResponsibility: {
        csr: {
            accumulate63_66: Number // เครือข่ายองค์กรภาครัฐและองค์กรภาคธุรกิจ Corporate Social Responsibility (CSR) สะสม ปี 63 - 66
        }
    },
    privateDevelopment: {
        foundation: Number, // องค์กรพัฒนาเอกชน มูลนิธิ
        association: Number, // องค์กรพัฒนาเอกชน สมาคม
        publicBenefitOrg: Number, // องค์กรพัฒนาเอกชน องค์กรสาธารณประโยชน์
        publicWelfareOrg: Number, // องค์กรพัฒนาเอกชน องค์กรสถานสาธารณกุศล
        clubGroup: Number, // องค์กรพัฒนาเอกชน กลุ่มชมรม ฯ
        total: Number // องค์กรพัฒนาเอกชน รวม
    },
    publicDevelopment: {
        communityOrg: Number, // องค์กรภาคประชาชน องค์กรชุมชน
        communityAssembly: Number, // องค์กรภาคประชาชน สภาองค์กรชุมชน
        communityWelfare: Number, // องค์กรภาคประชาชน องค์กรสวัสดิการชุมชน
        communityDevelopment: Number, // องค์กรภาคประชาชน กลุ่มเพื่อการพัฒนาชุมชน
        communityClub: Number, // องค์กรภาคประชาชน กลุ่มชมรม ฯ
        total: Number // องค์กรภาคประชาชน รวม
    },
    publicBenefitOrg: {
        year63: Number, // องค์กรสาธารณประโยชน์ ปี 63
        year64: Number, // องค์กรสาธารณประโยชน์ ปี 64
        year65: Number, // องค์กรสาธารณประโยชน์ ปี 65
        year66: Number // องค์กรสาธารณประโยชน์ ปี 66
    },
    communityWelfareOrg: {
        year63: Number, // องค์กรสวัสดิการชุมชน ปี 63
        year64: Number, // องค์กรสวัสดิการชุมชน ปี 64
        year65: Number, // องค์กรสวัสดิการชุมชน ปี 65
        year66: Number // องค์กรสวัสดิการชุมชน ปี 66
    }
});

const CommunityWelfareFundSchema = new Schema({
    fundName: String,
    year: Number,
    amount: Number
});

const RuralSufficiencySchema = new Schema({
    year: Number,
    households: Number
  });

const SecureHomeProjectSchema = new Schema({
    year: Number,
    supportedHouseholds: Number
});


const supportDataSchema = new Schema({
    CommunityOrganisationCouncil : [CommunityOrganisationCouncilSchema],
    ChildSupport : [ChildSupportSchema],
    CommunityFamilyDevelopmentCenter : [CommunityFamilyDevelopmentCenterSchema],
    CommunityWelfareFund: [CommunityWelfareFundSchema],
    RuralSufficiency: [RuralSufficiencySchema],
    SecureHomeProject: [SecureHomeProjectSchema],
    Volunteer : [VolunteerSchema],
})

module.exports = { schema: supportDataSchema };

