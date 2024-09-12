export const componentNames = [
  'alert',
  'access',
  'badge',
  'banner',
  'block',
  'button',
  'cards',
  'collapse',
  'colors',
  'link',
  'modal',
  'nav-horizontal',
  'nav-vertical',
  'status-message',
  'switch',
  'tabs',
  'tooltip',
  'typography',
  'dropdown-nav',
  'grid',
  'banner',
  'spinner',
  'map',
  'highlighted',
  'breadcrumb',
  'form-text',
  'form-selection',
  'gallery',
  'pagination',
  'progress-bar',
  'table',
];

export async function generateStaticParams() {
  return componentNames.map((name) => ({
    componentName: name,
  }));
}

/*
  davis: Esta es una funcion especial de Next js 14, que pre-renderiza en el momento de la construccion estatica de la aplicacion los parametros 
  dinamicos, en este caso serian las rutas, es decir en el momento de la contruccion de la aplicacion se utiliza esta funcion para determinar que rutas 
  dinamicas deben generarse, en este caso rutas para cada componente. 
  
  Ademas realizando este pre-renderizado de las paginas que coinciden con estas rutas, ayuda a optimizar el rendimiento de la aplicacion al servir
  contenido estatico.
*/
