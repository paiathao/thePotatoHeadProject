const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const RequestSchema = new Schema({
    baby: { type: [], required: true },
    nominatorName: { type: String, required: true },
    nominatorEmail: { type: String, required: true },
    parentName: { type: String, required: true },
    parentEmail: { type: String, required: true },
    hospitalName: { type: String, required: true },
    streetAddress: { type: String, required: true },
    streetAddress2: { type: String},
    floorNumber:{ type: Number },
    roomNumber: { type: Number },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalcode: { type: String, required: true },
    country: { type: String, required: true },  
    personalNote: { type: String},
    subscription: { type: Boolean, default: false },
    tracking: { type: String},
    note: { type: String},
    hospitalVerified: { type: Boolean, default: false },
    markedSent: { type: Boolean, default: false }
 });
module.exports = mongoose.model('Request', RequestSchema);
