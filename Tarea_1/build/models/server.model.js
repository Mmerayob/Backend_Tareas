"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("../routes/index.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.SetRouters();
    }
    configuration() {
        this.app.set('port', 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    SetRouters() {
        this.app.use('/api', index_routes_1.default);
    }
    Start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Lo está escuchando en el puerto 3000");
        });
    }
}
exports.Server = Server;
