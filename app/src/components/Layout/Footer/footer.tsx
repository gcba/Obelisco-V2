import React from 'react';

const basePath = '/Obelisco-V2';


export default function Footer() {
  return (
    <>
      <h2 className="sr-only">Navegación de pie de página</h2>
      <footer className="main-footer mt-5">
        <div className="container">
          <section className="footer-legal-section">
            <h3 className="sr-only">Información gubernamental</h3>
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-xl-4 footer-content-img">
                <img
                  className="d-md-none"
                  src={`${basePath}/images/LogoBAMobile.svg`}
                  alt="Logo de Ciudad de Buenos Aires"
                  height="48"
                />
                <img
                  className="d-none d-md-inline"
                  src={`${basePath}/images/Logo-escudo-vertical.svg`}
                  alt="Logo de Ciudad de Buenos Aires"
                  height="40"
                />
                <img
                  className="img-vamos-ba"
                  src={`${basePath}/images/LogoBA2.svg`}
                  alt="Logo de Vamos Buenos Aires"
                />
              </div>
              <div className="col-12">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://boletinoficial.buenosaires.gob.ar">Boletín oficial</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://buenosaires.gob.ar/inicio/terminos-y-condiciones">Términos y condiciones</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://buenosaires.gob.ar/inicio/privacidad">Política de privacidad</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales">
                      Oficios judiciales
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.buenosaires.gob.ar/gobierno/transparencia">Transparencia</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="footer-license-text">
              Los contenidos de buenosaires.gob.ar están licenciados bajo Creative Commons Reconocimiento 2.5 Argentina
              License.
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
