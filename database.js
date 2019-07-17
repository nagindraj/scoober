const mongoose = require('mongoose');

const connectToMongo = () => {
  const connectionString = 
  'mongodb+srv://njakkin:sanjay@mongodb-nag-mnagl.mongodb.net/gameDB?retryWrites=true&w=majority';

  mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connection successful');
  }).catch((err) => {
    console.error('Database connection error');
  });
}

module.exports = connectToMongo;