const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    abc : {
        type: String,
        unique: true
    },
    def : {
        type: String,
    },
    ghi : {
        type: String,
    },
}, {
    timestamps : true
});

module.exports = mongoose.model('Item', itemSchema);