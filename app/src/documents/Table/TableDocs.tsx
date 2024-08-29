import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { TABLE } from './code-views';

const TableDocs: React.FC = () => {
  const sections = [
    {
      title: 'Tablas',
      content: (
        <MainDescription description="La tabla muestra datos organizados y estructurados en filas y columnas. Se utiliza para categorizar y comparar contenido relacionado. Este componente permite escanear más fácilmente información compleja." />
      ),
    },
    {
      id: 'section-1',
      title: 'Sin separadores',
      content: (
        <CodeBox codeHTML={TABLE}>
          <div className="max-600">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col" className="tb-number">
                      Número
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-link">
                      Enlace
                    </th>
                    <th scope="col" className="tb-button">
                      Botón
                    </th>
                    <th scope="col" className="tb-check">
                      Checkbox
                    </th>
                    <th scope="col" className="tb-tag">
                      Etiqueta
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-right">1</td>
                    <td>Juan</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-one">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionOne"
                            id="option-one"
                            value="option one"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">2</td>
                    <td>María</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-two">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionTwo"
                            id="option-two"
                            value="option two"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">3</td>
                    <td>Esther</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-three">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionThree"
                            id="option-three"
                            value="option three"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">4</td>
                    <td>José</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-four">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionFour"
                            id="option-four"
                            value="option four"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Con separadores',
      content: (
        <CodeBox codeHTML={TABLE}>
          <div className="max-600">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-number">
                      Número
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-link">
                      Enlace
                    </th>
                    <th scope="col" className="tb-button">
                      Botón
                    </th>
                    <th scope="col" className="tb-check">
                      Checkbox
                    </th>
                    <th scope="col" className="tb-tag">
                      Etiqueta
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-right">1</td>
                    <td>Juan</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-five">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionFive"
                            id="option-five"
                            value="option five"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">2</td>
                    <td>María</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-six">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionSix"
                            id="option-six"
                            value="option six"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">3</td>
                    <td>Esther</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-seven">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionSeven"
                            id="option-seven"
                            value="option seven"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">4</td>
                    <td>José</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-eight">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionEight"
                            id="option-eight"
                            value="option eight"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-3',
      title: 'Con patrón cebra',
      content: (
        <CodeBox codeHTML={TABLE}>
          <div className="max-600">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" className="tb-number">
                      Número
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-link">
                      Enlace
                    </th>
                    <th scope="col" className="tb-button">
                      Botón
                    </th>
                    <th scope="col" className="tb-check">
                      Checkbox
                    </th>
                    <th scope="col" className="tb-tag">
                      Etiqueta
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-right">1</td>
                    <td>Juan</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-nine">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionNine"
                            id="option-nine"
                            value="option nine"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">2</td>
                    <td>María</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-ten">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionTen"
                            id="option-ten"
                            value="option ten"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">3</td>
                    <td>Esther</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-eleven">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionEleven"
                            id="option-eleven"
                            value="option eleven"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">4</td>
                    <td>José</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-twelve">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionTwelve"
                            id="option-twelve"
                            value="option twelve"
                          />
                          <span className="form-checkbox-text">checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-4',
      title: 'Con checkbox',
      content: (
        <CodeBox codeHTML={TABLE}>
          <div className="max-600">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-check">
                      Checkbox
                    </th>
                    <th scope="col" className="tb-number">
                      Número
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-thirteen">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionThirteen"
                            id="option-thirteen"
                            value="option thirteen"
                          />
                          {/* <span className="form-checkbox-text">Checkbox</span> */}
                        </label>
                      </div>
                    </td>
                    <td className="text-right">$100,00</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-fourteen">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionFourteen"
                            id="option-fourteen"
                            value="option fourteen"
                          />
                          {/* <span className="form-checkbox-text">Checkbox</span> */}
                        </label>
                      </div>
                    </td>
                    <td className="text-right">$100,00</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-fifteen">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionFifteen"
                            id="option-fifteen"
                            value="option fifteen"
                          />
                          {/* <span className="form-checkbox-text">Checkbox</span> */}
                        </label>
                      </div>
                    </td>
                    <td className="text-right">$100,00</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-checkbox">
                        <label className="form-checkbox-label" htmlFor="option-sixteen">
                          <input
                            className="form-checkbox-input"
                            type="checkbox"
                            name="optionSixteen"
                            id="option-sixteen"
                            value="option sixteen"
                          />
                          {/* <span className="form-checkbox-text">Checkbox</span> */}
                        </label>
                      </div>
                    </td>
                    <td className="text-right">$100,00</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-5',
      title: 'Tipos de celda',
      content: <CodeBox codeHTML={TABLE}></CodeBox>,
    },
    {
      id: 'section-6',
      title: 'De texto',
      content: (
        <CodeBox codeHTML={TABLE}>
          <div className="max-600">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-7',
      title: 'De número',
      content: (
        <CodeBox codeHTML={TABLE}>
          <div className="max-600">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-number">
                      Número
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Este un texto de prueba para registrar el alto máximo de la celda y la cantidad de caracteres
                      permitidos.
                    </td>
                    <td className="text-right">$100,00</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td className="text-right">$100,00</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td className="text-right">$100,00</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td className="text-right">$100,00</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-8',
      title: 'De enlace',
      content: (
        <CodeBox codeHTML={TABLE}>
          <div className="max-600">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-link">
                      Enlace
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Este un texto de prueba para registrar el alto máximo de la celda y la cantidad de caracteres
                      permitidos.
                    </td>
                    <td>Texto predeterminado</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <a href="#" target="_blank" rel="noreferrer">
                        Enlace predeterminado
                      </a>
                    </td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-9',
      title: 'De etiqueta',
      content: (
        <CodeBox codeHTML={TABLE}>
          <div className="max-600">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-tag">
                      Etiqueta
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Este un texto de prueba para registrar el alto máximo de la celda y la cantidad de caracteres
                      permitidos.
                    </td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <span className="badge badge-default">Predeterminada</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-10',
      title: 'De botón',
      content: (
        <CodeBox codeHTML={TABLE}>
          <div className="max-600">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-button">
                      Botón
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Este un texto de prueba para registrar el alto máximo de la celda y la cantidad de caracteres
                      permitidos.
                    </td>
                    <td>Texto predeterminado</td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <button type="button" className="btn btn-primary btn-icon">
                        <i className="bx bxs-info-circle"></i>
                        botón
                      </button>
                    </td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-11',
      title: 'De botón de ícono',
      content: (
        <CodeBox codeHTML={TABLE}>
          <div className="max-600">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-text">
                      Texto
                    </th>
                    <th scope="col" className="tb-button">
                      Botón de ícono
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Este un texto de prueba para registrar el alto máximo de la celda y la cantidad de caracteres
                      permitidos.
                    </td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <div className="actions-table">
                        <button type="button" className="btn btn-xs">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            edit
                          </span>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <i className="bx bxs-trash-alt o-icon"></i>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            visibility
                          </span>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <i className="bx bxs-download o-icon"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <div className="actions-table">
                        <button type="button" className="btn btn-xs">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            edit
                          </span>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <i className="bx bxs-trash-alt o-icon"></i>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            visibility
                          </span>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <i className="bx bxs-download o-icon"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <div className="actions-table">
                        <button type="button" className="btn btn-xs">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            edit
                          </span>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <i className="bx bxs-trash-alt o-icon"></i>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            visibility
                          </span>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <i className="bx bxs-download o-icon"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>Texto predeterminado</td>
                    <td>
                      <div className="actions-table">
                        <button type="button" className="btn btn-xs">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            edit
                          </span>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <i className="bx bxs-trash-alt o-icon"></i>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            visibility
                          </span>
                        </button>
                        <button type="button" className="btn btn-xs">
                          <i className="bx bxs-download o-icon"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default TableDocs;
