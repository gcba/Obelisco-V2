// import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const SECTIONS_DEV = [
  {
    // ocultar scrollspy si no hay title *
    title: '',
    firstTitle: true,
    content: (
      <>
        <div className="container">
          <main id="main">
            <article className="mb-5">
              <header className="bg-light pt-2 pt-xl-3 pb-4 pb-xl-5 mb-4 mb-xl-5">
                <div className="container pt-1">
                  <nav aria-label="Navegación secundaria" className="py-3">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Inicio</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Jefe de Gobierno</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Trámites</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Título del trámite</a>
                      </li>
                    </ol>
                  </nav>

                  <div className="row">
                    <div className="col-12 col-xl-8">
                      <div className="pt-xl-1 pb-xl-2">
                        <h1 className="mb-3 mb-xl-2">Título del trámite</h1>
                        <p className="lead mb-4">
                          Descripción del trámite que sintetice para qué la persona deberá realizarlo.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-1">Modalidad: </span>
                        <span className="badge badge-default">Presencial</span>
                        <span className="badge badge-default">En línea</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="container pt-2 pt-xl-0">
                <div className="row flex-column-reverse flex-xl-row">
                  <div className="col-12 col-xl-8">
                    <section className="pb-xl-4 pb-2">
                      <h2 className="mb-4">Requisitos para iniciar el trámite</h2>
                      <div className="list-informative mb-4 pb-xl-1 pb-0">
                        <h3 className="list-informative-subtitle">Subtítulo con lista de requisitos 1</h3>
                        <ul className="list-informative-check">
                          <li>
                            Descripción del tipo de requisito que necesita la persona usuaria y que sea condicionante
                            para poder avanzar con el trámite.
                          </li>
                          <li>
                            Descripción del tipo de requisito que necesita la persona usuaria y que sea condicionante
                            para poder avanzar con el trámite.
                            <a href="#" target="_blank" rel="noreferrer">
                              Aquí va un enlace pertinente
                            </a>
                          </li>
                          <li>
                            Descripción del tipo de requisito que necesita la persona usuaria y que sea condicionante
                            para poder avanzar con el trámite.
                          </li>
                        </ul>
                      </div>
                      <div className="list-informative mb-4 pb-xl-1 pb-0">
                        <h3 className="list-informative-subtitle">Subtítulo con lista de requisitos 2</h3>
                        <ul className="list-informative-check">
                          <li>
                            Descripción del tipo de requisito que necesita la persona usuaria y que sea condicionante
                            para poder avanzar con el trámite.
                          </li>
                          <li>
                            Descripción del tipo de requisito que necesita la persona usuaria y que sea condicionante
                            para poder avanzar con el trámite.
                            <a href="#" target="_blank" rel="noreferrer">
                              Aquí va un enlace pertinente
                            </a>
                          </li>
                          <li>
                            Descripción del tipo de requisito que necesita la persona usuaria y que sea condicionante
                            para poder avanzar con el trámite.
                          </li>
                        </ul>
                      </div>
                      <div className="list-informative mb-4 pb-xl-1 pb-0">
                        <h3 className="list-informative-subtitle">Subtítulo con lista de requisitos 3</h3>
                        <ul className="list-informative-check">
                          <li>
                            Descripción del tipo de requisito que necesita la persona usuaria y que sea condicionante
                            para poder avanzar con el trámite.
                          </li>
                          <li>
                            Descripción del tipo de requisito que necesita la persona usuaria y que sea condicionante
                            para poder avanzar con el trámite.
                            <a href="#" target="_blank" rel="noreferrer">
                              Aquí va un enlace pertinente
                            </a>
                          </li>
                          <li>
                            Descripción del tipo de requisito que necesita la persona usuaria y que sea condicionante
                            para poder avanzar con el trámite.
                          </li>
                        </ul>
                      </div>
                    </section>

                    <section className="mb-5">
                      <h2 className="mb-xl-4 mb-3">Pasos para completar el trámite</h2>
                      <ul className="list-steps">
                        <li className="list-steps-item">
                          <h4>Título del paso</h4>
                          <p>
                            En esta descripción del paso se muestran los detalles principales de las acciones que deberá
                            realizar la persona usuaria posteriormente.
                          </p>
                        </li>
                        <li className="list-steps-item">
                          <h4>Título del paso</h4>
                          <p>
                            En esta descripción del paso se muestran los detalles principales de las acciones que deberá
                            realizar la persona usuaria posteriormente.
                          </p>
                        </li>
                        <li className="list-steps-item">
                          <h4>Título del paso</h4>
                          <p>
                            En esta descripción del paso se muestran los detalles principales de las acciones que deberá
                            realizar la persona usuaria posteriormente.
                          </p>
                        </li>
                      </ul>
                    </section>

                    <section className="mb-4 mb-xl-3 pb-2 pb-xl-0">
                      <h2 className="mb-3">Costos del trámite</h2>
                      <div className="pb-0 pb-xl-1">
                        <div className="col-12 col-xl-5 d-inline-block px-0 me-xl-4 pr-xl-2 mb-3 mb-xl-4 pb-xl-2">
                          <h3 className="mb-1">$ 00,00</h3>
                          <p className="mb-0">Breve descripción del concepto</p>
                        </div>
                        <div className="col-12 col-xl-5 d-inline-block px-0 me-xl-4 pr-xl-2 mb-3 mb-xl-4 pb-xl-2">
                          <h3 className="mb-1">$ 00,00</h3>
                          <p className="mb-0">Breve descripción del concepto</p>
                        </div>
                      </div>
                      <div className="pb-0 pb-xl-1">
                        <div className="col-12 col-xl-5 d-inline-block px-0 me-xl-4 pr-xl-2 mb-2 pb-xl-2">
                          <h3 className="mb-1">$ 00,00</h3>
                          <p className="mb-0">Breve descripción del concepto</p>
                        </div>
                        <div className="col-12 col-xl-5 d-inline-block px-0 me-xl-4 pr-xl-2">
                          <h3 className="mb-1">$ 00,00</h3>
                          <p className="mb-0">Breve descripción del concepto</p>
                        </div>
                      </div>
                      <div className="mb-3 mb-xl-4 pb-xl-2">
                        <p>
                          Según la
                          <a
                            href="https://buenosaires.gob.ar/sites/default/files/2024-01/LEY%20N%C2%BA%206711.%20Tarifaria%202024_183.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ley Tarifaria vigente{' '}
                          </a>
                          .
                        </p>
                      </div>
                    </section>

                    <section className="mb-5">
                      <h2 className="mb-3">Título referido a colapsables</h2>
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <span className="collapse-title">Título</span>
                          </button>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar
                              demasiado texto, para generar una lectura óptima.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <span className="collapse-title">Título</span>
                          </button>
                          <div id="collapseTwo" className="collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar
                              demasiado texto, para generar una lectura óptima.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <span className="collapse-title">Título</span>
                          </button>
                          <div id="collapseThree" className="collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar
                              demasiado texto, para generar una lectura óptima.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <span className="collapse-title">Título</span>
                          </button>
                          <div id="collapseFour" className="collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar
                              demasiado texto, para generar una lectura óptima.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <span className="collapse-title">Título</span>
                          </button>
                          <div id="collapseFive" className="collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar
                              demasiado texto, para generar una lectura óptima.
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="mb-xl-5 mb-4 pb-2 pb-xl-0">
                      <h2 className="mb-4 pb-2">Más información</h2>
                      <div className="list-informative">
                        <ul className="list-informative-bullet">
                          <li>Este es un ejemplo de como disponer mas información sobre el trámite</li>
                          <li>Este es un ejemplo de como disponer mas información sobre el trámite</li>
                          <li>Este es un ejemplo de como disponer mas información sobre el trámite</li>
                        </ul>
                      </div>
                    </section>

                    <section className="mb-xl-5 mb-4 pb-2 pb-xl-0">
                      <h2 className="mb-4 pb-2">Descargables</h2>
                      <div className="list-link mb-4 pb-2">
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                      </div>

                      <h2 className="mb-4">Descargables</h2>
                      <div className="list-link mb-4 pb-xl-1">
                        <h3 className="list-link-title">Descargables</h3>
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                      </div>
                      <div className="list-link mb-4 pb-2">
                        <h3 className="list-link-title">Descargables</h3>
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                      </div>

                      <h2 className="mb-4 pb-2">Descargables</h2>
                      <div className="list-link">
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                        <a className="download" href="#" target="_blank" rel="noreferrer">
                          Título del archivo a descargar
                        </a>
                      </div>
                    </section>

                    <section>
                      <h2 className="mb-3">Normativa</h2>
                      <h3 className="mb-0">N° de normativa</h3>
                    </section>
                  </div>

                  <div className="col-12 col-xl-4 mx-auto mb-4 mb-xl-0 pb-2 pb-xl-0">
                    <div className="block bg-light position-sticky">
                      <div className="block-body">
                        <h4 className="block-title">Iniciá el trámite y completá todos los pasos</h4>
                        <a href="#" target="_blank" rel="noreferrer" className="btn btn-lg btn-primary btn-block">
                          Iniciar trámite
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <section className="mb-5">
              <div className="container">
                <div className="mb-4 pb-2">
                  <h2 className="mb-0">Encontrá la oficina más cercana</h2>
                </div>
                <div className="card-items-3">
                  <div className="col">
                    <div className="card card-horizontal">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Sede Comunal 1
                          </a>
                        </h3>
                        <p className="card-text">Dirección 1234</p>
                        <p className="card-text mt-0">Horario de atención: 00 a 00 hs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-horizontal">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Sede Comunal 1
                          </a>
                        </h3>
                        <p className="card-text">Dirección 1234</p>
                        <p className="card-text mt-0">Horario de atención: 00 a 00 hs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-horizontal">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Sede Comunal 1
                          </a>
                        </h3>
                        <p className="card-text">Dirección 1234</p>
                        <p className="card-text mt-0">Horario de atención: 00 a 00 hs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-horizontal">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Sede Comunal 1
                          </a>
                        </h3>
                        <p className="card-text">Dirección 1234</p>
                        <p className="card-text mt-0">Horario de atención: 00 a 00 hs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-horizontal d-none d-sm-block">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Sede Comunal 1
                          </a>
                        </h3>
                        <p className="card-text">Dirección 1234</p>
                        <p className="card-text mt-0">Horario de atención: 00 a 00 hs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-horizontal d-none d-sm-block">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Sede Comunal 1
                          </a>
                        </h3>
                        <p className="card-text">Dirección 1234</p>
                        <p className="card-text mt-0">Horario de atención: 00 a 00 hs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-horizontal d-none d-sm-block">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Sede Comunal 1
                          </a>
                        </h3>
                        <p className="card-text">Dirección 1234</p>
                        <p className="card-text mt-0">Horario de atención: 00 a 00 hs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-horizontal d-none d-sm-block">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Sede Comunal 1
                          </a>
                        </h3>
                        <p className="card-text">Dirección 1234</p>
                        <p className="card-text mt-0">Horario de atención: 00 a 00 hs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-horizontal d-none d-sm-block">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Sede Comunal 1
                          </a>
                        </h3>
                        <p className="card-text">Dirección 1234</p>
                        <p className="card-text mt-0">Horario de atención: 00 a 00 hs</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 d-sm-none">
                  <a className="access" href="#" target="_blank" rel="noreferrer">
                    Ver todas las sedes
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-light py-xl-5 py-4">
              <div className="container">
                <div className="mb-4 pb-xl-1">
                  <h2 className="mb-2">Organismo responsable</h2>
                  <h3 className="mb-0">Dirección general</h3>
                </div>
                <div className="mb-4">
                  <h4 className="mb-2">Ubicación</h4>
                  <a href="#" target="_blank" rel="noreferrer">
                    Insertar dirección
                  </a>
                </div>
                <div className="mb-4">
                  <h4 className="mb-2">Días y horarios de atención</h4>
                  <p className="mb-0">Lunes a viernes de 8:30 a 14:00 hs.</p>
                </div>
                <div>
                  <h4 className="mb-2">Contacto</h4>
                  <p className="mb-0">
                    Si tenés alguna duda, o necesitás información adicional, escribí a
                    <a href="mailto:correodeejemplo@buenosaires.gob.ar">correodeejemplo@buenosaires.gob.ar</a>
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </>
    ),
  },
];

const SECTIONS_UX = [
  {
    title: 'Guía de uso',
    firstTitle: true,
    content: (
      <>
        <div className="container">
          {/* <!-- Inicio Encabezado --> */}
          <section className="box-section" id="section-ux-2">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p id="encabezado" className="text-xl">
                Encabezado{' '}
              </p>
              <p className="text-md mb-4">Va al comienzo de la página, justo debajo del header, y está formado por: </p>
              <ul className="list-informative-bullet mb-4">
                <li>Migas de pan, que nos indican el recorrido de la persona usuaria hasta la página actual.</li>
                <li>El título del trámite.</li>
                <li>Una breve descripción del trámite.</li>
                <li>La modalidad del trámite identificada con la etiqueta respectiva.</li>
              </ul>

              <img
                src="../../assets/tramites/ejemplo_incluir_en_pagina.png"
                alt="Ejemplo de lo que puede incluir una página de tramite"
                className="img-fluid mb-2"
              />

              <p className="text-xl">Buenas prácticas</p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>El máximo de caracteres para el título es de 120 caracteres (incluyendo espacios).</p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>La estructura para armar el título de los trámites es: ACCIÓN + NOMBRE DEL TRÁMITE.</p>
              </div>

              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  El máximo de caracteres para la descripción del trámite es de 250 caracteres (incluyendo espacios).
                </p>
              </div>
            </div>
          </section>
          {/* <!-- Fin Encabezado --> */}

          {/* <!-- Inicio Estado del trámite --> */}
          <section className="box-section" id="section-ux-3">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Estado del trámite</p>
              <p className="text-md mb-4">
                Por medio del bloque de iniciar trámite la persona usuaria podrá iniciar su trámite o, si así lo
                requiera, continuarlo desde el paso en el que lo dejó por última vez.
              </p>

              <img
                src="../../assets/tramites/estado_del_tramite.png"
                className="img-fluid"
                alt="Imagen del bloque de trámite"
                width="420"
                height="187"
              />
            </div>
          </section>
          {/* <!-- Fin Estado del trámite --> */}

          {/* <!-- Inicio Títulos de sección --> */}
          <section className="box-section" id="section-ux-4">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Títulos de sección</p>
              <p className="text-md">
                Estos títulos son independientes a los componentes dentro del template y sirven para dividir e
                identificar cada una de las secciones y su contenido. Utilizan la etiqueta H2.{' '}
              </p>

              {/* <!-- <img src="../../assets/tramites/titulo_requisito_del_tramite.png" className="img-fluid"
                                        alt="Imagen del bloque de trámite" width="668" height="101"> --> */}

              <img
                src="../../assets/tramites/titulo_requisito_del_tramite.png"
                className="border-imgs"
                alt="Imagen del bloque de trámite"
                width="550"
                height="80"
              />
            </div>
          </section>
          {/* <!-- Fin Títulos de sección --> */}

          {/* <!-- Inicio Requisitos del trámite --> */}
          <section className="box-section" id="section-ux-5">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Requisitos del trámite</p>
              <p className="text-md">
                En esta sección se encuentran cada uno de los requisitos necesarios para realizar el trámite. Para
                mostrarlos se utiliza una lista de requisitos con check siguiendo los lineamientos de Obelisco, nuestro
                sistema de estándares y diseño.{' '}
              </p>

              <a
                href="https://gcba.github.io/estandares/componentes/listas/lista-informativa/"
                className="external"
                target="_blank"
              >
                Lista de requisitos
              </a>

              <img
                src="../../assets/tramites/subtitulo_con_lista_de_requisitos.png"
                className="img-fluid border-imgs mt-4 mb-4"
                alt="Imagen de lista de requisitos"
                width="948"
                height="337"
              />

              <p className="text-xl">Buenas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Las listas de requisitos llevan únicamente un subtítulo y contenido, cualquier elemento adicional debe
                  ir fuera del componente.
                </p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>El subtítulo de la lista de requisitos es opcional y puede omitirse en caso de no ser necesario.</p>
              </div>

              <p className="text-xl">Malas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>No debe modificarse el componente de lista para incluir elementos externos.</p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No utilizar variables bold dentro de los ítems de la lista para no agregar carga cognitiva a la
                  persona usuaria.
                </p>
              </div>
            </div>
          </section>
          {/* <!-- Fin Requisitos del trámite --> */}

          {/* <!-- Inicio Pasos del trámite --> */}
          <section className="box-section" id="section-ux-6">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Pasos del trámite</p>
              <p className="text-md">
                En este bloque la persona usuaria podrá ver cada uno de los pasos organizados en secuencia que deberá
                realizar para completar el trámite. Para mostrarlos se utiliza una lista de pasos siguiendo los
                lineamientos de Obelisco, nuestro sistema de estándares y diseño.{' '}
              </p>

              <a
                href="https://gcba.github.io/estandares/componentes/listas/listas-de-pasos/"
                className="external mb-4"
                target="_blank"
              >
                Lista de pasos
              </a>

              <img
                src="../../assets/tramites/lista_de_pasos.png"
                className="img-fluid border-imgs mb-4"
                alt="Imagen de lista de pasos"
                width="948"
                height="337"
              />

              <p className="text-xl">Buenas prácticas</p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Utilizar títulos claros y concisos. Usar verbos o frases de acción para indicar a la persona usuaria
                  lo que sucederá en cada paso.
                </p>
              </div>

              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Usar la menor cantidad de pasos posibles para no abrumar a la persona usuaria. Si luego en el flujo
                  verá más información, limitar la lista de pasos a una síntesis del proceso a realizar.
                </p>
              </div>

              <p className="text-xl">Malas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>No utilizar este componente si el proceso tiene sólo un paso.</p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No utilizar el componente sólo con el título. Siempre debe contener, aunque mínima, una bajada
                  explicativa.
                </p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No incluir componentes como listas informativas, bulleteados y botones dentro de la lista de pasos. La
                  bajada debe consistir sólo en un párrafo de texto, y si es necesario puede poseer enlaces dentro del
                  mismo.
                </p>
              </div>
            </div>
          </section>
          {/* <!-- Fin Pasos del trámite --> */}

          {/* <!-- Inicio Costos del trámite --> */}
          <section className="box-section" id="section-ux-7">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Costos del trámite</p>
              <p className="text-md mb-4">
                Esta sección va luego de la lista de pasos, y muestra todos los costos relacionados al trámite. Es una
                bajada simple de título, subtítulos y descripción organizada por bloques. La descripción del concepto
                sirve para identificar la razón del costo y puede contener un enlace si lo necesita.{' '}
              </p>

              <img
                src="../../assets/tramites/costos_del_tramite.png"
                className="img-fluid border-imgs mb-4"
                alt="Imagen de costos del tramite"
                width="757"
                height="332"
              />

              <p className="text-xl">Buenas prácticas</p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Utilizar títulos claros y concisos. Usar verbos o frases de acción para indicar a la persona usuaria
                  lo que sucederá en cada paso.
                </p>
              </div>

              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Usar la menor cantidad de pasos posibles para no abrumar a la persona usuaria. Si luego en el flujo
                  verá más información, limitar la lista de pasos a una síntesis del proceso a realizar.
                </p>
              </div>

              <p className="text-xl">Malas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>No utilizar este componente si el proceso tiene sólo un paso.</p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No utilizar el componente sólo con el título. Siempre debe contener, aunque mínima, una bajada
                  explicativa.
                </p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No incluir componentes como listas informativas, bulleteados y botones dentro de la lista de pasos. La
                  bajada debe consistir sólo en un párrafo de texto, y si es necesario puede poseer enlaces dentro del
                  mismo.
                </p>
              </div>
            </div>
          </section>
          {/* <!-- Fin Costos del trámite --> */}

          {/* <!-- Inicio Colapsables --> */}
          <section className="box-section" id="section-ux-8">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Colapsables</p>
              <p className="text-md">
                Los colapsables se utilizan en caso que los trámites tengan información adicional de casos particulares.
                Es una buena forma de mostrar y ocultar secciones sin agregar información por fuera del template.
              </p>
              <p className="text-md">
                Para mostrarlos se utilizan colapsables de selección única siguiendo los lineamientos de Obelisco,
                nuestro sistema de estándares y diseño.
              </p>

              <a
                href="https://gcba.github.io/estandares/componentes/colapsable/"
                className="external mb-4"
                target="_blank"
              >
                Colapsables
              </a>

              <p className="text-xl">Buenas prácticas</p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Mantener títulos breves y claros. El encabezado es lo primero que capta la atención de la mayoría de
                  las personas usuarias. Es fundamental que el contenido del colapsable se exprese de manera clara para
                  que las personas usuarias puedan decidir si desean expandirlo o no.
                </p>
              </div>

              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>Cada colapsable puede tener un máximo de 800 caracteres (contando espacios) para su descripción.</p>
              </div>

              <p className="text-xl">Malas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No utilizar un colapsable para el contenido que es necesario que esté visible. No ocultarlo dentro de
                  un colapsable.
                </p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No utilizar más de 5 colapsables para sumar información. En todo caso, lo recomendable es buscar otros
                  componentes que se adapten mejor al contenido o hacer bajadas sencillas de título y texto.
                </p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>No utilizar más de 1 sección de colapsables. </p>
              </div>
            </div>
          </section>
          {/* <!-- Fin Colapsables --> */}

          {/* <!-- Inicio Información adicional  --> */}
          <section className="box-section" id="section-ux-9">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Información adicional</p>
              <p className="text-md">
                Este bloque de contenido se utiliza para agregar información a destacar relacionada al trámite que no es
                parte de los requisitos o de los pasos a cumplir.
              </p>
              <p className="text-md">
                En este caso, se utiliza una lista informativa con viñeta o texto plano, siguiendo los lineamientos de
                Obelisco, nuestro sistema de estándares y diseño.
              </p>

              <a
                href="https://gcba.github.io/estandares/componentes/listas/lista-informativa//"
                className="external mb-4"
                target="_blank"
              >
                Lista informativa general
              </a>

              <img
                src="../../assets/tramites/info_adicional.png"
                className="img-fluid border-imgs mb-4"
                alt="Imagen de información adicional"
                width="791"
                height="302"
              />

              <p className="text-xl">Buenas prácticas</p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Utilizar listas informativas para piezas de información de texto que no tienen un orden secuencial.
                </p>
              </div>

              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Mantener la redacción del contenido de los ítems de forma consistente. Por ejemplo: siempre usar la
                  misma voz y tono.{' '}
                </p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>Utilizar texto plano cuando no es posible generar más de 1 ítem para la lista informativa.</p>
              </div>

              <p className="text-xl">Malas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No utilizar variables bold dentro de los ítems de la lista para no agregar carga cognitiva a la
                  persona usuaria.{' '}
                </p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>Al utilizar una lista informativa, no incluir más de 7 ítems en la misma.</p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>No combinar listas informativas con listas de pasos.</p>
              </div>
            </div>
          </section>
          {/* <!-- Fin Información adicional  --> */}

          {/* <!-- Inicio Descargables  --> */}
          <section className="box-section" id="section-ux-10">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Descargables</p>
              <p className="text-md">
                En este bloque la persona usuaria encontrará los descargables o archivos necesarios para realizar el
                trámite. En este caso, se utiliza una lista de enlaces siguiendo los lineamientos de Obelisco, nuestro
                sistema de estándares y diseño.{' '}
              </p>

              <a
                href="https://gcba.github.io/estandares/componentes/listas/lista-de-enlaces/"
                className="external mb-4"
                target="_blank"
              >
                Lista de enlaces
              </a>

              <img
                className="img-fluid border-imgs mb-4"
                src="../../assets/tramites/descargables.png"
                alt="Ejemplo de links descargables"
              />

              <p className="text-xl">Buenas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>El subtítulo de la lista debe ser coherente con el tipo de contenido que posee dentro. </p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>El subtítulo de la lista de enlaces es opcional y puede omitirse en caso de no ser necesario.</p>
              </div>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Las listas de enlaces llevan únicamente un subtítulo y contenido, cualquier elemento adicional debe ir
                  fuera del componente.
                </p>
              </div>

              <p className="text-xl">Malas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No se debe quitar el ícono que acompaña a los enlaces de descarga. Se utiliza como refuerzo semántico
                  del tipo de enlace.
                </p>
              </div>
            </div>
          </section>
          {/* <!-- Fin Descargables  --> */}

          {/* <!-- Inicio Normativa  --> */}
          <section className="box-section" id="section-ux-11">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Normativa</p>
              <p className="text-md">
                El bloque de normativa muestra la normativa o las normativas relacionadas al trámite. Se trata de una
                bajada de texto simple con título y el número de normativa.
              </p>

              <img
                className="img-fluid mb-4 border-imgs"
                src="../../assets/tramites/normativa.png"
                alt="Ejemplo de nro de normativa"
              />

              <p className="text-xl">Buenas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  La normativa es una sección obligatoria para algunos trámites, pero puede omitirse en caso de no ser
                  necesaria.
                </p>
              </div>

              <p className="text-xl">Malas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No es posible combinar esta sección con otras dentro del template o cambiar su estructura. Evitar
                  sumar elementos que no correspondan a la sección.
                </p>
              </div>
            </div>
          </section>
          {/* <!-- Fin Normativa  --> */}

          {/* <!-- Inicio Organismo responsable --> */}
          <section className="box-section" id="section-ux-12">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Organismo responsable</p>
              <p className="text-md">
                El organismo responsable es el ente gubernamental que se encarga de la regulación del trámite. Dentro de
                esta sección la persona usuaria tendrá acceso al nombre del organismo, la ubicación, los días y horarios
                de atención, y la información de contacto.{' '}
              </p>

              <img
                className="img-fluid mb-4"
                src="../../assets/tramites/organismo_responsable.png"
                alt="Ejemplo de organismo responsable"
              />

              <p className="text-xl">Buenas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Utilizar títulos, subtítulos y descripciones breves para jerarquizar e identificar la información,
                  siguiendo el modelo del template.{' '}
                </p>
              </div>

              <p className="text-xl">Malas prácticas </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  No debe incluirse otro tipo de información que no sea sobre el organismo responsable en esta sección.
                </p>
              </div>
            </div>
          </section>
          {/* <!-- Fin Organismo responsable --> */}

          {/* <!-- Inicio Contenido del template de trámites --> */}
          <section className="box-section" id="section-ux-13">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <h4>Contenido del template de trámites</h4>
              <p className="text-md">
                Para mejorar la experiencia al volcar la información en cada una de las secciones del template de
                trámites, es importante tener en cuenta que se trata de una página flexible y no de una estructura
                rígida, por lo que la información dentro del template es adaptable.{' '}
              </p>
            </div>
          </section>
          {/* <!-- Inicio Contenido del template de trámites --> */}

          {/* <!-- Inicio Estilos de texto --> */}
          <section className="box-section" id="section-ux-14">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Estilos de texto</p>
              <p className="text-md">
                Al momento de llenar cualquier campo de texto del template se deben respetar los siguientes parámetros:{' '}
              </p>
              <ul className="list-informative-bullet">
                <li>No utilizar negrita (ejemplo) en ningún texto. </li>
                <li>
                  Todos los campos de texto dentro del cuerpo del template pueden ir acompañados de un
                  enlace/hipervínculo (ejemplo), a excepción de: los títulos (incluyendo el del{' '}
                  <a href="#encabezado">Encabezado</a>), los subtítulos, la descripción del trámite y la normativa.{' '}
                </li>
              </ul>
            </div>
          </section>
          {/* <!-- Fin Estilos de texto --> */}

          {/* <!-- Inicio Cantidad de caracteres  --> */}
          <section className="box-section" id="section-ux-15">
            {/* <div style="margin-bottom:32px"> */}
            <div>
              <p className="text-xl">Cantidad de caracteres </p>
              <p className="text-md">
                Existen secciones dentro del template de trámites que cuentan con un máximo de caracteres por la
                capacidad del espacio/componente (véase <a href="#encabezado">Encabezado</a> como ejemplo), sin embargo,
                la gran mayoría de campos de texto no tienen un límite definido más allá de respetar la propuesta de
                contenido y no sobrecargar ninguna de las secciones.{' '}
              </p>

              <p className="text-md">
                Además, cada una de las secciones que está compuesta por un componente sigue los lineamientos
                establecidos en Obelisco, nuestro sistema de estándares y diseño.{' '}
              </p>
            </div>
          </section>
          {/* <!-- Fin Cantidad de caracteres  --> */}
        </div>
        {/* </CodeBox> */}
      </>
    ),
  },
];

const TemplateTramiteDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Template "
        description={[
          'Las pestañas se utilizan para organizar el contenido relacionado. Permiten a la persona usuaria navegar entre grupos de información que aparecen dentro de un mismo contexto, mostrando una sección por vez.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/navegacion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionUx={SECTIONS_UX} sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default TemplateTramiteDocs;
