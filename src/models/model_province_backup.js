const mongoose = require('mongoose');
const { Schema } = mongoose;

//sheet106-110
const VolunteerSchema = new Schema({
  thai: Number,//คนไทย
  foreigner: Number,//ต่างด้าว
  total: Number,//คนขอทานรวม
  humanDevelopment: {
    year63: Number,//อาสาสมัครพัฒนาสังคมและความมั่นคงของมนุษย์ปี63
    year64: Number,//อาสาสมัครพัฒนาสังคมและความมั่นคงของมนุษย์ปี64
    year65: Number,//อาสาสมัครพัฒนาสังคมและความมั่นคงของมนุษย์ปี65
    year66: Number,//อาสาสมัครพัฒนาสังคมและความมั่นคงของมนุษย์ปี66
  },
  corporateSocialResponsibility: {
    csr: {
      accumulate63_66: Number//เครือข่ายองค์กรภาครัฐและองค์กรภาคธุรกิจCorporateSocialResponsibility(CSR)สะสมปี63-66
    }
  },
  privateDevelopment: {
    foundation: Number,//องค์กรพัฒนาเอกชนมูลนิธิ
    association: Number,//องค์กรพัฒนาเอกชนสมาคม
    publicBenefitOrg: Number,//องค์กรพัฒนาเอกชนองค์กรสาธารณประโยชน์
    publicWelfareOrg: Number,//องค์กรพัฒนาเอกชนองค์กรสถานสาธารณกุศล
    clubGroup: Number,//องค์กรพัฒนาเอกชนกลุ่มชมรมฯ
    total: Number//องค์กรพัฒนาเอกชนรวม
  },
  publicDevelopment: {
    communityOrg: Number,//องค์กรภาคประชาชนองค์กรชุมชน
    communityAssembly: Number,//องค์กรภาคประชาชนสภาองค์กรชุมชน
    communityWelfare: Number,//องค์กรภาคประชาชนองค์กรสวัสดิการชุมชน
    communityDevelopment: Number,//องค์กรภาคประชาชนกลุ่มเพื่อการพัฒนาชุมชน
    communityClub: Number,//องค์กรภาคประชาชนกลุ่มชมรมฯ
    total: Number//องค์กรภาคประชาชนรวม
  },
  publicBenefitOrg: {
    year63: Number,//องค์กรสาธารณประโยชน์ปี63
    year64: Number,//องค์กรสาธารณประโยชน์ปี64
    year65: Number,//องค์กรสาธารณประโยชน์ปี65
    year66: Number//องค์กรสาธารณประโยชน์ปี66
  },
  communityWelfareOrg: {
    year63: Number,//องค์กรสวัสดิการชุมชนปี63
    year64: Number,//องค์กรสวัสดิการชุมชนปี64
    year65: Number,//องค์กรสวัสดิการชุมชนปี65
    year66: Number//องค์กรสวัสดิการชุมชนปี66
  }
});
//sheet105
const PerformanceSchema = new Schema({
  music: Number,//ด้านการแสดงดนตรี
  dance: Number,//ด้านการแสดงนาฏศิลป์
  drama: Number,//ด้านการแสดงละคร
  art: Number,//ด้านการแสดงศิลปะ
  danceDrama: Number,//ด้านการแสดงกายกรรม
  other: Number,//อื่นๆ
  totalPerformers: Number//ผู้แสดงความสามารถรวม
});

//sheet90-102and104
//Defineschema
const DisabledPopulationSchema = new Schema({
  year: Number,//ปี
  maleCount: Number,//จำนวนคนพิการเพศชาย
  femaleCount: Number,//จำนวนคนพิการเพศหญิง
  totalDisabledCount: Number,//จำนวนคนพิการรวม
  disabledPercentage: Number,//สัดส่วนคนพิการต่อประชากร(ร้อยละ)
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
    signLanguageInterpreter: Number,//บริการล่ามภาษามือ
    personalAssistantForDisabled: Number,//บริการผู้ช่วยคนพิการ(PA)
    disabilityAllowance63: Number,//จำนวนผู้รับเงินเบี้ยความพิการ(คน)ปี63
    disabilityAllowance64: Number,//จำนวนผู้รับเงินเบี้ยความพิการ(คน)ปี64
    disabilityAllowance65: Number,//จำนวนผู้รับเงินเบี้ยความพิการ(คน)ปี65
    disabilityAllowance66: Number,//จำนวนผู้รับเงินเบี้ยความพิการ(คน)ปี66
    //sheet104
    serviceUsers: {
      year65: {
        male: Number,//ผู้ใช้บริการของศูนย์คุ้มครองคนไร้ที่พึ่งชายปี65
        female: Number,//ผู้ใช้บริการของศูนย์คุ้มครองคนไร้ที่พึ่งหญิงปี65
        total: Number//ผู้ใช้บริการของศูนย์คุ้มครองคนไร้ที่พึ่งรวมปี65
      },
      year66: {
        male: Number,//ผู้ใช้บริการของศูนย์คุ้มครองคนไร้ที่พึ่งชายปี66
        female: Number,//ผู้ใช้บริการของศูนย์คุ้มครองคนไร้ที่พึ่งหญิงปี66
        total: Number//ผู้ใช้บริการของศูนย์คุ้มครองคนไร้ที่พึ่งรวมปี66
      }
    }
  }
});

//sheet89
const ElderlyAllowanceSchema = new Schema({
  year: Number,//ปี
  recipientCount: Number,//จำนวนผู้รับเงินเบี้ยยังชีพผู้สูงอายุ
});

//sheet87
//Schemaสำหรับการปรับสภาพที่อยู่อาศัยผู้สูงอายุ
const housingAdjustmentSchema = new Schema({
  year: { type: Number, required: true },//ปีที่เก็บข้อมูล
  count: { type: Number, required: true },//จำนวนครั้งที่มีการปรับสภาพที่อยู่อาศัยผู้สูงอายุ
});

//Schemaสำหรับคลังปัญญาผู้สูงอายุ
const elderlyKnowledgeSchema = new Schema({
  count: { type: Number, required: true },//จำนวนคนในคลังปัญญาผู้สูงอายุ
});

//Schemaสำหรับศพอส.
const elderlyFuneralHomeSchema = new Schema({
  count: { type: Number, required: true },//จำนวนศพที่มีการจัดการในศาสนสถานที่อสม.
});

//Schemaสำหรับโรงเรียนผู้สูงอายุ
const elderlySchoolSchema = new Schema({
  count: { type: Number, required: true },//จำนวนโรงเรียนผู้สูงอายุ
});

//sheet86
const EldersocialAssistanceSchema = new Schema({
  count: { type: Number }
})

//sheet85
const funeralAssistanceSchema = new Schema({
  year: { type: Number, required: true },//ปีที่เก็บข้อมูล
  count: { type: Number, required: true },//จำนวนผู้สูงอายุที่ได้รับการสงเคราะห์ในการจัดการศพตามประเพณี
});

//sheet83
const elderlyLoanSchema = new Schema({
  year: { type: Number, required: true },//ปี
  numberOfBorrowers: { type: Number, required: true },//จำนวนผู้กู้ยืม
});

//sheet80
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

//sheet78-79
const ElderlyPopulationSchema = new Schema({
  year: { type: Number, required: true },
  age_groups: {
    male_60_69: { type: Number, required: true },
    female_60_69: { type: Number, required: true },
    total_60_69: { type: Number, required: true },
    male_70_79: { type: Number, required: true },
    female_70_79: { type: Number, required: true },
    total_70_79: { type: Number, required: true },
    male_80_above: { type: Number, required: true },
    female_80_above: { type: Number, required: true },
    total_80_above: { type: Number, required: true },
    total_60_above: { type: Number, required: true },
  },
  total_population: { type: Number, required: true },
  elderly_population_ratio: { type: Number, required: true },
});

//sheet77
const CommunityFamilyDevelopmentCenterSchema = new Schema({
  CFDAmount: Number,
  CFDRegisteredAmount: Number,
  OPCDVAmount: Number
});
//sheet74
const WomenDevelopmentFund = new Schema({
  WDFOrganizations: { type: Number },
  WDFPersonal: { type: Number }
});
//sheet73
const LaborForceSchema = new Schema({
  year: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  employment_type: { type: String, enum: ['formal', 'informal'], required: true },
  total_workers: { type: Number, required: true },
});
//sheet72
const FemaleEmployeeTerminationSchema = new Schema({
  year: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  terminationCount: { type: Number, default: 0 },
});

//sheet84
const employmentSchema = new Schema({
  totalEmployed: { type: Number, required: true },//ผู้มีงานทำทั้งหมด(รวม)
  maleEmployed: { type: Number, required: true },//ผู้มีงานทำทั้งหมด(ชาย)
  femaleEmployed: { type: Number, required: true },//ผู้มีงานทำทั้งหมด(หญิง)
  totalElderlyEmployed: { type: Number, required: true },//ผู้สูงอายุที่ทำงาน(รวม)
  maleElderlyEmployed: { type: Number, required: true },//ผู้สูงอายุที่ทำงาน(ชาย)
  femaleElderlyEmployed: { type: Number, required: true },//ผู้สูงอายุที่ทำงาน(หญิง)
  elderlyToTotalEmploymentRatio: { type: Number, required: true },//สัดส่วนแรงงานผู้สูงอายุต่อผู้มีงานทำทั้งหมด
});

//sheet70
const ViolenceCauseSchema = new Schema({
  drug_abuse: { type: Number, required: true },
  alcohol_abuse: { type: Number, required: true },
  gambling: { type: Number, required: true },
  divorce: { type: Number, required: true },
  jealousy: { type: Number, required: true },
  revenge: { type: Number, required: true },
  economic_stress: { type: Number, required: true },
  physical_health_issues: { type: Number, required: true },
  mental_health_issues: { type: Number, required: true },
  feeling_of_empowerment: { type: Number, required: true },
  alcohol_and_drug_abuse: { type: Number, required: true },
  jealousy_and_revenge: { type: Number, required: true },
  jealousy_and_divorce: { type: Number, required: true },
  alcohol_and_revenge: { type: Number, required: true },
  drug_and_revenge: { type: Number, required: true },
});

//sheet69.2
const AgeGroupSchema = new Schema({
  age_0_6: { type: Number, required: true },
  age_7_12: { type: Number, required: true },
  age_13_18: { type: Number, required: true },
  age_19_35: { type: Number, required: true },
  age_36_59: { type: Number, required: true },
  age_60_above: { type: Number, required: true },
});

//sheet69.1
const DomesticViolenceSchema = new Schema({
  male_victims: { type: Number, required: true },
  female_victims: { type: Number, required: true },
  total_victims: { type: Number, required: true },
  aspects: {
    physical: { type: Number, required: true },
    sexual: { type: Number, required: true },
    emotional: { type: Number, required: true },
    fatalities: { type: Number, required: true },
  },
});
//sheet68
const FamilySurveySchema = new Schema({
  total_families_surveyed: { type: Number, required: true },
  overall_strength_index: { type: Number, required: true },
  percentage_at_risk: { type: Number, required: true },
  percentage_general: { type: Number, required: true },
  percentage_strong: { type: Number, required: true },
  aspects: {
    relationship: { type: Number, required: true },
    family_role: { type: Number, required: true },
    self_reliance: { type: Number, required: true },
    family_health: { type: Number, required: true },
    technology_learning: { type: Number, required: true },
    social_capital: { type: Number, required: true },
    resilience: { type: Number, required: true },
  },
});
//sheet67
const MarriageDivorceSchema = new Schema({
  year: { type: Number, required: true },
  marriage_statistics: {
    total_registrations: { type: Number, required: true },
    //ตามความเหมาะสมจะมีคุณสมบัติเพิ่มเติมเกี่ยวกับสถิติการสมรสเช่นจำนวนชายที่สมรส,จำนวนหญิงที่สมรส,เป็นต้น
  },
  divorce_statistics: {
    total_registrations: { type: Number, required: true },
    //คุณสมบัติเพิ่มเติมเกี่ยวกับสถิติการหย่าตามความเหมาะสมเช่นอายุเฉลี่ยของผู้หย่า,เหตุผลการหย่า,เป็นต้น
  },
  divorce_rate: { type: Number, required: true },
});
//sheet65
const PopulationSchema = new Schema({
  female_0_17: { type: Number, required: true },
  female_18_25: { type: Number, required: true },
  female_26_59: { type: Number, required: true },
  female_60_above: { type: Number, required: true },
  female_other: { type: Number, required: true },
  female_total: { type: Number, required: true },
  total_population: { type: Number, required: true },
  female_ratio: { type: Number, required: true },
});

//sheet64
const NumberofchildprotectioncommunitycentersSchema = new Schema({
  area: Number
})

//sheet62-63
const ActivityDataSchema = new Schema({
  activity_count: { type: Number, required: true },
  people_count: { type: Number, required: true },
  child_and_youth_council_count: { type: Number, required: true },
  established_child_and_youth_council_count: { type: Number, required: true },
  male_newborn_support_registered: { type: Number, required: true },
  female_newborn_support_registered: { type: Number, required: true },
  total_registered: { type: Number, required: true },
  total_support_received: { type: Number, required: true },
  support_received_percentage: { type: Number, required: true }
});

//sheet61
const ChildSupportSchema = new Schema({
  year: { type: Number, required: true },
  children_supported: { type: Number, required: true },
  families_supported: { type: Number, required: true }
});

//sheet58-60
const ChildCaseSchema = new Schema({
  year: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female', 'total'], required: true },
  case_type: { type: String, required: true },//ชนิดของคดีเช่นคดีกระทำผิดทางเพศ,คดีสอดส่อง,อื่นๆ
  count: { type: Number, required: true }
});

const InappropriateBehaviorSchema = new Schema({
  year: { type: Number, required: true },
  behavior_type: { type: String, required: true },//ประเภทของพฤติกรรมไม่เหมาะสมเช่นดื่มเครื่องดื่มที่มีแอลกอฮอล์,มั่วสุม,ติดเกมส์เป็นต้น
  count: { type: Number, required: true }
});

const SexualBehaviorSchema = new Schema({
  year: { type: Number, required: true },
  behavior_type: { type: String, required: true },//ประเภทของพฤติกรรมทางเพศเช่นมีพฤติกรรมทางเพศ,อื่นๆ
  count: { type: Number, required: true }
});

const OtherBehaviorSchema = new Schema({
  year: { type: Number, required: true },
  behavior_type: { type: String, required: true },//ประเภทของพฤติกรรมอื่นๆเช่นทำความรำคาญ,อื่นๆ
  count: { type: Number, required: true }
});

const ChildAndYouthSchema = new Schema({
  year: { type: Number, required: true },
  behavior_type: { type: String, enum: ['behavior', 'substance_abuse', 'annoyance', 'gambling', 'sexual_behavior', 'other'], required: true },//ประเภทของพฤติกรรมเช่นพฤติกรรมทางเพศ,ดื่มเครื่องดื่มที่มีแอลกอฮอล์,อื่นๆ
  count: { type: Number, required: true }
});


//sheet53-57
//Schemafordatarelatedtopregnanciesandchildren
const ChildCareSchema = new Schema({
  year: { type: Number, required: true },
  pregnant_under_15: { type: Number, required: true },
  pregnant_under_20_repeat: { type: Number, required: true },
  children_born_to_mothers_15_19_per_thousand: { type: Number, required: true },
  children_born_to_mothers_10_14_per_thousand: { type: Number, required: true },
  single_registered_mother: { type: Number, required: true },
  single_registered_mother_privilege: { type: Number, required: true },
  single_registered_mother_compensation: { type: Number, required: true },
  single_registered_mother_young: { type: Number, required: true },
  single_registered_mother_young_privilege: { type: Number, required: true },
  single_registered_mother_young_compensation: { type: Number, required: true }
});

//sheet50
const StreetChildrenSchema = new Schema({
  number_of_children: { type: Number, required: true }
});
//sheet49
//Schemafordataaboutchildreninorphanages
const OrphanageChildSchema = new Schema({
  number_of_children: { type: Number, required: true }
});

//Schemafordataaboutorphanagefamilies
const OrphanageFamilySchema = new Schema({
  number_of_families: { type: Number, required: true }
});
//sheet48
const PopulationByAgeAndGenderSchema = new Schema({
  year: { type: Number, required: true },
  male: {
    age_0_17: { type: Number, required: true },
    age_18_25: { type: Number, required: true },
    total: { type: Number, required: true }
  },
  female: {
    age_0_17: { type: Number, required: true },
    age_18_25: { type: Number, required: true },
    total: { type: Number, required: true }
  },
  total: { type: Number, required: true }
});

//sheet46-47
const ChildWelfareSchema = new Schema({
  year: { type: Number, required: true },
  proportion_good_height_for_age: { type: Number }
});

const ChildDependencyRatioSchema = new Schema({
  year: { type: Number },
  ratio: { type: Number }
});

//sheet44-45
const NewbornSchema = new Schema({
  year: Number,
  male: Number,
  female: Number,
  total: Number,
  rate: Number
});

//sheet42
const CommunityOrganisationCouncilSchema = new Schema({
  area: Number
});

//sheet38-41
const RoadAccidentSchema = new Schema({
  year: Number,
  injuries: Number,
  fatalities: Number,
  disabilities: Number
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

//sheet36.1-37
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
//sheet31-34
const StudentSchema = new Schema({
  year: Number,
  disadvantaged: {
    total: Number,
    special: Number,
    combined: Number
  },
  dropouts: {
    total: Number,
    male: Number,
    female: Number
  },
  underprivileged: {
    total: Number,
    male: Number,
    female: Number
  },
  hardships: {
    street_children: Number,
    minority_groups: Number,
    abandoned_children: Number,
    forced_child_labor: Number,
    abused_children: Number,
    drug_abuse: Number,
    involved_in_sex_trade: Number,
    institutionalized_children: Number,
    impoverished_children: Number,
    delinquents: Number,
    self_supporting: Number,
    AIDS_affected: Number,
    multiple_categories: Number
  },
  G1_2566: {
    total: Number,
    male: Number,
    female: Number
  },
  G2_2565: {
    total: Number,
    male: Number,
    female: Number
  },
  average_years_of_education: {
    aye62: Number,
    aye63: Number,
    aye64: Number,
    aye65: Number
  }
});

//sheet28
const KindergartenSchema = new Schema({
  //----อนุบาล
  state_preparatory_schools: Number,
  private_preparatory_schools: Number,
  public_preparatory_schools: Number,
  bangkok_pattaya_preparatory_schools: Number,
  total_preparatory_schools: Number,
  //----ก่อนประถม
  state_before_primary_schools: Number,
  private_before_primary_schools: Number,
  public_before_primary_schools: Number,
  bangkok_pattaya_before_primary_schools: Number,
  total_before_primary_schools: Number,
  //----ประถมศึกษา
  state_primary_schools: Number,
  private_primary_schools: Number,
  public_primary_schools: Number,
  bangkok_pattaya_primary_schools: Number,
  total_primary_schools: Number,
  //----มัธยมศึกษาตอนต้น
  state_lower_secondary_schools: Number,
  private_lower_secondary_schools: Number,
  public_lower_secondary_schools: Number,
  bangkok_pattaya_lower_secondary_schools: Number,
  total_lower_secondary_schools: Number,
  //----มัธยมศึกษาตอนปลาย
  state_upper_secondary_schools: Number,
  private_upper_secondary_schools: Number,
  public_upper_secondary_schools: Number,
  bangkok_pattaya_upper_secondary_schools: Number,
  total_upper_secondary_schools: Number,
  //----ประกาศนียบัตรวิชาชีพ (ปวช.)
  state_vocational_certificate_office: Number,
  provincial_vocational_certificate_office: Number,
  total_vocational_certificate_office: Number
});

//sheet27
const OfficeSchema = new Schema({
  name: String,
  total_offices: { type: Number, default: 0 }
});

const EducationDepartmentSchema = new Schema({
  basic_education_committee_office: OfficeSchema,
  private_education_promotion_committee_office: OfficeSchema,
  vocational_education_committee_office: OfficeSchema,
  private_vocational_education_committee_office: OfficeSchema,
  local_administration_promotion_department: OfficeSchema,
  total_schools_in_system: Number,
  learning_promotion_department: OfficeSchema,
  total_schools_all: Number
});

//sheet26
const ArticleSchema = new Schema({
  article_33: { type: Number, required: true },
  article_39: { type: Number, required: true },
  article_40: { type: Number, required: true }
});

//sheet24-25
const LaborSchema = new Schema({
  year: Number,
  in_system: { type: Number, required: true },
  out_system: { type: Number, required: true }
});

const ForeignWorkerSchema = new Schema({
  year: Number,
  total: { type: Number, required: true }
});

//sheet20and23
const HouseholdSavingSchema = new Schema({
  year: Number,
  percentage: { type: Number, required: true }
});
//sheet21and22
const UnemploymentSchema = new Schema({
  total: { type: Number, required: true },
  male: { type: Number, required: true },
  female: { type: Number, required: true },
  unemployment_rate: {
    '63': { type: Number, required: true },
    '64': { type: Number, required: true },
    '65': { type: Number, required: true },
    '66': { type: Number, required: true }
  }
});

//sheet17-19
const AverageMonthlyIncomeSchema = new Schema({
  income: {
    '60': { type: Number, required: true },
    '62': { type: Number, required: true },
    '64': { type: Number, required: true }
  }
});

const DebtSchema = new Schema({
  total_debt: {
    '60': { type: Number, required: true },
    '62': { type: Number, required: true },
    '64': { type: Number, required: true }
  },
  categories: {
    for_household_expenses: { type: Number, required: true },
    for_non_agricultural_business: { type: Number, required: true },
    for_agricultural_business: { type: Number, required: true },
    for_education: { type: Number, required: true },
    for_house_and_land: { type: Number, required: true },
    others: { type: Number, required: true }
  }
});

const InequalityCoefficientSchema = new Schema({
  coefficient: {
    '62': { type: Number, required: true },
    '63': { type: Number, required: true },
    '64': { type: Number, required: true },
    '65': { type: Number, required: true }
  }
});

//sheet16
const GDPPerCapitaSchema = new Schema({
  year: { type: Number, required: true },
  gdp_per_capita: {
    '58': { type: Number, required: true },
    '59': { type: Number, required: true },
    '60': { type: Number, required: true },
    '61': { type: Number, required: true },
    '62': { type: Number, required: true },
    '63': { type: Number, required: true },
    '64': { type: Number, required: true }
  },
  growth_63_64: { type: Number, required: true }
});

//sheet15.1-15.2
const SuicideAttemptSchema = new Schema({
  year: { type: Number, required: true },
  attempts: {
    '63': { type: Number, required: true },
    '64': { type: Number, required: true },
    '65': { type: Number, required: true },
    '66': { type: Number, required: true }
  }
});

const SuicideSuccessSchema = new Schema({
  count: { type: Number, required: true },
  mid_year_population: { type: Number, required: true },
  success_rate: { type: Number, required: true }
});

//sheet14.2
const HealthDataSchema = new Schema({
  year: { type: Number, required: true },
  total_patients: {
    '2022': { type: Number },
    '2023': { type: Number }
  },
  increase_decrease_rate_66: { type: Number },
  suicide_attempts: {
    '63': { type: Number },
    '64': { type: Number },
    '65': { type: Number },
    '66': { type: Number }
  }
});

//sheet14.1
const PatientSchema = new Schema({
  year: { type: Number, required: true },
  cumulativeCount: { type: Number, required: true },
  newCount: { type: Number, required: true },
  oldAndNewCount: { type: Number, required: true },
  ratePerHundredThousand: { type: Number, required: true }
});

const AmountVolunteerSchema = new Schema({
  year: { type: Number, required: true },
  avt: { type: Number, required: true },
  population_mid_year: { type: Number, required: true },
  avt_per_people: { type: Number, required: true }
});

const AobSchema = new Schema({
  year: { type: Number, required: true },
  aob: { type: Number, required: true }
});

const MedicalPersonSchema = new Schema({
  year: { type: Number, required: true },
  doc: { type: Number, required: true },
  dent: { type: Number, required: true },
  phar: { type: Number, required: true },
  nurse: { type: Number, required: true }
});

const HospitalDataSchema = new Schema({
  year: { type: Number, required: true },
  types: {
    hospital_community: { type: Number, required: true },
    hospital_general: { type: Number, required: true },
    hospital_center: { type: Number, required: true },
    hospital_Subdistricthealthpromotion: { type: Number, required: true },
    DistrictPublicHealthOffice: { type: Number, required: true }
  },
  medical_personnel: [MedicalPersonSchema],
  aob_data: [AobSchema],
  volunteer_data: [AmountVolunteerSchema],
  patient_data: [PatientSchema],
  SuicideAttempt: [SuicideAttemptSchema],
  SuicideSuccess: [SuicideSuccessSchema],
  HealthData: [HealthDataSchema]
});

const PopulationDataSchema = new Schema({
  year: { type: Number, required: true },
  province_code: { type: String, required: true },
  province_name: { type: String, required: true },
  administrative_region: { type: String, required: true },
  base_year: { type: Number, required: true },
  area: { type: Number, required: true },
  population_2566: { type: Number, required: true },
  population_density: { type: Number, required: true },
  number_households: { type: Number, required: true },
  municipality: {
    province_municipality: { type: Number, required: true },
    city_municipality: { type: Number, required: true },
    town_municipality: { type: Number, required: true },
    district_municipality: { type: Number, required: true },
    local_administration_organization: { type: Number, required: true }
  },
  population_data: {
    type: [{
      age_group: { type: String, required: true },
      gender: { type: String, required: true },
      population: { type: Number, required: true },
      percentage: { type: Number, required: true }
    }],
    required: true
  },
  hospital_data: [HospitalDataSchema],
  GDPPerCapita: [GDPPerCapitaSchema],
  PopulationByAgeAndGender: [PopulationByAgeAndGenderSchema],
  ChildWelfare: [ChildWelfareSchema],
  ChildDependencyRatio: [ChildDependencyRatioSchema],
  newborn: [NewbornSchema],
  CommunityOrganisationCouncil: [CommunityOrganisationCouncilSchema],
  RoadAccident: [RoadAccidentSchema],
  CommunityWelfareFund: [CommunityWelfareFundSchema],
  RuralSufficiency: [RuralSufficiencySchema],
  SecureHomeProject: [SecureHomeProjectSchema],
  Case: [CaseSchema],
  Student: [StudentSchema],
  Kindergarten: [KindergartenSchema],
  EducationDepartment: [EducationDepartmentSchema],
  Article: [ArticleSchema],
  Labor: [LaborSchema],
  ForeignWorker: [ForeignWorkerSchema],
  HouseholdSaving: [HouseholdSavingSchema],
  LaborForce: [LaborForceSchema],
  Unemployment: [UnemploymentSchema],
  AverageMonthlyIncome: [AverageMonthlyIncomeSchema],
  Volunteer: [VolunteerSchema],
  Performance: [PerformanceSchema],
  DisabledPopulation: [DisabledPopulationSchema],
  ElderlyAllowance: [ElderlyAllowanceSchema],
  housingAdjustment: [housingAdjustmentSchema],
  elderlyKnowledge: [elderlyKnowledgeSchema],
  elderlyFuneralHome: [elderlyFuneralHomeSchema],
  elderlySchool: [elderlySchoolSchema],
  EldersocialAssistance: [EldersocialAssistanceSchema],
  funeralAssistance: [funeralAssistanceSchema],
  elderlyLoan: [elderlyLoanSchema],
  screening: [screeningSchema],
  ElderlyPopulation: [ElderlyPopulationSchema],
  CommunityFamilyDevelopmentCenter: [CommunityFamilyDevelopmentCenterSchema],
  WomenDevelopme: [WomenDevelopmentFund],
  FemaleEmployeeTermination: [FemaleEmployeeTerminationSchema],
  employment: [employmentSchema],
  ViolenceCause: [ViolenceCauseSchema],
  AgeGroup: [AgeGroupSchema],
  DomesticViolence: [DomesticViolenceSchema],
  FamilySurvey: [FamilySurveySchema],
  MarriageDivorce: [MarriageDivorceSchema],
  Population: [PopulationSchema],
  Numberofchildprotectioncommunitycenters: [NumberofchildprotectioncommunitycentersSchema],
  ActivityData: [ActivityDataSchema],
  ChildSupport: [ChildSupportSchema],
  ChildCase: [ChildCaseSchema],
  InappropriateBehavior: [InappropriateBehaviorSchema],
  ChildAndYouth: [ChildAndYouthSchema],
  ChildCare: [ChildCareSchema],
  StreetChildren: [StreetChildrenSchema],
  OrphanageChild: [OrphanageChildSchema],
  OrphanageFamily: [OrphanageFamilySchema],
});

module.exports = mongoose.model('Province', PopulationDataSchema);