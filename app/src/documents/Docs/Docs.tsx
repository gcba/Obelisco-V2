import Link from 'next/link';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: 'Detalle',
    content: (
      <>
        <p className="mt-3">
          Obelisco V2 se distingue de su predecesor por varias mejoras clave que optimizan tanto la funcionalidad
          proporcionada por Bootstrap 5 como el rendimiento general del sistema. En esta nueva versión, hemos
          implementado una serie de actualizaciones y refinamientos para ofrecer una experiencia de usuario superior y
          una integración más eficiente. A continuación, se detallan algunas de las principales mejoras que diferencian
          a Obelisco V2 de Obelisco V1:{' '}
        </p>
      </>
    ),
  },
  {
    title: 'Actualización a Bootstrap 5',
    content: (
      <ul>
        <li>
          <strong>Actualización a Bootstrap 5</strong>: A diferencia de &quot;Obelisco V1&quot;, que utilizaba Bootstrap
          4, &quot;Obelisco V2&quot; ha migrado a Bootstrap 5. Esto permite aprovechar las nuevas funcionalidades,
          mejoras de rendimiento y simplificaciones de código que vienen con la última versión de Bootstrap.
        </li>
      </ul>
    ),
  },
  {
    title: 'Optimización de Código SCSS',
    content: (
      <li>
        <strong>Optimización de Código SCSS</strong>: Se han corregido variables y funciones presentes en el código SCSS
        de &quot;Obelisco V1&quot;, mejorando así la calidad y la mantenibilidad del código. Además, se ha realizado una
        limpieza de código para eliminar redundancias y optimizar la estructura de los estilos.
      </li>
    ),
  },
  {
    title: 'Eliminación de Componentes Deprecados',
    content: (
      <li>
        <strong>Eliminación de Componentes Deprecados</strong>: En esta nueva versión, se han eliminado los componentes
        que estaban deprecados o ya no eran necesarios, reduciendo así el peso y la complejidad de la librería.
      </li>
    ),
  },
  {
    title: 'Incorporación de Nuevas Clases',
    content: (
      <li>
        <strong>Incorporación de Nuevas Clases</strong>: Se han añadido nuevas clases, adaptadas a las nuevas
        funcionalidades y estilos de Bootstrap 5.
      </li>
    ),
  },
  {
    title: 'Refactorización de componentes',
    content: (
      <li>
        <strong>Refactorización de componentes</strong>: Se han refactorizado componentes acorde a las nuevas
        funcionalidades y estilos de Bootstrap 5, lo que permite a los desarrolladores aprovechar al máximo las nuevas
        posibilidades que ofrece esta versión.
      </li>
    ),
  },
  {
    title: 'Proceso de Compilación y Distribución',
    content: (
      <>
        <li>
          <strong>Proceso de Compilación y Distribución</strong>: &quot;Obelisco V2&quot; incluye un proceso de buildeo
          que compila los archivos SCSS a CSS. El resultado es un paquete optimizado de estilos CSS que puede ser
          fácilmente integrado en cualquier proyecto.
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
        title="Migración a V2"
        description={[
          'Esta nueva versión es una evolución de la versión anterior, "Obelisco V1", y busca mejorar y actualizar los componentes y estilos ofrecidos, alineándose con las últimas tendencias y estándares del desarrollo web.',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="docs" />
    </>
  );
};

export default Docs;
