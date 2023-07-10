"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_exist_1 = __importDefault(require("url-exist"));
const validateUrl = async (req, res, next) => {
    const { link } = req.body;
    console.log(link);
    const isExist = await (0, url_exist_1.default)(link);
    if (!isExist) {
        return res.json({ message: "Invalid URL", status: "400" });
    }
    next();
};
exports.default = validateUrl;
