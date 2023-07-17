const { createTransport } = require('nodemailer');
const { NODEMAILER_CONFIG } = require('./config');


class SendMails {
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

module.exports = SendMails;