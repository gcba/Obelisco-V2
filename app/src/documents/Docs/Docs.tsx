import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import "./Docs.scss"

import SyntaxHighlighter from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/esm/styles/hljs/dracula';

const sections = [
  {
    title: 'Migración a V2',
    content: (
      <MainDescription description="En esta sección encontraremos la documentación y los cambios que se hicieron en la nueva versión de Obelisco. Esta nueva versión es una evolución de la versión anterior, 'Obelisco V1', y busca mejorar y actualizar los componentes y estilos ofrecidos,
        alineándose con las últimas tendencias y estándares del desarrollo web." />
    ),
    h1: true,
  },
  {
    id: 'section-1',
    title: 'Actualizaciones',
    content: (
      <>
        <p className="mt-3">Obelisco V2 se distingue de su predecesor por varias mejoras clave: </p>
        <ol className="mt-3">
          <li><strong>Actualización a Bootstrap 5</strong>: A diferencia de "Obelisco V1", que utilizaba Bootstrap 4, "Obelisco V2" ha migrado a Bootstrap 5. Esto permite aprovechar las nuevas funcionalidades, mejoras de rendimiento y simplificaciones de código que vienen con la última versión de Bootstrap. </li>
          <li><strong>Optimización de Código SCSS</strong>: Se han corregido variables y funciones presentes en el código SCSS de "Obelisco V1", mejorando así la calidad y la mantenibilidad del código. Además, se ha realizado una limpieza de código para eliminar redundancias y optimizar la estructura de los estilos. </li>
          <li><strong>Eliminación de Componentes Deprecados</strong>: En esta nueva versión, se han eliminado los componentes que estaban deprecados o ya no eran necesarios, reduciendo así el peso y la complejidad de la librería. </li>
          <li><strong>Incorporación de Nuevas Clases</strong>: Se han añadido nuevas clases, adaptados a las nuevas funcionalidades y estilos de Bootstrap 5. </li>
          <li><strong>Refactorización de componentes</strong>: Se han refactorizado componentes, acorde a las nuevas funcionalidades y estilos de Bootstrap 5, lo que permite a los desarrolladores aprovechar al máximo las nuevas posibilidades que ofrece esta versión. </li>
          <li><strong>Proceso de Compilación y Distribución</strong>: "Obelisco V2" incluye un proceso de buildeo que compila los archivos SCSS a CSS. El resultado es un paquete optimizado de estilos CSS que puede ser fácilmente integrado en cualquier proyecto. </li>
        </ol>
      </>
    ),
  },
  {
    id: 'section-2',
    title: 'Componentes',
    content: (
        <>
         <h3>Componentes</h3>

        {/* inicio accesos */}
        <h4 className="mt-3">Acceso</h4>
        <ul>
          <li>Se elimina “lista ancho por acceso”.</li>
          <li>La lista de accesos por ancho completo, que utilizaba las clases access-deck max-cards-*, queda deprecada. </li>
          <ul>
            <li>Respecto a la lista de accesos con ancho por accesos, que utilizaba las clases access-deck access-column max-cards-* queda deprecada y se reemplazan por las clases: </li>
            <li>.access-items-1:  para accesos en 1 sola columna con un aside</li>
            <li>.access-items-3:  para accesos en 3 columnas en desktop, 2 columnas en tablet, y 1 columna en mobile. </li>
            <li>.access-items-3 row-cols-md-1:  para accesos en 3 columnas en desktop, 1 columna en tablet, y 1 columna en mobile. </li>
            <li>.access-items-4:  para accesos en 4 columnas en desktop, 2 columnas en tablet, y 1 columna en mobile. </li>
            <li>.access-items-4 row-cols-md-1:  para accesos en 4 columnas en desktop, 1 columna en tablet, y 1 columna en mobile. </li>
            <li>Se debe tener en cuenta que, para la disposición de accesos, cada acceso se debe encontrar dentro de una etiqueta div con clase col, los cuales estarán dentro de etiqueta div con las clases mencionadas. </li>
          </ul>
        </ul>
        {/* fin accesos */}

        {/* inicio alerta */}
        <h4 className='mt-4' >Alerta</h4>
        <ul>
          <li>Se quita alerta primary, quedan; info, success, warning y danger.  </li>
          <li>Info tiene un nuevo color. </li>
        </ul>

        <p>Antes:</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {`<div class='alert alert-info'>
  <p>Esta es la descripción de una alerta de información.</p>
</div>`}
        </SyntaxHighlighter>

        <p>Ahora:</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {`<div class='alert alert-info'>
  Esta es la descripción de una alerta de información.
</div>`}
        </SyntaxHighlighter>
        {/* fin alerta */}

        {/* inicio boton */}
        <h4 className='mt-4' >Botón</h4>
        <li>Se elimina la clase <code>.btn-icon</code>, no es necesaria colocarla al utilizar iconos o spinner en botón. </li>
        <li>Se crea la clase <code>.sr-only</code> que extiende de la clase visually-hidden (accesibilidad). </li>
        <li>Se agrega la clase <code>.o-icon</code> a los iconos de Boxicons y Material Icons Rounded. </li>
        <li>Se crea la clase <code>.btn-xs</code> para los botones que son utilizados dentro de tablas. </li>
        <li>Los botones primary y secondary han cambiado de color.</li>
        {/* fin boton */}


        {/* inicio colores */}
        <h4 className='mt-4' >Colores</h4>

        <div id='colores' className="container">
          <div className="row">
            {/*Primera columna*/}
            <div className="col">
              <h6>Clase:</h6>
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
              <h6>Nuevo valor:</h6>
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
              <h6>Antiguo valor:</h6>
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

        <h4 className='mt-4' >Desplegables de navegación y selección </h4>

        <ul>
          <li>Se elimina de la etiqueta button de dropdown el atributo <code>aria-haspopup="true"</code> y se reemplaza <code>data-toggle="dropdown"</code> por <code>data-bs-toggle="dropdown"</code></li>
          <li>Se elimina la clase  <code>.dropdown-toggle</code> de la etiqueta button de dropdown.
          </li>
          <li>Al span con clase <code>.btn-dropdown-text</code> (que se encuentra dentro de la etiqueta button del dropdown), se agrega la clase <code>.ellipsis-1</code>
          </li>
          <li>En el caso de los items del desplegable con texto alineado hacia la derecha, se reemplazan las clases <code>.text-right</code> por <code>.text-end</code>
          </li>
          <li>En el caso de desplegable con disposición a la derecha, se reemplaza la clase <code>.dropdown-menu-right</code> por <code>.dropdown-menu-end</code>
          </li>
          <li>Se agrega la clase <code>.o-icon</code> a los iconos de Boxicons y Material Icons Rounded.
          </li>
          <li>Se modifica la estructura html de 'Desplegable con cascada', se utiliza la variante 'Click outside' de Bootstrap 5. Se agrega a la etiqueta button del desplegable el atributo     <code>data-bs-auto-close="outside"</code>. El dropdown en cascada (el que se encuentra dentro de dropdown) tiene la misma estructura html que dropdown con la diferencia que al div con clase dropdown se le agrega la clase <code>sub-dropdown</code></li>
          <li>Respecto a los tamaños de desplegables, se crean las clases dropdown-lg y dropdown-sm, las cuales se utilizan en la etiqueta div con clase dropdown, y se eliminan las clases btn-dropdown-lg y btn-dropdown-sm de la etiqueta button del desplegable. </li>
          <li>Se modifica la estructura html de 'Desplegable de selección', se utiliza la variante'Click outside' de Bootstrap 5. Se eliminan de la etiqueta button del desplegable los atributos <code>data-toggle="collapse"</code>, <code>data-target</code> y <code>aria-controls</code>, y se reemplazan por <code>data-bs-toggle="dropdown"</code>, y  <code>data-bs-auto-close="outside"</code>.  Se elimina la clase <code>dropdown-form</code>.  Se modifica la estructura html de los inputs de selección.  </li>
        </ul>
        {/* fin colores */}

        {/* inicio enlace */}
        <h4 className='mt-4' >Enlace</h4>
        <ul>
          <li>Se agrega en los enlaces el atributo <code>rel="noopener noreferrer"</code>. </li>
        </ul>
        {/* fin enlace */}

        {/* inicio etiqueta */}
        <h4 className='mt-4' >Etiquetas</h4>
        <ul>
          <li>Se crean las clases <code>.badge-default</code> y <code>.badge-warning</code>. </li>
          <li>Las clases <code>.badge-primary</code>  y <code>.badge-secondary</code> quedan deprecadas. </li>
        </ul>
        {/* fin etiqueta */}

        {/* inicio formulario */}
        <h4 className='mt-4' >Formulario – Casillas de selección (Radio y Checkbox) </h4>
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
        {/* fin formulario */}

        {/* inicio grilla */}
        <h4 className='mt-4' >Grilla</h4>
        <div id='grilla' className="container">
          <div className="row">
            {/*Primera columna*/}
            <div className="col col-auto">
              <h6>viewport</h6>
              <p>Menos de 576px</p>
              <p>Entre 576px y 767px</p>
              <p>Entre 768px y 991px</p>
              <p>Entre 992px y 1199px</p>
              <p>Entre 1200px y 1399px</p>
              <p>Mayor a 1400px</p>
            </div>
            {/*Segunda columna*/}
            <div className="col col-auto">
              <h6>max-width</h6>
              <p>100%</p>
              <p>540px</p>
              <p>720px</p>
              <p>960px</p>
              <p>1140px</p>
              <p>1320px</p>

            </div>
            {/* Tercera columna*/}
            <div className="col col-auto">
              <h6>gap</h6>
              <p>32px</p>
              <p>32px</p>
              <p>24px</p>
              <p>24px</p>
              <p>32px</p>
              <p>32px</p>

            </div>
            {/* Cuarta columna*/}
            <div className="col col-auto">
              <h6>área diseñable</h6>
              <p>100%</p>
              <p>508px</p>
              <p>696px</p>
              <p>936px</p>
              <p>1108px</p>
              <p>1288px</p>

            </div>
          </div>
        </div>
        {/* fin grilla */}


        {/* inicio mensaje de estados */}
        <h4 className='mt-4' >Mensaje de estados</h4>

        <ul>
          <li>Se crea la clase <code> "status-warning" </code> (NUEVA).</li>
          <li>Se cambia <code>'data-target'</code> a <code>'data-bs-target'</code>.</li>
        </ul>

        <p>antes</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
                  {`<div class="status status-warning"> 
          <h2 class="status-title">Esto es un título de un mensaje de información</h2> 
          <p class="status-text"> 
            Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo. 
          </p> 
          <p class="status-text"> 
            Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.
          </p> 
          <button type="button" class="btn btn-secondary"> 
            Botón 
          </button> 
        </div> `}
                </SyntaxHighlighter>

                <p>despues</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
                  {`<div class="status status-warning"> 
          <h2 class="status-title"> Esto es un título de un mensaje de información</h2> 
          <p class="status-text"> 
            Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo. 
          </p> 
          <p class="status-text"> 
            Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo. 
          </p> 
          <button type="button" class="btn btn-secondary"> 
          <i class="bx bxs-info-circle o-icon"></i>  
            Botón 
          </button> 
        </div> `}
                </SyntaxHighlighter>
        {/* fin mensaje de estados */}


        {/* inicio modal*/}
        <h4 className='mt-4' >Modal</h4>
        <ul>
          <li>Se modifica <code>'data-toggle'</code> a <code>'data-bs-toggle'</code></li>
          <li>Se modifica <code>'data-target'</code> a <code>'data-bs-target'</code></li>
          <li>Se modifica <code>'data-dismiss'</code> a <code>'data-bs-dismiss'</code></li>
          <li>Eliminación del <code>'role="dialog"'</code> y  <code>'role="document"'</code> ya que Bootstrap 5 lo maneja automáticamente </li>
        </ul>
        {/* fin modal*/}


        {/* inicio pestaña*/}
        <h4 className='mt-4' >Pestaña</h4>
        <ul>
          <li>Se modifica la clase <code>'tabs-slider'</code> por <code>'tabs-box'</code>. </li>
          <li>Se modifica la clase <code>'fixedwith'</code> por <code>'fixed-width'</code>. </li>
          <li>Se modifica la clase <code>'icons-container'</code> por <code>'tabs-controls'</code>. </li>
          <li>Se modifica la clase <code>'right-left'</code> por <code>'prev-next'</code> </li>
        </ul>
        {/* fin pestaña*/}

        {/* inicio tipografia*/}
        <h4 className='mt-4' >Tipografia</h4>
        <ul>
          <li>Se crean las siguientes clases para el Cuerpo: .text-xl, .text-lg, .text-md, .text-sm las cuales corresponden a los tamaños Cuerpo XL, Cuerpo L, Cuerpo M, y Cuerpo SM, respectivamente. La clase text-xs se utiliza para Cuerpo XS. </li>
          <li>Respecto a la categoría Titulares, se crearon las clases .headline-lg, .headline-md, y .headline-sm que corresponden a Titulares L, Titulares M y Titulares S. </li>
          <li>Las clases .font-weight-* se renombraron a .fw-*. Las clases .fw-bold, .fw-semibold, y .fw-normal, se utilizan para los valores de font-weight de 700,600 y 400 respectivamente. </li>
          <li>La clase .font-italic se renombro a .fst-italic. </li>
          <li>Se crearon las clases .underline-1 y .underline-2 las cuales dan un subrayado al elemento. En el primer caso, el grosor del subrayado es 1px y en el segundo caso es 2px. </li>
          <li>Respecto a las citas, se reemplaza la etiqueta small (utilizada para la información del autor) por etiqueta p con clase .author. </li>
        </ul>
        {/* fin tipografia*/}
        </>

    ),
  }
];

const Docs: React.FC = () => {
  return <DocumentationTemplate sections={sections} />;
};

export default Docs;
