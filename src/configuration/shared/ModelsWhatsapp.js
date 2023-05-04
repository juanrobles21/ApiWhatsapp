"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelsWhatsapp {
    MessageText(textResponse, number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            text: {
                body: textResponse,
            },
            type: "text",
        });
        return data;
    }
    MessageList(textResponse, number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "interactive",
            interactive: {
                type: "list",
                header: {
                    type: "text",
                    text: "Tengo estas opciones",
                },
                body: {
                    text: "Son:",
                },
                footer: {
                    text: "Selecciona una de las opciones para poder atenderte",
                },
                action: {
                    button: "Ver opciones",
                    sections: [
                        {
                            title: "Compra y vende productos",
                            rows: [
                                {
                                    id: "main-comprar-header",
                                    title: "Comprar",
                                    description: "Compra los mejores productos para tu hogar",
                                },
                                {
                                    id: "main-comprar",
                                    title: "Vender",
                                    description: "Vende tus productos",
                                },
                            ],
                        },
                        {
                            title: "Centro de atencion",
                            rows: [
                                {
                                    id: "main-agencia",
                                    title: "Agencia",
                                    description: "Puedes visitar nuestra agencia.",
                                },
                                {
                                    id: "main-contacto",
                                    title: "Centro de contacto",
                                    description: "Te atenderá uno de nuestro agentes",
                                },
                            ],
                        },
                    ],
                },
            },
        });
        return data;
    }
}
const modelsWhatsapp = new ModelsWhatsapp();
exports.default = modelsWhatsapp;
