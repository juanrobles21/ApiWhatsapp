"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WhatsappDao_1 = __importDefault(require("../dao/WhatsappDao"));
class WhatsappController extends WhatsappDao_1.default {
    VerifyToken(req, res) {
        WhatsappController.VerifyToken(req, res);
    }
    ReceivedMenssage(req, res) {
        WhatsappController.ReceivedMenssage(req, res);
    }
}
const whatsappController = new WhatsappController();
exports.default = whatsappController;
