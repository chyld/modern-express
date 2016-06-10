import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:32000/twitch');
module.exports = mongoose.model('Game', { name: String });
