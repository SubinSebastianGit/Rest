import mongoose from 'mongoose';

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

export default mongoose.model('List', List);