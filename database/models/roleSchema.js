const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rightSchema = new Schema({
    rightName: { type: String },
    rightUrl: { type: Date },
    rightDescription: { type: String },
    active: { type: String },
    createdOn: { type: Date },
    updatedOn: { type: Date }
});
const RightModel = mongoose.model('rights', rightSchema);

const groupSchema = new Schema({
    groupName: { type: String },
    rightIds: [{ type: Date }],
    active: { type: String },
    createdOn: { type: Date },
    updatedOn: { type: Date }
});
const GroupModel = mongoose.model('groups', groupSchema);

const roleSchema = new Schema({
    roleName: { type: String },
    groups: [{ type: String }],
    createdOn: { type: Date },
    updatedOn: { type: Date },
    active: { type: String }
});
const RoleModel = mongoose.model('roles', roleSchema);

module.exports = { RoleModel, RightModel, GroupModel };