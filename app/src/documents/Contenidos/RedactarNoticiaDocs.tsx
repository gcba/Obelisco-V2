import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: 'Títulos ',
    firstTitle: true,
    content: (
      <>
        <p className="text-md">
          Deben ser breves, claros y atractivos. Se escriben en minúscula con la primera letra en mayúscula.{' '}
          <strong>No usamos signos de admiración, ni de interrogación.</strong>
        </p>

        <ul className="list-informative-bullet">
          <li className="mb-3">
            Longitud: entre <strong>50 y 70 caracteres</strong> (ideal para buscadores y redes sociales).
          </li>
          <li>Evitar siglas poco conocidas y jerga técnica.</li>
        </ul>

        <p className="text-sm fw-semibold mt-3" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex align-items-center">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">&quot;Nueva plataforma digital para agilizar trámites de salud.&quot;</p>
        </div>
      </>
    ),
  },
  {
    title: 'Bajadas ',
    content: (
      <>
        <p className="text-md">
          Son obligatorias y su contenido indexa en las búsquedas de Google. Complementan la información del título con
          un dato clave o contexto. Explican de manera atractiva y concisa el objetivo de la noticia. No deben repetir
          información, conceptos o palabras mencionadas en el título.{' '}
          <strong>Tampoco debemos usar negritas, cursivas o hipervínculos en el resumen.</strong>
        </p>

        <ul className="list-informative-bullet">
          <li className="mb-3">
            Longitud: entre <strong>90 y 150 caracteres</strong>.
          </li>
        </ul>

        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex align-items-center">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            &quot;El sistema permitirá que las personas usuarias gestionen turnos en línea de manera rápida y
            segura.&quot;
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Imagen de portada',
    content: (
      <>
        <p className="text-md">
          Es obligatorio incluir una imagen de portada para la noticia. Esta se verá en los diferentes tipos de vistas
          previas del artículo.
        </p>
      </>
    ),
  },
  {
    title: 'Cuerpo del texto',
    content: (
      <>
        <p className="text-md">
          Utilizamos la pirámide invertida colocando la información más importante en el primer párrafo y en los
          siguientes lo menos relevante. El contenido debe tener anclas visuales (negritas, hipervínculos, botones,
          citas) para facilitar la lectura de las personas usuarias.
        </p>
        <ul className="list-informative-bullet">
          <li className="mb-3">
            <strong>Primer párrafo:</strong> resume lo esencial: qué, quién, cuándo, dónde, por qué (las &quot;5
            W&quot;). Extensión recomendada: 4 o 5 líneas como máximo.
          </li>
          <li className="mb-3">
            <strong>Desarrollo:</strong> detalla antecedentes, declaraciones y contexto. Extensión recomendada:{' '}
            <strong>2 o 3 párrafos como mínimo.</strong>
          </li>
          <li>
            <strong>Cierre:</strong> destacar próximos pasos, enlaces útiles o un llamado a la acción.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Galería de imágenes',
    content: (
      <>
        <p className="text-md">Sugerimos subir un mínimo de 4 imágenes para para armar la galería.</p>
      </>
    ),
  },
  {
    title: 'Imágenes en línea',
    content: (
      <>
        <p className="text-md">
          Se utilizan para facilitar la lectura del contenido. Se sugieren hasta 3 imágenes en línea por noticia. Deben
          tener 700x400 px como mínimo.
        </p>
      </>
    ),
  },
  {
    title: 'Dirección',
    content: (
      <>
        <p className="text-md">
          Si la noticia ocurrió u ocurrirá en algún lugar específico, podés agregar esa dirección en el mapa.
        </p>

        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex align-items-center" style={{ marginBottom: '12px' }}>
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            <strong>Título:</strong> <i>Se inaugura un nuevo centro de atención ciudadana en San Telmo</i>
          </p>
        </div>

        <div className="d-flex align-items-center" style={{ marginBottom: '12px' }}>
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            <strong>Bajada:</strong>{' '}
            <i>El espacio ofrece trámites y servicios en un mismo lugar, con atención accesible e inclusiva.</i>
          </p>
        </div>

        <div className="d-flex align-items-start" style={{ marginBottom: '12px' }}>
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            <strong>Primer párrafo:</strong>{' '}
            <i>
              Desde hoy, las personas usuarias de San Telmo cuentan con un nuevo centro donde podrán gestionar DNI,
              pasaporte y partidas en un solo turno.
            </i>
          </p>
        </div>

        <div className="d-flex align-items-center" style={{ marginBottom: '12px' }}>
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            <strong>Desarrollo:</strong> Detalles, citas de autoridades, horarios, beneficios.
          </p>
        </div>

        <div className="d-flex align-items-center" style={{ marginBottom: '12px' }}>
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            <strong>Cierre:</strong> Próximas aperturas, link a turnos online.
          </p>
        </div>
      </>
    ),
  },
];
const RedactarNoticiasDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Redactar una noticia"
        description={
          'Las noticias son contenido dinámico que usamos para comunicar avisos, novedades y eventos de las áreas. Deben actualizarse una vez por semana y deben tener como mínimo 2 párrafos de información y una foto. Te compartimos los lineamientos para redactar una noticia en la web.  '
        }
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="init" />
    </>
  );
};

export default RedactarNoticiasDocs;
