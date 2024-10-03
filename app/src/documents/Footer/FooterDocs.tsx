import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { FOOTER, FOOTER_INDICATOR, FOOTER_LEGALS } from './code-views';

const FooterDocs: React.FC = () => {
  const sections = [
    {
      title: 'Footer (pie de página)',
      h1: true,
      content: (
        <MainDescription description="El pie de página (o footer en Inglés) se sitúa en la parte inferior de todos los activos digitales de Gobierno. Contiene información institucional o de acceso rápido que permite a los usuarios encontrar de forma sencilla la información que necesitan." />
      ),
    },
    {
      id: 'section-1',
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
                    <li className="list-inline-item redes-items">
                      <a href="https://x.com/gcba">
                        <i className="o-icon bx bxl-twitter"></i>
                        Twitter
                      </a>
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
                        className="d-lg-none"
                        src="https://gcba.github.io/Obelisco/footer/ciudad-ba-sm.svg"
                        alt="Logo de Ciudad de Buenos Aires"
                        height="48"
                      />
                      <img
                        className="d-none d-lg-inline"
                        src="https://gcba.github.io/Obelisco/footer/ciudad-ba.svg"
                        alt="Logo de Ciudad de Buenos Aires"
                        height="40"
                      />
                      <img
                        className="img-vamos-ba"
                        src="https://gcba.github.io/Obelisco/footer/vamos-ba.svg"
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
      id: 'section-2',
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
                        className="d-lg-none"
                        src="https://gcba.github.io/Obelisco/footer/ciudad-ba-sm.svg"
                        alt="Logo de Ciudad de Buenos Aires"
                        height="48"
                      />
                      <img
                        className="d-none d-lg-inline"
                        src="https://gcba.github.io/Obelisco/footer/ciudad-ba.svg"
                        alt="Logo de Ciudad de Buenos Aires"
                        height="40"
                      />
                      <img
                        className="img-vamos-ba"
                        src="https://gcba.github.io/Obelisco/footer/vamos-ba.svg"
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
      id: 'section-3',
      title: 'Con indicador',
      content: (
        <CodeBox codeHTML={FOOTER_INDICATOR}>
          <div className="px-4">
            <h2 className="sr-only">Navegación de pie de página</h2>
            <div className="footer-info">
              <div className="container">
                <h3 className="footer-info-text">¿Te fue útil esta página?</h3>
                <div className="footer-info-actions">
                  <button className="btn btn-primary">Sí, me fue útil</button>
                  <button className="btn btn-secondary">No me sirvió</button>
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
                    <li className="list-inline-item redes-items">
                      <a href="https://x.com/gcba">
                        <i className="o-icon bx bxl-twitter"></i>
                        Twitter
                      </a>
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
                        className="d-lg-none"
                        src="https://gcba.github.io/Obelisco/footer/ciudad-ba-sm.svg"
                        alt="Logo de Ciudad de Buenos Aires"
                        height="48"
                      />
                      <img
                        className="d-none d-lg-inline"
                        src="https://gcba.github.io/Obelisco/footer/ciudad-ba.svg"
                        alt="Logo de Ciudad de Buenos Aires"
                        height="40"
                      />
                      <img
                        className="img-vamos-ba"
                        src="https://gcba.github.io/Obelisco/footer/vamos-ba.svg"
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
      <DocumentationTemplate sections={sections} />
    </>
  );
};

export default FooterDocs;
