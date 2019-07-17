const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    id: {
        type: String,
        unique: true
    },
    players: [{
        player: String,
        addedNumber: Number,
        initialValue:Number,
        calculation: String,
        calculatedValue: Number,
        nextNumberToBeAdded: Number
    }]
});

const gamesModel = mongoose.model('Games', gameSchema);

module.exports = gamesModel;