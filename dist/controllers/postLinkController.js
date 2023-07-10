"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../DB/prisma"));
const short_unique_id_1 = __importDefault(require("short-unique-id"));
const http_status_codes_1 = require("http-status-codes");
const postLink = async (req, res) => {
    const { link } = req.body;
    if (link) {
        const uid = new short_unique_id_1.default();
        const id = uid();
        try {
            const shortenLink = await prisma_1.default.url.create({
                data: {
                    link,
                    shorted_link: id,
                }
            });
            return res
                .status(http_status_codes_1.StatusCodes.OK)
                .json({ "message": shortenLink });
        }
        catch (error) {
            return res
                .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                .json({ "message": error });
        }
    }
    return res
        .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
        .json({ "message": "Link can't be empty" });
};
exports.default = postLink;
