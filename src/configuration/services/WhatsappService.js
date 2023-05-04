"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
class WhatsappService {
    SendMessageWhatsApp(textResponse, number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": `whatsapp:${number}`,
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
                Authorization: "Bearer EAAB29YL8bSkBANdyiyUY1n6UlfZBd0hekzDOTCRZBoyK2DZBlOzYisO7APyJA6I7qg0f5E9qyuKvZAgWLrLxh2gK7IxHIvRdMqZBD0m7j2eK3nZBZCmdHsIUxW2HAexVgM6MsD1k7WVjKejTrSeABUsd4c4xXrNZAZAvySvkWHxS69MY2gdVwl2SZCioQrXWHn46dGj2ugTLbv3wZDZD"
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
