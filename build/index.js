"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("./sub/controller");
var database_1 = __importDefault(require("./sub/database"));
var app = express_1.default();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use(express_1.default.json());
app.use("/drfauna", controller_1.userRoute());
database_1.default()
    .then(function () {
    console.log("database is alive");
    app.listen(5500, function () {
        console.log("the website is alive");
    });
})
    .catch(function (err) {
    console.log(err);
});
