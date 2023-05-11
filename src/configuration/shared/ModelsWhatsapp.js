"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelsWhatsapp {
    MessageText(textResponse, number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            text: {
                preview_url: true,
                body: textResponse,
            },
            type: "text",
        });
        return data;
    }
    MessageList(number) {
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
                                    title: "Agendar",
                                    description: "Cada viernes a las 8pm.",
                                },
                                {
                                    id: "main-contacto",
                                    title: "Centro de contacto",
                                    description: "Te atenderá uno de nuestro agentes",
                                },
                            ],
                        },
                        {
                            title: "Inteligencia Artificial",
                            rows: [
                                {
                                    id: "main-gpt",
                                    title: "Chat GPT",
                                    description: "Habla con ChatGPT en tiempo real",
                                },
                            ],
                        },
                    ],
                },
            },
        });
        return data;
    }
    MessageButton(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "interactive",
            interactive: {
                type: "button",
                body: {
                    text: "Selecciona uno los productos",
                },
                action: {
                    buttons: [
                        {
                            type: "reply",
                            reply: {
                                id: "option-laptop",
                                title: "Laptop",
                            },
                        },
                        {
                            type: "reply",
                            reply: {
                                id: "option-pc",
                                title: "pc",
                            },
                        },
                    ],
                },
            },
        });
        return data;
    }
    MessageUbication(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "location",
            location: {
                latitude: "5.544349450913517",
                longitude: "-73.3512510799502",
                name: "Hit Data",
                address: "Centro Comercial Boulevard, Cl. 32 # 3-76, Tunja, Boyacá",
            },
        });
        return data;
    }
    MessageContacto(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "interactive",
            interactive: {
                type: "button",
                header: {
                    type: "image",
                    image: {
                        link: "https://images.pexels.com/photos/15863044/pexels-photo-15863044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    },
                },
                body: {
                    text: "Escribir al siguiente numero...",
                },
                action: {
                    buttons: [
                        {
                            type: "reply",
                            reply: {
                                id: "001",
                                title: "Contact US",
                            },
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
