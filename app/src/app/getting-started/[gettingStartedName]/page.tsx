import ImportsModule from '@/documents/getting-started-module/ImportsModule';
import InstallationModule from '@/documents/getting-started-module/InstallationModule';
import { notFound } from 'next/navigation';

// davis: se mapean las url con componentes
const componentMap: { [key: string]: React.ReactNode } = {
  imports: <ImportsModule />,
  installation: <InstallationModule />,
};

export default function GettingStartedNamePage({ params }: { params: { gettingStartedName: string } }) {
  const { gettingStartedName } = params;

  const component = componentMap[gettingStartedName];

  if (!component) {
    notFound(); // davis: reemplazar estio por componente notfound
  }

  return (
    <div>
      {/* <h1>{componentName} Component</h1> */}
      {component}
    </div>
  );
}

/*  
  davis: esta page hace uso de componentMap, el cual asigna a cada ruta generada y pre renderizada de "generateStaticParams.ts" un componentDocuments, 
  de manera que cada ruta tendra su documentacion de componente asignada correctamente.
*/
