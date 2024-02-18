"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./src/index");
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const jwt = require("jsonwebtoken");
const secretKey = "pass123";
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("This is Great");
});
app.get("/deleteallusers", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, index_1.DeleteUsers)();
        res.send("Users Deleted");
    });
});
app.post("/signup", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usersignup = req.body;
            const resp = yield (0, index_1.InsertUser)(usersignup);
            if (resp.Id > 0) {
                yield (0, index_1.AddUsertoUserBalance)({ userId: resp.Id, Balance: 0.0 });
                res.send({ userid: resp.Id, Message: "User Created Successfully" });
            }
            else {
                console.log(resp);
                res.send(resp);
            }
        }
        catch (e) {
            res.send("Some Error has Occured");
        }
    });
});
app.post("/login", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let email = req.body.email;
        let password = req.body.password;
        try {
            const resp = yield (0, index_1.FindUser)(email, password);
            if (resp != undefined) {
                var token = jwt.sign(resp.Id, secretKey);
                res.send({ Token: "Bearer:" + token, userName: resp.username });
            }
            else {
                res.send({ Error: "User Credentials Invalid" });
            }
        }
        catch (e) { }
    });
});
app.get("/readusers", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, index_1.ReadUsers)();
        res.send(JSON.stringify(data));
    });
});
app.listen(3000, function () {
    console.log("Server is Listening...");
});
