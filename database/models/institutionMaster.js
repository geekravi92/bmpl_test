const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const institutionMasterSchema = new Schema({
    institutionId: { type: String },
    institutionPassword: { type: String },
    institutionName: { type: String },
    institutionLogo: { type: String },
    institutionUrl: { type: String },
    institutionFacebookUrl: { type: String },
    institutionTwitterHandle: { type: String },
    institutionLinkedinUrl: { type: String },
    institutionYouTubeUrl: { type: String },
    examinerIds: [{ type: String }],
    candidateIds: [{ type: String }],
    sections: [{ type: String }],
    createdOn: { type: Date },
    updatedOn: { type: Date },
    active: { type: String }
});

module.exports = mongoose.model('institutionMasters', institutionMasterSchema);