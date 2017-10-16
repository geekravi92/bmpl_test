const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameSchema = new Schema({
    firstName: { type: String },
    secondName: { type: String },
    lastName: { type: String }
});

const emailSchema = new Schema({
    emailId: { type: String },
    isEmailVerified: { type: String },
    emailScore: { type: Number }
});

const mobileSchema = new Schema({
    mobilePrimary: { type: Number },
    isMobilePrimaryVerified: { type: String },
    mobileSecondary: { type: Number },
    mobileScore: { type: Number }
});

const userGeneralProfileSchema = new Schema({
    name: { type: nameSchema },
    email: { type: emailSchema },
    mobile: { type: mobileSchema },
    username: { type: String },
    password: { type: String },
    institutionName: { type: String },
    workingAs: { type: String }
});

const userSchema = new Schema({
    role: { type: String },
    institutionId: { type: String },
    userId: { type: String },
    userGeneralProfile: { type: userGeneralProfileSchema },
    candidateGivenTests: [{ type: String }],
    examinerCreatedTests: [{ type: String }],
    active: { type: String },
    createdOn: { type: Date },
    updatedOn: { type: Date }
});

module.exports = mongoose.model('users', userSchema);