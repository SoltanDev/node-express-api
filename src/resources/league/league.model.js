import mongoose from 'mongoose';

const leagueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
      type: string
    }
})

export default mongoose.model('League', leagueSchema)