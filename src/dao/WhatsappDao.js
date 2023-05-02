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
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./log.txt"));
function GetTextUser(messages) {
    var _a, _b, _c;
    var text = "";
    var typeMessge = messages.type;
    if (typeMessge == "text") {
        text = ((_a = messages.text) === null || _a === void 0 ? void 0 : _a.body) || "";
    }
    else if (typeMessge == "interactive") {
        var interactiveObject = messages.interactive;
        var typeInteractive = interactiveObject === null || interactiveObject === void 0 ? void 0 : interactiveObject.type;
        console.log(typeInteractive);
        if (typeInteractive == "button_reply") {
            text = ((_b = interactiveObject === null || interactiveObject === void 0 ? void 0 : interactiveObject.button_reply) === null || _b === void 0 ? void 0 : _b.title) || "";
        }
        else if (typeInteractive == "list_reply") {
            text = ((_c = interactiveObject === null || interactiveObject === void 0 ? void 0 : interactiveObject.button_reply) === null || _c === void 0 ? void 0 : _c.title) || "";
        }
    }
    else {
        console.log("sin mesanje");
        myConsole.log("sin mensaje");
    }
    return text;
}
class WhatsappDao {
    static VerifyToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accessToken = "R3849322SJFDK3953DJDJNFW53259283";
                const token = req.query["hub.verify_token"];
                const challenge = req.query["hub.challenge"];
                if (challenge != null && token != null && token == accessToken) {
                    res.send(challenge);
                }
                else {
                    res.status(400).send();
                }
            }
            catch (e) {
                res.status(400).send();
            }
        });
    }
    static ReceivedMenssage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var entry = (req.body["entry"])[0];
                var changes = (entry["changes"])[0];
                var value = changes["value"];
                var messageObject = value["messages"];
                if (typeof messageObject !== "undefined") {
                    var messages = messageObject[0];
                    var text = GetTextUser(messages);
                    myConsole.log(text);
                }
                myConsole.log(messageObject);
                res.send("EVENT_RECEIVED");
            }
            catch (e) {
                myConsole.log(e);
                res.send("EVENT_RECEIVED");
            }
        });
    }
}
exports.default = WhatsappDao;
