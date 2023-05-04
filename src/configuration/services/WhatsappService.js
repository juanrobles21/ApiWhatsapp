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
                Authorization: "Bearer EAAB29YL8bSkBACNbPEJT05VPK0gxr8fcnYZA1qCPrlMlfKQzQ8jzCjHjrhyRImShTvYmECWXvxfFqjKAADKWQoN6H94ZBsEeuzbFmHIPIZCnzbj9ivFr8ZCJ5ZCahQGb7IZAtIZCwf4GiECequYlNbsK9GeLOOv5gP5wm4WUbPxghyHOz6HJCQM"
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
