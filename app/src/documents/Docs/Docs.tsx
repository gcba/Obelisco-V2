import Link from 'next/link';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: 'Detalle',
    firstTitle: true,
    content: (
      <>
        <p className="mt-3">
          Obelisco no es solo un sistema de diseño, es una <strong>herramienta estratégica y eficiente</strong>, que
          facilita la incorporación de nuevas tecnologías, entregando valor en ciclos más cortos mejorando la
          interacción con las personas usuarias.
        </p>
      </>
    ),
  },
  {
    title: 'Actualización a Bootstrap 5',
    content: (
      <ul>
        <li>
          Con la nueva versión del framework en Obelisco V2 mejora el rendimiento y la simplificación del código, lo que
          permite aprovechar <strong>nuevas funcionalidades</strong>.
        </li>
      </ul>
    ),
  },
  {
    title: 'Optimización de código SCSS',
    content: (
      <li>
        Se han corregido variables y funciones presentes en el código de Obelisco v1 mejorando la calidad y la
        minimización de errores, eliminando redundancias y optimizando la estructura de estilos.
      </li>
    ),
  },
  {
    title: 'Eliminación de componentes deprecados',
    content: (
      <li>
        En la nueva versión se han eliminado los componentes que ya no eran necesarios para así reducir el peso y
        complejidad de la librería.
      </li>
    ),
  },
  {
    title: 'Integración de clases y refactorización de componentes',
    content: (
      <>
        <li>
          Acorde a las nuevas funcionalidades y estilos de Bootstrap 5 y Obelisco, se añadieron nuevas clases dentro de
          la librería. Además, Se refactorizaron componentes, permitiendo aprovechar al máximo la nueva actualización de
          la nueva versión.
        </li>
      </>
    ),
  },
  {
    title: 'Proceso de compilación y distribución',
    content: (
      <>
        <li>
          Obelisco V2 incluye un proceso que compila archivos SCSS y da como resultado un paquete optimizado de estilos
          CSS que puede ser fácilmente integrado a cualquier proyecto.
        </li>
        <div className="col-12 col-lg-7 mt-4 ms-1">
          <Link href="/documentation/update-component" className="list-group-item item-sm">
            <span className="material-symbols-rounded o-icon">import_contacts</span>
            <div className="access-content">
              <span className="access-title">Componentes que cambiaron</span>
              <p className="access-text">Detalle disponible</p>
            </div>
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Clases disponibles',
    content: (
      <>
        <li>
          <strong>Clases disponibles</strong>:
        </li>
        <div className="col-12 col-lg-7 mt-4 ms-1">
          <Link href="/documentation/class-documentation" className="list-group-item item-sm">
            <span className="material-symbols-rounded o-icon">import_contacts</span>
            <div className="access-content">
              <span className="access-title">Clases disponibles</span>
              <p className="access-text">Clases disponibles</p>
            </div>
          </Link>
        </div>
      </>
    ),
  },
];

const Docs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Documentación"
        description={
          <>
            Obelisco v2 mejora y actualiza los componentes y estilos ofrecidos en la versión anterior para diseñar{' '}
            <strong>interfaces consistentes, intuitivas y confiables</strong> en todos los productos digitales.
          </>
        }
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="docs" />
    </>
  );
};

export default Docs;
