const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://CCA:<hello123>@cca.9uawe7a.mongodb.net/?retryWrites=true&w=majority", {
  dbName: "cca",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
