"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
class WhatsappService {
    SendMessageWhatsApp(textResponse, number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "text": {
                "body": "El usuario dijo: ", textResponse
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
                Authorization: "Bearer EAAB29YL8bSkBAOxVISziyt7WWskA1ZB3rhL0NdFFfZApJOnuryPVGqu7yABPoSZAJiXVYmIb3lFKUNqfbvqCuBoY6KrN5JJALuZCx3kyEs3dhZBYhB76uPR7sUklKsUApEokjZBxxsDyEfg877s8ytZBykHi2weCoozuewtAU1BZA36ORgkdIsVqdiNBrNv5QneODHMA8hzOzwEexkSqhdHXhZBBnOpYoTZB0ZD"
            }
        };
        const req = https.request(options, (res) => {
            res.on("data", d => {
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
