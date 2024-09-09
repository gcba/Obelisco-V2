
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  BEFORE_ALERT,
  AFTER_ALERT,
  BEFORE_STATUSMESSAGE,
  AFTER_STATUSMESSAGE,
} from './code-views';

const UpdateComponents: React.FC = () => {
  const sections = [
    {
      title: 'Obelisco V2',
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
      title: 'Acceso',
      content: (
        //   <div className="container d-flex flex-column gap-3">
        //     <div className="alert alert-info" role="alert">
        //       Esta es la descripción de una alerta de información.
        //     </div>

        //     <div className="alert alert-success" role="alert">
        //       Esta es la descripción de una alerta de éxito.
        //     </div>

        //     <div className="alert alert-warning" role="alert">
        //       Esta es la descripción de una alerta de advertencia.
        //     </div>

        //     <div className="alert alert-danger" role="alert">
        //       Esta es la descripción de una alerta de error.
        //     </div>
        //   </div>
        <ul>
          <li>Se elimina “lista ancho por acceso”.</li>
          <li>La lista de accesos por ancho completo, que utilizaba las clases access-deck max-cards-*, queda deprecada. </li>
          <ul className='mt-2'>
            <li>Respecto a la lista de accesos con ancho por accesos, que utilizaba las clases access-deck access-column max-cards-* queda deprecada y se reemplazan por las clases: </li>
            <li>.access-items-1:  para accesos en 1 sola columna con un aside</li>
            <li>.access-items-3:  para accesos en 3 columnas en desktop, 2 columnas en tablet, y 1 columna en mobile. </li>
            <li>.access-items-3 row-cols-md-1:  para accesos en 3 columnas en desktop, 1 columna en tablet, y 1 columna en mobile. </li>
            <li>.access-items-4:  para accesos en 4 columnas en desktop, 2 columnas en tablet, y 1 columna en mobile. </li>
            <li>.access-items-4 row-cols-md-1:  para accesos en 4 columnas en desktop, 1 columna en tablet, y 1 columna en mobile. </li>
            <li>Se debe tener en cuenta que, para la disposición de accesos, cada acceso se debe encontrar dentro de una etiqueta div con clase col, los cuales estarán dentro de etiqueta div con las clases mencionadas. </li>
          </ul>
        </ul>
      ),
    },
    {
      id: 'section-2',
      title: 'Alerta',
      content: (
        <>
          <ul>
            <li>La clase alert-primary queda deprecada y es remplazada por alert-warning.</li>
            <li>La clase alert-info tiene un nuevo color.</li>
            <li>En el caso de alerta con cierre, en la etiqueta <code>button</code> se reemplaza el atributo <code>data-dismiss=&quot;alert&quot;</code> por <code>data-bs-dismiss=&quot;alert&quot;</code>, y la clase <code>.close</code> se reemplaza por <code>.btn-close</code>.</li>
          </ul>

          <p><strong>Antes:</strong></p>       
          
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {BEFORE_ALERT}
          </SyntaxHighlighter>

          <p><strong>Ahora:</strong></p>

          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {AFTER_ALERT}
          </SyntaxHighlighter> 
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Botón',
      content: (
        <ul>
          <li>Se elimina la clase <code>.btn-icon</code>, no es necesaria colocarla al utilizar iconos o spinner en botón. </li>
          <li>Se crea la clase <code>.sr-only</code> que extiende de la clase visually-hidden (accesibilidad). </li>
          <li>Se agrega la clase <code>.o-icon</code> a los iconos de Boxicons y Material Icons Rounded. </li>
          <li>Se crea la clase <code>.btn-xs</code> para los botones que son utilizados dentro de tablas. </li>
          <li>Los botones primary y secondary han cambiado de color.</li>
        </ul>
      ),
    },
    {
      id: 'section-4',
      title: 'Colores',
      content: (
        <div id='colores' className="container">
          <div className="row">
            {/*Primera columna*/}
            <div className="col">
              <h3 className='headline-md'>Clase:</h3>
              <hr/>
              <p>bg-primary</p>
              <p>bg-secondary</p>
              <p>bg-danger</p>
              <p>bg-success</p>
              <p>bg-warning</p>
              <p>bg-info</p>
              <p>bg-light</p>
              <p>bg-dark</p>
              <p>text-body-secondary</p>
            </div>
            {/*Segunda columna*/}
            <div className="col">
              <h3 className='headline-md'>Nuevo valor:</h3>
              <hr/>
              <p>#336ACC</p>
              <p>#101E37</p>
              <p>#CC3333</p>
              <p>#26874A</p>
              <p>#FF9500</p>
              <p>#0086AD</p>
              <p>#F3F6F9</p>
              <p>#002733</p>
              <p>#505E70</p>
            </div>
            {/*Tercera columna*/}
            <div className="col">
              <h3 className='headline-md'>Antiguo valor:</h3>
              <hr/>
              <p>#FFA82E</p>
              <p>#5C6A7A</p>
              <p>#C93B3B</p>
              <p>#26874A</p>
              <p>#FFA82E</p>
              <p>#007BC7</p>
              <p>#F3F6F9</p>
              <p>#38485C</p>
              <p>-</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'section-5',
      title: 'Desplegables de navegación y selección',
      content: (
        <>
          <ul>
            <li>Se elimina de la etiqueta <code>button</code> de dropdown el atributo 
              <code>aria-haspopup=&quot;true&quot;</code> y se reemplaza <code>data-toggle=&quot;dropdown&quot;</code> por 
              <code>data-bs-toggle=&quot;dropdown&quot;</code>.
            </li>
            <li>Se elimina la clase <code>.dropdown-toggle</code> de la etiqueta <code>button</code> de dropdown.</li>
            <li>Al <code>span</code> con clase <code>.btn-dropdown-text</code> (que se encuentra dentro de la etiqueta 
              <code>button</code> del dropdown), se agrega la clase <code>.ellipsis-1</code>.
            </li>
            <li>En el caso de los items del desplegable con texto alineado hacia la derecha, se reemplazan las clases 
              <code>.text-right</code> por <code>.text-end</code>.
            </li>
            <li>En el caso de desplegable con disposición a la derecha, se reemplaza la clase 
              <code>.dropdown-menu-right</code> por <code>.dropdown-menu-end</code>.
            </li>
            <li>Se agrega la clase <code>.o-icon</code> a los iconos de Boxicons y Material Icons Rounded.</li>
            <li>Se modifica la estructura HTML de &apos;Desplegable con cascada&apos;, se utiliza la variante &quot;Click outside&quot; de Bootstrap 5. 
              Se agrega a la etiqueta <code>button</code> del desplegable el atributo <code>data-bs-auto-close=&quot;outside&quot;</code>. 
              El dropdown en cascada (el que se encuentra dentro de dropdown) tiene la misma estructura HTML que dropdown, con la diferencia de que 
              al <code>div</code> con clase <code>dropdown</code> se le agrega la clase <code>sub-dropdown</code>.
            </li>
            <li>Respecto a los tamaños de desplegables, se crean las clases <code>dropdown-lg</code> y <code>dropdown-sm</code>, las cuales 
              se utilizan en la etiqueta <code>div</code> con clase <code>dropdown</code>, y se eliminan las clases <code>btn-dropdown-lg</code> 
              y <code>btn-dropdown-sm</code> de la etiqueta <code>button</code> del desplegable.
            </li>
            <li>Se modifica la estructura HTML de &apos;Desplegable de selección&apos;, se utiliza la variante &quot;Click outside&quot; de Bootstrap 5. 
              Se eliminan de la etiqueta <code>button</code> del desplegable los atributos <code>data-toggle=&quot;collapse&quot;</code>, 
              <code>data-target</code> y <code>aria-controls</code>, y se reemplazan por <code>data-bs-toggle=&quot;dropdown&quot;</code> y 
              <code>data-bs-auto-close=&quot;outside&quot;</code>. Se elimina la clase <code>dropdown-form</code>. Se modifica la estructura HTML 
              de los inputs de selección.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'section-6',
      title: 'Enlace',
      content: (
        <ul>
          <li>Se agrega en los enlaces el atributo <code>rel=&quot;noopener noreferrer&quot;</code>.</li>
        </ul>
      ),
    },
    {
      id: 'section-7',
      title: 'Etiquetas',
      content: (
        <ul>
          <li>Se crean las clases <code>.badge-default</code> y <code>.badge-warning</code>. </li>
          <li>Las clases <code>.badge-primary</code>  y <code>.badge-secondary</code> quedan deprecadas. </li>
        </ul>
      ),
    },
    {
      id: 'section-8',
      title: 'Formulario – Casillas de selección (Radio y Checkbox)',
      content: (
        <ul>
          <li>En el caso de checkbox:</li>

          <ul>
            <li>Las clases <code> custom-control</code>, <code>custom-checkbox</code> se reemplazan por <code>form-checkbox</code>  </li>
            <li>La clase <code> custom-control-input</code> se reemplaza por <code>form-checkbox-input</code> </li>
            <li>La clase <code> custom-control-label</code> se reemplaza por <code>form-checkbox-label</code> </li>
          </ul>
          <li>En el caso de radio: </li>
          <ul>
            <li>Las clases <code>custom-control</code> <code>custom-radio</code> se reemplazan por <code> form-radio</code> </li>
            <li>La clase <code>custom-control-input</code> se reemplaza por <code> form-radio-input</code> </li>
            <li>La clase <code>custom-control-label</code> se reemplaza por <code> form-radio-label</code> </li>
          </ul>
        </ul>
      ),
    },
    {
      id: 'section-9',
      title: 'Grilla',
      content: (
        <div id='grilla' className="container">
          <div className="row">
            {/*Primera columna*/}
            <div className="col col-auto">
              <h3 className='headline-md'>viewport</h3>
              <hr/>
              <p>Menos de 576px</p>
              <p>Entre 576px y 767px</p>
              <p>Entre 768px y 991px</p>
              <p>Entre 992px y 1199px</p>
              <p>Entre 1200px y 1399px</p>
              <p>Mayor a 1400px</p>
            </div>
            {/*Segunda columna*/}
            <div className="col col-auto">
              <h3 className='headline-md'>max-width</h3>
              <hr/>
              <p>100%</p>
              <p>540px</p>
              <p>720px</p>
              <p>960px</p>
              <p>1140px</p>
              <p>1320px</p>

            </div>
            {/* Tercera columna*/}
            <div className="col col-auto">
              <h3 className='headline-md'>gap</h3>
              <hr/>
              <p>32px</p>
              <p>32px</p>
              <p>24px</p>
              <p>24px</p>
              <p>32px</p>
              <p>32px</p>

            </div>
            {/* Cuarta columna*/}
            <div className="col col-auto">
              <h3 className='headline-md'>área diseñable</h3>
              <hr/>
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
      id: 'section-10',
      title: 'Mensaje de estados',
      content: (
        <>        
          <ul>
            <li>Se crea la clase <code>&quot;status-warning&quot;</code> (NUEVA).</li>
            <li>Se cambia <code>&apos;data-target&apos;</code> a <code>&apos;data-bs-target&apos;</code>.</li>
          </ul>

          <p>antes</p>
          
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {BEFORE_STATUSMESSAGE}
          </SyntaxHighlighter>

          <p>despues</p>

          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {AFTER_STATUSMESSAGE}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      id: 'section-11',
      title: 'Modal',
      content: (
        <ul>
          <li>Se modifica <code>&apos;data-toggle&apos;</code> a <code>&apos;data-bs-toggle&apos;</code></li>
          <li>Se modifica <code>&apos;data-target&apos;</code> a <code>&apos;data-bs-target&apos;</code></li>
          <li>Se modifica <code>&apos;data-dismiss&apos;</code> a <code>&apos;data-bs-dismiss&apos;</code></li>
          <li>Eliminación del <code>&apos;role=&quot;dialog&quot;&apos;</code> y <code>&apos;role=&quot;document&quot;&apos;</code> ya que Bootstrap 5 lo maneja automáticamente</li>
        </ul>
      ),
    },
    {
      id: 'section-12',
      title: 'Pestaña',
      content: (
        <ul>
          <li>Se modifica la clase <code>&apos;tabs-slider&apos;</code> por <code>&apos;tabs-box&apos;</code>.</li>
          <li>Se modifica la clase <code>&apos;fixedwith&apos;</code> por <code>&apos;fixed-width&apos;</code>.</li>
          <li>Se modifica la clase <code>&apos;icons-container&apos;</code> por <code>&apos;tabs-controls&apos;</code>.</li>
          <li>Se modifica la clase <code>&apos;right-left&apos;</code> por <code>&apos;prev-next&apos;</code>.</li>
          <li>El atributo <code>data-toggle</code> se reemplaza por <code>data-bs-toggle</code> en los botones dentro de las pestañas.</li>
          <li>El atributo <code>data-target</code> se reemplaza por <code>data-bs-target</code> en los botones dentro de las pestañas.</li>
        </ul>
      ),
    },
    {
      id: 'section-13',
      title: 'Tipografia',
      content: (
        <ul>
          <li>Se crean las siguientes clases para el Cuerpo: .text-xl, .text-lg, .text-md, .text-sm las cuales corresponden a los tamaños Cuerpo XL, Cuerpo L, Cuerpo M, y Cuerpo SM, respectivamente. La clase text-xs se utiliza para Cuerpo XS. </li>
          <li>Respecto a la categoría Titulares, se crearon las clases .headline-lg, .headline-md, y .headline-sm que corresponden a Titulares L, Titulares M y Titulares S. </li>
          <li>Las clases .font-weight-* se renombraron a .fw-*. Las clases .fw-bold, .fw-semibold, y .fw-normal, se utilizan para los valores de font-weight de 700,600 y 400 respectivamente. </li>
          <li>La clase .font-italic se renombro a .fst-italic. </li>
          <li>Se crearon las clases .underline-1 y .underline-2 las cuales dan un subrayado al elemento. En el primer caso, el grosor del subrayado es 1px y en el segundo caso es 2px. </li>
          <li>Respecto a las citas, se reemplaza la etiqueta small (utilizada para la información del autor) por etiqueta p con clase .author. </li>
        </ul>
      ),
    },
    {
      id: 'section-14',
      title: 'Iconos',
      content: (
        <ul>
          <li>Se crea la clase <code>o-icon</code>. Todo componente de Obelisco que lleve un ícono de Boxicons o Material Symbols requiere que se le añada la clase <code>o-icon</code> para que aplique los estilos correspondientes a su componente.</li>
        </ul>
      ),
    },
    {id: 'section-15',
      title: 'Comenzar a usar componentes',
      content: (
        <>
          <p>¿Quieres comenzar a utilizar nuestros componentes? Puedes copiar el HTML disponible en la siguiente sección:</p>
          <div className='col-12 col-lg-7'>            
            <Link href="/components" className="list-group-item item-sm">
              <span className="material-symbols-rounded o-icon">
                web_traffic
              </span>
              <div className="access-content">
                <span className="access-title">Componentes</span>
                <p className="access-text">HTML disponible</p>
              </div>
            </Link>
          </div>
        </>
      )
    }
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default UpdateComponents;
