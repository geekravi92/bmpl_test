const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const testOptionsSchema = new Schema({
//     testOptionKey: { type: Number },
//     testOptionValue: { type: String },
//     testOptionWeight: { type: Number }
// });

// const testQuestionsSchema = new Schema({
//     testQuestionId: { type: String },
//     testQuestion: { type: String },
//     testOptions: { type: testOptionsSchema },
//     testCorrectOptions: [{ type: String }],
//     testCorrectAnswerExplation: { type: String }
// });

const testProfileSchema = new Schema({
    testName: { type: String },
    testDescription: { type: String },
    testInstructions: [{ type: String }],
    testLevel: { type: String },
    testSection: { type: String },
    testTotalQuestionsCount: { type: Number },
    testDuration: { type: Number },
    canCompleteLater: { type: String },
    canSwitchToQuestions: { type: String },
    testScore: { type: Number },
    passingMarks: { type: String },
    // testquestions: { type: testQuestionsSchema }
    testQuestions: [{ type: Schema.ObjectId, ref: 'questions' }]
});

const testSchema = new Schema({
    testProfile: { type: testProfileSchema },
    isTestPremium: { type: String },
    examinerId: { type: String },
    testActive: { type: String },
    testCreatedOn: { type: Date },
    testUpdatedOn: { type: Date }
});

module.exports = mongoose.model('tests', testSchema);