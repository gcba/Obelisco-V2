import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  INPUT_BACKGROUND,
  INPUT_BLOCK,
  INPUT_DATE,
  INPUT_DISABLED,
  INPUT_MAIL,
  INPUT_NUMBER,
  INPUT_SELECT,
  INPUT_TEXT,
} from './code-views';

const FormTextDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Texto',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={INPUT_TEXT}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputTexto" className="form-label">
                    Campo de texto
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
      title: 'Número',
      content: (
        <>
          <CodeBox codeHTML={INPUT_NUMBER}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Campo numérico
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
      title: 'Correo electrónico',
      content: (
        <>
          <CodeBox codeHTML={INPUT_MAIL}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputEmail" className="form-label">
                    Campo de email
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
      title: 'Fecha',
      content: (
        <>
          <CodeBox codeHTML={INPUT_DATE}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputDate" className="form-label">
                    Nombre del campo
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
      title: 'Bloque de texto',
      content: (
        <>
          <CodeBox codeHTML={INPUT_BLOCK}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Nombre del campo
                  </label>
                </div>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Texto de ejemplo"
                ></textarea>
                <span className="form-label-number">0/100</span>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'De selección',
      content: (
        <>
          <CodeBox codeHTML={INPUT_SELECT}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputEmail" className="form-label">
                    Nombre del selector
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

  return (
    <>
      <ComponentHeader
        title="Formularios de texto"
        description={[
          'Ejemplos y pautas de uso para estilos de control de formulario, opciones de diseño y componentes personalizados para crear una amplia variedad de formularios.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default FormTextDocs;
