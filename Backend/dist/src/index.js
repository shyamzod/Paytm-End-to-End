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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUsertoUserBalance = exports.FindUser = exports.ReadUsers = exports.DeleteUsers = exports.InsertUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function InsertUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield prisma.user.create({
            data: {
                username: user.username,
                password: user.password,
                email: user.email.toLowerCase(),
                MobileNo: user.MobileNo,
            },
            select: {
                Id: true,
            },
        });
        return resp;
    });
}
exports.InsertUser = InsertUser;
function DeleteUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.deleteMany();
    });
}
exports.DeleteUsers = DeleteUsers;
function ReadUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany();
        return res;
    });
}
exports.ReadUsers = ReadUsers;
function FindUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user.findFirst({
                where: { email, password },
                select: { Id: true, username: true },
            });
            if (res != undefined) {
                return { Id: res.Id, username: res.username };
            }
        }
        catch (e) { }
    });
}
exports.FindUser = FindUser;
function AddUsertoUserBalance(userbalance) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.userBalance.create({
            data: {
                UserId: userbalance.userId,
                Amount: userbalance.Balance.toFixed(2),
            },
        });
    });
}
exports.AddUsertoUserBalance = AddUsertoUserBalance;
