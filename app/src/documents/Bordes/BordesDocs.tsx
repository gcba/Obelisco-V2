import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const SECTIONS_DEV = [
  {
    title: 'Radios de borde',
    firstTitle: true,
    content: (
      <>
        <div className="container bordes">
          <div className="max-items-4">
            <div className="col">
              <div className="box-borders border-radius-xs bg-light"></div>
              <p className="text-sm">xs</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-sm bg-light"></div>
              <p className="text-sm">sm</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-md bg-light"></div>
              <p className="text-sm">md</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-lg bg-light"></div>
              <p className="text-sm">lg</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-xl bg-light"></div>
              <p className="text-sm">xl</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-2xl bg-light"></div>
              <p className="text-sm">2xl</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-3xl bg-light"></div>
              <p className="text-sm">3xl</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-4xl bg-light"></div>
              <p className="text-sm">4xl</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-5xl bg-light"></div>
              <p className="text-sm">5xl</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-6xl bg-light"></div>
              <p className="text-sm">6xl</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-7xl bg-light"></div>
              <p className="text-sm">7xl</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-8xl bg-light"></div>
              <p className="text-sm">8xl</p>
              <span>18px</span>
            </div>
            <div className="col">
              <div className="box-borders border-radius-pill bg-light"></div>
              <p className="text-sm">pill</p>
              <span>18px</span>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Clases de radio de borde',
    content: (
      <>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="tb-number">
                  Clases de radio de borde
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>{'.border-radius-xs'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-sm'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-md'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-lg'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-xl'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-2xl'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-3xl'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-4xl'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-5xl'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-6xl'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-7xl'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-8xl'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'.border-radius-pill'}</code>
                </td>
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
          'Los iconos son elementos gráficos que representan conceptos, acciones o marcas visuales y ayudan a las personas usuarias a navegar y entender la interfaz de forma rápida y clara. En los productos digitales del GCBA utilizamos principalmente Material Icons, con variantes permitidas en casos específicos.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default BordesDocs;
