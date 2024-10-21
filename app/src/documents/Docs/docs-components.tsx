import Link from 'next/link';

import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

const UpdateComponents: React.FC = () => {
  const sections = [
    {
      title: 'Cambios en componentes',
      content: (
        <>
          <MainDescription description="En esta sección encontraremos la documentación sobre los cambios que se hicieron sobre los componentes en la nueva versión de Obelisco." />
        </>
      ),
      h1: true,
      defaultTitle: true,
    },
    {
      id: 'section-1',
      title: 'Accesos',
      content: (
        <ul className="docs-list">
          <li>
            En el caso de que el acceso tengo solo texto, la estructura HTML se mantiene como en el caso de acceso con
            icono o con descripción.
          </li>
          <li>
            La lista de accesos por ancho completo, que utilizaba las clases <code>.access-deck .max-cards-*</code>,
            queda deprecada.{' '}
          </li>
          <li>
            Respecto a la lista de accesos con ancho por accesos, que utilizaba las clases{' '}
            <code>.access-deck .access-column .max-cards-*</code> queda deprecada y se reemplazan por las clases:{' '}
          </li>
          <ul className="mt-2">
            <li>
              <code>.access-items-1</code>: para accesos en 1 sola columna.
            </li>
            <li>
              <code>.access-items-3</code>: para accesos en 3 columnas en desktop, 2 columnas en tablet, y 1 columna en
              mobile.
            </li>
            <li>
              <code>.access-items-3 row-cols-md-1</code>: para accesos en 3 columnas en desktop, 1 columna en tablet, y
              1 columna en mobile.
            </li>
            <li>
              <code>.access-items-4</code>: para accesos en 4 columnas en desktop, 2 columnas en tablet, y 1 columna en
              mobile.
            </li>
            <li>
              <code>.access-items-4</code>: para accesos en 4 columnas en desktop, 1 columna en tablet, y 1 columna en
              mobile.
            </li>
            <li>
              Se debe tener en cuenta que, para la disposición de accesos, cada acceso se debe encontrar dentro de una
              etiqueta <code>div</code> con clase <code>.col</code>, los cuales estarán dentro de etiqueta{' '}
              <code>div</code> con las clases mencionadas.{' '}
            </li>
          </ul>
        </ul>
      ),
    },
    {
      id: 'section-2',
      title: 'Alerta',
      content: (
        <>
          <ul className="docs-list">
            <li>
              La clase <code>.alert-primary</code> queda deprecada y es remplazada por <code>.alert-warning</code>.
            </li>
            <li>
              En el caso de alerta con cierre, en la etiqueta <code>button</code> se reemplaza el atributo{' '}
              <code>data-dismiss=&quot;alert&quot;</code> por <code>data-bs-dismiss=&quot;alert&quot;</code>, y la clase{' '}
              <code>.close</code> se reemplaza por <code>.btn-close</code>.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Barra de progreso',
      content: (
        <ul className="docs-list">
          <li>
            La clase <code>.bg-info</code> se reemplaza por <code>.bg-primary</code>.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-4',
      title: 'Bloque de trámite',
      content: (
        <ul className="docs-list">
          <li>
            Se elimina la clase <code>.card</code>.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-5',
      title: 'Botones',
      content: (
        <ul className="docs-list">
          <li>
            Se elimina la clase <code>.btn-icon</code>, no es necesaria colocarla al utilizar iconos o spinner en botón.{' '}
          </li>
          <li>
            Se agrega la clase <code>.o-icon</code> a los iconos de Boxicons y Material Symbols Rounded.{' '}
          </li>
          <li>
            Se crea la clase <code>.btn-xs</code> para los botones que son utilizados dentro de tablas.{' '}
          </li>
          <li>
            Se crea la clase <code>.btn-tertiary</code> y <code>.btn-light</code>.{' '}
          </li>
          <li>
            A los botones con spinner se les agrega el atributo <code>disabled</code> y se modifica la variante de
            spinner.{' '}
          </li>
        </ul>
      ),
    },
    {
      id: 'section-6',
      title: 'Banner',
      content: (
        <ul className="docs-list">
          <li>
            Se agrega la clase <code>.o-icon</code> al ícono del componente <strong>banner</strong> con ícono.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-7',
      title: 'Calendario',
      content: (
        <ul className="docs-list">
          <li>
            Se modifica la estructura HTML del colapsable en la variante &apos;Con colapsable&apos; acorde a
            actualización del componente Colapsable.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-8',
      title: 'Colapsables',
      content: (
        <ul className="docs-list">
          <li>
            Se modifica estructura HTML del componente, acorde a Bootstrap 5. Se reemplazan las clases{' '}
            <code>.card</code>, <code>.card-header</code>, y <code>.card-body</code> por <code>.accordion-item</code>,{' '}
            <code>.accordion-button</code> y<code>.accordion-body</code>, respectivamente.
          </li>
          <li>
            Se reemplazan los atributos <code>&apos;data-toggle&apos;</code> y <code>&apos;data-target&apos;</code> por{' '}
            <code>&apos;data-bs-toggle&apos;</code> y <code>&apos;data-bs-target&apos;</code>, respectivamente. Se
            agregan los atributos <code>&apos;aria-expanded&apos;</code> y <code>&apos;aria-controls&apos;</code>.
          </li>
          <li>
            La variante de colapsable con encabezado con fondo blanco utiliza la clase <code>.item-white</code>{' '}
            acompañando a la clase <code>.accordion-item</code>.
          </li>
          <li>Se reemplaza la estructura HTML de la lista e información dentro de colapsable</li>
        </ul>
      ),
    },
    {
      id: 'section-9',
      title: 'Colores',
      content: (
        <div id="colores" className="container">
          <div className="row">
            {/*Primera columna*/}
            <div className="col">
              <h3 className="headline-md">Clase:</h3>
              <hr />
              <p>bg-primary</p>
              <p>bg-secondary</p>
              <p>bg-danger</p>
              <p>bg-success</p>
              <p>bg-warning</p>
              <p>bg-info</p>
              <p>bg-light</p>
              <p>bg-dark</p>
            </div>
            {/*Segunda columna*/}
            <div className="col">
              <h3 className="headline-md">Nuevo valor:</h3>
              <hr />
              <p>#336ACC</p>
              <p>#101E37</p>
              <p>#CC3333</p>
              <p>#26874A</p>
              <p>#FF9500</p>
              <p>#0086AD</p>
              <p>#F3F6F9</p>
              <p>#002733</p>
            </div>
            {/*Tercera columna*/}
            <div className="col">
              <h3 className="headline-md">Antiguo valor:</h3>
              <hr />
              <p>#FFA82E</p>
              <p>#5C6A7A</p>
              <p>#C93B3B</p>
              <p>#26874A</p>
              <p>#FFA82E</p>
              <p>#007BC7</p>
              <p>#F3F6F9</p>
              <p>#38485C</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'section-10',
      title: 'Desplegables de navegación y selección',
      content: (
        <>
          <ul className="docs-list">
            <li>
              Se elimina de la etiqueta <code>button</code> de dropdown el atributo{' '}
              <code>aria-haspopup=&quot;true&quot;</code> y se reemplaza <code>data-toggle=&quot;dropdown&quot;</code>{' '}
              por <code>data-bs-toggle=&quot;dropdown&quot;</code>.
            </li>
            <li>
              Se elimina la clase <code>.dropdown-toggle</code> de la etiqueta <code>button</code> de dropdown.
            </li>
            <li>
              Al <code>span</code> con clase <code>.btn-dropdown-text</code> (que se encuentra dentro de la etiqueta{' '}
              <code>button</code> del dropdown), se agrega la clase <code>.ellipsis-1</code>.
            </li>
            <li>
              En el caso de los items del desplegable con texto alineado hacia la derecha, se reemplazan las clases{' '}
              <code>.text-right</code> por <code>.text-end</code>.
            </li>
            <li>
              En el caso de desplegable con disposición a la derecha, se reemplaza la clase{' '}
              <code>.dropdown-menu-right</code> por <code>.dropdown-menu-end</code>.
            </li>
            <li>
              Se agrega la clase <code>.o-icon</code> a los iconos de Boxicons y Material Symbols Rounded.
            </li>
            <li>
              Respecto a los tamaños de desplegables, se reemplazan las clases <code>.btn-dropdown-lg</code> y{' '}
              <code>.btn-dropdown-sm</code> por <code>.btn-lg</code> y <code>.btn-sm</code>, respectivamente.
            </li>
            <li>
              Se modifica la estructura HTML de <strong>&apos;Desplegable con cascada&apos;</strong>, se utiliza la
              variante &quot;Click outside&quot; de Bootstrap 5. Se agrega a la etiqueta <code>button</code> del
              desplegable el atributo <code>data-bs-auto-close=&quot;outside&quot;</code>. El dropdown en cascada (el
              que se encuentra dentro de dropdown) tiene la misma estructura HTML que dropdown, con la diferencia de que
              al <code>div</code> con clase <code>.dropdown</code> se le agrega la clase <code>.sub-dropdown</code>.
            </li>
            <li>
              Se modifica la estructura HTML de <strong>&apos;Desplegable de selección&apos;</strong>, se utiliza la
              variante &quot;Click outside&quot; de Bootstrap 5. Se eliminan de la etiqueta <code>button</code> del
              desplegable los atributos <code>data-toggle=&quot;collapse&quot;</code>, <code>data-target</code> y{' '}
              <code>aria-controls</code>, y se reemplazan por <code>data-bs-toggle=&quot;dropdown&quot;</code> y{' '}
              <code>data-bs-auto-close=&quot;outside&quot;</code>. Se elimina la clase <code>.dropdown-form</code>. Se
              modifica la estructura HTML de los inputs de selección.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'section-11',
      title: 'Destacado',
      content: (
        <ul className="docs-list">
          <li>
            Se eliminan las clases <code>.card</code> y <code>.card-simple</code>.
          </li>
          <li>
            Para la disposición de Destacado conjunto, las clases <code>.card-deck</code> y <code>.max-cards-2</code>{' '}
            quedan deprecadas, se reemplazan por <code>.highlighted-items-2</code>.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-12',
      title: 'Enlace',
      content: (
        <ul className="docs-list">
          <li>
            Se agrega en los enlaces el atributo <code>rel=&quot;noopener noreferrer&quot;</code>.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-13',
      title: 'Etiquetas',
      content: (
        <ul className="docs-list">
          <li>
            Se crean las clases <code>.badge-default</code> y <code>.badge-warning</code>.{' '}
          </li>
          <li>
            Las clases <code>.badge-primary</code> y <code>.badge-secondary</code> quedan deprecadas.{' '}
          </li>
        </ul>
      ),
    },
    {
      id: 'section-14',
      title: 'Formulario - Casillas de selección (Radio y Checkbox)',
      content: (
        <ul className="docs-list">
          <li>En el caso de checkbox:</li>

          <ul className="mb-3">
            <li>
              Las clases <code>.custom-control</code>, <code>.custom-checkbox</code> se reemplazan por{' '}
              <code>.form-checkbox</code>.{' '}
            </li>
            <li>
              La clase <code>.custom-control-input</code> se reemplaza por <code>form-checkbox-input</code>.{' '}
            </li>
            <li>
              La clase <code>.custom-control-label</code> se reemplaza por <code>form-checkbox-label</code>.{' '}
            </li>
          </ul>
          <li>En el caso de radio: </li>
          <ul>
            <li>
              Las clases <code>.custom-control</code> <code>.custom-radio</code> se reemplazan por{' '}
              <code>.form-radio</code>.{' '}
            </li>
            <li>
              La clase <code>.custom-control-input</code> se reemplaza por <code>.form-radio-input</code>.{' '}
            </li>
            <li>
              La clase <code>.custom-control-label</code> se reemplaza por <code>.form-radio-label</code>.{' '}
            </li>
          </ul>
        </ul>
      ),
    },
    {
      id: 'section-15',
      title: 'Formularios de texto',
      content: (
        <ul className="docs-list">
          <li>
            Se elimina la clase <code>.form-group</code>.
          </li>
          <li>
            Se crea la clase <code>.form-label</code>, la cual se asigna al <code>label</code> del campo.
          </li>
          <li>
            Se elimina la clase <code>.form-search</code> que se le asignaba anteriormente al <code>form</code>.
          </li>
          <li>
            Se crea la clase <code>.search-container</code>, que se asigna a un <code>div</code> contenedor del input de
            búsqueda y su botón.
          </li>
          <li>
            Se crea la clase <code>.input-search-with-button</code>, asignada al input de búsqueda, permitiendo que el
            botón con el icono funcione como botón de búsqueda.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-16',
      title: 'Grilla',
      content: (
        <div id="grilla" className="container">
          <div className="row">
            {/*Primera columna*/}
            <div className="col col-auto">
              <h3 className="headline-md">viewport</h3>
              <hr />
              <p>Menos de 576px</p>
              <p>Entre 576px y 767px</p>
              <p>Entre 768px y 991px</p>
              <p>Entre 992px y 1199px</p>
              <p>Entre 1200px y 1399px</p>
              <p>Mayor a 1400px</p>
            </div>
            {/*Segunda columna*/}
            <div className="col col-auto">
              <h3 className="headline-md">max-width</h3>
              <hr />
              <p>100%</p>
              <p>540px</p>
              <p>720px</p>
              <p>960px</p>
              <p>1140px</p>
              <p>1320px</p>
            </div>
            {/* Tercera columna*/}
            <div className="col col-auto">
              <h3 className="headline-md">gap</h3>
              <hr />
              <p>32px</p>
              <p>32px</p>
              <p>24px</p>
              <p>24px</p>
              <p>32px</p>
              <p>32px</p>
            </div>
            {/* Cuarta columna*/}
            <div className="col col-auto">
              <h3 className="headline-md">área diseñable</h3>
              <hr />
              <p>100%</p>
              <p>508px</p>
              <p>696px</p>
              <p>936px</p>
              <p>1108px</p>
              <p>1288px</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'section-17',
      title: 'Header (encabezado)',
      content: (
        <ul className="docs-list">
          <li>
            Se remplazan clases <code>.navbar-light</code> y <code>.navbar-expand-lg</code> por <code>.o-header</code>.
          </li>
          <li>
            La estructura de los componentes desplegables y buscador, se ha modificado por lo que deben ser modificados
            en el header también.
          </li>
          <li>
            La clase <code>.header-logo</code> queda deprecada.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-18',
      title: 'Iconos',
      content: (
        <ul className="docs-list">
          <li>
            Se crea la clase <code>.o-icon</code>. Todo componente de Obelisco que lleve un ícono de Boxicons o Material
            Symbols requiere que se le añada la clase <code>.o-icon</code> para que aplique los estilos correspondientes
            a su componente.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-19',
      title: 'Lista de pasos',
      content: (
        <ul className="docs-list">
          <li>
            Se agrega la clase <code>.list-steps-item-title</code> a los títulos de los ítems de la lista de pasos.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-20',
      title: 'Mapa',
      content: (
        <ul className="docs-list">
          <li>
            Se elimina la clase <code>.card</code>.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-21',
      title: 'Mensaje de estados',
      content: (
        <>
          <ul className="docs-list">
            <li>
              La clase <code>.status-primary</code> queda deprecada y es remplazada por <code>.status-warning</code>.
            </li>
            <li>
              Se reemplaza el atributo <code>&apos;data-target&apos;</code> por <code>&apos;data-bs-target&apos;</code>.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'section-22',
      title: 'Modal',
      content: (
        <ul className="docs-list">
          <li>
            Se reemplaza el atributo <code>&apos;data-toggle&apos;</code> por <code>&apos;data-bs-toggle&apos;</code>
          </li>
          <li>
            Se reemplaza el atributo <code>&apos;data-target&apos;</code> por <code>&apos;data-bs-target&apos;</code>
          </li>
          <li>
            Se reemplaza el atributo <code>&apos;data-dismiss&apos;</code> por <code>&apos;data-bs-dismiss&apos;</code>
          </li>
          <li>
            Se agrega el atributo <code>&apos;aria-labelledby&apos;</code> en el div con clase <code>.modal</code> y el
            atributo <code>&apos;id&apos;</code> en el título del modal.
          </li>
          <li>
            Eliminación del <code>&apos;role=&quot;dialog&quot;&apos;</code> y{' '}
            <code>&apos;role=&quot;document&quot;&apos;</code> ya que Bootstrap 5 lo maneja automáticamente
          </li>
        </ul>
      ),
    },
    {
      id: 'section-22',
      title: 'Pasos de un formulario',
      content: (
        <ul className="docs-list">
          <li>Se modifica la estructura HTML del componente.</li>
          <li>
            Las clases <code>.step-next</code>, <code>.step-text</code>, <code>.steps</code>, <code>.step</code> se
            reemplazan por <code>.step-subtitle</code>, <code>.steps-detail</code>, <code>.steps-items</code>,{' '}
            <code>.step-item</code>, respectivamente.
          </li>
          <li>
            Se agrega etiqueta div con clase <code>.steps</code>, el cual envuelve el div con clase{' '}
            <code>.steps-items</code> y el span con clase <code>.steps-detail</code>.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-23',
      title: 'Pestaña',
      content: (
        <ul className="docs-list">
          <li>
            Se modifica la clase <code>&apos;.tabs-slider&apos;</code> por <code>&apos;.tabs-box&apos;</code>.
          </li>
          <li>
            Se modifica la clase <code>&apos;.fixedwith&apos;</code> por <code>&apos;.fixed-width&apos;</code>.
          </li>
          <li>
            Se modifica la clase <code>&apos;.icons-container&apos;</code> por <code>&apos;.tabs-controls&apos;</code>.
          </li>
          <li>
            Se modifica la clase <code>&apos;.right-left&apos;</code> por <code>&apos;.prev-next&apos;</code>.
          </li>
          <li>
            El atributo <code>data-toggle</code> se reemplaza por <code>data-bs-toggle</code> en los botones dentro de
            las pestañas.
          </li>
          <li>
            El atributo <code>data-target</code> se reemplaza por <code>data-bs-target</code> en los botones dentro de
            las pestañas.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-24',
      title: 'Spinner',
      content: (
        <ul className="docs-list">
          <li>
            Se agrega la variante tertiary en spinner (<code>.text-tertiary</code>).
          </li>
          <li>La variante info no forma parte de las variantes de spinner de Obelisco.</li>
        </ul>
      ),
    },
    {
      id: 'section-25',
      title: 'Tarjetas',
      content: (
        <ul className="docs-list">
          <li>
            Quedan deprecadas las clases <code>.card-simple</code> y <code>.card-lg</code>.
          </li>
          <li>
            En el caso de tarjeta Temática, las clases <code>.card-horizonal</code>, <code>.card-simple</code> y{' '}
            <code>.card-lg</code> se reemplazan por la clase <code>.thematic</code>.
          </li>
          <li>
            Las clases <code>.card-img-left</code> y <code>.card-img-top</code> se reemplazan por la clase{' '}
            <code>.card-img</code>.
          </li>
          <li>
            La clase <code>.card-icon-left</code> se reemplazan por <code>.card-icon</code>.
          </li>
          <li>
            Las clases <code>.card-deck</code>, <code>.max-cards-3</code> y <code>.card-column</code> quedan deprecadas
            y se reemplazan por <code>.card-items-3</code>.
          </li>
          <li>
            Las clases <code>.card-deck</code>, <code>.max-cards-2</code> y <code>.card-column</code> quedan deprecadas
            y se reemplazan por <code>.card-items-2</code>.
          </li>
        </ul>
      ),
    },
    {
      id: 'section-26',
      title: 'Tipografía',
      content: (
        <ul className="docs-list">
          <li>
            Se crean las siguientes clases para el Cuerpo: <code>.text-xl</code>, <code>.text-lg</code>,{' '}
            <code>.text-md</code> y <code>.text-sm</code>, las cuales corresponden a los tamaños Cuerpo XL, Cuerpo L,
            Cuerpo M, y Cuerpo SM, respectivamente. La clase <code>.text-xs</code> se utiliza para Cuerpo XS.{' '}
          </li>
          <li>
            Respecto a la categoría Titulares, se crearon las clases <code>.headline-lg</code>,{' '}
            <code>.headline-md</code> y <code>.headline-sm</code>, que corresponden a Titulares L, Titulares M y
            Titulares S.{' '}
          </li>
          <li>
            Las clases <code>.font-weight-*</code>, se renombraron a <code>.fw-*</code>. Las clases{' '}
            <code>.fw-bold</code>, <code>.fw-semibold</code> y <code>.fw-normal</code>, se utilizan para los valores de
            font-weight de <code>700</code>, <code>600</code> y <code>400</code> respectivamente.{' '}
          </li>
          <li>
            La clase <code>.font-italic</code> se renombro a <code>.fst-italic</code>.{' '}
          </li>
          <li>
            Se crearon las clases <code>.underline-1</code> y <code>.underline-2</code> las cuales dan un subrayado al
            elemento. En el primer caso, el grosor del subrayado es 1px y en el segundo caso es 2px.{' '}
          </li>
          <li>
            Respecto a las citas, se reemplaza la etiqueta <code>small</code> (utilizada para la información del autor)
            por etiqueta <code>p</code> con clase <code>.author</code>.{' '}
          </li>
        </ul>
      ),
    },
    {
      id: 'section-27',
      title: 'Accesibilidad',
      content: (
        <ul className="docs-list">
          <li>
            Se crea la clase <code>.sr-only</code> que extiende de la clase <code>.visually-hidden</code>.{' '}
          </li>
        </ul>
      ),
    },
    {
      id: 'section-28',
      title: 'Comenzar a usar componentes',
      content: (
        <>
          <p>
            ¿Quieres comenzar a utilizar nuestros componentes? Puedes copiar el HTML disponible en la siguiente sección:
          </p>
          <div className="col-12 col-lg-7 ms-1">
            <Link href="/components" className="list-group-item item-sm">
              <span className="material-symbols-rounded o-icon">web_traffic</span>
              <div className="access-content">
                <span className="access-title">Componentes</span>
                <p className="access-text">HTML disponible</p>
              </div>
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/documentation">Documentación</Link>
          </li>
        </ol>
      </nav>
      <DocumentationTemplate sections={sections} />
    </>
  );
};

export default UpdateComponents;
