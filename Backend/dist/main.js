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
const jwt = require("jsonwebtoken");
const secretKey = "pass123";
const app = (0, express_1.default)();
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
            const userid = yield (0, index_1.InsertUser)(usersignup);
            res.send("User Signed Up Successfully with id " + userid);
        }
        catch (e) {
            res.send("Some Error has Occured");
        }
    });
});
app.get("/login", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let username = req.query.username;
        let password = req.query.password;
        try {
            const resp = yield (0, index_1.FindUser)(username, password);
            var token = jwt.sign(resp, secretKey);
            res.send("Bearer:" + token);
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
