import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { SEARCH, SEARCH_BUTTON, SEARCH_DISABLED } from './code-views';

const FormSearchDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Buscador',
      content: (
        <CodeBox codeHTML={SEARCH}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <form>
                <div className="form-label-container">
                  <label htmlFor="search" className="form-label">
                    Ejemplo Buscador
                  </label>
                </div>
                <div className="search-container">
                  <input type="search" className="form-control input-search" id="search" placeholder="Buscar..." />
                  <button className="reset" type="reset" aria-label="Borrar"></button>
                </div>
              </form>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Buscador con botón',
      content: (
        <CodeBox codeHTML={SEARCH_BUTTON}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <form>
                <div className="form-label-container">
                  <label htmlFor="search-btn" className="form-label">
                    Ejemplo Buscador con botón
                  </label>
                </div>
                <div className="search-container">
                  <input
                    type="search"
                    className="form-control input-search input-search-with-button"
                    id="search-btn"
                    placeholder="Buscar..."
                  />
                  <button className="reset" type="reset" aria-label="Borrar"></button>
                  <button className="button-search" type="submit" aria-label="Buscar"></button>
                </div>
              </form>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Deshabilitado',
      content: (
        <CodeBox codeHTML={SEARCH_DISABLED}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <form>
                <div className="form-label-container">
                  <label htmlFor="search-btn" className="form-label disabled">
                    Ejemplo buscador deshabilitado
                  </label>
                </div>
                <div className="search-container">
                  <input
                    type="search"
                    className="form-control input-search input-search-with-button"
                    id="search-btn"
                    placeholder="Buscar..."
                    disabled
                  />
                  <button className="reset" type="reset" aria-label="Borrar"></button>
                </div>
              </form>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Buscador"
        description={[
          'Los campos de búsqueda llevan siempre un placeholder que anticipe y ayude al usuario a saber qué información podrá encontrar en el buscador.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default FormSearchDocs;
