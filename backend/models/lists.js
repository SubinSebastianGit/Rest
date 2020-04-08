var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let List = new Schema({
    title: {
        type: String
    },
    rollno: {
        type: String,
        default: '0'
    }
});

module.exports = mongoose.model('List', List);

