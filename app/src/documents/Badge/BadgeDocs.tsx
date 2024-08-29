import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { BADGE_COLORS, BADGE_TYPES } from './code-views';

const BadgeDocs: React.FC = () => {
  const sections = [
    {
      title: 'Etiquetas',
      content: (
        <MainDescription description="Las etiquetas se utilizan para identificar y categorizar la información dentro de una página proporcionando más detalles a los usuarios sobre el contenido que necesitan." />
      ),
      h1: true,
    },
    {
      id: 'section-1',
      title: 'Colores',
      content: (
        <CodeBox codeHTML={BADGE_COLORS}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5">
                <span className="badge badge-default">Predeterminada</span>
                <span className="badge badge-danger">Peligro</span>
                <span className="badge badge-info">Info</span>
                <span className="badge badge-success">Éxito</span>
                <span className="badge badge-warning">Advertencia</span>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Enlace',
      content: (
        <CodeBox codeHTML={BADGE_TYPES}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5">
                <a href="#" className="badge badge-default">
                  Etiqueta
                </a>
                <a href="#" className="badge hover badge-default">
                  Etiqueta
                </a>
                <a href="#" className="badge focus badge-default">
                  Etiqueta
                </a>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default BadgeDocs;
