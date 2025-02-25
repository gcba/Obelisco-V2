import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: 'Cómo usar el editor',
    content: <></>,
  },
];

const AccessibilityModule: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Accesibilidad"
        description={[
          'Obelisco está diseñado y construido para ser accesible para todas las personas, sin importar su habilidad tecnológica o su contexto de uso. ',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="editor" noScrollButton={true} />
    </>
  );
};

export default AccessibilityModule;
