const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testReport = new Schema({
    testId: { type: String },
    testAttemptedCandidateIds: [{ type: String }],
    testAssignedCandidateIds: [{ type: String }]
});