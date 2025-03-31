import ComponentHeader from "@/components/Template/ComponentHeader";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";


const sections = [
  {
    title: '¿Cómo esta desarrollado?',
    description: 'Obelisco V2 se ha desarrollado como una aplicación React utilizando una estructura moderna y herramientas tecnológicas actuales para garantizar un desarrollo ágil, eficiente y con alto nivel de mantenibilidad. A continuación, se describen los elementos clave y tecnologías utilizadas en su desarrollo: ',
    content:(
      <div className="col-12">
      <div className="list-informative">
        <ul className="list-informative-bullet">
          <li>
          <strong> React 18:</strong> La base del desarrollo es React, en su versión 18, proporcionando una interfaz de usuario dinámica y reactiva. La elección de React permite la creación de componentes reutilizables y una gestión eficiente del estado. 
          </li>
          <li>
          <strong>Bootstrap 5.3.3:</strong> Se utiliza como framework de estilos, brindando una estructura sólida y componentes predefinidos que se integran con los estilos personalizados de Obelisco V2. Esta versión de Bootstrap ofrece mejoras en la accesibilidad y nuevas funcionalidades respecto a versiones anteriores. 
          </li>
          <li>
          <strong>Sass 1.77.8:</strong> Para el preprocesado de estilos, se emplea Sass, un potente preprocesador CSS que permite escribir código CSS más limpio y eficiente. La versión 1.77.8 es la utilizada para compilar los estilos en tiempo real y generar los archivos CSS finales. 
          </li>
          <li>
          <strong>TypeScript:</strong> Se utiliza para la prueba de componentes, proporcionando una tipificación estática que ayuda a prevenir errores en el código y facilita el desarrollo y mantenimiento de este. 
          </li>
          <li>
            <strong>Concurrently y Nodemon:</strong> Para mejorar el flujo de desarrollo, se utilizan estos paquetes. Concurrently permite ejecutar múltiples comandos simultáneamente, mientras que Nodemon se encarga de reiniciar automáticamente la aplicación cuando se detectan cambios, permitiendo la compilación en tiempo real de los estilos de Sass a CSS. 
          </li>
        </ul>
      </div>
    </div>
    )
  },
  {
    title: 'Estructura de Desarrollo',
    content:(
      <div className="col-12">
      <div className="list-informative">
        <ul className="list-informative-bullet">
          <li>
          <strong>Carpeta app:</strong> Contiene un front temporal en el cual se importan los estilos de los componentes. Esta sección actúa como una demostración visual de los componentes, permitiendo a los desarrolladores y diseñadores ver en tiempo real los resultados y copiar el HTML necesario para implementar los estilos en sus propios proyectos. 
          </li>
          <li>
          <strong>Carpeta src:</strong> Dentro se encuentra la carpeta styles y en ella una carpeta components, en esta carpeta se encuentran todas las hojas de estilos SCSS de cada componente de Obelisco v2, de manera que cada componente tiene su hoja de estilos correspondiente cumpliendo con las buenas prácticas y facilidad de identificarlos. 
          </li>
        </ul>
      </div>
    </div>
    )
  },
  {
    title: 'Compilación y Distribución',
    description: 'Al finalizar el desarrollo, todos los estilos compilados se almacenan en la carpeta dist. Esta carpeta es la que se prepara para el empaquetado y distribución, asegurando que los estilos estén optimizados y listos para ser utilizados en producción. '
  }
]

export default function ProgrammersDocs() {
  return (
    <>
    <ComponentHeader
      title="Documentación para Programadores"
      description={[
        'Obelisco V2 está diseñado para ser una herramienta fundamental en el desarrollo de proyectos web del GCBA, sirviendo como referencia para los equipos de diseño y desarrollo al momento de crear interfaces de usuario. Esta librería no solo busca estandarizar la apariencia visual, sino también promover prácticas de desarrollo eficiente y accesible.',
        'Obelisco V2 tiene como objetivo mejorar la calidad y coherencia de los servicios digitales ofrecidos por el GCBA, contribuyendo a una mejor experiencia para los ciudadanos y usuarios de estos servicios. Con una base tecnológica moderna y una visión clara de inclusión y accesibilidad, este proyecto se posiciona como un pilar en la estrategia digital de la ciudad.',
        
      ]}
      divider={true}
    />
    <DocumentationTemplate sections={sections} type="init" />
  </>
  )
}
