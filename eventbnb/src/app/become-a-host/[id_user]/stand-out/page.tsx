import ButtonHalls from "@/components/create-halls/ButtonHalls";
import Passed from "@/components/create-halls/Passed";

export default function PagePassed2() {
  return (
    <>
    <Passed
      title="Paso 2"
      subtitle="Hacé que tu salón de fiestas se destaque"
      description=""
    />
    <ButtonHalls href="/floor-plan" hrefPrev="/structure" content="Siguiente" color="black" backBtn={true}/>
    </>
    
  );
}
