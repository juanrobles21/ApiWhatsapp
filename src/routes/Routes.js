"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WhatsappControler_1 = __importDefault(require("../controller/WhatsappControler"));
class Routes {
    constructor() {
        this.routesAppiWhatsapp = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesAppiWhatsapp.get("/whatsapp", WhatsappControler_1.default.VerifyToken);
        this.routesAppiWhatsapp.post("/whatsapp", WhatsappControler_1.default.ReceivedMenssage);
    }
}
const routes = new Routes();
exports.default = routes.routesAppiWhatsapp;
