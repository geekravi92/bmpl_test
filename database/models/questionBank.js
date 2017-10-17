const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    optionKey: { type: Number },
    optionValue: { type: String },
    optionWeight: { type: Number }
});


const QuestionsSchema = new Schema({
    questionSection: { type: String },
    question: { type: String },
    options: { type: optionSchema },
    correctOptions: [{ type: String }],
    correctAnswerExplation: { type: String }
});

module.exports = mongoose.model('questions', QuestionsSchema);