import mongoose from 'mongoose';

const clubSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

export default mongoose.model('Club', clubSchema)