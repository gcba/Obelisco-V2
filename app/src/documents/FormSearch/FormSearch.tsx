import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { SEARCH, SEARCH_BUTTON, SEARCH_DISABLED } from './code-views';

const FormSearchDocs: React.FC = () => {
  const sections = [
    {
      title: 'Buscador',
      h1: true,
      content: (
        <MainDescription description="Los campos de búsqueda llevan siempre un placeholder que anticipe y ayude al usuario a saber qué información podrá encontrar en el buscador." />
      ),
    },
    {
      id: 'section-1',
      title: 'Buscador',
      content: (
        <CodeBox codeHTML={SEARCH}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <form>
                <label htmlFor="search" className="form-label">
                  Ejemplo Buscador
                </label>
                <div className="search-container">
                  <input type="search" className="form-control input-search" id="search" placeholder="Buscador" />
                  <button className="reset" type="reset" aria-label="Borrar"></button>
                </div>
              </form>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Buscador con botón',
      content: (
        <CodeBox codeHTML={SEARCH_BUTTON}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <form>
                <label htmlFor="search-btn" className="form-label">
                  Ejemplo Buscador con botón
                </label>
                <div className="search-container">
                  <input
                    type="search"
                    className="form-control input-search input-search-with-button"
                    id="search-btn"
                    placeholder="Buscador"
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
      id: 'section-3',
      title: 'Deshabilitado',
      content: (
        <CodeBox codeHTML={SEARCH_DISABLED}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <form>
                <label htmlFor="search-btn" className="form-label">
                  Ejemplo buscador deshabilitado
                </label>
                <div className="search-container">
                  <input
                    type="search"
                    className="form-control input-search input-search-with-button"
                    id="search-btn"
                    placeholder="Buscador"
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
      <DocumentationTemplate sections={sections} />
    </>
  );
};

export default FormSearchDocs;
