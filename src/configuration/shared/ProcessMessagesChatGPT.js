"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChatgptService_1 = __importDefault(require("../services/ChatgptService"));
const WhatsappService_1 = __importDefault(require("../services/WhatsappService"));
const ModelsWhatsapp_1 = __importDefault(require("./ModelsWhatsapp"));
class ProcessMessageChatGPT {
    Process(textUser, number) {
        return __awaiter(this, void 0, void 0, function* () {
            textUser = textUser.toLowerCase();
            var models = [];
            const resultChatGPT = yield ChatgptService_1.default.GetMessageChaGPT(textUser);
            if (resultChatGPT != null) {
                var model = ModelsWhatsapp_1.default.MessageText(resultChatGPT, number);
                models.push(model);
            }
            else {
                var model = ModelsWhatsapp_1.default.MessageText("Lo siento algo salió mal, inténtalo más tarde.", number);
                models.push(model);
            }
            models.forEach((model) => {
                WhatsappService_1.default.SendMessageWhatsApp(model);
            });
        });
    }
}
const processMessageChatGPT = new ProcessMessageChatGPT();
exports.default = processMessageChatGPT;
