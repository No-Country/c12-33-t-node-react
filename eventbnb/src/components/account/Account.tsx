
import Image from 'next/image'
import account from "../utils/account.json";
import  "./Account.css";

interface User {
  _id: string;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: string;
  fechaNacimiento: Date;
  domicilio: string;
  localidad: string;
  pais: string;
}
const Account: React.FC<{ userTemplate: User }> = ({ userTemplate }) => {
  console.log(userTemplate);

  return (
    <>
      <div>
        <span>Exequiel Gerez, </span>
        <span>exe2016gerez@gmail.com · </span>
        <a
          href={` /account-settings/${userTemplate._id}`}
        >
          Ir al perfil
        </a>
      </div>
      <div className="flex flex-col items-center justify-between" >
      {account.account.map((item) => (
        
          <div key={item.title} className="card mt-6 w-96 justify-self-auto">
            <div style={{ marginBottom: "16px" }}>
              <Image width={40} height={40} src={item.URLImage} alt={item.title} />
            </div>
            <div>
              <div className="card__title">{item.title}</div>
              <div className="card__description">{item.description}</div>
            </div>
          </div>
      ))}
      </div>
    </>
  );
};

export default Account;
