import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

const CollapseDocs: React.FC = () => {
  const sections = [
    {
      id: 'section-1',
      title: 'Colapsable',
      content: (
        <div>
          <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
        </div>
      ),
      h1: true,
    },
    {
      id: 'section-2',
      title: 'Simple',
      content: (
        <p>ejemplo</p>
      ),
    },
    {
      id: 'section-3',
      title: 'Con cierre',
      content: (
        <p>ejemplo</p>
      ),
    },
    {
      id: 'section-4',
      title: 'Con lista',
      content: (
        <p>ejemplo</p>
      ),
    },
  ];

  return (
    <DocumentationTemplate sections={sections} />
  );
};

export default CollapseDocs;
