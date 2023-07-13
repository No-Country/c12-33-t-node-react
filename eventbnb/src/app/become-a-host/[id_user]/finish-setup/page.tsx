import ButtonHalls from "@/components/create-halls/ButtonHalls";
import Passed from "@/components/create-halls/Passed";

export default function PagePassed2() {
  return (
    <>
    <Passed
      title="Paso 3"
      subtitle="Terminá todo y publicá el salón"
      description="Por último, agregá algunos datos de contacto, ubicación de tu salón de fiestas y cinco fotos o más. Luego, vas a tener que crear un título y una descripción."
    />
    <ButtonHalls href="/title" hrefPrev="/floor-plan" content="Siguiente" color="black" backBtn={true}/>
    </>
    
  );
}
