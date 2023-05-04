"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
class WhatsappService {
    SendMessageWhatsApp(textResponse, number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "text": {
                "body": textResponse
            },
            "type": "text"
        });
        const options = {
            host: "graph.facebook.com",
            path: "/v16.0/108938368857495/messages",
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer EAAB29YL8bSkBADQV4DUu1lpjFIQ3r3J5MRknPBEjZA0THmUuZA4ZAjNpW7rZBTgQxr7q7amZCjECmNaNSAQFcIrTyVnGL8jFxY3BQnkjmCd5r7arZBtaGMHUFhftmsTtLFr50r0OS0PyB1ztg9qCSDymhnG2pix0rkrubHPZATpZAQ25RGlwIlkJY65q1QSKb5lol66dieKtHAZDZD"
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
        console.log(data, "Si llega");
        req.end();
    }
}
const whatsappService = new WhatsappService();
exports.default = whatsappService;
