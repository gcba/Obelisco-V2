import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <>
      <h2 className="visually-hidden">Navegación de pie de página</h2>
      <footer className="main-footer bg-secondary text-white py-5 mt-5">
        <div className="container">
          <section className="footer-legal-section">
            <h3 className="visually-hidden">Información gubernamental</h3>
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-xl-4 d-flex mb-5">
                <Image
                  className="d-lg-none"
                  src="https://gcba.github.io/Obelisco/footer/ciudad-ba-sm.svg"
                  alt="Logo de Ciudad de Buenos Aires"
                  height="48"
                  width="100"
                />
                <Image
                  className="d-none d-lg-inline"
                  src="https://gcba.github.io/Obelisco/footer/ciudad-ba-sm.svg"
                  alt="Logo de Ciudad de Buenos Aires"
                  height="40"
                  width="120"
                />
                <div className="h-100 mx-3 bg-warning"></div>
                <Image
                  className="img-vamos-ba"
                  src="https://gcba.github.io/Obelisco/footer/vamos-ba.svg"
                  alt="Logo de Vamos Buenos Aires"
                  height="40"
                  width="100"
                />
              </div>
              <div className="col-12">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://boletinoficial.buenosaires.gob.ar" className="text-white">
                      Boletín oficial
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://buenosaires.gob.ar/inicio/terminos-y-condiciones" className="text-white">
                      Términos y condiciones
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://buenosaires.gob.ar/inicio/privacidad" className="text-white">
                      Política de privacidad
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales"
                      className="text-white"
                    >
                      Oficios judiciales
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.buenosaires.gob.ar/gobierno/transparencia" className="text-white">
                      Transparencia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="footer-license-text text-xs">
              Los contenidos de buenosaires.gob.ar están licenciados bajo Creative Commons Reconocimiento 2.5 Argentina
              License.
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
