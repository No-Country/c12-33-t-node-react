const Usuario = require('../data');
const { response } = require('../utils');
const sendMails = require('../utils/mails/index');
const registerMsgBody = require('../utils/mails/registerMessageBody');

module.exports = async (req, res) => {
    const user = req.body;
    console.log(user);
    const newUser = await Usuario.create(user);
    const registerMail = registerMsgBody();
    const sendMail = sendMails();

    response(res, 201, newUser);
}