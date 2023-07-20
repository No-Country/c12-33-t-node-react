const { createTransport } = require('nodemailer');
const { NODEMAILER_CONFIG } = require('./config');


class SendMails {
    #nodemailer_client;
    constructor() {
        this.#nodemailer_client = createTransport(NODEMAILER_CONFIG);
    }

    async send(userData) {
        try {
            return await this.#nodemailer_client.sendMail(userData);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = SendMails;