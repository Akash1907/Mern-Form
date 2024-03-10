const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./database/userInfo");
require("./database/config");

const router = express.Router();
const app = express();
const PORT = process.env.PORT || 5000;

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
//   next();
// });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// app.use(cors());
app.use(bodyParser.json());

app.use(cors({
  origins: 'https://mern-form-navy.vercel.app/'
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the MERN stack application!");
});

app.post("/items/users", (req, res) => {
  const { name, age, email, mobileNumber } = req.body;

  const newUser = new User({
    name,
    age,
    email,
    mobileNumber,
  });

  newUser
    .save()
    .then((user) => {
      res.status(201).json(user);
      console.log("Item added successfully");
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to save user to the database" });
    });
});

app.get("/items/getUsers", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.delete("/items/deleteUser/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log("Backend userID - ", userId);

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

app.put("/items/updateUser/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
    console.log('User updated successfully');
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
});
