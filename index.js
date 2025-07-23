require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });

// ✅ Create User
app.post("/users", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const user = new User({ name, email, age });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ Read All Users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ✅ Read User by ID
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

// ✅ Update User by ID
app.put("/users/:id", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ Delete User by ID
app.delete("/users/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: "User not found" });
    res.status(204).send();
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
