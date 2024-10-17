import Link from 'next/link';

import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

const UpdateComponents: React.FC = () => {
  const sections = [
    {
      title: 'Documentacion de clases',
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
            <Link href="/class-documentation">Documentacion de Clases</Link>
          </li>
        </ol>
      </nav>
      <DocumentationTemplate sections={sections} />
    </>
  );
};

export default UpdateComponents;
