import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { FOOTER, FOOTER_INDICATOR, FOOTER_LEGALS } from './code-views';

const basePath = '/Obelisco-V2';

const FooterDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Completo',
      content: (
        <CodeBox codeHTML={FOOTER}>
          <div className="px-4">
            <h2 className="sr-only">Navegación de pie de página</h2>
            <footer className="main-footer">
              <div className="container">
                <section>
                  <h3>Teléfonos útiles</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item phone-items">
                      <a href="tel:102">102 - Niñez y Adolescencia</a>
                    </li>
                    <li className="list-inline-item phone-items">
                      <a href="tel:103">103 - Emergencias</a>
                    </li>
                    <li className="list-inline-item phone-items">
                      <a href="tel:107">107 - SAME</a>
                    </li>
                    <li className="list-inline-item phone-items">
                      <a href="tel:911">911 - Policía</a>
                    </li>
                    <li className="list-inline-item phone-items">
                      <a href="tel:144">144 - Violencia de género</a>
                    </li>
                    <li className="list-inline-item phone-items">
                      <a href="tel:147">147 - Atención ciudadana</a>
                    </li>
                  </ul>
                  <a href="https://buenosaires.gob.ar/inicio/telefonos">Ver todos los teléfonos</a>
                </section>
                <section>
                  <h3>Redes de la ciudad</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item redes-items">
                      <a href="https://www.facebook.com/GCBA">
                        <i className="o-icon bx bxl-facebook-circle"></i>
                        Facebook
                      </a>
                    </li>
                    <li className="list-inline-item redes-items">
                      <a href="https://www.instagram.com/gcba/">
                        <i className="o-icon bx bxl-instagram-alt"></i>
                        Instagram
                      </a>
                    </li>
                    <li className="list-inline-item redes-items social-x">
                      <a href="https://x.com/gcba">X</a>
                    </li>
                    <li className="list-inline-item redes-items">
                      <a href="https://www.youtube.com/user/GCBA">
                        <i className="o-icon bx bxl-youtube"></i>
                        YouTube
                      </a>
                    </li>
                    <li className="list-inline-item redes-items">
                      <a href="https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires">
                        <i className="o-icon bx bxl-linkedin-square"></i>
                        LinkedIn
                      </a>
                    </li>
                    <li className="list-inline-item redes-items">
                      <a href="https://www.tiktok.com/@buenosaires">
                        <i className="o-icon bx bxl-tiktok"></i>
                        TikTok
                      </a>
                    </li>
                    <li className="list-inline-item redes-items">
                      <a href="https://www.pinterest.es/buenosaires/">
                        <i className="o-icon bx bxl-pinterest"></i>
                        Pinterest
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <hr className="divider" />
              <div className="container">
                <section className="footer-legal-section">
                  <h3 className="sr-only">Información gubernamental</h3>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-xl-4 footer-content-img">
                      <img
                        className="d-md-none"
                        src={`${basePath}/images/logo-footer-mobile.svg`}
                        alt="Logo de Ciudad de Buenos Aires"
                        height="48"
                      />
                      <img
                        className="d-none d-md-inline"
                        src={`${basePath}/images/logo-footer.svg`}
                        alt="Logo de Ciudad de Buenos Aires"
                        height="40"
                      />
                      <img
                        className="img-vamos-ba"
                        src={`${basePath}/images/logo-footer-ba.svg`}
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
                    Los contenidos de buenosaires.gob.ar están licenciados bajo Creative Commons Reconocimiento 2.5
                    Argentina License.
                  </div>
                </section>
              </div>
            </footer>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Solo legales',
      content: (
        <CodeBox codeHTML={FOOTER_LEGALS}>
          <div className="px-4">
            <h2 className="sr-only">Navegación de pie de página</h2>
            <footer className="main-footer">
              <div className="container">
                <section className="footer-legal-section">
                  <h3 className="sr-only">Información gubernamental</h3>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-xl-4 footer-content-img">
                      <img
                        className="d-md-none"
                        src={`${basePath}/images/logo-footer-mobile.svg`}
                        alt="Logo de Ciudad de Buenos Aires"
                        height="48"
                      />
                      <img
                        className="d-none d-md-inline"
                        src={`${basePath}/images/logo-footer.svg`}
                        alt="Logo de Ciudad de Buenos Aires"
                        height="40"
                      />
                      <img
                        className="img-vamos-ba"
                        src={`${basePath}/images/logo-footer-ba.svg`}
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
                    Los contenidos de buenosaires.gob.ar están licenciados bajo Creative Commons Reconocimiento 2.5
                    Argentina License.
                  </div>
                </section>
              </div>
            </footer>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Con indicador',
      content: (
        <CodeBox codeHTML={FOOTER_INDICATOR}>
          <div className="px-4">
            <h2 className="sr-only">Navegación de pie de página</h2>
            <div className="footer-info">
              <div className="container">
                <h3 className="footer-info-text">¿Te fue útil esta página?</h3>
                <div className="footer-info-actions">
                  <button className="btn btn-outline-secondary">Sí, me fue útil</button>
                  <button className="btn btn-outline-secondary">No me sirvió</button>
                </div>
              </div>
            </div>
            <footer className="main-footer">
              <div className="container">
                <section>
                  <h3>Teléfonos útiles</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item phone-items">
                      <a href="tel:102">102 - Niñez y Adolescencia</a>
                    </li>
                    <li className="list-inline-item phone-items">
                      <a href="tel:103">103 - Emergencias</a>
                    </li>
                    <li className="list-inline-item phone-items">
                      <a href="tel:107">107 - SAME</a>
                    </li>
                    <li className="list-inline-item phone-items">
                      <a href="tel:911">911 - Policía</a>
                    </li>
                    <li className="list-inline-item phone-items">
                      <a href="tel:144">144 - Violencia de género</a>
                    </li>
                    <li className="list-inline-item phone-items">
                      <a href="tel:147">147 - Atención ciudadana</a>
                    </li>
                  </ul>
                  <a href="https://buenosaires.gob.ar/inicio/telefonos">Ver todos los teléfonos</a>
                </section>
                <section>
                  <h3>Redes de la ciudad</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item redes-items">
                      <a href="https://www.facebook.com/GCBA">
                        <i className="o-icon bx bxl-facebook-circle"></i>
                        Facebook
                      </a>
                    </li>
                    <li className="list-inline-item redes-items">
                      <a href="https://www.instagram.com/gcba/">
                        <i className="o-icon bx bxl-instagram-alt"></i>
                        Instagram
                      </a>
                    </li>
                    <li className="list-inline-item redes-items social-x">
                      <a href="https://x.com/gcba">X</a>
                    </li>
                    <li className="list-inline-item redes-items">
                      <a href="https://www.youtube.com/user/GCBA">
                        <i className="o-icon bx bxl-youtube"></i>
                        YouTube
                      </a>
                    </li>
                    <li className="list-inline-item redes-items">
                      <a href="https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires">
                        <i className="o-icon bx bxl-linkedin-square"></i>
                        LinkedIn
                      </a>
                    </li>
                    <li className="list-inline-item redes-items">
                      <a href="https://www.tiktok.com/@buenosaires">
                        <i className="o-icon bx bxl-tiktok"></i>
                        TikTok
                      </a>
                    </li>
                    <li className="list-inline-item redes-items">
                      <a href="https://www.pinterest.es/buenosaires/">
                        <i className="o-icon bx bxl-pinterest"></i>
                        Pinterest
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <hr className="divider" />
              <div className="container">
                <section className="footer-legal-section">
                  <h3 className="sr-only">Información gubernamental</h3>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-xl-4 footer-content-img">
                      <img
                        className="d-md-none"
                        src={`${basePath}/images/logo-footer-mobile.svg`}
                        alt="Logo de Ciudad de Buenos Aires"
                        height="48"
                      />
                      <img
                        className="d-none d-md-inline"
                        src={`${basePath}/images/logo-footer.svg`}
                        alt="Logo de Ciudad de Buenos Aires"
                        height="40"
                      />
                      <img
                        className="img-vamos-ba"
                        src={`${basePath}/images/logo-footer-ba.svg`}
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
                    Los contenidos de buenosaires.gob.ar están licenciados bajo Creative Commons Reconocimiento 2.5
                    Argentina License.
                  </div>
                </section>
              </div>
            </footer>
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Pie de Página (Footer)"
        description={[
          'El pie de página (o footer en Inglés) se sitúa en la parte inferior de todos los activos digitales de Gobierno. Contiene información institucional o de acceso rápido que permite a los usuarios encontrar de forma sencilla la información que necesitan.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/pie-de-pagina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default FooterDocs;
