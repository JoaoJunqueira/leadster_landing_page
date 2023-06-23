import Image from "next/image";
import comparativo from "./../../../public/comparativo_img_CTA.png";

export default function Demo() {
  return (
    <section>
      <Image src={comparativo} alt={"comparativo"} width={500} height={500} />
      <div>
        <h1>Pronto para triplicar sua <strong>Geração de Leads?</strong></h1>
        <h3>Criação e ativação em <strong>4 minutos.</strong></h3>
      </div>
      <div>
        <button>VER DEMONSTRAÇÃO</button>
      </div>
    </section>
  );
}
