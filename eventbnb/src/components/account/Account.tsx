import Image from "next/image";
import account from "../utils/account.json";

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
    <section className="mx-4">
      <div className="mt-16 mb-14 ml-4 text-[#222222] text-3xl">
        <h1>Cuenta</h1>
        <div className="text-lg mt-2 mb-4">
        <span>Exequiel Gerez, </span>
        <span>exe2016gerez@gmail.com · </span>
        <a href={` /account-settings/${userTemplate._id}`}>Ir al perfil</a>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap px-2">
        {account.account.map((item) => (
          <div key={item.title} className="my-2 p-4 w-96 rounded-xl shadow-lg">
            <div>
              <Image
                className="block mb-4"
                width={32}
                height={32}
                src={item.URLImage}
                alt={item.title}
              />
            </div>
            <div>
              <div className="text-[#222222] text-base mb-2">{item.title}</div>
              <div className="text-[#717171] text-sm">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Account;
