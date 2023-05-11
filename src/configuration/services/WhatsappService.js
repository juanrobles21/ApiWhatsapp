"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
class WhatsappService {
    SendMessageWhatsApp(data) {
        const options = {
            host: "graph.facebook.com",
            path: "/v16.0/108938368857495/messages",
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(process.env.TOKEN)
            }
        };
        const req = https_1.default.request(options, (res) => {
            res.on("data", (d) => {
                process.stdout.write(d);
            });
        });
        req.on("error", (error) => {
            console.error(error);
        });
        req.write(data);
        req.end();
    }
}
const whatsappService = new WhatsappService();
exports.default = whatsappService;
