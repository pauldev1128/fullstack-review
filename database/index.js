const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected")
});


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  owner: {
    login: String,
    url: String
  },
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  return Repo.create(data)
}

module.exports.save = save;