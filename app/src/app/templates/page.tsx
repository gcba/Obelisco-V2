import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Documentacion() {
  return (
    <>
      <h1>Migración a V2</h1>
      <p className="lead">En esta sección encontraremos la documentación y los cambios que se hicieron en la nueva versión de Obelisco.  
      Esta nueva versión es una evolución de la versión anterior, "Obelisco V1", y busca mejorar y actualizar los componentes y estilos ofrecidos, 
      alineándose con las últimas tendencias y estándares del desarrollo web.</p>    
      <hr />
      
      <h3 className="mt-5">Actualizaciones</h3>
      <p className="mt-3">Obelisco V2 se distingue de su predecesor por varias mejoras clave: </p>
      <ol className="mt-3">
        <li><strong>Actualización a Bootstrap 5</strong>: A diferencia de "Obelisco V1", que utilizaba Bootstrap 4, "Obelisco V2" ha migrado a Bootstrap 5. Esto permite aprovechar las nuevas funcionalidades, mejoras de rendimiento y simplificaciones de código que vienen con la última versión de Bootstrap. </li>
        <li><strong>Optimización de Código SCSS</strong>: Se han corregido variables y funciones presentes en el código SCSS de "Obelisco V1", mejorando así la calidad y la mantenibilidad del código. Además, se ha realizado una limpieza de código para eliminar redundancias y optimizar la estructura de los estilos. </li>
        <li><strong>Eliminación de Componentes Deprecados</strong>: En esta nueva versión, se han eliminado los componentes que estaban deprecados o ya no eran necesarios, reduciendo así el peso y la complejidad de la librería. </li>
        <li><strong>Incorporación de Nuevas Clases</strong>: Se han añadido nuevas clases, adaptados a las nuevas funcionalidades y estilos de Bootstrap 5. </li>
        <li><strong>Refactorización de componentes</strong>: Se han refactorizado componentes, acorde a las nuevas funcionalidades y estilos de Bootstrap 5, lo que permite a los desarrolladores aprovechar al máximo las nuevas posibilidades que ofrece esta versión. </li>
        <li><strong>Proceso de Compilación y Distribución</strong>: "Obelisco V2" incluye un proceso de buildeo que compila los archivos SCSS a CSS. El resultado es un paquete optimizado de estilos CSS que puede ser fácilmente integrado en cualquier proyecto. </li>
      </ol>      
      
      <section className="mt-5">
        <h3>Componentes</h3>

        <h4 className="mt-3">Acceso</h4>
        <ul>
          <li>Se elimina “lista ancho por acceso”. <br /> <code>access-deck</code> </li>
        </ul>

        <h4>Pestaña</h4>
        <ul>
          <li>Se modifica la clase <code>“tabs-slider”</code> por <code>“tabs-box”</code>. </li>
          <li>Se modifica la clase <code>“fixedwith”</code> por <code>“fixed-width”</code>. </li>
          <li>Se modifica la clase <code>“icons-container”</code> por <code>“tabs-controls”</code>. </li>
          <li>Se modifica la clase <code>“right-left”</code> por <code>“prev-next”</code> </li>
        </ul>

        <h4>Desplegable de navegación</h4>
        <ul>
          <li>Se reemplazan las clases <code>"text-right"</code> de los "span" con clase <code>"item-text"</code> por <code>"text-end"</code></li>
          <li>Se elimina del button dropdown <code>aria-haspopup="true"</code> y se reemplaza <code>data-toggle="dropdown"</code> por <code>data-bs-toggle="dropdown"</code></li>
          <li>Se elimina la clase <code>dropdown-toggle</code>  del button de dropdown </li>
          <li>Se reemplaza la clase <code>"dropdown-menu-right"</code> por <code>"dropdown-menu-end"</code></li>
          <li>Se modifica el html de “Desplegable con cascada”, se utiliza Variante ‘Click outside’ de Bootstrap 5, se agrega al button de dropdown el atributo <code>data-bs-auto-close="outside"</code>.
            El dropdown en cascada (el que se encuentra dentro de dropdown) tiene la misma estructura html que dropdown con la diferencia que al div con clase dropdown se le agrega la clase sub-dropdown </li>
        </ul>
       
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {"<div className='dropdown sub-dropdown'> ... </div>"}
        </SyntaxHighlighter>

        <h4>Mensaje de estado</h4>
        <ul>
          <li>Se crea una nueva clase <code>"status-warning"</code></li>
          <li>Se modifica <code>'data-target'</code> a <code>'data-bs-target'</code></li>
        </ul>

        <h4>Etiquetas</h4>
        <p>Se crean las clases:</p>
        <ul>        
          <li><code>"badge badge-default"</code></li>
          <li><code>"badge badge-warning"</code></li>
        </ul>

        <h4>Formulario</h4>

        <h4>Galeria</h4>
        <ul>
          <li>Se modifica <code>'data-toggle'</code> a <code>'data-bs-toggle'</code></li>
          <li>Se modifica <code>'data-target'</code> a <code>'data-bs-target'</code></li>
          <li>Se modifica <code>'data-backdrop'</code> a <code>'data-bs-backdrop'</code></li>
          <li>Se añade <code>'slide'</code> para la transición</li>
          <li>Se modifica <code>'data-ride'</code> a <code>'data-bs-ride'</code></li>
          <li>Se modifica <code>'data-interval'</code> a <code>'data-bs-interval'</code></li>
          <li>Se modifica <code>'sr-only'</code> a <code>'visually-hidden'</code></li>
          <li>Se modifica <code>'data-slide'</code> a <code>'data-bs-slide'</code></li>
        </ul>
        
        <h4>Modal</h4>
        <ul>
          <li>Se modifica <code>'data-toggle'</code> a <code>'data-bs-toggle'</code></li>
          <li>Se modifica <code>'data-target'</code> a <code>'data-bs-target'</code></li>
          <li>Se modifica <code>'data-dismiss'</code> a <code>'data-bs-dismiss'</code></li>
          <li>Eliminación del <code>'role="dialog"'</code> y  <code>'role="document"'</code> ya que Bootstrap 5 lo maneja automáticamente </li>
        </ul>

      </section>
    </>
  );
}