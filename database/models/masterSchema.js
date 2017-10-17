const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const masterSchema = new Schema({
    sections: [{ type: String }],
    levels: [{ type: String }],
    companyName: { type: String },
    companyLogo: { type: String },
    roles: [{ type: String }],
    groupNames: [{ type: String }],
    rightNames: [{ type: String }],
    years: [{ type: Number }],
    monthsTwodigits: [{ type: Number }],
    monthsAlphabetic: [{ type: String }],
    locations: [{ type: String }]
});

module.exports = mongoose.model('masters', masterSchema);