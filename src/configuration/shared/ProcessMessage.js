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
        if (textUser.includes("hola") ||
            textUser.includes("buenos") ||
            textUser.includes("buenas")) {
            //SALUDAR
            var model = ModelsWhatsapp_1.default.MessageText("Hola, un gusto saludarte", number);
            models.push(model);
            var modelList = ModelsWhatsapp_1.default.MessageList(number);
            models.push(modelList);
        }
        else if (textUser.includes("gracias")) {
            //AGRADECIMIENTO
            var model = ModelsWhatsapp_1.default.MessageText("Con gusto, gracias por comunicarte con nosotros", number);
            models.push(model);
        }
        else if (textUser.includes("adios") ||
            textUser.includes("adiós") ||
            textUser.includes("bye") ||
            textUser.includes("chao")) {
            //DESPEDIDA
            var model = ModelsWhatsapp_1.default.MessageText("Ve con DIOS", number);
            models.push(model);
        }
        else if (textUser.includes("comprar")) {
            //COMPRAR
            var modelButton = ModelsWhatsapp_1.default.MessageButton(number);
            models.push(modelButton);
        }
        else if (textUser.includes("vender")) {
            //VENDER
            var model = ModelsWhatsapp_1.default.MessageText("Segir la siguiente cuenta: linkedin.com/in/juan-pablo-robles-arias-00316626b", number);
            models.push(model);
        }
        else if (textUser.includes("agendar")) {
            //AGENCIA
            var model = ModelsWhatsapp_1.default.MessageText("Registatre en el siguiente formulario para poder agendarte 💪: https://docs.google.com/forms/d/e/1FAIpQLSeV2-BAld86gZy0aq_ZMRXU9FJnZBBw5yyWxVB4KlfXJmXadA/viewform", number);
            models.push(model);
        }
        else if (textUser.includes("centro de contacto")) {
            //CENTRO DE CONTACTO
            var model = ModelsWhatsapp_1.default.MessageUbication(number);
            models.push(model);
        }
        else if (textUser.includes("chat")) {
            //CHAT GPT
            var model = ModelsWhatsapp_1.default.MessageContacto(number);
            models.push(model);
        }
        else if (textUser.includes("contact")) {
            //CHAT GPT
            var model = ModelsWhatsapp_1.default.MessageContact(number);
            models.push(model);
        }
        else {
            //NO TE ENTIENDO
            var model = ModelsWhatsapp_1.default.MessageText("No entiendo lo que dices...", number);
            models.push(model);
        }
        models.forEach((data) => {
            WhatsappService_1.default.SendMessageWhatsApp(data);
        });
    }
}
const processMessage = new ProcessMessage();
exports.default = processMessage;
