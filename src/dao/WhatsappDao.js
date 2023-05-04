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
const GetTextUser = (messages) => {
    var text = "";
    var typeMessge = messages["type"];
    if (typeMessge == "text") {
        text = (messages["text"])["body"];
    }
    else if (typeMessge == "interactive") {
        var interactiveObject = messages["interactive"];
        var typeIneractive = interactiveObject["type"];
        myConsole.log(interactiveObject);
        if (typeIneractive == "button_reply") {
            text = interactiveObject["button_reply"]["title"];
        }
        else if (typeIneractive == "list_reply") {
            text = interactiveObject["list_reply"]["title"];
        }
        else {
            myConsole.log("sin mensaje");
        }
    }
    else {
        myConsole.log("sin mensaje");
    }
    return text;
};
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
                    console.log(text);
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
