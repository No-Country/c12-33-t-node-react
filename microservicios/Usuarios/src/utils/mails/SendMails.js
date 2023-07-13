import { createTransport } from 'nodemailer';
import { NODEMAILER_CONFIG } from './config';

export default class SendMails {
    #nodemailer_client;
    constructor() {
        this.#nodemailer_client = createTransport(NODEMAILER_CONFIG);
    }

    async send(mailOptions) {
        try {
            return await this.#nodemailer_client.sendMail(mailOptions);
        } catch (e) {
            console.error(e);
        }
    }
} 