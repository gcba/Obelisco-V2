import { basePath } from '@/utils';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import CriteriosWCAG from '@/components/CriteriosWCAG';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  SIMPLE_ALERT,
  WITH_CLOSE_ALERT,
  HIGHLIGHTED_ALERT,
  HYPERLINK_ALERT,
  LIST_LINK_ALERT,
  WITH_DESCRIPTION_ALERT,
  SYSTEM_ALERT,
  ALERTAS_ACCESSIBILTY,
  ALERTAS_ACCESSIBILTY_2,
} from './code-views';

const AlertDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Sistema',
      content: (
        <CodeBox codeHTML={SYSTEM_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info system" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información. </strong>
                Esta es la descripción de una alerta de información que continua al texto destacado, incluso{' '}
                <LinkClient>con enlaces</LinkClient>
              </p>
            </div>

            <div className="alert alert-success system" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información. </strong>
                Esta es la descripción de una alerta de información que continua al texto destacado, incluso
              </p>
              <div className="alert-links">
                <LinkClient>con enlaces</LinkClient>
                <LinkClient>con enlaces</LinkClient>
              </div>
            </div>

            <div className="alert alert-warning system" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información. </strong>
                Esta es la descripción de una alerta de información que continua al texto destacado, incluso
              </p>
              <ol>
                <li>
                  <LinkClient>con enlaces</LinkClient>
                </li>
                <li>
                  <LinkClient>con enlaces</LinkClient>
                </li>
                <li>
                  <LinkClient>con enlaces</LinkClient>
                </li>
                <li>
                  <LinkClient>con enlaces</LinkClient>
                </li>
                <li>
                  <LinkClient>con enlaces</LinkClient>
                </li>
              </ol>
            </div>

            <div className="alert alert-danger system" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información. </strong>
                Esta es la descripción de una alerta de información que continua al texto destacado, incluso
              </p>
              <ol>
                <li>Texto descriptivo</li>
                <li>Texto descriptivo</li>
                <li>Texto descriptivo</li>
                <li>Texto descriptivo</li>
                <li>Texto descriptivo</li>
              </ol>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Simple',
      firstTitle: true,
      content: (
        <CodeBox codeHTML={SIMPLE_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info" role="alert">
              Esta es la descripción de una alerta de información.
            </div>

            <div className="alert alert-success" role="alert">
              Esta es la descripción de una alerta de éxito.
            </div>

            <div className="alert alert-warning" role="alert">
              Esta es la descripción de una alerta de advertencia.
            </div>

            <div className="alert alert-danger" role="alert">
              Esta es la descripción de una alerta de error.
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Con cierre',
      content: (
        <CodeBox codeHTML={WITH_CLOSE_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de información.</p>
              <button type="button" className="btn-close" aria-label="Cerrar"></button>
            </div>

            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de éxito.</p>
              <button type="button" className="btn-close" aria-label="Cerrar"></button>
            </div>

            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de advertencia.</p>
              <button type="button" className="btn-close" aria-label="Cerrar"></button>
            </div>

            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de error.</p>
              <button type="button" className="btn-close" aria-label="Cerrar"></button>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Con destacado',
      content: (
        <CodeBox codeHTML={HIGHLIGHTED_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta
                de información que continua al texto destacado.
              </p>
            </div>

            <div className="alert alert-warning" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de advertencia.</strong> Esta es la descripción de una alerta
                de advertencia que continua al texto destacado.
              </p>
            </div>

            <div className="alert alert-success" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de éxito.</strong> Esta es la descripción de una alerta de
                éxito que continua al texto destacado.
              </p>
            </div>

            <div className="alert alert-danger" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de error.</strong>
                Esta es la descripción de una alerta de error que continua al texto destacado.
              </p>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Con hipervinculo',
      content: (
        <CodeBox codeHTML={HYPERLINK_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información. </strong>
                Esta es la descripción de una alerta de información que continua al texto destacado, incluso{' '}
                <LinkClient>con enlaces</LinkClient>.
              </p>
            </div>

            <div className="alert alert-success" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de éxito. </strong>
                Esta es la descripción de una alerta de éxito que continua al texto destacado, incluso{' '}
                <LinkClient>con enlaces</LinkClient>.
              </p>
            </div>

            <div className="alert alert-warning" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de advertencia. </strong>
                Esta es la descripción de una alerta de advertencia que continua al texto destacado, incluso{' '}
                <LinkClient>con enlaces</LinkClient>.
              </p>
            </div>

            <div className="alert alert-danger" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de error. </strong>
                Esta es la descripción de una alerta de error que continua al texto destacado, incluso{' '}
                <LinkClient>con enlaces</LinkClient>.
              </p>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Con lista de enlaces',
      content: (
        <CodeBox codeHTML={LIST_LINK_ALERT}>
          <div className="container">
            <div className="alert alert-danger" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de error.</strong> Esta es la descripción de una alerta de
                error que continua al texto destacado.
              </p>
              <ol>
                <li>
                  <LinkClient>Ancla al error 1</LinkClient>
                </li>
                <li>
                  <LinkClient>Ancla al error 2</LinkClient>
                </li>
                <li>
                  <LinkClient>Ancla al error 3</LinkClient>
                </li>
                <li>
                  <LinkClient>Ancla al error 4</LinkClient>
                </li>
                <li>
                  <LinkClient>Ancla al error 5</LinkClient>
                </li>
              </ol>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Con lista de enlaces descriptiva',
      content: (
        <CodeBox codeHTML={WITH_DESCRIPTION_ALERT}>
          <div className="container">
            <div className="alert alert-info" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta
                de información que continua al texto destacado.
              </p>
              <ol>
                <li>
                  <span>Texto descriptivo 1</span>
                </li>
                <li>
                  <span>Texto descriptivo 2</span>
                </li>
                <li>
                  <span>Texto descriptivo 3</span>
                </li>
                <li>
                  <span>Texto descriptivo 4</span>
                </li>
                <li>
                  <span>Texto descriptivo 5</span>
                </li>
              </ol>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <p className="text-xl">Cuándo usar</p>
          <ul className="list-informative-bullet">
            <li>
              Para mensajes de alta prioridad que informen sobre el estado en funcionamiento de una acción o del
              sistema.
            </li>
            <li>
              Para proporcionar información complementaria dentro del contexto del contenido de la página y guiar a los
              usuarios a tomar decisiones informadas.
            </li>
          </ul>

          <p className="text-xl" style={{ marginTop: '32px' }}>
            Cuándo no usar
          </p>

          <ul className="list-informative-bullet">
            <li>
              Cuando la información no es crítica ni afecta el flujo de la tarea del usuario. En esos casos, es
              preferible usar texto informativo dentro del contenido.
            </li>
            <li>
              Para notificar sobre situaciones externas al contexto de la página o del sistema, por ejemplo, alertas
              meteorológicas o estado del transporte público. En estos casos recomendamos usar el componente{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/banner">Banner</a>.
            </li>
            <li>Para mensajes de retroalimentación efímeros, como &quot;copiado al portapapeles&quot;.</li>
            <li>
              Cuando se busca llamar la atención sobre contenido promocional o campañas. Las alertas están orientadas a
              mensajes funcionales o de sistema, no a fines publicitarios.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Tipos',
      firstTitle: true,
      content: (
        <>
          <p className="text-xl fw-semibold mb-2">Alerta del sistema</p>

          <p className="text-md mb-4">
            Informan sobre el <strong>estado del sistema</strong> o de procesos en curso, por ejemplo, &quot;el sistema
            de pagos se encuentra en mantenimiento&quot;. En general se muestran en áreas visibles del contenido para
            llamar la atención de la persona usuaria sin interrumpir su flujo de trabajo.
          </p>

          <Image
            src={`${basePath}/images/alert/alerta_de_sistema.svg`}
            alt="Alerta del sistema"
            width="800"
            height="285"
            className="img-fluid mb-4"
          />

          <p className="text-xl fw-semibold mb-2">Alerta de contexto</p>

          <p className="text-md mb-4">
            Se utilizan para <strong>detallar información relacionada al contenido de una página</strong> y ayudar a las
            personas usuarias a tomar decisiones informadas. Son parte del propio flujo informativo y no pueden
            descartarse. A diferencia de otros tipos de notificación, no son activadas por una acción del usuario ni por
            el sistema, sino que se cargan junto con el contenido. Por ejemplo, &quot;Estas variables están disponibles
            sólo en Figma. No están disponibles en el código.&quot;
          </p>

          <Image
            src={`${basePath}/images/alert/alerta_de_contexto.svg`}
            alt="Alerta del contexto"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Estados de alerta',
      firstTitle: true,
      content: (
        <>
          <p className="text-md mb-4">
            Cada estado de alerta se asocia con un color e icono específicos que expresan el significado del mensaje que
            se quiere trasmitir. No sugerimos el uso del color como único medio para trasmitir el mensaje, recomendamos
            complementar el significado con el texto descriptivo e íconos adecuados.
          </p>

          <Image
            src={`${basePath}/images/alert/estados_de_alerta.svg`}
            alt="Estados de alerta"
            width="800"
            height="285"
            className="img-fluid mb-2"
          />

          <p className="text-sm mb-4">Estado de notificación para el componente Alertas.</p>

          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Tipo
                </th>
                <th scope="col" className="tb-text">
                  Uso
                </th>
                <th scope="col" className="tb-text">
                  Color
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Informativa</td>
                <td>Para proporcionar información adicional que no requiere acción inmediata.</td>
                <td>Azul</td>
              </tr>
              <tr>
                <td>Éxito</td>
                <td>Para confirmar que una acción ha sido exitosa.</td>
                <td>Verde</td>
              </tr>
              <tr>
                <td>Advertencia</td>
                <td>
                  Para advertir a la persona usuaria sobre errores del sistema y que pueden, o no, requerir una acción
                  inmediata.
                </td>
                <td>Naranja</td>
              </tr>
              <tr>
                <td>Error</td>
                <td>
                  Para alertar a la persona usuaria sobre la ocurrencia de errores o problemas del sistema que requieren
                  una acción inmediata.{' '}
                </td>
                <td>Rojo</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: 'Jerarquías',
      firstTitle: true,
      content: (
        <>
          <p className="text-md">
            Contraste bajo para <strong>alertas contextuales</strong> de la página de baja prioridad; contraste alto
            para alertas del sistema de alta prioridad.
          </p>

          <Image
            src={`${basePath}/images/alert/alertas_jerarquias.svg`}
            alt="Jerarquias de alertas"
            width="800"
            height="285"
            className="img-fluid mb-2"
          />

          <p className="text-sm">Jerarquía de notificación según la gravedad del mensaje.</p>
        </>
      ),
    },
    {
      title: 'Disposición',
      firstTitle: true,
      content: (
        <>
          <p className="text-md mb-4">
            <strong>Alertas del sistema</strong>
            <br />
            Se ubican en la parte superior del contenido principal y pueden extenderse a lo ancho del contenedor o
            adaptarse a una sección específica, manteniendo la alineación con la cuadrícula
          </p>

          <Image
            src={`${basePath}/images/alert/alertas_disposicion.svg`}
            alt="Disposicion de alertas"
            width="800"
            height="285"
            className="img-fluid mb-2"
          />

          <p className="text-md mb-4">
            <strong>Alertas de contexto</strong>
            <br />
            Se posicionan junto al elemento o contenido al que se refieren, como formularios, filtros o secciones de
            texto, garantizando que la relación entre ambos sea clara.
          </p>

          <Image
            src={`${basePath}/images/alert/alertas_disposicion_contexto.svg`}
            alt="Disposicion de alertas"
            width="800"
            height="285"
            className="img-fluid mb-4"
          />

          <p className="text-sm mb-2">
            En <i>mobile</i>, las alertas se ubican sobre el contenido principal y ocupan el ancho total de la grilla
            del dispositivo.
          </p>

          <Image
            src={`${basePath}/images/alert/alertas_disposicion_mobile.svg`}
            alt="Disposicion de alertas mobile"
            width="800"
            height="285"
            className="img-fluid mb-4"
          />
        </>
      ),
    },
    {
      title: 'Contexto de uso',
      firstTitle: true,
      content: (
        <>
          <p className="text-xl fw-semibold mb-2">Para notificar sobre el mantenimiento del sistema</p>
          <p className="text-md mb-2">
            Se utiliza para informar a las personas usuarias sobre interrupciones temporales, tareas de mantenimiento o
            limitaciones del sistema. Ayuda a establecer expectativas claras y evitar confusiones o intentos fallidos de
            uso.
          </p>
          <Image
            src={`${basePath}/images/alert/alertas_contexto_de_uso.svg`}
            alt="Contexto de uso alertas - notificar sobre el mantenimiento del sistema"
            width="800"
            height="285"
            className="img-fluid mb-3"
          />

          <p className="text-xl fw-semibold mb-2">Para comunicar restricciones o requisitos previos</p>
          <p className="text-md mb-2">
            Sirve para informar condiciones que deben cumplirse antes de iniciar o completar una acción, evitando
            frustraciones o errores. No interrumpe la experiencia, pero brinda orientación relevante.
          </p>
          <Image
            src={`${basePath}/images/alert/alertas_contexto_de_uso_2.svg`}
            alt="Contexto de uso alertas - comunicar reestricciones"
            width="800"
            height="285"
            className="img-fluid mb-3"
          />

          <p className="text-xl fw-semibold mb-2">Para validar campos en formularios</p>
          <p className="text-md mb-2">
            Permite alertar sobre errores, datos incompletos o inconsistentes en campos específicos, ayudando a la
            persona usuaria a corregirlos antes de continuar. Deben ubicarse cerca del campo afectado.
          </p>
          <Image
            src={`${basePath}/images/alert/alertas_contexto_de_uso_3.svg`}
            alt="Contexto de uso alertas - validar campos"
            width="800"
            height="285"
            className="img-fluid mb-3"
          />
        </>
      ),
    },
    {
      title: 'Contenidos',
      firstTitle: true,
      content: (
        <>
          <p className="text-xl mb-2">
            <strong>Título</strong>
          </p>
          <p className="text-md mb-3">
            El título tiene que ser breve y descriptivo, explicando la información más importante y la longitud{' '}
            <strong>no debe exceder los 80 caracteres</strong> o equivalente a 1 línea de texto en dispositivos{' '}
            <i>desktop</i>. Por ejemplo, &quot;La base de datos se está actualizando&quot;
          </p>

          <p className="text-xl mb-2">
            <strong>Descripción</strong>
          </p>
          <p className="text-md mb-3">
            La descripción debe proporcionar detalles adicionales o instrucciones claras para ayudar a la persona
            usuaria a comprender la situación y tomar las medidas necesarias. La longitud de la descripción{' '}
            <strong>no debe exceder los 320 caracteres</strong>, de lo contrario, el componente va a cortar el
            contenido.
          </p>

          <p className="text-xl mb-2">
            <strong>Enlaces</strong>
          </p>
          <p className="text-md mb-3">
            Los enlaces describen con precisión lo que se encontrará al clickearlos, priorizando que las primeras
            palabras transmitan el propósito del enlace rápida y claramente. Por ejemplo, &quot;Conocer la
            normativa&quot;.
            <br />
            Para más información podes{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/link">consultar la ficha de enlaces</a>
          </p>

          <p className="text-xl mb-2">
            <strong>Listas descriptivas</strong>
          </p>
          <p className="text-md mb-2">
            La lista debe tener una longitud máxima de 5 ítems para evitar sobrecargar visualmente la alerta.{' '}
          </p>
          <ul className="list-informative-bullet">
            <li>
              Evitar incluir enlaces o acciones dentro de los ítems, ya que esta variante está orientada a la lectura,
              no a la interacción.
            </li>
            <li>
              Se pueden utilizar listas ordenadas o desordenadas según el tipo de contenido:
              <br />
              <strong>Ordenada</strong>: cuando el orden tiene sentido lógico (por ejemplo, pasos de un proceso).
              <br />
              <strong>Desordenada</strong>: cuando se trata de ítems informativos sin jerarquía.
            </li>
            <li>
              Utilizar frases cortas, claras y en tono informativo o instructivo, por ejemplo, &quot;Revisá la
              documentación antes de comenzar el trámite.&quot; o &quot;Tené a mano una copia del comprobante.&quot;
            </li>
          </ul>

          <p className="text-xl mb-2 mt-3">
            <strong>Listas de enlaces</strong>{' '}
          </p>
          <p className="text-md">
            {' '}
            La lista debe presentarse en orden lógico o visual, siguiendo la disposición del formulario, y cada ítem
            debe ser un enlace interactivo que lleve el foco directamente al campo con error.
          </p>
          <ul className="list-informative-bullet">
            <li>
              Los mensajes deben ser claros, breves y orientados a la acción, por ejemplo, ingresá tu número de
              documento.
            </li>
            <li>
              Evitar tecnicismos o expresiones negativas (&quot;error grave&quot;, &quot;incorrecto&quot;), priorizando
              un tono guía e informativo.
            </li>
            <li>
              En el caso de haber un mensaje de error individual debe mantenerse visible junto al campo correspondiente.
            </li>
          </ul>
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
            src={`${basePath}/images/alert/alertas_anatomia.svg`}
            alt="Anatomia de las alertas"
            width="800"
            height="280"
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
                  <td>Icono</td>
                  <td>Obligatorio, todas las alertas contienen un icono que refuerza el significado del mensaje.</td>
                </tr>
                <tr>
                  <td>Titulo de la alerta</td>
                  <td>Opcional, pero recomendado.</td>
                </tr>
                <tr>
                  <td>Descripción de la alerta</td>
                  <td>
                    Obligatorio, todas las alertas deben brindar un mensaje claro sobre el punto que se quiere remarcar.
                  </td>
                </tr>
                <tr>
                  <td>Botón de cierre</td>
                  <td>
                    Opcional, le da la posibilidad a las personas usuarias de dejar de ver el contenido que consideran
                    innecesario.
                  </td>
                </tr>
                <tr>
                  <td>Cajón de acciones</td>
                  <td>Opcional, el mensaje puede requerir, o no, una acción al respecto.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Variantes',
    },
    {
      subtitle: 'Con botón de cierre',
      content: (
        <>
          <p className="text-md mb-4">
            La acción de cierre dentro de las alertas le da la posibilidad a las personas usuarias de dejar de ver el
            contenido que consideran innecesario.
          </p>
          <Image
            src={`${basePath}/images/alert/variantes_con_boton.svg`}
            alt="Variante de alertas con boton de cierre"
            width="800"
            height="464"
            className="img-fluid"
            style={{ marginBottom: '32px' }}
          />
        </>
      ),
    },
    {
      subtitle: 'Con enlaces en línea',
      content: (
        <>
          <p className="text-md mb-4">
            Los enlaces dentro de una alerta se utilizan para una llamada a la acción. Todos los enlaces a la
            documentación o información deben abrirse en una nueva pestaña.
          </p>
          <Image
            src={`${basePath}/images/alert/alerta_variante_enlace.svg`}
            alt="Variante de alertas con enlace en línea"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Con enlaces independientes',
      content: (
        <>
          <p className="text-md mb-4">
            Permite incluir uno o más enlaces accionables ubicados por fuera del texto principal de la alerta. Su
            función es ofrecer al usuario caminos directos para resolver la situación comunicada, sin interrumpir la
            lectura del mensaje.
          </p>
          <Image
            src={`${basePath}/images/alert/alerta_variante_enlace_independiente.svg`}
            alt="Variante de alertas con enlace en línea"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Con lista de enlaces',
      content: (
        <>
          <p className="text-md mb-4">
            Se utilizan principalmente en formularios extensos o de múltiples pasos para informar al usuario sobre los
            errores que impiden continuar o confirmar el proceso. Cada ítem de la lista debe estar vinculado (anclado)
            al campo correspondiente dentro del formulario, permitiendo una navegación rápida y accesible hacia el
            error.
          </p>
          <Image
            src={`${basePath}/images/alert/alerta_variante_lista_enlaces.svg`}
            alt="Variante de alertas con lista de enlaces"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Con lista descriptiva',
      content: (
        <>
          <p className="text-md mb-4">
            Se utilizan para presentar un conjunto de contenidos, acciones o recomendaciones que ayudan al usuario a
            comprender un proceso o tomar decisiones informadas. Su propósito es orientar o complementar la información
            principal de la página.
          </p>
          <Image
            src={`${basePath}/images/alert/alerta_variante_lista_descriptiva.svg`}
            alt="Variante de alertas con lista de enlaces"
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
            El componente de alertas está construido para ser accesible mediante navegación por teclado y reconocible
            por lectores de pantalla.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <p className="text-md">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Acciones
            como cerrar o activar botones se pueden realizar con las teclas <i>Enter</i> o <i>space</i>.
          </p>

          <Image
            src={`${basePath}/images/alert/alertas_accesibilidad.svg`}
            alt="Navegacion alternativa de las alertas"
            width="738"
            height="400"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <p className="text-md">
            Las alertas deben incluir etiquetas semánticas y atributos ARIA que comuniquen correctamente su propósito y
            estado al usuario, especialmente a las tecnologías asistivas.
            <br />
            El atributo <i>role=“alert”</i> informa al lector de pantalla que el contenido es importante y requiere
            atención inmediata. Se anuncian automáticamente sin necesidad de que el foco del teclado se desplace al
            elemento.
          </p>

          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {ALERTAS_ACCESSIBILTY}
          </SyntaxHighlighter>

          <p className="text-md mt-4 mb-3">
            Cuando la alerta tenga un título y una descripción, ambos deben estar correctamente asociados.
            <br />
            Se recomienda usar <i>aria-labelledby</i> y <i>aria-describedby</i> para garantizar una lectura secuencial.
          </p>

          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {ALERTAS_ACCESSIBILTY_2}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicados',
      content: (
        <>
          <CriteriosWCAG list={['1.3.1', '1.4.11', '2.1.1', '2.4.7']} />
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Alertas"
        description={[
          'Son notificaciones breves dentro del contenido la página que captan la atención de las personas usuarias para informar sobre el estado del sistema y/o el estado específico de una sección de la página.',
        ]}
      />
      <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTIONS_DEV}
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
      />{' '}
    </>
  );
};

export default AlertDocs;
