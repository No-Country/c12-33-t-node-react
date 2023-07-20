const { ADMIN_EMAIL } = require('./config');

module.exports = function registerMessageBody({ email }) {
    return {
        from: `"Nuevo registro" <${ADMIN_EMAIL}>`,
        to: `${email}`,
        subject: 'Nuevo registro en FestBNB!',
        html: `<h2>Nuevo registro de usuario</h2>
        
           <p>Email del usuario: </p> <b>${email} </b>
          `
    };
}