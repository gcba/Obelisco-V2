import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  TABLE_BUTTON,
  TABLE_BUTTON_ICON,
  TABLE_LINK,
  TABLE_NUMBER,
  TABLE_TAG,
  TABLE_TEXT,
  WITH_CHECKBOX,
  WITH_DIVIDERS,
  WITH_ZEBRA,
  WITHOUT_DIVIDERS,
} from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Sin separadores',
    firstTitle: true,
    content: (
      <>
        <CodeBox codeHTML={WITHOUT_DIVIDERS}>
          <div className="max-600 p-2">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col" className="tb-number">
                      Número
                    </th>
                    <th scope="col" className="tb-text">
                      <span className="th-title">Título de la celda</span>
                      <span className="th-subtitle">
                        Subtítulo de hasta 2 líneas donde se puede sumar contenido de soporte
                      </span>
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
                      <LinkClient>Enlace predeterminado</LinkClient>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-tertiary">
                        Botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <input
                          className="form-checkbox-input"
                          type="checkbox"
                          name="professionCheckbox"
                          id="profession-checkbox-designer"
                          value="diseñador"
                        />
                        <label className="form-checkbox-label" htmlFor="profession-checkbox-designer">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-s-default badge-sm">Texto predeterminado</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">2</td>
                    <td>María</td>
                    <td>
                      <LinkClient>Enlace predeterminado</LinkClient>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-tertiary">
                        Botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <input
                          className="form-checkbox-input"
                          type="checkbox"
                          name="professionCheckbox"
                          id="profession-checkbox-developer"
                          value="desarrollador"
                        />
                        <label className="form-checkbox-label" htmlFor="profession-checkbox-developer">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-s-info badge-sm">Texto predeterminado</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">3</td>
                    <td>Esther</td>
                    <td>
                      <LinkClient>Enlace predeterminado</LinkClient>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-tertiary">
                        Botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <input
                          className="form-checkbox-input"
                          type="checkbox"
                          name="professionCheckbox"
                          id="profession-checkbox-content-1"
                          value="redactor"
                        />
                        <label className="form-checkbox-label" htmlFor="profession-checkbox-content-1">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-s-success badge-sm">Texto predeterminado</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">4</td>
                    <td>José</td>
                    <td>
                      <LinkClient>Enlace predeterminado</LinkClient>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-tertiary">
                        Botón
                      </button>
                    </td>
                    <td>
                      <div className="form-checkbox">
                        <input
                          className="form-checkbox-input"
                          type="checkbox"
                          name="professionCheckbox"
                          id="profession-checkbox-content-2"
                          value="redactor"
                        />
                        <label className="form-checkbox-label" htmlFor="profession-checkbox-content-2">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-s-warning badge-sm">Texto predeterminado</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    title: 'Con separadores',
    content: (
      <CodeBox codeHTML={WITH_DIVIDERS}>
        <div className="max-600 p-2">
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
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>
                    <div className="form-checkbox">
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="professionCheckbox"
                        id="profession-checkbox-content-5"
                        value="redactor"
                      />
                      <label className="form-checkbox-label" htmlFor="profession-checkbox-content-5">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-s-default badge-sm-default badge-sm">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">2</td>
                  <td>María</td>
                  <td>
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>
                    <div className="form-checkbox">
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="professionCheckbox"
                        id="profession-checkbox-content-6"
                        value="redactor"
                      />
                      <label className="form-checkbox-label" htmlFor="profession-checkbox-content-6">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-s-info badge-sm">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">3</td>
                  <td>Esther</td>
                  <td>
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>
                    <div className="form-checkbox">
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="professionCheckbox"
                        id="profession-checkbox-content-7"
                        value="redactor"
                      />
                      <label className="form-checkbox-label" htmlFor="profession-checkbox-content-7">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-s-success badge-sm">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">4</td>
                  <td>José</td>
                  <td>
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>
                    <div className="form-checkbox">
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="professionCheckbox"
                        id="profession-checkbox-content-8"
                        value="redactor"
                      />
                      <label className="form-checkbox-label" htmlFor="profession-checkbox-content-8">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-s-warning badge-sm">Texto predeterminado</span>
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
    title: 'Con patrón cebra',
    content: (
      <CodeBox codeHTML={WITH_ZEBRA}>
        <div className="max-600 p-2">
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
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>
                    <div className="form-checkbox">
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="professionCheckbox"
                        id="profession-checkbox-content-18"
                        value="redactor"
                      />
                      <label className="form-checkbox-label" htmlFor="profession-checkbox-content-18">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-s-default badge-sm">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">2</td>
                  <td>María</td>
                  <td>
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>
                    <div className="form-checkbox">
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="professionCheckbox"
                        id="profession-checkbox-content-19"
                        value="redactor"
                      />
                      <label className="form-checkbox-label" htmlFor="profession-checkbox-content-19">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-s-info badge-sm">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">3</td>
                  <td>Esther</td>
                  <td>
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>
                    <div className="form-checkbox">
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="professionCheckbox"
                        id="profession-checkbox-content-20"
                        value="redactor"
                      />
                      <label className="form-checkbox-label" htmlFor="profession-checkbox-content-20">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-s-success badge-sm">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">4</td>
                  <td>José</td>
                  <td>
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>
                    <div className="form-checkbox">
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="professionCheckbox"
                        id="profession-checkbox-content-21"
                        value="redactor"
                      />
                      <label className="form-checkbox-label" htmlFor="profession-checkbox-content-21">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-s-danger badge-sm">Texto predeterminado</span>
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
    title: 'Con checkbox',
    content: (
      <CodeBox codeHTML={WITH_CHECKBOX}>
        <div className="max-600 p-2">
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
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="checkboxNoText"
                        id="checkbox-no-text"
                        value="Sin texto"
                      />
                      <label
                        className="form-checkbox-label"
                        htmlFor="checkbox-no-text"
                        aria-label="Casilla múltiple sin texto"
                      ></label>
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
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="checkboxNoText-1"
                        id="checkbox-no-text-1"
                        value="Sin texto"
                      />
                      <label
                        className="form-checkbox-label"
                        htmlFor="checkbox-no-text-1"
                        aria-label="Casilla múltiple sin texto"
                      ></label>
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
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="checkboxNoText-2"
                        id="checkbox-no-text-2"
                        value="Sin texto"
                      />
                      <label
                        className="form-checkbox-label"
                        htmlFor="checkbox-no-text-2"
                        aria-label="Casilla múltiple sin texto"
                      ></label>
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
                      <input
                        className="form-checkbox-input"
                        type="checkbox"
                        name="checkboxNoText-3"
                        id="checkbox-no-text-3"
                        value="Sin texto"
                      />
                      <label
                        className="form-checkbox-label"
                        htmlFor="checkbox-no-text-3"
                        aria-label="Casilla múltiple sin texto"
                      ></label>
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
    title: 'Tipos de celda',
  },
  {
    subtitle: 'De texto',
    content: (
      <CodeBox codeHTML={TABLE_TEXT}>
        <div className="max-600 p-2">
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
    subtitle: 'De número',
    content: (
      <CodeBox codeHTML={TABLE_NUMBER}>
        <div className="max-600 p-2">
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
    subtitle: 'De enlace',
    content: (
      <CodeBox codeHTML={TABLE_LINK}>
        <div className="max-600 p-2">
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
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <LinkClient>Enlace predeterminado</LinkClient>
                  </td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <LinkClient>Enlace predeterminado</LinkClient>
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
    subtitle: 'De etiqueta',
    content: (
      <CodeBox codeHTML={TABLE_TAG}>
        <div className="max-600 p-2">
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
                    <span className="badge badge-s-default badge-sm-default badge-sm">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <span className="badge badge-s-default badge-sm">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <span className="badge badge-s-default badge-sm">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <span className="badge badge-s-default badge-sm">Texto predeterminado</span>
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
    subtitle: 'De botón',
    content: (
      <CodeBox codeHTML={TABLE_BUTTON}>
        <div className="max-600 p-2">
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
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
                    </button>
                  </td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <button type="button" className="btn btn-outline-tertiary">
                      Botón
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
    subtitle: 'De botón con ícono',
    content: (
      <CodeBox codeHTML={TABLE_BUTTON_ICON}>
        <div className="max-600 p-2">
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

const TableDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Tablas"
        description={[
          'La tabla muestra datos organizados y estructurados en filas y columnas. Se utiliza para categorizar y comparar contenido relacionado. Este componente permite escanear más fácilmente información compleja.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a href="https://gcba.github.io/estandares/componentes/tabla/" target="_blank" rel="noopener noreferrer">
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default TableDocs;
