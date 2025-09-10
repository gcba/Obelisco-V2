import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: 'Títulos ',
    firstTitle: true,
    content: (
      <>
        <ul>
          <li className="mb-3">
            El título de una página debe tener relación con el enlace de donde proviene (acceso, banner, destacado,
            tarjeta, etc.){' '}
          </li>
          <li className="mb-3">
            En los títulos de las páginas de área hablá como Gobierno y no como área, es decir, no debemos utilizar
            términos como «subsecretaría» o «ministerio», por ejemplo.
          </li>
          <li>
            En lo posible, no repetir palabras de la bajada (buscar sinónimos). Aquí tener en cuenta:
            <ul>
              <li className="mt-3 mb-3">
                Debe tener la información más importante, dejando la secundaria y complementaria para la bajada.{' '}
              </li>
              <li className="mb-3">
                Debe considerarse el uso de <i>keywords</i> o palabras que puedan mejorar el posicionamiento en
                buscadores como Google.{' '}
              </li>
            </ul>
          </li>
          <li>
            Los títulos tienen que tener como <strong>máximo 70 caracteres</strong>.{' '}
          </li>
        </ul>

        <p className="text-sm fw-semibold mt-3" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            BA Oportunidades realizó un taller de Marca Personal para personas con discapacidad.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Resúmenes o bajadas ',
    content: (
      <>
        <ul>
          <li className="mb-3">Deben explicar de qué se trata toda la página de manera breve y concisa.</li>
          <li className="mb-3">
            Si tienen más de 2 líneas, se subdivide en oraciones, buscando que la información sea
            <strong>fácil y rápida de entender</strong> para el visitante.
          </li>
          <li className="mb-3">
            Son <strong>obligatorios</strong> y su contenido indexa en las búsquedas de Google.
          </li>
          <li className="mb-3">
            No deben repetir información mencionada en el título. La información complementa la utilizada en el título.
          </li>
          <li className="mb-3">No contienen negritas, mayúsculas, ni hipervínculos. </li>
          <li>
            Las bajadas deben tener como <strong>máximo 150 caracteres</strong>.
          </li>
        </ul>

        <p className="text-sm fw-semibold mt-3" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            El encuentro, dictado junto a Manpower, se llevó a cabo con el fin de fortalecer perfiles laborales y
            emprendimientos.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Párrafos',
    content: (
      <>
        <p className="text-md">
          Escribí una breve descripción de una idea, de 4 o 5 líneas aproximadamente. Incorporá anclas visuales para
          facilitar su lectura.
        </p>
      </>
    ),
  },
  {
    title: 'Negritas',
    content: (
      <>
        <ul>
          <li className="mb-3">
            Utilizá la negrita para <strong>destacar ciertos términos</strong> que tienen mayor jerarquía en una
            oración. De este modo la persona escanea rápidamente el contenido de tu sitio y encuentra fácilmente lo que
            está buscando. No destacar todo el texto, elegir lo más relevante para el visitante.
          </li>
          <li className="mb-3">
            <strong>No</strong> utilizamos negrita <strong>en las bajadas</strong> de las páginas o dentro de una cita;
            tampoco en combinación con hipervínculos.
          </li>
          <li>
            Tampoco se usa negrita en los <strong>signos de puntuación</strong>. Por ejemplo, si escribo:{' '}
            <strong>&quot;Conocé las Estaciones saludables.&quot;</strong> Las comillas y el punto final no van en
            negrita.
          </li>
        </ul>
        <p className="text-sm fw-semibold mt-3" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">
            La fiesta del Gran Magal de Touba es la <strong>fiesta religiosa</strong> más importante de la colectividad
            senegalesa.
          </p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            La <strong>fiesta del Gran Magal de Touba</strong> es la fiesta religiosa más importante de la colectividad
            senegalesa.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Cursivas',
    content: (
      <>
        <p className="text-md">
          La cursiva se utiliza tanto para dar énfasis como para advertir al lector de que una palabra o una frase puede
          no resultarle familiar, ya sea porque es extranjera o porque forma parte de una jerga.
        </p>
      </>
    ),
  },
  {
    title: 'Enlaces',
    content: (
      <>
        <p className="text-md">
          Son hipervínculos (links) que se usan en la página para que el vecino o la vecina pueda tener acceso a otras
          páginas dentro y fuera de ella. En la página, se ven como palabras subrayadas en color azul.
        </p>
        <ul>
          <li className="mb-3">Dirigí los enlaces siempre a una página existente. </li>
          <li className="mb-3">Es preferible que sean largos a muy cortos.</li>
          <li className="mb-3">Indexan en todos los motores de búsqueda, como Google, por eso debés incluirlos. </li>
          <li className="mb-3">
            Se desaconsejan frases genéricas como «clic aquí» o «más información»; el texto debe tener sentido y
            clariﬁcar el enlace.
          </li>
          <li className="mb-3">No uses negrita en los hipervínculos. </li>
          <li>No incluyas signos de puntuación en los enlaces. </li>
        </ul>

        <p className="text-sm fw-semibold mt-3" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">
            Para conocer más sobre la exposición, <a href="http://">ingresá acá.</a> 
          </p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            Ingresá para conocer la exposición 
            <a href="https://museomoderno.org/es/exposiciones/santiago-iturralde-la-pintura-desnuda">
              Santiago Iturralde: La pintura desnuda
            </a>
             
          </p>
        </div>

        <a className="external text-md mt-3" href="#" target="_blank" rel="noopener noreferrer">
          Más información sobre enlaces
        </a>
      </>
    ),
  },
  {
    title: 'Viñetas',
    content: (
      <>
        <p className="text-md">Nos permiten listar y organizar todo tipo de contenidos:</p>
        <ul>
          <li className="mb-3">Usalas para hacer listas que muestran etapas o grupos de información.</li>
          <li className="mb-3">Incluí una introducción para dar contexto a ese grupo de información.</li>
          <li>Enumerá cada etapa si el orden de la lista es importante.</li>
        </ul>

        <p className="text-sm fw-semibold mt-3" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Completá la solicitud con la siguiente información:</p>
          {/* # Sí esto está mal, no pude lograr que se vea bien. Pendiente */}
          <ul>
            <li>Nombre y apellido</li>
            <li>Domicilio</li>
            <li>Correo electrónico</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Horarios',
    content: (
      <>
        <ul>
          <li className="mb-3">Al referirnos a horarios utilizamos el símbolo h. acompañado de un punto ﬁnal.</li>
          <li className="mb-3">
            El símbolo puede incluirse en el último número; no es necesario incluirlo en ambos números.
          </li>
        </ul>

        <p className="text-sm fw-semibold mt-3" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          {/* # Sí esto está mal, no me detuve a lograr que se vea bien. Pendiente */}
          <p className="text-sm mb-0">
            Ambos circuitos están disponibles de lunes a viernes de 9:30 a 17:30 h. y un cupo máximo de 20 personas en
            simultáneo.
          </p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-danger">close</span>
          {/* # Pendiente */}
          <p className="text-sm mb-0">Emergencias las 24 hs. los 365 días del año</p>
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Emergencias las 24 h. los 365 días del año</p>
        </div>
      </>
    ),
  },
  {
    title: 'Uso de las mayúsculas y minúsculas',
    content: (
      <>
        <p className="text-md">
          La cursiva se utiliza tanto para dar énfasis como para advertir al lector de que una palabra o una frase puede
          no resultarle familiar, ya sea porque es extranjera o porque forma parte de una jerga.
        </p>
        <p className="text-sm fw-semibold mb-3">Las mayúsculas se usan:</p>

        <ul>
          <li className="mb-3">Al principio de una oración.</li>
          <li className="mb-3">
            Para nombres propios. Por ejemplo: &quot;Ministerio de Educación&quot;, &quot;María Pérez&quot;.
          </li>
          <li className="mb-3">En términos como «Ciudad», «Gobierno», «Comunas» cuando se refieren a Buenos Aires.</li>
          <li className="mb-3">
            En nombre de programas. Por ejemplo: &quot;Buenos Aires Aprende&quot;, &quot;Talento Tech&quot;.
          </li>
          <li className="mb-4">Para escribir siglas. Por ejemplo: &quot;M.J.G.G.C.&quot;</li>
        </ul>

        <p className="text-sm fw-semibold mb-3">Las minúsculas se usan:</p>

        <ul>
          <li className="mb-3">Después de dos puntos a menos que armes una lista de elementos. </li>
          <li className="mb-3">En los días, meses y estaciones del año, excepto las efemérides. </li>
          <li className="mb-4">
            En los cargos de funcionarios y funcionarias. Por ejemplo: &quot;ministra de Educación&quot;.{' '}
          </li>
        </ul>

        <p className="text-md">
          <strong>Importante:</strong> nunca escribir TODO EN MAYÚSCULAS; dificulta la lectura y por convención web,
          sería como gritar o levantar la voz.
        </p>
      </>
    ),
  },
  {
    title: 'Uso de pronombres (1° y 2° persona) ',
    content: (
      <>
        <p className="text-md mb-4">
          Utilizamos los pronombres para personalizar la experiencia de la persona usuaria en nuestro sitio y crear una
          conversación más humana. La primera persona (yo, mi) enfatiza la privacidad, mientras que la segunda persona
          (vos, tu) crea una sensación de cercanía y asistencia.
        </p>
        <p className="text-xl mb-2">Primera persona del singular</p>

        <p className="text-md mb-2">
          Son aquellos verbos que indican la acción que realiza la parte emisora del enunciado o cuando esta recae sobre
          ella.{' '}
        </p>

        <p className="text-sm fw-semibold mb-2">Ejemplos de este uso</p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Recuperar mi contraseña </p>
        </div>

        <p className="text-xl mt-4 mb-2">Segunda persona del singular</p>

        <p className="text-md mb-2">
          Son aquellos verbos que indican que la parte emisora se dirige a alguien que se encuentra presente en la
          situación comunicativa y le habla de forma directa. 
        </p>

        <p className="text-sm fw-semibold mb-2">Ejemplos de este uso</p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Recuperar mi contraseña </p>
        </div>
      </>
    ),
  },
  {
    title: '¿Cómo lee la persona usuaria un contenido en pantalla?  ',
    content: (
      <>
        <p className="text-md">
          Sabemos que la lectura web es muy diferente a la lectura en papel. Las personas usuarias no leen línea a
          línea, sino que <strong>escanean el contenido</strong> de la pantalla en búsqueda de información de su
          interés.
        </p>
        <p className="text-md">
          El famoso <strong>patrón de lectura en F</strong> consiste en enfocar la mirada en los primeros dos renglones
          y luego tomar palabras clave del sector izquierdo haciendo un barrido visual en sentido diagonal.
        </p>
        <p className="text-md">
          Por eso, a la hora de diseñar nuestros contenidos, es importante tener en cuenta que la información más
          relevante tiene que estar presente en el título, la bajada y las primeras palabras de la izquierda del cuerpo
          del texto. Esto lo logramos generando anclas visuales como:{' '}
        </p>
        <ul>
          <li className="mb-2">Negritas</li>
          <li className="mb-2">Citas</li>
          <li className="mb-2">Viñetas </li>
          <li>Subtítulos</li>
        </ul>
      </>
    ),
  },
];
const PautasDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Pautas de escritura UX"
        description={['Conocé las pautas y lineamientos de escritura propios de las interfaces digitales.']}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="init" />
    </>
  );
};

export default PautasDocs;
