"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const data_1 = __importDefault(require("../services/data"));
class IndexController {
    listar(req, res) {
        res.json(data_1.default);
    }
}
exports.IndexController = IndexController;
exports.default = new IndexController();
