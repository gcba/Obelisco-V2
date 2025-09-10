// import Image from 'next/image';
import React from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// const basePath = '/Obelisco-V2';
// import CodeBox from '@/components/CodeBox';
// import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const VOZ_Y_TONO = [
  {
    title: 'Voz',
    firstTitle: true,
    content: (
      <>
        <p className="text-md">
          La voz del Gobierno de la Ciudad es participativa, simple y clara. Buscamos que nuestros visitantes se sientan
          acompañados durante la estadía dentro del sitio y que reconozcan que detrás de lo que leen hay personas reales
        </p>
        <ul>
          <li style={{ marginBottom: '16px' }}>
            <strong>Participativa</strong>: Buscamos empatía pensando el contenido para nuestros visitantes, facilitando
            la interacción. Es importante que se sientan partícipes en todo el recorrido digital.
          </li>
          <li>
            <strong>Simple y clara</strong>: La persona usuaria tiene que entender el contenido que le presentamos
            independientemente de su procedencia sociocultural o nivel educativo.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Tono',
    content: (
      <>
        <p className="text-md">
          El tono es la forma en que usamos la voz, es decir, cómo hablamos. Este debe ser cercano, conciso y directo.
        </p>

        <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
          Cercano y amigable
        </p>

        <p className="text-md" style={{ marginBottom: '12px' }}>
          Trabajamos para que los vecinos y vecinas se sientan identificados con nuestro contenido, por eso nos
          dirigimos utilizando el &quot;v&quot;s”, que denota cercanía manteniendo el respeto.
        </p>

        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Tenemos contenidos, propuestas y actividades.</p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Conocé todos los contenidos, propuestas y actividades que tenemos para vos.</p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">¿Qué acción requiere?</p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">¿Qué tipo de solicitud necesitás hacer?</p>
        </div>

        <p className="text-md mt-3">
          Hay una excepción al uso del &quot;voseo&quot; y es la redacción de 
          <a href="https://www.figma.com/proto/10hu568n1Vbugniv2rKGdL/An%C3%A1lisis-de-componentes-%7C-2025?page-id=9517%3A1319&node-id=10732-3542&viewport=-418%2C-1063%2C0.22&t=ig8U1wgLsMyxjOW0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10876%3A10570">
            noticias
          </a>
           en el que se mantiene el estilo objetivo, en tercera persona. Esta función es necesaria sobre todo en
          situaciones de crisis en la que debe adoptarse un estilo neutro y estrictamente informativo.{' '}
        </p>

        <p className="text-md fw-semibold">Corto y directo</p>
        <p className="text-md">
          A la hora de redactar el contenido debemos hacerlo de manera corta y directa para que la persona usuaria pueda
          encontrar y resolver lo que está buscando de forma inmediata. <br /> Es primordial ir al grano con el mensaje,
          descartando palabras o frases innecesarias.{' '}
        </p>

        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">
            Conocé, una por una, las diferentes colectividades que hay en la Ciudad de Buenos Aires.{' '}
          </p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Conocé las colectividades de la Ciudad. </p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">
            Ingresá y completá el formulario para que puedas tramitar el Boleto estudiantil.{' '}
          </p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Tramitá el Boleto estudiantil. </p>
        </div>
      </>
    ),
  },
];

const LENGUAJE = [
  {
    title: 'Lenguaje simple',
    firstTitle: true,
    content: (
      <>
        <p className="text-md mb-4">
          El lenguaje simple tiene como características la claridad y la sencillez. Por eso usamos párrafos cortos que
          permitan a nuestros lectores entender fácilmente la información sin ambigüedades ni múltiples
          interpretaciones.
        </p>
        <p className="text-xl mb-3">Voz activa y tiempos verbales simples </p>

        <p className="text-md mb-3">
          La voz activa es directa y pone en el centro al sujeto de la oración. La persona usuaria realiza
          explícitamente una acción y se siente comprometida con lo que tiene que realizar en tu sitio.{' '}
        </p>

        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Tu inscripción fue realizada correctamente</p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Te inscribiste correctamente </p>
        </div>

        <p className="text-md mt-3">
          Los tiempos verbales simples están compuestos por un solo vocablo y son mucho más accesibles y claros
        </p>

        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Has iniciado el trámite con éxito</p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Iniciaste el trámite con éxito </p>
        </div>
      </>
    ),
  },
  {
    title: 'Lenguaje inclusivo',
    content: (
      <>
        <p className="text-md mb-4">
          Para evitar el lenguaje sexista, el sesgo de género y la reproducción de estereotipos en el lenguaje tratamos
          de hacer uso de frases y expresiones más neutras e inclusivas.
          <br />
          Se trata de repensar la comunicación de manera tal que incluya a todas las personas. Preguntarnos a quiénes
          incluimos en nuestros contenidos (y a quiénes dejamos afuera) y de qué forma lo hacemos es una buena manera de
          empezar.
          <br />
          En esta tarea, desaconsejamos el uso de la &quot;@&quot;, la &quot;x&quot; o la &quot;e&quot; ya que, por más
          que surgen con una intención incluyente, no son accesibles para los lectores de pantalla y entorpecen la
          lectura.
          <br />
          Acá te dejamos una serie de recomendaciones de escritura para llevarlo a la práctica.
        </p>

        <p className="text-xl mt-4">Alternativas al masculino genérico </p>

        <p className="text-md">
          Evitar el uso del masculino como forma genérica para referirse a todas las personas. En su lugar, utilizar
          términos colectivos (&quot;el equipo&quot; en vez de &quot;los empleados&quot;), sustantivos abstractos
          (&quot;la ciudadanía&quot; en vez de &quot;los ciudadanos&quot;).{' '}
        </p>

        <p className="text-xl mt-4">Desdoblamiento léxico </p>

        <p className="text-md">
          Es la mención expresa de los dos géneros. Comúnmente, se incluye una barra que da cuenta que estamos
          refiriendo tanto a varones como a mujeres.
        </p>

        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">&quot;los emprendedores y emprendedoras&quot;.</p>
        </div>

        <p className="text-xl mt-4">Combinar con otros elementos </p>

        <p className="text-md">
          El contenido interactúa con los componentes de la interfaz, como las imágenes, los gráficos, etc.. Por eso, si
          el contenido no es completamente inclusivo, es posible combinarlo con otros elementos que connotan
          significados que incluyan a más de un género.
        </p>
        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            En una pieza titulada &quot;Día de maestro&quot; podemos acompañarla con una imagen que incluya a maestras y
            maestros.
          </p>
        </div>

        <p className="text-xl mt-4">Parafrasear</p>

        <p className="text-md">
          Es muy importante para crear contenido inclusivo que no apele únicamente al masculino generalizado ni a
          binarismos.
        </p>
        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">&quot;Bienvenidos a Buenos Aires&quot; </p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">&quot;Te damos la bienvenida a Buenos Aires&quot;</p>
        </div>

        <p className="text-xl mt-4">Parafrasear con palabras sin género </p>

        <p className="text-md">Consiste en buscar alternativas que eviten el sesgo de género.</p>
        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Los vecinos de la Ciudad </p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">La ciudadanía </p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Los usuarios </p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Las personas usuarias </p>
        </div>

        <p className="text-xl mt-4">Parafrasear con relativos </p>

        <p className="text-md">
          Los pronombres relativos aluden al sujeto de la oración y son comunes a todos los géneros. Los que más usamos
          son <strong>que, cual y quien</strong>.{' '}
        </p>
        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Los que sacan la licencia de conducir </p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Quienes sacan la licencia de conducir </p>
        </div>

        <p className="text-xl mt-4">Reformular frases </p>

        <p className="text-md">
          Otra forma para evitar marcas de género es modificar la estructura de las oraciones. Por ejemplo, podemos
          utilizar infinitivos o imperativos en instructivos.
        </p>
        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">El usuario debe completar el formulario </p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Completar el formulario</p>
        </div>

        <p className="text-md">Emplear construcciones impersonales con &quot;se&quot;. </p>
        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Los usuarios deben… </p>
        </div>
        <div className="d-flex pt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Se recomienda… </p>
        </div>

        <p className="text-xl mt-4">Usar Imágenes y material visual inclusivo </p>
        <ul>
          <li>
            Seleccionar fotografías e ilustraciones que representen la diversidad de géneros, edades y características
            físicas.
          </li>
          <li>
            Evitar imágenes estereotipadas que asocien determinadas actividades o profesiones a un género específico.
          </li>
          <li>Revisar que la proporcionalidad de representación en el material visual sea equilibrada.</li>
          <li>Asegurar que personas de todos los géneros aparezcan en posiciones de autoridad o liderazgo. </li>
        </ul>

        <p className="text-xl mt-4">Nombrar cargos y profesiones </p>
        <p className="text-md">
          Utilizar la forma femenina para cargos ocupados por mujeres (&quot;subsecretaria&quot;, &quot;jefa&quot;,
          &quot;directora&quot;, &quot;gerenta&quot;). Mencionar ambas formas cuando se habla de profesiones en general
          o usar fórmulas como &quot;personal médico&quot; en vez de &quot;médicos&quot;.{' '}
        </p>
      </>
    ),
  },
  {
    title: '¿Cuándo usamos un lenguaje formal e institucional? ',
    content: (
      <>
        <p className="text-md">
          Se reserva únicamente para comunicaciones de temas muy precisos que requieran extrema claridad al transmitir
          el mensaje.
        </p>
        <p className="text-sm fw-semibold mb-0">Ejemplos de este uso</p>

        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            &quot;El Hospital Santojanni inauguró su nueva guardia pediátrica, un espacio diseñado para brindar una
            atención más segura, rápida y confortable a niñas, niños y adolescentes de la Ciudad&quot;.
          </p>
        </div>
        <p className="text-md mt-3">
          También se lo utiliza en la redacción de noticias, con mayor énfasis en temas  de crisis o vulnerabilidad
          institucional.{' '}
        </p>
      </>
    ),
  },
  {
    title: '¿Cuándo usamos jerga y tecnicismos? ',
    content: (
      <>
        <p className="text-md">
          Evitemos palabras que no utilizamos habitualmente, a menos que se trate de un texto destinado exclusivamente a
          personas expertas de una disciplina. Hay que pensar que, si un texto es comprensible sólo para los
          especialistas, estamos excluyendo a un gran número de lectores.
        </p>
        <p className="text-md">
          Si no queda más remedio que usar jerga porque cualquier otro término perdería precisión, expliquemos los
          conceptos la primera vez que los vayamos a utilizar, ya que es una forma de ampliar el público lector.
        </p>
        <p className="text-md">
          <strong>Palabras en inglés</strong>: no las uses, excepto nombres propios o términos específicos. En el caso
          de utilizar alguna palabra en inglés debe ir en cursiva y preferentemente con su traducción al castellano.{' '}
        </p>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            &quot;El Hospital Santojanni inauguró su nueva guardia pediátrica, un espacio diseñado para brindar una
            atención más segura, rápida y confortable a niñas, niños y adolescentes de la Ciudad&quot;.
          </p>
        </div>
        <p className="text-md mt-3">
          &quot;Buenos Aires continúa posicionándose como una ciudad global que conecta ideas, talento e innovación con
          el mundo. Comenzó el <i>South American Business Forum</i> (Foro Sudamericano de Negocios), un evento
          internacional que reúne a jóvenes de todo el planeta para debatir, pensar y proyectar nuevos modelos de
          liderazgo.&quot;
        </p>
      </>
    ),
  },
];

const VERIFICACION_DE_ESCRITURA = [
  {
    title: 'Verificación de escritura en lenguaje claro ',
    content: (
      <>
        <p className="text-md mb-4">
          Te dejamos las siguientes preguntas guía para verificar si tu contenido se encuentra alineado al lenguaje
          claro.
        </p>
      </>
    ),
  },
  {
    subtitle: 'Público objetivo ',
    content: (
      <>
        <ul>
          <li className="mb-3 mt-2">¿Nos preguntamos a quién está dirigido el texto? </li>
          <li className="mb-3">¿Está claro el objetivo del texto? </li>
          <li className="mb-3">¿Respondimos de forma precisa la información buscada por la persona usuaria? </li>
          <li>¿Sabemos qué tiene que hacer la persona usuaria después de leer la información brindada? </li>
        </ul>
      </>
    ),
  },
  {
    subtitle: 'Contenido y organización del texto ',
    content: (
      <>
        <ul>
          <li className="mb-3 mt-2">
            ¿El texto responde a las famosas 5 W del periodismo? ¿Qué? ¿Quién? ¿Cuándo? ¿Dónde? ¿Por qué?{' '}
          </li>
          <li className="mb-3">
            ¿Está organizado según la pirámide invertida? ¿Atiende primero lo esencial y luego lo secundario?{' '}
          </li>
          <li className="mb-3">¿Desarrollamos cada idea en un párrafo breve de no más de 5 líneas? </li>
          <li className="mb-3">¿Hacemos un uso correcto de los signos de puntuación? </li>
          <li>¿Incorporamos anclas visuales para facilitar el escaneo y la legibilidad? </li>
        </ul>
      </>
    ),
  },
  {
    subtitle: 'Lenguaje y vocabulario  ',
    content: (
      <>
        <ul>
          <li className="mb-3 mt-2">¿Usamos oraciones simples y directas?</li>
          <li className="mb-3">
            ¿Utilizamos vocablos del español correctos, simples y precisos? ¿Qué tratamiento le dimos a las siglas?
          </li>
          <li className="mb-3">¿Evitamos el uso de jerga y tecnicismos innecesarios? </li>
          <li className="mb-3">¿Priorizamos la voz activa y los tiempos verbales simples? </li>
          <li className="mb-3">¿Usamos un vocabulario sencillo y acorde al público objetivo? </li>
          <li className="mb-3">¿El lenguaje es inclusivo, no sexista y sin sesgo de género? </li>
          <li>En caso de excepciones al lenguaje claro, ¿explicamos los conceptos de uso no habitual? </li>
        </ul>
      </>
    ),
  },
  {
    subtitle: 'Revisión final',
    content: (
      <>
        <ul>
          <li className="mb-3 mt-2">¿Validamos el documento para asegurarnos de que es claro y comprensible? </li>
          <li className="mb-3">¿Redactamos desde el punto de vista de la persona usuaria? </li>
          <li>¿Podríamos haber presentado la información de otra forma aún más breve? </li>
        </ul>
      </>
    ),
  },
];
const EscribirDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Escribir para la accesibilidad"
        description={[
          'Te compartimos algunos estándares de accesibilidad web para que nuestro contenido sea cada vez más accesible para todas las personas.',
        ]}
      />
      <Tabs
        // sectionUx={SECTION_UX}
        // sectionDev={SECTIONS_DEV}
        customSections={[
          {
            title: 'Voz y tono',
            id: 'section-voz-y-tono',
            sectionContent: VOZ_Y_TONO,
          },
          {
            title: 'Lenguaje',
            id: 'section-lenguaje',
            sectionContent: LENGUAJE,
          },
          {
            title: 'Verificacion de escritura',
            id: 'section-verificacion_de_escritura',
            sectionContent: VERIFICACION_DE_ESCRITURA,
          },
        ]}
      />{' '}
    </>
  );
};

export default EscribirDocs;
