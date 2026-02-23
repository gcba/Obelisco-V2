'use client';
import { basePath } from '@/utils';
import Image from 'next/image';

import CodeBox from '@/components/CodeBox';
// import LinkClient from '@/components/LinkClient';
import CriteriosWCAG from '@/components/CriteriosWCAG';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  PROGRESSBAR_DESCRIPTION_PRIMARY,
  PROGRESSBAR_DESCRIPTION_SUCCESS,
  PROGRESSBAR_TYPES_PRIMARY,
  PROGRESSBAR_TYPES_SUCCESS,
} from './code-views';

const ProgressBarDocs: React.FC = () => {
  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet" style={{ marginBottom: '32px' }}>
              <li>
                Se utiliza para indicar el estado de avance de un proceso en curso, permitiendo que la persona usuaria
                comprenda cuánto falta para su finalización.{' '}
              </li>
            </ul>
          </div>
          <div className="list-informative">
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                No utilizar este componente para formularios. La persona usuaria debe conocer en qué parte del proceso
                se encuentra.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Contexto de uso',
      content: (
        <>
          <p className="text-xl fw-semibold">Ubicación</p>
          <div className="max-items-2">
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/progress_bar/progress_bar_1.svg`}
                alt="Cómo sí usar la barra de progreso"
                width="800"
                height="200"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0 text-sm">
                  La barra de progreso se debe ubicar alineada a la izquierda y sobre el contenido en el cual
                  interactuará el usuario.{' '}
                </p>
              </div>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/progress_bar/progress_bar_2.svg`}
                alt="Cómo no usar la barra de progreso"
                width="800"
                height="200"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">check</span>
                <p className="mb-0 text-sm">
                  Alinearlas a la derecha y en el medio del contenido interrumpe la lectura y dificulta su
                  identificación.
                </p>
              </div>
            </div>
          </div>

          <p className="text-md mt-4 mb-4">
            El color predeterminado es azul. En el caso que haga referencia directa a un proceso en curso, utilice la
            barra verde para connotar éxito en el avance.{' '}
          </p>

          <Image
            src={`${basePath}/images/progress_bar/progress_bar_3.svg`}
            alt="Color predeterminado de la barra de progreso"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
  ];

  const SECTIONS_DEV = [
    {
      title: 'Simple',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={PROGRESSBAR_TYPES_PRIMARY}>
            <div className="container">
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '25%' }}
                ></div>
              </div>
              <br />
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '50%' }}
                ></div>
              </div>
              <br />
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={PROGRESSBAR_TYPES_SUCCESS}>
            <div className="container">
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '25%' }}
                ></div>
              </div>

              <br />

              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '50%' }}
                ></div>
              </div>

              <br />

              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con descripción',
      content: (
        <>
          <CodeBox codeHTML={PROGRESSBAR_DESCRIPTION_PRIMARY}>
            <div className="container">
              <p className="progress-description">Descripción</p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '50%' }}
                ></div>
              </div>

              <br />

              <p className="progress-description">Descripción</p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={PROGRESSBAR_DESCRIPTION_SUCCESS}>
            <div className="container">
              <p className="progress-description">Descripción</p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '50%' }}
                ></div>
              </div>

              <br />

              <p className="progress-description">Descripción</p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  const SPECS = [
    {
      title: 'Anatomía',
      firstTitle: true,
      content: (
        <>
          <Image
            src={`${basePath}/images/progress_bar/progress_bar_4.svg`}
            alt="Anatomia de la barra de progreso"
            width="800"
            height="40"
            className="img-fluid"
          />

          <div className="responsive-scroll mt-4" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Elemento
                  </th>
                  <th scope="col" className="tb-text">
                    Carácter
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Etiqueta (Opcional) </td>
                  <td>Texto que identifica el proceso o acción en curso. Debe ser clara, breve y descriptiva.</td>
                </tr>
                <tr>
                  <td>2. Indicador de avance</td>
                  <td>Representación visual del progreso alcanzado hasta el momento.</td>
                </tr>
                <tr>
                  <td>3. Fondo de barra</td>
                  <td>Representa el total del proceso pendiente y completado.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Tipos',
      content: (
        <>
          <p className="text-md mb-4">
            La barra de progreso es una representación visual que permite a las personas conocer en qué parte del
            proceso se encuentran.
            <br />
            La sección gris de la barra muestra la duración total del proceso y la barra de color representa el avance
            del usuario dentro del mismo.{' '}
          </p>
        </>
      ),
    },
    {
      subtitleBold: 'Simple',
      content: (
        <>
          <p className="text-md mb-4">El componente sirve para comunicar cuánto se ha avanzado en el proceso.</p>
          <Image
            src={`${basePath}/images/progress_bar/progress_bar_5.svg`}
            alt="Barra de progreso simple"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },

    {
      subtitle: 'Con descripción',
      content: (
        <>
          <p className="text-md mb-4">
            Las barras de progreso pueden tener una descripción que brinde contexto sobre el proceso que se está
            llevando adelante.
          </p>
          <Image
            src={`${basePath}/images/progress_bar/progress_bar_6.svg`}
            alt="Variante de tarjeta sin borde"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
  ];

  const ACCESSIBILITY = [
    {
      title: 'Navegación por teclado',
      firstTitle: true,
      content: (
        <>
          <p className="text-md">
            La barra de progreso no es un componente interactivo. No recibe foco ni permite interacción mediante
            teclado.
            <br />
            La información sobre el avance del proceso se comunica de forma accesible a través de texto descriptivo y
            atributos semánticos, permitiendo que las personas usuarias comprendan el estado del proceso sin necesidad
            de interacción.{' '}
          </p>
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <p className="text-md">Para cumplir con buenas prácticas de accesibilidad, se recomienda:</p>
          <ol>
            <li>
              Incluir una etiqueta o texto alternativo que describa el progreso del proceso (por ejemplo, &quot;Paso 2
              de 5&quot; o &quot;45 % completado&quot;).
            </li>
            <li>Asegurar que el estado del progreso sea comunicado en texto, no solo de forma visual.</li>
            <li>
              Utilizar roles y atributos ARIA apropiados (por ejemplo, role=&quot;progressbar&quot;) cuando el progreso
              sea dinámico.
            </li>
          </ol>
          <p className="text-xl fw-semibold">Anuncios de cambio de estado</p>
          <p className="text-md">
            El cambio debe ser anunciado por lectores de pantalla de manera clara.
            <br />
            Se recomienda utilizar regiones con aria-live cuando la actualización no sea iniciada directamente por la
            persona usuaria.
          </p>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicados',
      content: (
        <>
          <CriteriosWCAG list={['1.3.1', '1.4.11', '1.4.3']} />
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Barra de progreso"
        description={[
          'Las barras de progreso muestran visualmente el avance de un proceso de varios pasos a partir de la interacción de la persona usuaria.',
        ]}
      />

      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'specs',
            sectionContent: SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'section-accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default ProgressBarDocs;
