import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { FILE_DEFAULT, FILE_DISABLED } from './code-views';

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
            <div className="col-12 col-lg-6">
              <div className="form-label-container">
                <label htmlFor="exampleInputFile" className="form-label">
                  Label
                </label>
                <span className="badge-forms badge-required-forms">Requerido</span>
              </div>
              <input type="file" className="form-control" id="exampleInputFile" accept="image/png, image/jpeg" />
              <p className="form-label-description">
                Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no
                más de 3 líneas.
              </p>
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
            <div className="col-12 col-lg-6">
              <div className="form-label-container">
                <label htmlFor="exampleInputFile" className="form-label">
                  Label
                </label>
                <span className="badge-forms badge-required-forms">Requerido</span>
              </div>
              <input
                type="file"
                className="form-control"
                id="exampleInputFile"
                accept="image/png, image/jpeg"
                disabled
              />
              <p className="form-label-description">
                Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no
                más de 3 líneas.
              </p>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Carga de archivo"
        description={['Permite subir o adjuntar archivos desde el dispositivo.']}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default FormFileDocs;
