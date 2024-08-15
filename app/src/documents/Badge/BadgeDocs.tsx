import CodeCopy from "@/components/CodeBox";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import MainDescription from "@/components/Template/MainDescription";
import { BadgeColors, BadgeTypes } from "./code-views";

const BadgeDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Etiqueta",
      content: (
        <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
      ),
      h1: true,
    },
    {
      id: "section-2",
      title: "Colores",
      content: (
        <>
          <div className="grid gap-5">
            <span className="badge badge-default">Predeterminada</span>
            <span className="badge badge-danger">Peligro</span>
            <span className="badge badge-info">Info</span>
            <span className="badge badge-success">Éxito</span>
            <span className="badge badge-warning">Advertencia</span>
          </div>
          <CodeCopy code={BadgeColors} />
        </>
      ),
    },
    {
      id: "section-3",
      title: "Enlace",
      content: (
        <>
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
          <CodeCopy code={BadgeTypes} />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default BadgeDocs;
