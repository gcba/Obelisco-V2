import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import CodeCopy from '@/components/CodeBox';
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';


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
          <div className="col-12 col-lg-6">
            <label htmlFor="exampleInputTexto" className="form-label">Ejemplo campo de texto</label>
            <input type="text" className="form-control" id="exampleInputTexto" aria-describedby="Texto" placeholder="Textos" />
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
          <div className="col-12 col-lg-6">
            <label htmlFor="exampleInputNumber" className="form-label">Ejemplo campo de numero</label>
            <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="Number" placeholder="Números" />
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
          <div className="col-12 col-lg-6">
            <label htmlFor="exampleInputEmail" className="form-label">Ejemplo campo de mail</label>
            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="Email" placeholder="Email@test.com" />
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
          <div className="col-12 col-lg-6">
            <label htmlFor="exampleInputDate" className="form-label">Fecha</label>
            <input type="date" className="form-control" id="exampleInputDate" aria-describedby="Date" placeholder="Selecciona la fecha" />
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
          <div className="col-12 col-lg-6">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Ejemplo TextArea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" />
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
          <form className="col-12 col-lg-6">
            <label htmlFor="example-six" className="form-label">Ejemplo campo de texto</label>
            <div className='search-container'>
              <input type="search" className="form-control input-search" id="example-six" aria-describedby="Search" placeholder="Buscador" disabled />
              <button className="reset" type="reset" aria-label="Borrar"></button>
            </div>
          </form>

          <div className="col-12 col-lg-6">
            <label htmlFor="example-five" className="form-label">Ejemplo campo de texto</label>
            <input type="text" className="form-control" id="example-five" aria-describedby="Texto" placeholder="Textos" disabled />
          </div>

          <div className="col-12 col-lg-6">
            <label htmlFor="example-four" className="form-label">Ejemplo campo de numero</label>
            <input type="number" className="form-control" id="example-four" aria-describedby="Number" placeholder="Números" disabled />
          </div>

          <div className="col-12 col-lg-6">
            <label htmlFor="example-three" className="form-label">Ejemplo campo de mail</label>
            <input type="email" className="form-control" id="example-three" aria-describedby="Email" placeholder="Email@test.com" disabled />
          </div>

          <div className="col-12 col-lg-6">
            <label htmlFor="example-two" className="form-label">Ejemplo campo de fecha</label>
            <input type="date" className="form-control" id="example-two" aria-describedby="Date" placeholder="selecciona tu fecha" disabled />
          </div>

          <div className="col-12 col-lg-6">
            <label htmlFor="example-one" className="form-label">Ejemplo TextArea</label>
            <textarea className="form-control" id="example-one" disabled />
          </div>
          {/* <CodeCopy code={TEXT_THEME_COLORS} /> */}
        </>
      ),
    },
    {
      id: "section-8",
      title: "Validacion",
      content: (
        <>
          <form className="col-12 col-lg-6">
            <label htmlFor="ejemplo-1" className="form-label">Ejemplo campo de texto</label>
            <input type="text" className="form-control is-invalid" id="ejemplo-1" aria-describedby="Texto" placeholder="Textos" required />
            <div className="valid-feedback">
              <p>
                El campo es válido.
              </p>
            </div>
            <div id="exampleInputTexto" className="invalid-feedback">
              <p>
                El campo es invalido
              </p>
            </div>
          </form>

          <Divisor />

          <form className="col-12 col-lg-6">
            <label htmlFor="ejemplo-2" className="form-label">Ejemplo campo de numero</label>
            <input type="number" className="form-control is-valid" id="ejemplo-2" aria-describedby="Number" placeholder="Números" required />
            <div className="valid-feedback">
              <p>
                El campo es válido.
              </p>
            </div>
            <div id="exampleInputTexto" className="invalid-feedback">
              <p>
                El campo es invalido
              </p>
            </div>
          </form>

          <Divisor />

          <form className="col-12 col-lg-6">
            <label htmlFor="ejemplo-3-1" className="form-label">Ejemplo campo de mail</label>
            <input type="email" className="form-control is-invalid" id="ejemplo-3-1" aria-describedby="Email" placeholder="Email@test.com" required />
            <div className="valid-feedback">
              <p>
                El campo es válido.
              </p>
            </div>
            <div id="exampleInputTexto" className="invalid-feedback">
              <p>
                El campo es invalido
              </p>
            </div>
          </form>

          <Divisor />

          <form className="col-12 col-lg-6">
            <label htmlFor="ejemplo-4" className="form-label">Ejemplo campo de fecha</label>
            <input type="date" className="form-control is-valid" id="ejemplo-4" aria-describedby="Date" placeholder="selecciona tu fecha" required />
            <div className="valid-feedback">
              <p>
                El campo es válido.
              </p>
            </div>
            <div id="exampleInputTexto" className="invalid-feedback">
              <p>
                El campo es invalido
              </p>
            </div>
          </form>

          <Divisor />

          <form className="col-12 col-lg-6">
            <label htmlFor="ejemplo-5" className="form-label">Ejemplo TextArea</label>
            <textarea className="form-control is-invalid" id="ejemplo-5" required />
            <div className="valid-feedback">
              <p>
                El campo es válido.
              </p>
            </div>
            <div id="exampleInputTexto" className="invalid-feedback">
              <p>
                El campo es invalido
              </p>
            </div>
          </form>
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
