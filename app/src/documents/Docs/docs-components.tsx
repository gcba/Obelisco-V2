import Link from 'next/link';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
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
    title: 'Accesos',
    content: (
      <ul className="docs-list">
        <li>
          En el caso de que el acceso tengo solo texto, la estructura HTML se mantiene como en el caso de acceso con
          icono o con descripción.
        </li>
        <li>
          La clase <code>.list-group-item-logout</code> queda deprecada.
        </li>
        <li>
          La lista de accesos por ancho completo, que utilizaba las clases <code>.access-deck .max-cards-*</code>, queda
          deprecada.{' '}
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
            <code>.access-items-3 row-cols-md-1</code>: para accesos en 3 columnas en desktop, 1 columna en tablet, y 1
            columna en mobile.
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
    title: 'Calendario',
    content: (
      <ul className="docs-list">
        <li>
          Se modifica la estructura HTML del colapsable en la variante &apos;Con colapsable&apos; acorde a actualización
          del componente Colapsable.
        </li>
        <li>La variante con referencias cromáticas queda deprecada.</li>
      </ul>
    ),
  },
  {
    title: 'Colapsables',
    content: (
      <ul className="docs-list">
        <li>
          Se modifica estructura HTML del componente, acorde a Bootstrap 5. Se reemplazan las clases <code>.card</code>,{' '}
          <code>.card-header</code>, y <code>.block-body</code> por <code>.accordion-item</code>,{' '}
          <code>.accordion-button</code> y<code>.accordion-body</code>, respectivamente.
        </li>
        <li>
          Se reemplazan los atributos <code>&apos;data-toggle&apos;</code> y <code>&apos;data-target&apos;</code> por{' '}
          <code>&apos;data-bs-toggle&apos;</code> y <code>&apos;data-bs-target&apos;</code>, respectivamente. Se agregan
          los atributos <code>&apos;aria-expanded&apos;</code> y <code>&apos;aria-controls&apos;</code>.
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
    title: 'Colores',
    content: (
      <div className="responsive-scroll mt-4 mb-5" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                <span className="th-title">Clase</span>
              </th>
              <th scope="col" className="tb-text">
                <span className="th-title">Nuevo valor</span>
              </th>
              <th scope="col" className="tb-text">
                <span className="th-title">Antiguo valor</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>bg-primary</span>
              </td>
              <td>
                <span>#336ACC</span>
              </td>
              <td>
                <span>#FFA82E</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>bg-secondary</span>
              </td>
              <td>
                <span>#101E37</span>
              </td>
              <td>
                <span>#5C6A7A</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>bg-tertiary</span>
              </td>
              <td>
                <span>#005E7A</span>
              </td>
              <td>
                <span>-</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>bg-danger</span>
              </td>
              <td>
                <span>#CC3333</span>
              </td>
              <td>
                <span>#C93B3B</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>bg-success</span>
              </td>
              <td>
                <span>#26874A</span>
              </td>
              <td>
                <span>#26874A</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>bg-warning</span>
              </td>
              <td>
                <span>#FF9500</span>
              </td>
              <td>
                <span>#FFA82E</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>bg-info</span>
              </td>
              <td>
                <span>#0086AD</span>
              </td>
              <td>
                <span>#007BC7</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>bg-light</span>
              </td>
              <td>
                <span>#F3F6F9</span>
              </td>
              <td>
                <span>#F3F6F9</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>bg-dark</span>
              </td>
              <td>
                <span>#002733</span>
              </td>
              <td>
                <span>#38485C</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: 'Desplegables de navegación y selección',
    content: (
      <>
        <ul className="docs-list">
          <li>
            Se elimina de la etiqueta <code>button</code> de dropdown el atributo{' '}
            <code>aria-haspopup=&quot;true&quot;</code> y se reemplaza <code>data-toggle=&quot;dropdown&quot;</code> por{' '}
            <code>data-bs-toggle=&quot;dropdown&quot;</code>.
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
            desplegable el atributo <code>data-bs-auto-close=&quot;outside&quot;</code>. El dropdown en cascada (el que
            se encuentra dentro de dropdown) tiene la misma estructura HTML que dropdown, con la diferencia de que al{' '}
            <code>div</code> con clase <code>.dropdown</code> se le agrega la clase <code>.sub-dropdown</code>.
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
    title: 'Destacado',
    content: (
      <ul className="docs-list">
        <li>
          Se eliminan las clases <code>.card</code> y <code>.card-simple</code>.
        </li>
        <li>
          Las clases <code>.card-img</code>, <code>.block-body</code>, <code>.card-title</code> y{' '}
          <code>.card-text</code> se reemplazan por <code>.panel-img</code>, <code>.panel-body</code>,{' '}
          <code>.panel-title</code> y <code>.panel-text</code>, respectivamente.
        </li>
        <li>
          Para la disposición de Destacado conjunto, las clases <code>.card-deck</code> y <code>.max-cards-2</code>{' '}
          quedan deprecadas, se reemplazan por <code>.highlighted-items-2</code>.
        </li>
      </ul>
    ),
  },
  {
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
        <li>
          Para los inputs con fondo light, se reemplaza la clase <code>.bg-light</code> de la etiqueta div padre de los
          inputs, por <code>.form-bg-light</code>.
        </li>
      </ul>
    ),
  },
  {
    title: 'Grilla',
    content: (
      <div className="responsive-scroll mt-4 mb-5" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Breakpoint
              </th>
              <th scope="col" className="tb-text">
                Viewport
              </th>
              <th scope="col" className="tb-text">
                Ancho máximo
              </th>
              <th scope="col" className="tb-text">
                Espaciado
              </th>
              <th scope="col" className="tb-text">
                Área diseñable
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Extra small <code>(xs)</code>
              </td>
              <td>&lt;576px</td>
              <td>100%</td>
              <td>16px</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>
                Small <code>(sm)</code>
              </td>
              <td>&ge;576px</td>
              <td>540px</td>
              <td>16px</td>
              <td>508px</td>
            </tr>
            <tr>
              <td>
                Medium <code>(md)</code>
              </td>
              <td>&ge;768px</td>
              <td>720px</td>
              <td>24px</td>
              <td>696px</td>
            </tr>
            <tr>
              <td>
                Large <code>(lg)</code>
              </td>
              <td>&ge;992px</td>
              <td>720px</td>
              <td>24px</td>
              <td>696px</td>
            </tr>
            <tr>
              <td>
                Extra large <code>(xl)</code>
              </td>
              <td>&ge;1200px</td>
              <td>1140px</td>
              <td>32px</td>
              <td>1108px</td>
            </tr>
            <tr>
              <td>
                Extra extra large <code>(xxl)</code>
              </td>
              <td>&ge;1400px</td>
              <td>1140px</td>
              <td>32px</td>
              <td>1108px</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: 'Header (encabezado)',
    content: (
      <ul className="docs-list">
        <li>
          Se remplazan clases <code>.navbar-light</code> y <code>.navbar-expand-lg</code> por <code>.o-header</code>.
        </li>
        <li>
          La estructura de los componentes desplegables y buscador, se ha modificado por lo que deben ser modificados en
          el header también.
        </li>
        <li>
          La clase <code>.header-logo</code> queda deprecada.
        </li>
        <li>
          La clase <code>.btn-outline-link</code> del botón &quot;Ingresar&quot; se reemplaza por{' '}
          <code>.btn-outline-tertiary</code>.
        </li>
      </ul>
    ),
  },
  {
    title: 'Iconos',
    content: (
      <ul className="docs-list">
        <li>
          Se crea la clase <code>.o-icon</code>. Todo componente de Obelisco que lleve un ícono de Boxicons o Material
          Symbols requiere que se le añada la clase <code>.o-icon</code> para que aplique los estilos correspondientes a
          su componente.
        </li>
      </ul>
    ),
  },
  {
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
    title: 'Mapa',
    content: (
      <ul className="docs-list">
        <li>
          Se reemplazan las clases <code>.card</code> y <code>.card-map</code> por <code>.map</code>.
        </li>
        <li>
          Las clases <code>.card-iframe</code>, <code>.block-body</code>, <code>.card-title</code> y{' '}
          <code>.card-text</code> se reemplazan por <code>.map-iframe</code>, <code>.map-body</code>,{' '}
          <code>.map-title</code> y <code>.map-text</code>, respectivamente.
        </li>
      </ul>
    ),
  },
  {
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
    title: 'Migas de pan',
    content: (
      <>
        <ul className="docs-list">
          <li>
            Se cambia el aria-label de <code>&quot;Navegación secundaria&quot;</code> por <code>&quot;Ruta de navegación&quot;</code>.</li>
        </ul>
      </>
    ),
  },
  {
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
          El atributo <code>data-toggle</code> se reemplaza por <code>data-bs-toggle</code> en los botones dentro de las
          pestañas.
        </li>
        <li>
          El atributo <code>data-target</code> se reemplaza por <code>data-bs-target</code> en los botones dentro de las
          pestañas.
        </li>
      </ul>
    ),
  },
  {
    title: 'Pie de Página (Footer)',
    content: (
      <ul className="docs-list">
        <li>
          Se modifica la clase <code>d-lg-inline</code> por <code>d-md-inline</code>, para que realice el cambio de
          imagen en 768px.
        </li>
      </ul>
    ),
  },
  {
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
    title: 'Tarjetas',
    content: (
      <ul className="docs-list">
        <li>
          Quedan deprecadas las clases <code>.card-simple</code> y <code>.card-lg</code>.
        </li>
        <li>
          En el caso de tarjeta Temática, las clases <code>.card-horizonal</code>, <code>.card-simple</code> y{' '}
          <code>.card-lg</code> se reemplazan por la clase <code>.thematic</code>. Se agrega al enlace de la tarjeta la
          clase <code>.card-title-link</code>.
        </li>
        <li>
          Las clases <code>.card-img-left</code> y <code>.card-img-top</code> se reemplazan por la clase{' '}
          <code>.card-img</code>.
        </li>
        <li>
          La clase <code>.card-icon-left</code> se reemplazan por <code>.card-icon</code>.
        </li>
        <li>
          Las clases <code>.card-deck</code>, <code>.max-cards-3</code> y <code>.card-column</code> quedan deprecadas y
          se reemplazan por <code>.card-items-3</code>.
        </li>
        <li>
          Las clases <code>.card-deck</code>, <code>.max-cards-2</code> y <code>.card-column</code> quedan deprecadas y
          se reemplazan por <code>.card-items-2</code>.
        </li>
      </ul>
    ),
  },
  {
    title: 'Tipografía',
    content: (
      <ul className="docs-list">
        <li>
          Se crean las siguientes clases para el Cuerpo: <code>.text-xl</code>, <code>.text-lg</code>,{' '}
          <code>.text-md</code> y <code>.text-sm</code>, las cuales corresponden a los tamaños Cuerpo XL, Cuerpo L,
          Cuerpo M, y Cuerpo SM, respectivamente. La clase <code>.text-xs</code> se utiliza para Cuerpo XS.{' '}
        </li>
        <li>
          Respecto a la categoría Titulares, se crearon las clases <code>.headline-lg</code>, <code>.headline-md</code>{' '}
          y <code>.headline-sm</code>, que corresponden a Titulares L, Titulares M y Titulares S.{' '}
        </li>
        <li>
          Las clases <code>.font-weight-*</code>, se renombraron a <code>.fw-*</code>. Las clases <code>.fw-bold</code>,{' '}
          <code>.fw-semibold</code> y <code>.fw-normal</code>, se utilizan para los valores de font-weight de{' '}
          <code>700</code>, <code>600</code> y <code>400</code> respectivamente.{' '}
        </li>
        <li>
          La clase <code>.font-italic</code> se renombro a <code>.fst-italic</code>.{' '}
        </li>
        <li>
          Se creó la clase <code>.underline-2</code> la cuál da un subrayado al elemento. El grosor del subrayado es
          2px.{' '}
        </li>
        <li>
          Respecto a las citas, se reemplaza la etiqueta <code>small</code> (utilizada para la información del autor)
          por etiqueta <code>p</code> con clase <code>.author</code>.{' '}
        </li>
      </ul>
    ),
  },
];

const UpdateComponents: React.FC = () => {
  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/documentation">Documentación</Link>
          </li>
        </ol>
      </nav>
      <ComponentHeader
        title="Cambios en componentes"
        description={[
          'En esta sección se encuentra la documentación de los cambios que se hicieron sobre los componentes en la nueva versión de Obelisco.',
          <>
            Si querés comenzar a utilizar nuestros componentes, puedes visualizar el HTML disponible en la sección{' '}
            <Link href="/components">Elementos</Link>.
          </>,
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="change" />
    </>
  );
};

export default UpdateComponents;
