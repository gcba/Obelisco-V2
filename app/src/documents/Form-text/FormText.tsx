import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  INPUT_BACKGROUND,
  INPUT_BLOCK,
  INPUT_DATE,
  INPUT_DISABLED,
  INPUT_MAIL,
  INPUT_NUMBER,
  INPUT_SELECT,
  INPUT_TEXT,
  INPUT_VALIDATION_DATE,
  INPUT_VALIDATION_MAIL,
  INPUT_VALIDATION_NUMBER,
  INPUT_VALIDATION_TEXT,
  INPUT_VALIDATION_TEXTAREA,
} from './code-views';

const FormTextDocs: React.FC = () => {
  const sections = [
    {
      title: 'Formularios de texto',
      content: (
        <>
          <MainDescription description="Ejemplos y pautas de uso para estilos de control de formulario, opciones de diseño y componentes personalizados para crear una amplia variedad de formularios." />
        </>
      ),
      h1: true,
    },
    {
      id: 'section-1',
      title: 'Texto',
      content: (
        <>
          <CodeBox codeHTML={INPUT_TEXT}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputTexto" className="form-label">
                    Campo de texto *
                  </label>
                  <p className="form-label-description">Texto de asistencia</p>
                </div>
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
      id: 'section-2',
      title: 'Número',
      content: (
        <>
          <CodeBox codeHTML={INPUT_NUMBER}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Campo numérico *
                  </label>
                  <p className="form-label-description">Campo de asistencia</p>
                </div>
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
      id: 'section-3',
      title: 'Correo electrónico',
      content: (
        <>
          <CodeBox codeHTML={INPUT_MAIL}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputEmail" className="form-label">
                    Campo de email *
                  </label>
                  <p className="form-label-description">Campo de asistencia</p>
                </div>
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
      id: 'section-4',
      title: 'Fecha',
      content: (
        <>
          <CodeBox codeHTML={INPUT_DATE}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputDate" className="form-label">
                    Nombre del campo *
                  </label>
                </div>
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
      id: 'section-5',
      title: 'Bloque de texto',
      content: (
        <>
          <CodeBox codeHTML={INPUT_BLOCK}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Nombre del campo *
                  </label>
                  <span className="form-label-number">0/100</span>
                </div>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Texto de ejemplo"
                ></textarea>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-6',
      title: 'De selección',
      content: (
        <>
          <CodeBox codeHTML={INPUT_SELECT}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputEmail" className="form-label">
                    Nombre del selector *
                  </label>
                  <p className="form-label-description">Campo de asistencia</p>
                </div>
                <select className="form-control form-select" aria-label="Default select example">
                  <option value="0">Seleccionar</option>
                  <option value="1">Opción</option>
                  <option value="2">Opción</option>
                  <option value="3">Opción</option>
                </select>
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
                <div className="form-label-container">
                  <label htmlFor="example-five-disabled" className="form-label disabled">
                    Ejemplo campo de texto
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="example-five-disabled"
                  aria-describedby="Texto"
                  placeholder="Textos"
                  disabled
                />
              </div>

              <br />

              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="example-four-disabled" className="form-label disabled">
                    Ejemplo campo de numero
                  </label>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="example-four-disabled"
                  aria-describedby="Number"
                  placeholder="Números"
                  disabled
                />
              </div>

              <br />

              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="example-three-disabled" className="form-label disabled">
                    Ejemplo campo de email
                  </label>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="example-three-disabled"
                  aria-describedby="Email"
                  placeholder="Email@test.com"
                  disabled
                />
              </div>

              <br />

              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="example-two-disabled" className="form-label disabled">
                    Ejemplo campo de fecha
                  </label>
                </div>
                <input
                  type="date"
                  className="form-control"
                  id="example-two-disabled"
                  aria-describedby="Date"
                  placeholder="selecciona tu fecha"
                  disabled
                />
              </div>

              <br />

              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="example-one-disabled" className="form-label disabled">
                    Ejemplo TextArea
                  </label>
                </div>
                <textarea className="form-control" id="example-one-disabled" disabled></textarea>
              </div>

              <br />

              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="select-example" className="form-label disabled">
                    Ejemplo campo de selección deshabilitado.
                  </label>
                </div>
                <select
                  id="select-example"
                  className="form-control form-select"
                  aria-label="Default select example"
                  disabled
                  defaultValue="1"
                >
                  <option value="0">Campo de selección</option>
                  <option value="1">Opción</option>
                  <option value="2">Opción</option>
                  <option value="3">Opción</option>
                </select>
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
                <div className="form-label-container">
                  <label htmlFor="exampleInputTexto" className="form-label">
                    Ejemplo campo de texto
                  </label>
                </div>
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
          <CodeBox codeHTML={INPUT_VALIDATION_NUMBER}>
            <div className="container">
              <form className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="ejemplo-2" className="form-label">
                    Ejemplo campo de numero
                  </label>
                </div>
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
                <div className="form-label-container">
                  <label htmlFor="ejemplo-3-1" className="form-label">
                    Ejemplo campo de mail
                  </label>
                </div>
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
                <div className="form-label-container">
                  <label htmlFor="ejemplo-4" className="form-label">
                    Ejemplo campo de fecha
                  </label>
                </div>
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
                <div className="form-label-container">
                  <label htmlFor="ejemplo-5" className="form-label">
                    Ejemplo TextArea
                  </label>
                </div>
                <textarea className="form-control is-invalid" id="ejemplo-5" required></textarea>
                <div className="valid-feedback">
                  <p>El campo es válido.</p>
                </div>
                <div id="exampleInputTexto" className="invalid-feedback">
                  <p>El campo es invalido</p>
                </div>
              </form>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-9',
      title: 'Con fondo',
      content: (
        <>
          <p className="headline-md">Con fondo light</p>
          <CodeBox codeHTML={INPUT_BACKGROUND}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="p-4 form-bg-light">
                  <div className="form-label-container">
                    <label htmlFor="exampleInputTextoBg" className="form-label">
                      Campo de texto con fondo
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputTextoBg"
                    aria-describedby="Texto"
                    placeholder="Textos"
                  />
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default FormTextDocs;
