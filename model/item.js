const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    abc : {
        type: String,
        unique: true, 
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

// Define the unique index explicitly for 'abc'
itemSchema.index({ abc: 1 }, { unique: true });

module.exports = mongoose.model('Item', itemSchema);