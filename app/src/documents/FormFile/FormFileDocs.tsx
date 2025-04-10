import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  FILE_DEFAULT,
  FILE_DISABLED,
} from './code-views';

const FormFileDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Carga de archivo',
      firstTitle: true,
    },
    {
      subtitle: 'Default',
      content: (
        <CodeBox codeHTML={FILE_DEFAULT}>
          <div className="container">
            <div className="form-wrapper">
              <div className="form-label-badge">
                <label htmlFor="exampleInputFile" className="form-label">
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
                type="file"
                className="form-control"
                id="exampleInputFile"
                accept="image/png, image/jpeg"
              />
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Deshabilitado',
      content: (
        <CodeBox codeHTML={FILE_DISABLED}>
          <div className="container">
            <div className="form-wrapper">
              <div className="form-label-badge">
                <label htmlFor="exampleInputFile" className="form-label">
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
                type="file"
                className="form-control"
                id="exampleInputFile"
                accept="image/png, image/jpeg"
                disabled
              />
            </div>
          </div>
        </CodeBox>
      ),
    }
  ];

  return (
    <>
      <ComponentHeader
        title="Carga de archivo"
        description={[
          'Las casillas de selección permiten a los usuarios elegir entre opciones únicas o múltiples. Radio se usa para seleccionar solo una opción dentro de un grupo, mientras que Checkbox permite seleccionar varias opciones a la vez.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default FormFileDocs;
