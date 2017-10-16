const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailVerificationSchema = new Schema({
    emailLink: { type: String },
    createdOn: { type: Date }
});

const mobileVerificationSchema = new Schema({
    mobileOtp: { type: Number },
    createdOn: { type: Date }
});

const extraSchema = new Schema({
    userId: { type: String },
    sessions: [{ type: String }],
    emailVerification: { type: emailVerificationSchema },
    mobileVerification: { type: mobileVerificationSchema }
});

module.exports = mongoose.model('extras', extraSchema);