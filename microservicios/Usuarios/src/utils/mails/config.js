export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export const NODEMAILER_CONFIG = {
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: process.env.NODEMAILER_SECURE,
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS
    }
};