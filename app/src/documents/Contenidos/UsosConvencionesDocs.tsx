import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: 'Signos de interrogación y exclamación ',
    firstTitle: true,
    content: (
      <>
        <p className="text-md">
          A diferencia de lo que ocurre en otras lenguas, los signos de interrogación y exclamación son signos dobles en
          español, como los paréntesis o los corchetes. Por tanto, es incorrecto prescindir del signo de apertura en los
          enunciados interrogativos o exclamativos:{' '}
        </p>
        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Completaste el formulario?</p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">¿Completaste el formulario?</p>
        </div>
        <div className="d-flex mt-3">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Gracias por inscribirte! </p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">¡Gracias por inscribirte!</p>
        </div>

        <p className="text-md" style={{ marginTop: '32px' }}>
          Cuando los signos de cierre (? !) constituyen el final del enunciado, la palabra que sigue se escribe con
          mayúscula inicial.
        </p>
        <p className="text-sm fw-semibold mt-3">Ejemplos de este uso</p>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">¿Completaste el formulario? Podés hacerlo desde nuestra página. </p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">¡Gracias por inscribirte! Pronto recibirás más información.</p>
        </div>
      </>
    ),
  },
  {
    title: 'Uso de los dos puntos ',
    content: (
      <>
        <p className="text-md">
          Representa una pausa mayor que la de la coma y menor que la del punto. Detienen el discurso para llamar la
          atención sobre lo que sigue, que siempre está en estrecha relación con el texto precedente.
        </p>
        <p className="text-md">
          Se escriben pegados a la palabra o el signo que los antecede, y separados por un espacio de la palabra o el
          signo que los sigue. Sirven para introducir enumeraciones, conclusiones, ejemplos o información que concreta
          lo que acaba de anunciarse.{' '}
        </p>
        <p className="text-md">
          Después de dos puntos se escribe <strong>minúscula</strong>, salvo en casos excepcionales.{' '}
        </p>

        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            Escuchando y respetando a los demás descubrimos que somos más que una persona: somos un equipo que, desde
            sus diferencias, se potencia.{' '}
          </p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Detectar: el móvil sanitario continúa con los testeos en Belgrano.</p>
        </div>

        <p className="text-md mt-4">
          Entre las excepciones a esta norma, más allá de otros usos no habituales en textos periodísticos, los dos
          puntos van seguidos de mayúscula cuando introducen una cita o un pensamiento en estilo directo.
        </p>

        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplo de un caso excepcional en mayúscula{' '}
        </p>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">
            Dijo Luciana, participante de una nueva edición de la Game Jam Mujeres Digitales: &quot;Estamos en la
            primera etapa del proyecto y lo que venimos haciendo hasta ahora fue unificar ideas para ver qué tipo de
            videojuego queremos elaborar&quot;.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Uso de símbolos numerales ',
    content: (
      <>
        <p className="text-sm fw-semibold" style={{ marginBottom: '12px' }}>
          Ejemplos de este uso
        </p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">
            Pueden realizar hasta cincuenta viajes mensuales con un tope de 4 viajes diarios.{' '}
          </p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Pueden realizar hasta 50 viajes mensuales con un tope de 4 viajes diarios.</p>
        </div>
        <div className="d-flex mt-3">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Tres de cada diez personas usan nuestro sistema.</p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">3 de cada 10 personas usan nuestro sistema.</p>
        </div>

        <div className="d-flex mt-3">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Conocé, 1 por 1, las colectividades de la Ciudad.</p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">Conocé, una por una, las colectividades de la Ciudad.</p>
        </div>

        <div className="d-flex mt-3">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Ciento cincuenta mil personas beneficiadas</p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">150.000 personas beneficiadas.</p>
        </div>

        <div className="d-flex mt-3">
          <span className="material-symbols-rounded text-danger">close</span>
          <p className="text-sm mb-0">Hoy- Ayer.</p>
        </div>
        <div className="d-flex mt-2">
          <span className="material-symbols-rounded text-success">check</span>
          <p className="text-sm mb-0">19 de marzo de 2025.</p>
        </div>
      </>
    ),
  },
];
const UsosConvencionesDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Sobre Obelisco"
        description={['Conocé los estándares básicos y necesarios para escribir los contenidos en tu sitio web.']}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="init" />
    </>
  );
};

export default UsosConvencionesDocs;
