import { InsertUser, DeleteUsers, ReadUsers, FindUser } from "./src/index";
import express from "express";
import { User } from "./src/index";

const jwt = require("jsonwebtoken");

const secretKey = "pass123";

const app = express();
app.use(express.json());
app.get("/", function (req, res) {
  res.send("This is Great");
});
app.get("/deleteallusers", async function (req, res) {
  await DeleteUsers();
  res.send("Users Deleted");
});
app.post("/signup", async function (req, res) {
  try {
    const usersignup: User = req.body;
    const userid = await InsertUser(usersignup);
    res.send("User Signed Up Successfully with id " + userid);
  } catch (e) {
    res.send("Some Error has Occured");
  }
});
app.get("/login", async function (req, res) {
  let username: string = req.query.username as string;
  let password: string = req.query.password as string;
  try {
    const resp = await FindUser(username, password);
    var token = jwt.sign(resp, secretKey);
    res.send("Bearer:" + token);
  } catch (e) {}
});
app.get("/readusers", async function (req, res) {
  const data = await ReadUsers();
  res.send(JSON.stringify(data));
});
app.listen(3000, function () {
  console.log("Server is Listening...");
});
