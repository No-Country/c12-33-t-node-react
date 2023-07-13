import { ADMIN_EMAIL } from './config';

export function registerMessageBody(email, nombre, apellido) {
    return {
        from: `"Nuevo registro" <${ADMIN_EMAIL}>`,
        to: `${email}`,
        subject: 'Nuevo registro en FestBNB!',
        html: `<h2>Nuevo registro de usuario</h2>
        
           <p>Nombre del usuario:</p> <b> ${nombre}</b>
           <p>Apellido del usuario: </p> <b>${apellido} </b>
           <p>Email del usuario: </p> <b>${email} </b>
          `
    };
}