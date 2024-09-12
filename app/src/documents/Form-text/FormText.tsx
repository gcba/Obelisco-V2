import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  INPUT_BLOCK,
  INPUT_DATE,
  INPUT_DISABLED,
  INPUT_MAIL,
  INPUT_NUMBER,
  INPUT_TEXT,
  INPUT_VALIDATION_DATE,
  INPUT_VALIDATION_MAIL,
  INPUT_VALIDATION_TEXT,
  INPUT_VALIDATION_TEXTAREA,
} from './code-views';

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
          <CodeBox codeHTML={INPUT_TEXT}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <label htmlFor="exampleInputTexto" className="form-label">
                  Ejemplo campo de texto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputTexto"
                  aria-describedby="Texto"
                  placeholder="Textos"
                />
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Número',
      content: (
        <>
          <CodeBox codeHTML={INPUT_NUMBER}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <label htmlFor="exampleInputNumber" className="form-label">
                  Ejemplo campo de numero
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputNumber"
                  aria-describedby="Number"
                  placeholder="Números"
                />
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-4',
      title: 'Correo electrónico',
      content: (
        <>
          <CodeBox codeHTML={INPUT_MAIL}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Ejemplo campo de mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="Email"
                  placeholder="Email@test.com"
                />
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-5',
      title: 'Fecha',
      content: (
        <>
          <CodeBox codeHTML={INPUT_DATE}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <label htmlFor="exampleInputDate" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputDate"
                  aria-describedby="Date"
                  placeholder="Selecciona la fecha"
                />
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-6',
      title: 'Bloque de texto',
      content: (
        <>
          <CodeBox codeHTML={INPUT_BLOCK}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Ejemplo TextArea
                </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" />
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-7',
      title: 'Deshabilitado',
      content: (
        <>
          <CodeBox codeHTML={INPUT_DISABLED}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <label htmlFor="example-five" className="form-label">
                  Ejemplo campo de texto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="example-five"
                  aria-describedby="Texto"
                  placeholder="Textos"
                  disabled
                />
              </div>

              <div className="col-12 col-lg-6">
                <label htmlFor="example-four" className="form-label">
                  Ejemplo campo de numero
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="example-four"
                  aria-describedby="Number"
                  placeholder="Números"
                  disabled
                />
              </div>

              <div className="col-12 col-lg-6">
                <label htmlFor="example-three" className="form-label">
                  Ejemplo campo de mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="example-three"
                  aria-describedby="Email"
                  placeholder="Email@test.com"
                  disabled
                />
              </div>

              <div className="col-12 col-lg-6">
                <label htmlFor="example-two" className="form-label">
                  Ejemplo campo de fecha
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="example-two"
                  aria-describedby="Date"
                  placeholder="selecciona tu fecha"
                  disabled
                />
              </div>

              <div className="col-12 col-lg-6">
                <label htmlFor="example-one" className="form-label">
                  Ejemplo TextArea
                </label>
                <textarea className="form-control" id="example-one" disabled />
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-8',
      title: 'Validación',
      content: (
        <>
          <CodeBox codeHTML={INPUT_VALIDATION_TEXT}>
            <div className="container">
              <form className="col-12 col-lg-6">
                <label htmlFor="ejemplo-1" className="form-label">
                  Ejemplo campo de texto
                </label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="ejemplo-1"
                  aria-describedby="Texto"
                  placeholder="Textos"
                  required
                />
                <div className="valid-feedback">
                  <p>El campo es válido.</p>
                </div>
                <div id="exampleInputTexto" className="invalid-feedback">
                  <p>El campo es invalido</p>
                </div>
              </form>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_TEXT}>
            <div className="container">
              <form className="col-12 col-lg-6">
                <label htmlFor="ejemplo-2" className="form-label">
                  Ejemplo campo de numero
                </label>
                <input
                  type="number"
                  className="form-control is-valid"
                  id="ejemplo-2"
                  aria-describedby="Number"
                  placeholder="Números"
                  required
                />
                <div className="valid-feedback">
                  <p>El campo es válido.</p>
                </div>
                <div id="exampleInputTexto" className="invalid-feedback">
                  <p>El campo es invalido</p>
                </div>
              </form>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_MAIL}>
            <div className="container">
              <form className="col-12 col-lg-6">
                <label htmlFor="ejemplo-3-1" className="form-label">
                  Ejemplo campo de mail
                </label>
                <input
                  type="email"
                  className="form-control is-invalid"
                  id="ejemplo-3-1"
                  aria-describedby="Email"
                  placeholder="Email@test.com"
                  required
                />
                <div className="valid-feedback">
                  <p>El campo es válido.</p>
                </div>
                <div id="exampleInputTexto" className="invalid-feedback">
                  <p>El campo es invalido</p>
                </div>
              </form>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_DATE}>
            <div className="container">
              <form className="col-12 col-lg-6">
                <label htmlFor="ejemplo-4" className="form-label">
                  Ejemplo campo de fecha
                </label>
                <input
                  type="date"
                  className="form-control is-valid"
                  id="ejemplo-4"
                  aria-describedby="Date"
                  placeholder="selecciona tu fecha"
                  required
                />
                <div className="valid-feedback">
                  <p>El campo es válido.</p>
                </div>
                <div id="exampleInputTexto" className="invalid-feedback">
                  <p>El campo es invalido</p>
                </div>
              </form>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_TEXTAREA}>
            <div className="container">
              <form className="col-12 col-lg-6">
                <label htmlFor="ejemplo-5" className="form-label">
                  Ejemplo TextArea
                </label>
                <textarea className="form-control is-invalid" id="ejemplo-5" required />
                <div className="valid-feedback">
                  <p>El campo es válido.</p>
                </div>
                <div id="exampleInputTexto" className="invalid-feedback">
                  <p>El campo es invalido</p>
                </div>
              </form>
            </div>
          </CodeBox>
          <br />
          <br />
          <br />
          <br />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default FormTextDocs;
