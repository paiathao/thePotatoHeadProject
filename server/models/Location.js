const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    lat: { type: [], required: true },
    lng: { type: [], required: true}
})


module.exports = mongoose.model('Location', LocationSchema);