// Importa los módulos de documentación para la sección "Getting Started" (Comenzar).
// Cada módulo proporciona información específica como la instalación o las importaciones necesarias.
import ImportsModule from '@/documents/getting-started-module/ImportsModule';
import InstallationModule from '@/documents/getting-started-module/InstallationModule';
import { notFound } from 'next/navigation';

// Un mapa que asocia el nombre de la sección de "Getting Started" con el componente correspondiente.
// Este mapa se utiliza para renderizar dinámicamente el contenido correcto según el parámetro recibido.
const componentMap: { [key: string]: React.ReactNode } = {
  imports: <ImportsModule />,      // Renderiza el componente de importaciones
  installation: <InstallationModule />, // Renderiza el componente de instalación
};

// Esta función genera los parámetros estáticos para las rutas dinámicas de la sección "Getting Started".
// En Next.js, `generateStaticParams` se usa para crear rutas estáticas en el momento de la compilación
// para las rutas dinámicas. En este caso, se está utilizando para pre-generar las páginas de cada sección.
export async function generateStaticParams() {
  // Lista de nombres de secciones disponibles en "Getting Started"
  const gettingStartedNames = ['imports', 'installation'];

  // Mapea cada nombre de la lista y lo convierte en un objeto que contiene el nombre de la sección
  // Este objeto será utilizado como parámetro para generar rutas dinámicas.
  // En tiempo de construcción, Next.js usará estos parámetros para pre-renderizar las páginas
  // correspondientes a 'imports' e 'installation'.
  return gettingStartedNames.map((name) => ({
    gettingStartedName: name,
  }));
}

// Componente que renderiza dinámicamente la página correspondiente a "Getting Started"
// según el parámetro de la URL (gettingStartedName).
export default function GettingStartedNamePage({ params }: { params: { gettingStartedName: string } }) {
  const { gettingStartedName } = params; // Extrae el nombre de la sección de los parámetros de la URL.

  // Busca en el mapa el componente que corresponde al nombre de la sección.
  const component = componentMap[gettingStartedName];

  // Si no se encuentra el componente en el mapa, muestra una página de error 404.
  if (!component) {
    return notFound(); 
  }

  // Si se encuentra el componente, lo renderiza dentro de un contenedor div.
  return <div>{component}</div>;
}
