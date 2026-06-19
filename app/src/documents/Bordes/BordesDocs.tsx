import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const SECTIONS_DEV = [
  {
    title: 'Radios de borde',
    firstTitle: true,
    content: (
      <>
        <div className="container bordes">
          <p className="pb-3">
            Los radios de borde estandarizan la curvatura de las esquinas de los componentes y los planos, para asegurar
            consistencia y coherencia dentro del sistema Obelisco. Al aplicar el radio de bordes en diferentes
            componentes, estados y casos de uso, permite mejorar la claridad de los componentes y secciones para
            favorecer la legibilidad y navegación dentro de los criterios de accesibilidad.
          </p>
          <div className="max-items-4">
            <div className="col">
              <div className="box-borders border-radius-xs bg-light"></div>
              <p className="text-sm">xs</p>
              <span>1px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-sm bg-light"></div>
              <p className="text-sm">sm</p>
              <span>2px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-md bg-light"></div>
              <p className="text-sm">md</p>
              <span>4px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-lg bg-light"></div>
              <p className="text-sm">lg</p>
              <span>6px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-xl bg-light"></div>
              <p className="text-sm">xl</p>
              <span>8px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-2xl bg-light"></div>
              <p className="text-sm">2xl</p>
              <span>12px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-3xl bg-light"></div>
              <p className="text-sm">3xl</p>
              <span>16px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-4xl bg-light"></div>
              <p className="text-sm">4xl</p>
              <span>20px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-5xl bg-light"></div>
              <p className="text-sm">5xl</p>
              <span>24px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-6xl bg-light"></div>
              <p className="text-sm">6xl</p>
              <span>32px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-7xl bg-light"></div>
              <p className="text-sm">7xl</p>
              <span>64px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-8xl bg-light"></div>
              <p className="text-sm">8xl</p>
              <span>128px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-pill bg-light"></div>
              <p className="text-sm">pill</p>
              <span>9999px (pill)</span>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Clases y valores de radio de borde',
    content: (
      <>
        <div className="responsive-scroll border-radius-3xl" tabIndex={0}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="tb-number">
                  Clase
                </th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>{'.border-radius-xs'}</code>
                </td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-sm'}</code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-md'}</code>
                </td>
                <td>4px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-lg'}</code>
                </td>
                <td>6px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-xl'}</code>
                </td>
                <td>8px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-2xl'}</code>
                </td>
                <td>12px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-3xl'}</code>
                </td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-4xl'}</code>
                </td>
                <td>20px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-5xl'}</code>
                </td>
                <td>24px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-6xl'}</code>
                </td>
                <td>32px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-7xl'}</code>
                </td>
                <td>64px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-8xl'}</code>
                </td>
                <td>128px</td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-pill'}</code>
                </td>
                <td>9999px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: 'Valores aplicados a cada componente (Versión 1.12.0 en adelante)',
    content: (
      <>
        <div className="responsive-scroll border-radius-3xl" tabIndex={0}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Componente
                </th>
                <th scope="col" className="tb-text">
                  Detalle
                </th>
                <th scope="col" className="tb-number">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acceso </td>
                <td>-</td>
                <td>3xl</td>
              </tr>
              <tr>
                <td>Alertas </td>
                <td>-</td>
                <td>3xl</td>
              </tr>
              <tr>
                <td>Banner </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Barra de progreso </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Botón </td>
                <td>-</td>
                <td>pill</td>
              </tr>
              {/* <tr>
                <td>Cabecera de página </td>
                <td>-</td>
                <td>12px</td>
              </tr> */}
              <tr>
                <td>Citas </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Colapsable </td>
                <td>-</td>
                <td>3xl</td>
              </tr>
              <tr>
                <td>Desplegable de navegación </td>
                <td>Estado cerrado • estado abierto </td>
                <td>pill • 3xl</td>
              </tr>
              <tr>
                <td>Desplegable de selección </td>
                <td>Estado cerrado • estado abierto </td>
                <td>pill • 3xl</td>
              </tr>
              <tr>
                <td>Enlace </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Etiqueta </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Inputs </td>
                <td>-</td>
                <td>pill</td>
              </tr>
              <tr>
                <td>Input (Textarea) </td>
                <td>-</td>
                <td>3xl</td>
              </tr>
              <tr>
                <td>Listas </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Mapa </td>
                <td>-</td>
                <td>3xl</td>
              </tr>
              <tr>
                <td>Mensajes de estado </td>
                <td>-</td>
                <td>pill</td>
              </tr>
              <tr>
                <td>Migas de pan </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Modal </td>
                <td>-</td>
                <td>3xl • pill</td>
              </tr>
              <tr>
                <td>Navegación y pestañas </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Paginado </td>
                <td>-</td>
                <td>pill</td>
              </tr>
              <tr>
                <td>Spinner </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Switch </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Tarjetas </td>
                <td>-</td>
                <td>6xl</td>
              </tr>
              <tr>
                <td>Tooltip </td>
                <td></td>
                <td>Sin cambios</td>
              </tr>
              {/* organismos */}

              <tr>
                <td>Accesos </td>
                <td>Organismo</td>
                <td>3xl</td>
              </tr>
              <tr>
                <td>Calendario </td>
                <td>Organismo</td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Carrusel </td>
                <td>Controlador de carrusel (botones e indicadores) • Tarjetas verticales</td>
                <td>pill • 6xl</td>
              </tr>
              <tr>
                <td>Pasos de formulario </td>
                <td>Organismo</td>
                <td>Sin cambios</td>
              </tr>
              <tr>
                <td>Pie de página (Footer) </td>
                <td>Desktop • Tablet y mobile</td>
                <td>7xl • 6xl</td>
              </tr>
              <tr>
                <td>Tablas </td>
                <td>Organismo</td>
                <td>3xl</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
];

const BordesDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Bordes"
        description={[
          'Los bordes delimitan los elementos para su organización espacial. En esta sección, se configura el radio de curvatura de las esquinas de diferentes componentes como botones, tarjetas y campos.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default BordesDocs;
