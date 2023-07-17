const ADMIN_EMAIL = require('process').env.ADMIN_EMAIL;
const dotenv = require('dotenv');

dotenv.config({});

const NODEMAILER_CONFIG = {
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: process.env.NODEMAILER_SECURE,
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS
    }
};

module.exports = {
    ADMIN_EMAIL,
    NODEMAILER_CONFIG
};
