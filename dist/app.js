"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require('dotenv').config();
var app = (0, express_1.default)();
var port = process.env.PORT || 4000;
app.get('/', function (req, res, next) {
    res.send('hello');
});
app.listen(port, function () { return console.log("Server running at port " + port); });
