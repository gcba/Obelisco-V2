import CodeCopy from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';
import { EGcodeSimpleAlert, EGcodeCloseAlert } from './code-views';

const BadgeDocs: React.FC = () => {
  const sections = [
    {
      id: 'section-1',
      title: 'Etiqueta',
      content: (
        <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
      ),
      h1: true,
    },
    {
      id: 'section-2',
      title: 'Colores',
      content: (
        <>
          <div>
            <span className="badge badge-secondary">Etiqueta</span>
            <span className="badge badge-danger">Etiqueta</span>
            <span className="badge badge-success">Etiqueta</span>
            <span className="badge badge-info">Etiqueta</span>
            <span className="badge badge-primary">Etiqueta</span>
          </div>
          <CodeCopy code={EGcodeSimpleAlert} />
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Enlace',
      content: (
        <>
          <div>
            <a href="#" className="badge badge-secondary">Etiqueta</a>
            <a href="#" className="badge hover badge-secondary">Etiqueta</a>
            <a href="#" className="badge focus hover badge-secondary">Etiqueta</a>
            <a href="#" className="badge focus badge-secondary">Etiqueta</a>
          </div>
          <CodeCopy code={EGcodeCloseAlert} />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default BadgeDocs;
