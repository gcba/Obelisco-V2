import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  INPUT_VALIDATION_DATE,
  INPUT_VALIDATION_MAIL,
  INPUT_VALIDATION_NUMBER,
  INPUT_VALIDATION_TEXT,
  INPUT_VALIDATION_TEXTAREA,
} from './code-views';

const FormValidationDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Validación',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={INPUT_VALIDATION_TEXT}>
            <div className="container">
              <div className="col-12 col-lg-6">
                {/* <div className="form-label-badge"> */}
                <div className="form-label-container"> 
                  <label htmlFor="exampleInputText" className="form-label">
                    Label
                  </label>
                  <span className="badge-forms badge-required-forms">
                    Requerido
                  </span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
                </p>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="exampleInputTexto"
                  aria-describedby="invalid-feedback-texto"
                  placeholder="Texto"
                />
                <div id="invalid-feedback-texto" className="invalid-feedback ">
                  <p>Los datos introducidos son inválidos.</p>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_NUMBER}>
            <div className="container">
              <div className="col-12 col-lg-6">
              <div className="form-label-container">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Label
                  </label>
                  <span className="badge-forms badge-required-forms">
                    Requerido
                  </span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
                </p>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="exampleInputNumber"
                  aria-describedby="valid-feedback-texto"
                  placeholder="Texto"
                />
                <div id="valid-feedback-texto" className="valid-feedback ">
                  <p>Los datos introducidos son válidos.</p>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_MAIL}>
            <div className="container">

              <div className="col-12 col-lg-6">
              <div className="form-label-container">
                  <label htmlFor="exampleInputText" className="form-label">
                    Label
                  </label>
                  <span className="badge-forms badge-required-forms">
                    Requerido
                  </span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
                </p>
                <input
                  type="email"
                  className="form-control is-invalid"
                  id="ejemplo-3-1"
                  aria-describedby="Email"
                  placeholder="Email@test.com"
                  required
                />
                <div id="invalid-feedback-texto" className="invalid-feedback ">
                  <p>Los datos introducidos son inválidos.</p>
                </div>
              </div>

            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_DATE}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="ejemplo-4" className="form-label">
                    Ejemplo campo de fecha
                  </label>
                  <span className="badge-forms badge-required-forms">
                    Requerido
                  </span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
                </p>
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
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_TEXTAREA}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="ejemplo-5" className="form-label">
                    Ejemplo TextArea
                  </label>
                  <span className="badge-forms badge-required-forms">
                    Requerido
                  </span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
                </p>
                <textarea
                  className="form-control is-invalid"
                  id="ejemplo-5"
                  required
                ></textarea>
                <div className="invalid-feedback">
                  <p>El campo es inválido</p>
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
        title="Validación"
        description={[
          'La validación de formularios garantiza la integridad y calidad de los datos ingresados por las personas usuarias, mejorando la experiencia de uso y previniendo errores.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default FormValidationDocs;
