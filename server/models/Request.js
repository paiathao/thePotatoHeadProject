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
    address: { type: String, required: true },
    address2: { type: String},
    floorNumber:{ type: Number, required: true},
    roomNumber: { type: Number, required: true },
    state: { type: String, required: true },
    postalcode: { type: String, required: true },
    country: { type: String, required: true },  
    personalNote: { type: String},
    subscription: { type: Boolean, default: false },
 });
 
 

module.exports = mongoose.model('Request', RequestSchema);
