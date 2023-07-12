import ButtonHalls from "@/components/create-halls/ButtonHalls";
import Passed from "@/components/create-halls/Passed";

export default function PagePassed2() {
  return (
    <>
    <Passed
      title="Paso 2"
      subtitle="Hacé que tu salón de fiestas se destaque"
      description="En este paso, agregá algunos de los servicios que ofrece tu salón de fiestas y cinco fotos o más. Luego, vas a tener que crear un título y una descripción."
    />
    <ButtonHalls href="/amenities" hrefPrev="/floor-plan" content="Siguiente" color="black" backBtn={true}/>
    </>
    
  );
}
