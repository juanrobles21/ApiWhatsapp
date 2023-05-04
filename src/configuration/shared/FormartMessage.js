"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormartMessage {
    Text(textResponse, number) {
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
    Image(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "image",
            image: {
                link: "https://www.eluniverso.com/resizer/a7RzV9cpgq3r0Pxpo__CtrcH2Wk=/arc-anglerfish-arc2-prod-eluniverso/public/NUNM6L7XP26ZH2ZX2UUP7C5JIA.jpg",
            },
        });
        return data;
    }
    Audio(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "audio",
            audio: {
                link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3",
            },
        });
        return data;
    }
    Video(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "video",
            video: {
                link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4",
            },
        });
        return data;
    }
    Document(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "document",
            document: {
                link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
            },
        });
        return data;
    }
    Button(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "interactive",
            interactive: {
                type: "button",
                body: {
                    text: "¿Confirmas tu registro",
                },
                action: {
                    buttons: [
                        {
                            type: "reply",
                            reply: {
                                id: "001",
                                title: "Sí",
                            },
                        },
                        {
                            type: "reply",
                            reply: {
                                id: "002",
                                title: "No",
                            },
                        },
                    ],
                },
            },
        });
        return data;
    }
    List(number) {
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
    Ubication(number) {
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
}
const formartMessage = new FormartMessage();
exports.default = formartMessage;
