import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import MainDescription from "@/components/Template/MainDescription";

const CardDocs: React.FC = () => {
  const sections = [
    {
      title: 'Tarjetas',
      h1: true,
      id: "section-1",
      content: (
        <div>
          <MainDescription description="Las tarjetas son componentes accionables que se utilizan en grupo para comunicar información que requiere de cierto tipo de categorización y jerarquización visual. Se visualizan en contenedores flexibles y actúan como punto de entrada a un tema en particular." />
        </div>
      ),
    },
    {
      id: "section-2",
      title: "Horizontal",
      content: (
        <>
          <h3 className="mt-5" >Con ícono</h3>

          <div className="card card-horizontal">
            <i className="bx bxs-info-circle card-icon-left"></i>
            <div className="card-body">
              <h5 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>

          <div className="card card-horizontal unbordered">
            <i className="bx bxs-info-circle card-icon-left"></i>
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">
                  Título de la tarjeta
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>

          <h3 className="mt-5" >Con imagen</h3>
          <div className="card card-horizontal">
            <img src="https://gcba.github.io/Obelisco/cards/img-left.jpg" className="card-img-left" alt="Img GCBA" />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta con más de una línea
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>

          <div className="card card-horizontal unbordered">
            <img src="https://gcba.github.io/Obelisco/cards/img-left.jpg" className="card-img-left" alt="Img GCBA" />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">
                  Título de la tarjeta con más de una línea
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>

          <h3 className="mt-5" >Solo texto</h3>
          <div className="card card-horizontal">
            <div className="card-body">
              <h5 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>

          <div className="card card-horizontal unbordered">
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">
                  Título de la tarjeta
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>

          <h3 className="mt-5" >Temática</h3>
          <div className="card card-horizontal unbordered">
            <img className="card-img-left" src="https://gcba.github.io/Obelisco/cards/home.svg" alt="Imagen Tematica" />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">
                  Título de la tarjeta con más de una línea
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "section-3",
      title: "Vertical",
      content: (
        <>

          <h3>Con ícono</h3>
          <div className="card">
          <div className="card-body">
          <i className="bx bxs-info-circle card-icon"></i>
              <h5 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>

          <h3 className="mt-5" >Con imagen</h3>
          <div className="card">
            <img className="card-img-top" src="https://gcba.github.io/Obelisco/cards/img-top.jpg" alt="Imagen Tarjeta Noticia" />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>

          <h3 className="mt-5" >Noticia</h3>
          <div className="card">
            <img className="card-img-top" src="https://gcba.github.io/Obelisco/cards/img-top.jpg" alt="Imagen Tarjeta Noticia" />
            <div className="card-body">
              <div className="card-badges">
                <span className="badge badge-secondary">etiqueta 1</span>
                <span className="badge badge-secondary">etiqueta 2</span>
              </div>
              <h5 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
              <div className="card-info">
                <div className="pt-2">
                  <small>
                    <span>Fecha de publicación</span>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mt-5" >Agenda</h3>
          <div className="card">
            <img className="card-img-top" src="https://gcba.github.io/Obelisco/cards/img-top.jpg" alt="Imagen Tarjeta Noticia" />
            <div className="card-body">
              <p className="card-headline">sobrelinea</p>
              <h5 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta
                </a>
              </h5>
              <p className="card-text">Descripción de la tarjeta</p>
              <div className="card-info">
                <div className="pt-2">
                  <small>
                    <span className="material-symbols-rounded">
                      calendar_today
                    </span>
                    Lun 01/1
                  </small>
                  <small>
                    <span className="material-symbols-rounded">
                      schedule
                    </span>
                    17 | 18 | 19 hs
                  </small>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "section-4",
      title: "Disposición",
      content: (
        <>
          <h3>Tres Columnas</h3>
          <div className="max-items-3">
            <div className="col">
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
            </div>
            <div className="col">
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
            </div>
            <div className="col">
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
            </div>
          </div>


          <h3>Dos Columnas</h3>
          <div className="max-items-2">
            <div className="col">
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
            </div>
            <div className="col">
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
            </div>
            <div className="col">
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
            </div>
            <div className="col">
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
            </div>
          </div>

          <h3>Desplazable</h3>
          <p>ejemplo</p>
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default CardDocs;