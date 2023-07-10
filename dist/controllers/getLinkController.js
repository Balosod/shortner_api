"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../DB/prisma"));
const http_status_codes_1 = require("http-status-codes");
const getLink = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (id) {
        try {
            const long_link = await prisma_1.default.url.findFirstOrThrow({
                where: {
                    shorted_link: id,
                },
            });
            res
                .status(http_status_codes_1.StatusCodes.OK)
                .redirect(long_link.link);
        }
        catch (error) {
            res.sendFile(__dirname + "/404.html");
        }
    }
    else {
        res.sendFile(__dirname + "/404.html");
    }
};
exports.default = getLink;
