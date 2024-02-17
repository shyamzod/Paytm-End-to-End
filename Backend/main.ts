import { InsertUser, DeleteUsers, ReadUsers, FindUser } from "./src/index";
import express from "express";
import { User } from "./src/index";
const cors = require("cors");
const jwt = require("jsonwebtoken");
const secretKey = "pass123";
const app = express();
app.use(cors());
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
    const resp = await InsertUser(usersignup);
    if (resp.Id > 0) {
      res.send({ userid: resp.Id, Message: "User Created Successfully" });
    } else {
      console.log(resp);
      res.send(resp);
    }
  } catch (e) {
    res.send("Some Error has Occured");
  }
});
app.post("/login", async function (req, res) {
  let email: string = req.body.email as string;
  let password: string = req.body.password as string;
  try {
    const resp = await FindUser(email, password);
    if (resp != undefined) {
      var token = jwt.sign(resp.Id, secretKey);
      res.send({ Token: "Bearer:" + token, userName: resp.username });
    } else {
      res.send({ Error: "User Credentials Invalid" });
    }
  } catch (e) {}
});
app.get("/readusers", async function (req, res) {
  const data = await ReadUsers();
  res.send(JSON.stringify(data));
});
app.listen(3000, function () {
  console.log("Server is Listening...");
});
