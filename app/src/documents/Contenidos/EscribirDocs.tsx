import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
const basePath = '/Obelisco-V2';

const sections = [
  {
    title: 'Lectura fácil ',
    firstTitle: true,
    content: (
      <>
        <p className="text-md">
          La lectura fácil se enfoca en{' '}
          <strong>personas que tienen dificultades temporales o permanentes para leer</strong>, como las personas con
          discapacidad, con falta de educación básica o con edad avanzada. El objetivo de la lectura fácil es que las
          personas vulnerables puedan mejorar sus habilidades de lectura, su motivación y su confianza. 
        </p>

        <p className="text-md">
          A diferencia del{' '}
          <a href={`${basePath}/content/comunicar-con-claridad#section-section-lenguaje-1`}>lenguaje claro</a>, es
          importante tener en cuenta que en la <strong>lectura fácil:</strong> 
        </p>

        <ul className="list-informative-bullet">
          <li>Es posible eliminar información no relevante</li>
          <li>Se redactan dos versiones: la original y la adaptada a la lectura fácil</li>
          <li>Se aplica a todo tipo de textos, incluida la literatura</li>
          <li>Requiere validación </li>
        </ul>
      </>
    ),
  },
  {
    subtitle: '¿Qué podemos hacer para aplicar la lectura fácil?  ',
    content: (
      <>
        <p className="text-sm fw-semibold mt-3" style={{ marginBottom: '12px' }}>
          Identificación del público objetivo{' '}
        </p>

        <ul className="list-informative-bullet">
          <li>
            Definir con claridad quiénes necesitan acceder a los textos (ej. personas con discapacidad intelectual,
            mayores, migrantes, personas con baja alfabetización, etc.).
          </li>
          <li>
            Formular preguntas clave como: ¿Qué necesitan saber? ¿Por qué es importante? ¿Cómo usarán esta información?
          </li>
        </ul>

        <p className="text-sm fw-semibold mt-4" style={{ marginBottom: '12px' }}>
          Redacción en lectura fácil{' '}
        </p>

        <ul className="list-informative-bullet">
          <li>Aplicar niveles de complejidad textual según las capacidades lectoras (Nivel I, II o III). </li>
          <li>Evitar lenguaje abstracto, técnico o ambiguo.</li>
          <li>Mantener frases simples, claras, con estructura sujeto-verbo-predicado.</li>
          <li>Priorizar el uso de vocabulario cotidiano y frecuente.</li>
          <li>Eliminar siglas, abreviaturas y tecnicismos innecesarios.  </li>
        </ul>

        <p className="text-sm fw-semibold mt-4" style={{ marginBottom: '12px' }}>
          Diseño accesible{' '}
        </p>

        <ul className="list-informative-bullet">
          <li>Utilizar tipografía legible (mínimo 12 pt, preferentemente 14-18 pt).</li>
          <li>Contraste adecuado entre texto y fondo.</li>
          <li>Espaciado suficiente entre líneas y párrafos.</li>
          <li>Integrar imágenes, pictogramas o ayudas visuales si es posible.</li>
        </ul>

        <p className="text-sm fw-semibold mt-4" style={{ marginBottom: '12px' }}>
          Maquetación clara{' '}
        </p>

        <ul className="list-informative-bullet">
          <li>Evitar bloques densos de texto.</li>
          <li>Incluir títulos, subtítulos, listas y espacios en blanco.</li>
          <li>Usar maquetación que facilite escaneabilidad visual del contenido.</li>
        </ul>

        <p className="text-sm fw-semibold mt-4" style={{ marginBottom: '12px' }}>
          Evaluación con personas usuarias{' '}
        </p>

        <ul className="list-informative-bullet">
          <li>Incluir personas con dificultades lectoras en la validación de los contenidos.</li>
          <li>Aplicar pruebas de comprensibilidad antes de la publicación.</li>
          <li>Ajustar según retroalimentación de usuarios reales.</li>
        </ul>

        <p className="text-sm fw-semibold mt-4" style={{ marginBottom: '12px' }}>
          Planificación del proceso{' '}
        </p>

        <ul className="list-informative-bullet">
          <li>Formular una lista de contenidos clave antes de redactar.</li>
          <li>
            Seguir un flujo: definición de objetivos → redacción → maquetación → revisión → validación con usuarios →
            publicación. 
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Parámetros de accesibilidad en imágenes',
    firstTitle: true,
    content: (
      <>
        <p className="text-xl">Uso del texto alternativo </p>

        <p className="text-md">
          Toda imagen debe incluir un texto alternativo (atributo &quot;alt&quot;) que describa su contenido de manera
          clara y concisa. Este texto será leído por lectores de pantalla para personas usuarias ciegas o con
          discapacidad visual.
        </p>

        <p className="text-md">
          El campo debe completarse considerando qué información aporta la imagen al contexto. Para imágenes
          decorativas, se puede dejar el alt vacío pero nunca omitirlo. 
        </p>

        <p className="text-sm fw-semibold mt-3" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex align-items-center">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Alt=´Veterinaria vacunando a un gato adulto en una camilla´</p>
        </div>
      </>
    ),
  },
];
const EscribirDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Escribir para la accesibilidad"
        description={
          'Te compartimos algunos estándares de accesibilidad web para que nuestro contenido sea cada vez más accesible para todas las personas.'
        }
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="init" />
    </>
  );
};

export default EscribirDocs;
