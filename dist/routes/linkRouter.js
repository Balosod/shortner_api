"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postLinkController_1 = __importDefault(require("../controllers/postLinkController"));
const getLinkController_1 = __importDefault(require("../controllers/getLinkController"));
const router = express_1.default.Router();
router
    .route('/post-link')
    .post(postLinkController_1.default);
// router.post('/post-link',validateUrl,postLink)
router
    .route('/get-link/:id')
    .get(getLinkController_1.default);
exports.default = router;
