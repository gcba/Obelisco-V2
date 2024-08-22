import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import MainDescription from "@/components/Template/MainDescription";

const CardDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Tarjetas",
      content: (
        <div>
          <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
        </div>
      ),
      h1: true,
    },
    {
      id: "section-2",
      title: "Horizontal",
      content: (
        <>
          <h2>Con ícono</h2>
          <div className="card card-horizontal">
            <i className="bx bxs-info-circle card-icon-left"></i>
            <div className="card-body">
              <h5 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta con más de una línea
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>

          <h3>Con imagen</h3>
          <div className="card card-horizontal"></div>

          <h3>Solo texto</h3>
          <div className="card card-horizontal"></div>

          <h3>Temática</h3>
          <div className="card card-horizontal"></div>
        </>
      ),
    },
    {
      id: "section-3",
      title: "Vertical",
      content: (
        <>
          <h3>Con ícono</h3>
          <p>ejemplo</p>

          <h3>Con imagen</h3>
          <p>ejemplo</p>

          <h3>Noticia</h3>
          <p>ejemplo</p>

          <h3>Agenda</h3>
          <p>ejemplo</p>
        </>
      ),
    },
    {
      id: "section-4",
      title: "Disposición",
      content: (
        <>
          <h3>Tres Columnas</h3>
          <p>ejemplo</p>

          <h3>Dos Columnas</h3>
          <p>ejemplo</p>

          <h3>Desplazable</h3>
          <p>ejemplo</p>
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default CardDocs;
