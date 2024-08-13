import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import CodeCopy from '@/components/CodeBox';
import MainDescription from '@/components/Template/MainDescription';


const FormTextDocs: React.FC = () => {
  const sections = [
    {
      id: 'section-1',
      title: 'Formularios de texto',
      content: (
        <>
          <MainDescription description="Ejemplos y pautas de uso para estilos de control de formulario, opciones de diseño y componentes personalizados para crear una amplia variedad de formularios." />
        </>
      ),
      h1: true,
    },
    {
      id: 'section-2',
      title: 'Texto',
      content: (
        <>
          <div className="">
            <label htmlFor="exampleInputTexto" className="form-label">Texto</label>
            <input type="text" className="form-control" id="exampleInputTexto" aria-describedby="Texto" placeholder="Textos" />
            <div id="Texto" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          {/* <CodeCopy code={TEXT_THEME_COLORS} /> */}
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Número',
      content: (
        <>
          <div className="">
            <label htmlFor="exampleInputNumber" className="form-label">Número</label>
            <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="Number" placeholder="Números" />
            <div id="Number" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          {/* <CodeCopy code={TEXT_THEME_COLORS} /> */}
        </>
      ),
    },
    {
      id: "section-4",
      title: "Correo electrónico",
      content: (
        <>
          <div className="">
            <label htmlFor="exampleInputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="Email" placeholder="Email@test.com" />
            <div id="Email" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          {/* <CodeCopy code={TEXT_THEME_COLORS} /> */}
        </>
      ),
    },
    {
      id: "section-5",
      title: "Fecha",
      content: (
        <>
          <div className="">
            <label htmlFor="exampleInputDate" className="form-label">Fecha</label>
            <input type="date" className="form-control" id="exampleInputDate" aria-describedby="Date" placeholder="Selecciona la fecha" />
            <div id="Date" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          {/* <CodeCopy code={TEXT_THEME_COLORS} /> */}
        </>
      ),
    },
    {
      id: "section-6",
      title: "Bloque de texto",
      content: (
        <>
          <div className="">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" />
            <div id="Date" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          {/* <CodeCopy code={TEXT_THEME_COLORS} /> */}
        </>
      ),
    },
    {
      id: "section-7",
      title: "Deshabilitado",
      content: (
        <>
          <div className="">
            <label htmlFor="exampleInputTexto" className="form-label">Texto</label>
            <input type="text" className="form-control" id="exampleInputTexto" aria-describedby="Texto" placeholder="Textos" disabled />
            <div id="Texto" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="">
            <label htmlFor="exampleInputNumber" className="form-label">Número</label>
            <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="Number" placeholder="Números" disabled />
            <div id="Number" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="">
            <label htmlFor="exampleInputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="Email" placeholder="Email@test.com" disabled />
            <div id="Email" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <input type="date" className="form-control" id="exampleInputEmail" aria-describedby="Date" placeholder="selecciona tu fecha" disabled />
            <div id="Date" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" disabled />
          </div>
          {/* <CodeCopy code={TEXT_THEME_COLORS} /> */}
        </>
      ),
    },
  ];

  return (
    <DocumentationTemplate sections={sections} />
  );
};

export default FormTextDocs;
