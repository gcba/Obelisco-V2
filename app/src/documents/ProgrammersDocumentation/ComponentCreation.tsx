
import ComponentHeader from '@/components/Template/ComponentHeader'
import DocumentationTemplate from '@/components/Template/DocumentationTemplate'


const sections = [
  {
    // title: 'Para crear estilos para un nuevo componente en Obelisco V2, sigue estos pasos:',
    title: 'Creación de la Hoja de Estilos',
    content:(
      <div className="col-12">
      <div className="list-informative">
        <ul className="list-informative-bullet">
              <li>
              Dirígete a la raíz del proyecto y accede a la carpeta src.
              </li>
              <li>
              Navega a styles, y luego a components. 
              </li>
              <li>
              Crea un nuevo archivo SCSS para tu componente con un nombre descriptivo, por ejemplo, _example.scss.
              </li>
              <li>
              En este archivo, define los estilos necesarios para tu componente 
            </li>
        </ul>
      </div>
    </div>
    )
  },
  {
    title: 'Importación en el Archivo Principal de Estilos',
    content: (
      <div className="col-12">
        <div className="list-informative">
          <ul className='list-informative-bullet'>
            <li>Una vez que hayas creado y completado la hoja de estilos para tu componente, debes integrarla en el archivo principal de estilos.</li>
            <li>
            Dirígete a la carpeta styles y abre el archivo main.scss.
            </li>
            <li>
            Importa la hoja de estilos de tu componente añadiendo la línea correspondiente al archivo main.scss. Esto asegura que los estilos de tu componente se incluyan en el build final. 
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Compilación de los Estilos',
    content: (
      <div className="col-12">
        <div className="list-informative">
          <ul className='list-informative-bullet'>
            <li>Para que los estilos de tu componente sean incluidos en el paquete distribuido, es necesario ejecutar el comando de build</li>
            <li>
            En la raíz del proyecto, ejecuta npm run build. Esto compilará los estilos SCSS a CSS y preparará el paquete para su distribución.
            </li>
          </ul>
        </div>
    </div>
    )
  },
  {
    title: 'Visualización del Componente',
    content: (
      <div className="col-12">
        <div className="list-informative">
          <ul className='list-informative-bullet'>
            <li>
            Copia el HTML correspondiente con las clases que has creado. 
            </li>
            <li>
            Navega a la carpeta src/documents dentro de app.
            </li>
            <li>
            Crea una nueva carpeta con el nombre de tu componente y dentro de ella, crea un componente React con el código HTML y las clases aplicadas.
            </li>
            <li>
            Dirígete a la carpeta src/app/components
            </li>
            <li>
            Crea una nueva carpeta con el nombre de tu componente y dentro de ella, crea un archivo llamado page.tsx.
            </li>
            <li>
            En page.tsx, importa el componente que creaste en la sección de documentos y utilízalo según sea necesario.
            </li>
            <li>
            Añade una ruta para esta nueva página a la navegación vertical del front para poder acceder a tu componente desde la interfaz de usuario.
            </li>
          </ul>
        </div>
      </div>
    )
  }
]

export default function ComponentCreation() {
  return (
    <>
    <ComponentHeader
      title="Método de creación de componentes"
      description='Siguiendo estos pasos, podrás crear, integrar y visualizar nuevos componentes en Obelisco V2 de manera efectiva, asegurando que los estilos y la funcionalidad se presenten correctamente en el proyecto.'
      divider={true}
    />
    <DocumentationTemplate sections={sections} type="init" />
  </>
  )
}
