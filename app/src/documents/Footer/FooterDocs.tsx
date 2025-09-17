import Image from 'next/image';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const basePath = '/Obelisco-V2';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { FOOTER, FOOTER_ACCESSIBILTY, FOOTER_INDICATOR, FOOTER_LEGALS } from './code-views';

const FooterDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Completo',
      firstTitle: true,
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

  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>
                Debe estar presente obligatoriamente en todas las páginas del producto digital, utilizando el tipo de
                pie de página <i>(footer)</i> correspondiente.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Contextos de uso',
      content: (
        <>
          <div className="list-informative">
            <p className="">El componente puede contener los siguientes elementos: </p>
            <ul className="list-informative-bullet">
              <li>Enlaces de utilidad (teléfonos de emergencias, atención ciudadana, entre otros). </li>
              <li>Información legal como términos y condiciones, políticas de privacidad y licencias de contenido. </li>
              <li>Enlaces a redes sociales e información de contacto. </li>
              <li>Marcas de identidad de la organización. </li>
              <li>Indicador de utilidad acerca del contenido de la página. </li>
            </ul>
          </div>

          <div className="mt-4 mb-2">
            <div className="col">
              <p className="text-xl mb-2" style={{ marginTop: '2rem !important' }}>
                Legales (predeterminado)
              </p>
              <p className="text-md mb-3">
                Se utiliza en los procesos destinados a trámites, consultas, servicios, transacciones y perfil
                ciudadano, donde se requiere un enfoque en el contenido y una navegación lineal.
              </p>
            </div>
          </div>
          <div className="col">
            <Image
              src={`${basePath}/images/footer/footer_legales.svg`}
              alt="Enlace tipo predeterminado"
              width="800"
              height="200"
              className="img-fluid"
            />
          </div>
          <div className="mt-4 mb-2">
            <div className="col">
              <p className="text-xl mb-2" style={{ marginTop: '2rem !important' }}>
                Con información útil
              </p>
              <p className="text-md mb-3">
                Se utiliza en páginas orientadas a la asistencia al ciudadano, ofreciéndole canales de contacto y
                asistencia.
              </p>
            </div>
          </div>
          <div className="col">
            <Image
              src={`${basePath}/images/footer/footer_informacion_util.svg`}
              alt="Enlace tipo predeterminado"
              width="800"
              height="200"
              className="img-fluid"
            />
          </div>
          <div className="mt-4 mb-2">
            <div className="col">
              <p className="text-xl mb-2" style={{ marginTop: '2rem !important' }}>
                Con indicador de utilidad
              </p>
              <p className="text-md mb-3">
                Permite que las personas usuarias puedan dar feedback sobre la utilidad de los contenidos del sitio.
                Solo se utiliza en páginas informativas.
              </p>
            </div>
          </div>
          <div className="col">
            <Image
              src={`${basePath}/images/footer/footer_indicador.svg`}
              alt="Enlace tipo predeterminado"
              width="800"
              height="200"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
  ];

  const SPECS = [
    {
      title: 'Anatomía',
      firstTitle: true,
      content: (
        <>
          <Image
            src={`${basePath}/images/footer/footer_anatomia.svg`}
            alt="Anatomia del footer"
            width="800"
            height="280"
            className="img-fluid"
          />
          <div className="responsive-scroll mt-4 mb-5" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Elemento
                  </th>
                  <th scope="col" className="tb-text">
                    Carácter
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Indicador de utilidad</td>
                  <td>Opcional, se puede usar en páginas informativas.</td>
                </tr>
                <tr>
                  <td>Información útil</td>
                  <td>Opcional, se requiere según el contenido de la página</td>
                </tr>
                <tr>
                  <td>Legales</td>
                  <td>Obligatorio, se requiere en todas las páginas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Variantes',
      content: (
        <>
          <p className="text-md mb-4">
            El pie de página <i>(footer)</i> tiene 3 variantes/bloques: legales, con información útil, y con indicador
            de utilidad. <strong>La variante de legales es obligatoria y debe incluirse en todas las pantallas</strong>.
            Las demás pueden incluirse según la necesidad.{' '}
          </p>
        </>
      ),
    },
    {
      subtitle: <>Legales</>,
      content: (
        <>
          <p className="text-md mb-4">
            Contiene el logo y el escudo de la Ciudad de Buenos Aires, e información legal.
          </p>
          <Image
            src={`${basePath}/images/footer/footer_especificaciones_legales.svg`}
            alt="Footer especifiaciones legales"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: <>Información útil</>,
      content: (
        <>
          <p className="text-md mb-4">Contiene teléfonos útiles y redes sociales de la Ciudad.</p>
          <Image
            src={`${basePath}/images/footer/footer_especificaciones_informacion_util.svg`}
            alt="Footer Información útil"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: <>Indicador de utilidad</>,
      content: (
        <>
          <p className="text-md mb-4">Está compuesto de una pregunta y dos acciones posibles de la misma jerarquía.</p>
          <Image
            src={`${basePath}/images/footer/footer_especificaciones_indicador.svg`}
            alt="Indicador de utilidad"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: (
        <>
          Dispositivos <i>tablet</i>
        </>
      ),
      content: (
        <>
          <Image
            src={`${basePath}/images/footer/footer_tablet.svg`}
            alt="Tablet"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: (
        <>
          {' '}
          Dispositivos <i>mobile</i>
        </>
      ),
      content: (
        <>
          <Image
            src={`${basePath}/images/footer/footer_mobile.svg`}
            alt="Mobile"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
      ),
    },
  ];

  const ACCESSIBILITY = [
    {
      title: 'Navegación alternativa',
      firstTitle: true,
      content: (
        <>
          <p className="text-md" style={{ marginBottom: '32px' }}>
            Todos los elementos del pie de página <i>(footer)</i> pueden recorrerse utilizando la navegación por teclado
            u otras herramientas de asistencia como lectores por voz.
          </p>
          <span className="badge badge-s-default">TAB</span>
          <span className="badge badge-s-default">ENTER</span>
          <p className="text-md mb-4">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con
            el <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
            otros.
          </p>

          <Image
            src={`${basePath}/images/footer/footer_ilustracion.svg`}
            alt="Navegacion alternativa del footer"
            width="800"
            height="285"
            className="img-fluid mb-3"
          />
        </>
      ),
    },
    {
      title: 'Encabezados ocultos para navegación',
      content: (
        <>
          <p className="text-md mb-4">
            Se crearon encabezados ocultos con la clase <i>sr-only</i> para facilitar la navegación de los distintos
            bloques del pie de página.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines className="mb-3">
            {FOOTER_ACCESSIBILTY}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicados',
      content: (
        <>
          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.11 Non-Text Contrast (Level AA)
          </a>
          <p>
            La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
            relación de contraste de 3:1 con respecto a los colores adyacentes.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.3.1 Info and Relationships (Level A)
          </a>
          <p>
            La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
            mediante programación o están disponibles en el texto.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.10 Reflow (Level AA)
          </a>
          <p>
            El contenido puede presentarse sin pérdida de información o funcionalidad y sin necesidad de desplazarse en
            dos dimensiones, siempre que el desplazamiento vertical se ajuste a un ancho equivalente a 320 píxeles CSS y
            el desplazamiento horizontal a una altura equivalente a 256 píxeles CSS, excepto en aquellas partes del
            contenido que requieran un diseño bidimensional para su uso o significado.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.4 Resize Text (Level AA)
          </a>
          <p>
            Excepto por los subtítulos e imágenes de texto, el texto puede redimensionarse hasta un 200 % sin tecnología
            de asistencia, sin pérdida de contenido ni funcionalidad.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.1 Keyboard (Level A)
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.2 No Keyboard Trap (Level A)
          </a>
          <p>
            Si el foco del teclado puede moverse a un componente de la página utilizando una interfaz de teclado,
            también debe ser posible mover el foco fuera de ese componente usando únicamente la misma interfaz de
            teclado. Si se requiere algo más que las teclas de flecha, tabulador u otros métodos estándar para salir, se
            debe informar al usuario sobre el método necesario para mover el foco.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
            target="_blank"
            rel="nooper noreferrer"
          >
            Success Criterion 2.4.7 Focus Visible (Level AA)
          </a>
          <p>
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Pie de Página (Footer)"
        description={[
          'El pie de página (o footer en Inglés) se sitúa en la parte inferior de todos los activos digitales de Gobierno. Contiene información institucional o de acceso rápido que permite a los usuarios encontrar de forma sencilla la información que necesitan.',
        ]}
      />
      <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTIONS_DEV}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
            sectionContent: SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default FooterDocs;
