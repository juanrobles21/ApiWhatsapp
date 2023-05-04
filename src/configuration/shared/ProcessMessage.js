"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ModelsWhatsapp_1 = __importDefault(require("./ModelsWhatsapp"));
const WhatsappService_1 = __importDefault(require("../services/WhatsappService"));
class ProcessMessage {
    Process(textUser, number) {
        textUser = textUser.toLowerCase();
        var models = [];
        //hola que tal
        if (textUser.includes("hola")) {
            //SALUDAR
            var model = ModelsWhatsapp_1.default.MessageText("Hola, un gusto saludarte", number);
            models.push(model);
        }
        else if (textUser.includes("gracias")) {
            //AGRADECIMIENTO
            var model = ModelsWhatsapp_1.default.MessageText("Con gusto, gracias por comunicarte con nosotros", number);
            models.push(model);
        }
        else if (textUser.includes("adios") || textUser.includes("adiós") || textUser.includes("bye") || textUser.includes("chao")) {
            //DESPEDIDA
            var model = ModelsWhatsapp_1.default.MessageText("Ve con DIOS", number);
            models.push(model);
        }
        else {
            //NO TE ENTIENDO
            var model = ModelsWhatsapp_1.default.MessageText("No entiendo lo que dices...", number);
            models.push(model);
        }
        models.forEach(data => {
            WhatsappService_1.default.SendMessageWhatsApp(data);
        });
    }
}
const processMessage = new ProcessMessage();
exports.default = processMessage;
