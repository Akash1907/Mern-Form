const mongoose = require('mongoose');
const url = 'mongodb+srv://akashyoungster789:Akash1907@cluster0.9tmgydj.mongodb.net/User_Information?retryWrites=true&w=majority';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });