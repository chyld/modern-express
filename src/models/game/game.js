import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/twitch');
module.exports = mongoose.model('Game', { name: String });
