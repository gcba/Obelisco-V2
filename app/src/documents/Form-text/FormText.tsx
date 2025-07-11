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
                  <label htmlFor="input_text" className="form-label">
                    Campo de texto
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="input_text"
                  name="campoTexto"
                  aria-describedby="Texto"
                  placeholder="Ingrese textos"
                />
                <p className="form-label-description">Texto de asistencia</p>
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
                  <label htmlFor="input_number" className="form-label">
                    Campo numérico
                  </label>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="input_number"
                  name="campoNumero"
                  aria-describedby="Number"
                  placeholder="Ingrese números"
                />
                <p className="form-label-description">Campo de asistencia</p>
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
                  <label htmlFor="input-email" className="form-label">
                    Campo de email
                  </label>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="input-email"
                  name="campoEmail"
                  aria-describedby="Email"
                  placeholder="email@test.com"
                />
                <p className="form-label-description">Campo de asistencia</p>
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
                  <label htmlFor="input-date" className="form-label">
                    Nombre del campo
                  </label>
                </div>
                <input
                  type="date"
                  className="form-control"
                  id="input-date"
                  name="campoFecha"
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
                  <label htmlFor="input-textarea" className="form-label">
                    Nombre del campo
                  </label>
                </div>
                <textarea
                  className="form-control"
                  id="input-textarea"
                  name="campoBloqueTexto"
                  placeholder="Texto de ejemplo"
                ></textarea>
                <p className="form-label-description">Campo de asistencia</p>
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
                  <label htmlFor="input-select" className="form-label">
                    Nombre del selector
                  </label>
                </div>
                <select className="form-control form-select" aria-label="Ejemplo de selección por defecto">
                  <option value="0">Seleccionar</option>
                  <option value="1">Opción</option>
                  <option value="2">Opción</option>
                  <option value="3">Opción</option>
                </select>
                <p className="form-label-description">Campo de asistencia</p>
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
                  aria-describedby="campo de número"
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
                <textarea className="form-control" id="example-one-disabled" maxLength={50} disabled></textarea>
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
                  aria-label="Ejemplo de input de selección por defecto"
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
                    <label htmlFor="input-text-bg" className="form-label">
                      Campo de texto con fondo
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="input-text-bg"
                    name="campoTextoBg"
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
