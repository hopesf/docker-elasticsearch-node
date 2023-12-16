"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// controllers
const controllers_1 = __importDefault(require("../controllers"));
const router = (0, express_1.Router)();
// find users, crud
router.get('/', controllers_1.default.homePage);
router.get('/addProduct', controllers_1.default.addProduct);
router.get('/product', controllers_1.default.getProduct);
exports.default = router;
//# sourceMappingURL=index.js.map