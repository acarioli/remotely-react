const express = require("express");
const cors = require("cors");
// const dotenv = require('dotenv').config();
require("./database/connectiondb");
const PORT = process.env.PORT || 8080;

const app = express();
const JobController = require("./controllers/jobController");
const UserController = require("./controllers/userController");
const ContactController = require("./controllers/contactController");
const SubscriptionController = require("./controllers/subscriptionController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  /* res.send('Los ususarios están listos') */
  res.json({
    job: await JobController.findAll(),
  });
});

app.post("/upload", async (req, res) => {
  console.log(req.body);
  await JobController.create(req.body);
  res.json("Job uploaded");
});

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  await JobController.delete(id);
  res.json("Job deleted");
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  await UserController.create(req.body);
  res.json("User register");
});

app.get("/register", async (req, res) => {
  res.json({
    user: await UserController.findAll(),
  });
});

app.delete("/register/:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  await UserController.delete(id);
  res.json("User deleted");
});

app.post("/contactus", async (req, res) => {
  console.log(req.body);
  await ContactController.create(req.body);
  res.json("Message sent");
});

app.get("/contactus", async (req, res) => {
  res.json({
    user: await ContactController.findAll(),
  });
});

app.delete("/contactus/:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  await ContactController.delete(id);
  res.json("Message deleted");
});

app.post("/subscribe", async (req, res) => {
  console.log(req.body);
  await SubscriptionController.create(req.body);
  res.json("Suscription completed");
});

app.get("/subscribe", async (req, res) => {
  res.json({
    user: await SubscriptionController.findAll(),
  });
});

app.delete("/subscribe/:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  await SubscriptionController.delete(id);
  res.json("Subscriptor deleted");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el Puerto: ${PORT}`);
});
