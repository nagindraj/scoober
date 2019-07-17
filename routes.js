const express = require('express');

const router = express.Router();
let gamesModel = require('./models/game');
let createPlayerDetails = require('./player-details');

router.post('/login', (req, res) => {
  const email = req.body.email;

  gamesModel.findOne({id: email}, function(err, game) {
    if(err) {
      throw err;
    }
    if(!game) {
      let randomNumber = Math.floor(Math.random() * 99) + 2;
      let turnOne = createPlayerDetails(randomNumber);
      let nextTurn = createPlayerDetails(turnOne.calculatedValue);

      gamesModel.create({
          id: email,
          players: [{
            player : 'player_1',
            initialValue : randomNumber,
            addedNumber : turnOne.addedNumber,
            calculation: turnOne.calculation,
            calculatedValue: turnOne.calculatedValue,
            nextNumberToBeAdded: nextTurn.addedNumber
          }]
        },
        function (err, data) {
          if (err) {
            return res.status(500).json({message: "Couldn't insert"})
          }

          res.json(data);
      });
    }else if(game) {
      res.json(game);
    }
  });
});

router.post('/continue', (req,res) => {
  const email = req.body.email;
  const player = req.body.player;
  const initialValue = req.body.initialValue;
  let turn = createPlayerDetails(initialValue);
  let nextTurn = createPlayerDetails(turn.calculatedValue);

  let dataForNextTurn = {
    player : player,
    initialValue : parseInt(initialValue),
    addedNumber : turn.addedNumber,
    calculation: turn.calculation,
    calculatedValue: turn.calculatedValue,
    nextNumberToBeAdded: nextTurn.addedNumber
  };

  gamesModel.findOne({id: email}, function(err, game) {
    if(err) {

    }
    game.players.push(dataForNextTurn);

    game.save(function(err) {
      if(err) {
        throw err
      }

      return res.json(game);
    });
  });
});

router.post('/delete', (req, res) => {
  const email = req.body.email;
  gamesModel.deleteOne({id: email}, function(err) {
    if(err) {
      throw err;
    }

    res.json({ message: 'Game Deleted'})
  });
});

module.exports = router;