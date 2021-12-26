"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = __importDefault(require("../controllers/index.controller"));
var router;
router = (0, express_1.Router)();
router.get('/persona/lista', index_controller_1.default.listar);
router.get('/persona/lista/:id', index_controller_1.default.listar);
exports.default = router;
