import Image from 'next/image';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const basePath = '/Obelisco-V2';
import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  TABLE_ACCESSIBILTY,
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
                      <span className="badge badge-default">Texto predeterminado</span>
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
                      <span className="badge badge-danger">Texto predeterminado</span>
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
                      <span className="badge badge-info">Texto predeterminado</span>
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
                      <span className="badge badge-warning">Texto predeterminado</span>
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
                    <span className="badge badge-default">Texto predeterminado</span>
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
                    <span className="badge badge-success">Texto predeterminado</span>
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
                    <span className="badge badge-info">Texto predeterminado</span>
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
                    <span className="badge badge-warning">Texto predeterminado</span>
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
                    <span className="badge badge-default">Texto predeterminado</span>
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
                    <span className="badge badge-warning">Texto predeterminado</span>
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
                    <span className="badge badge-info">Texto predeterminado</span>
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
                    <span className="badge badge-danger">Texto predeterminado</span>
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
                    <span className="badge badge-default">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <span className="badge badge-danger">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <span className="badge badge-info">Texto predeterminado</span>
                  </td>
                </tr>
                <tr>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>Texto predeterminado</td>
                  <td>
                    <span className="badge badge-success">Texto predeterminado</span>
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

const SECTION_UX = [
  {
    title: 'Uso',
    firstTitle: true,
    content: (
      <>
        <div className="list-informative">
          <p className="text-xl">Cuándo usar</p>
          <ul className="list-informative-bullet">
            <li>Cuando necesites mostrar contenido estructurado en filas y columnas. </li>
            <li>Cuando las personas usuarias deban comparar valores.</li>
            <li>Cuando exista un gran volumen de información que requiere organización.</li>
            <li>Cuando la persona usuaria necesite escanear y detectar patrones rápidamente.</li>
          </ul>
        </div>
        <div className="list-informative" style={{ marginTop: '32px' }}>
          <p className="text-xl">Cuándo no usar</p>
          <ul className="list-informative-bullet">
            <li>No utilizar la tabla si no se tienen al menos 2 columnas de información. </li>
            <li>
              No utilizar la tabla para estructurar contenido a modo de grilla. Para estructurar información relacionada
              se sugiere utilizar <a href="https://gcba.github.io/Obelisco-V2/components/cards">tarjetas</a> o{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/list-informative">listas</a>.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Tamaños',
  },
  {
    subtitle: 'Desktop',
    content: (
      <>
        <p className="text-md mb-4">Ocupa el ancho total de la grilla de 12 columnas de Obelisco.</p>

        <Image
          src={`${basePath}/images/tabla/tabla_tamanos.svg`}
          alt="Tabla desktop al 100%"
          width="800"
          height="200"
          className="img-fluid"
          style={{ marginBottom: '32px' }}
        />

        <p className="text-md mb-4">Ocupa 8 columnas de la grilla de Obelisco.</p>

        <Image
          src={`${basePath}/images/tabla/tabla_tamanos_2.svg`}
          alt="Tabla desktop al 75%"
          width="800"
          height="200"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: 'Mobile',
    content: (
      <>
        <p className="text-md mb-4" style={{ marginBottom: '32px' }}>
          En <i>mobile</i>, la tabla ocupa el ancho total del dispositivo y cuando excede el tamaño máximo del
          contenedor dentro de la grilla, la tabla de scrollea horizontalmente.
        </p>

        <Image
          src={`${basePath}/images/tabla/tabla_mobile.svg`}
          alt="Tabla tabla_mobile"
          width="800"
          height="200"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    title: 'Disposición',
    content: (
      <>
        <p className="text-md  mb-4">
          Las tablas deben ubicarse siempre en el centro del contenedor principal. En dispositivos desktop y tablet, se
          ajustan al ancho máximo definido por la grilla de la página, y en mobile, la tabla se alinea al centro y puede
          habilitar desplazamiento horizontal dentro del contenedor para evitar pérdida de información.
        </p>
        <Image
          src={`${basePath}/images/tabla/tabla_disposicion.svg`}
          alt="Cómo usar los íconos"
          width="800"
          height="200"
          className="img-fluid"
        />
      </>
    ),
  },
];

const SPECS = [
  {
    title: 'Anatomía',
    firstTitle: true,
    content: (
      <>
        <Image
          src={`${basePath}/images/tabla/tabla_anatomia.svg`}
          alt="Anatomia de la tabla"
          width="800"
          height="280"
          className="img-fluid"
        />

        <div className="responsive-scroll" tabIndex={0} style={{ marginTop: '32px' }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Elemento
                </th>
                <th scope="col" className="tb-text">
                  Carácter
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Titulo de la tabla</td>
                <td>Opcional, brinda un contexto general sobre el contenido de la tabla.</td>
              </tr>
              <tr>
                <td>2. Descripción de la tabla</td>
                <td>Opcional, describe brevemente el contenido de la tabla.</td>
              </tr>
              <tr>
                <td>3. Campo de búsqueda</td>
                <td>Opcional, brinda la posibilidad de realizar una búsqueda en la tabla y filtrar resultados.</td>
              </tr>
              <tr>
                <td>4. Celdas de encabezados</td>
                <td>Obligatorio. Fila que muestra la etiqueta de categoría de cada columna.</td>
              </tr>
              <tr>
                <td>5. Celda de contenido</td>
                <td>Obligatorio. Valor individual correspondiente a una etiqueta de categoría específica.</td>
              </tr>
              <tr>
                <td>6. Fila de tabla</td>
                <td>Obligatorio. Agrupación horizontal de celdas de contenido.</td>
              </tr>
              <tr>
                <td>7. Columna de tabla</td>
                <td>Obligatorio. Agrupación vertical de celdas de contenido bajo una categoría.</td>
              </tr>
              <tr>
                <td>8. Paginado</td>
                <td>Opcional, se utiliza para organizar el contenido de la tabla en varias páginas.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    subtitle: 'Celdas de encabezado',
    content: (
      <>
        <p className="text-md mb-4">
          Las celdas de encabezado se alinean a la izquierda. Los títulos admiten hasta 55 caracteres y los subtítulos
          hasta 65; si se exceden, se truncan. El encabezado clasifica los datos de la columna y puede incluir un
          subtítulo breve como asistencia.
        </p>
        <Image
          src={`${basePath}/images/tabla/tabla_celdas.svg`}
          alt="Celdas de encabezado"
          width="800"
          height="464"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: 'Fila de tabla',
    content: (
      <>
        <p className="text-md mb-4">
          Las tablas pueden incluir celdas de contenido o encabezado. Mantienen un ancho fijo y, si no entran completas,
          muestran una barra de desplazamiento. Pueden usar un patrón de cebra (filas alternadas con fondo primario y
          secundario) para mejorar la legibilidad: la primera fila de contenido siempre debe tener fondo primario para
          diferenciarse del encabezado.
        </p>
        <Image
          src={`${basePath}/images/tabla/tabla_fila.svg`}
          alt="Fila de tabla"
          width="800"
          height="464"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: 'Celda de contenido',
    content: (
      <>
        <p className="text-md mb-4">
          Pueden contener diferentes tipos de información como texto, números, etiquetas, enlaces y botones (CTAs).
        </p>
        <div className="container">
          <div className="max-items-2">
            <div className="col d-flex flex-column align-items-center">
              <Image
                src={`${basePath}/images/tabla/tabla_celda_seleccion.svg`}
                alt="Celda de selección"
                width="800"
                height="464"
                className="img-fluid mb-2"
              />
              <p className="text-md">De selección</p>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <Image
                src={`${basePath}/images/tabla/tabla_celda_texto.svg`}
                alt="Celda de texto"
                width="800"
                height="464"
                className="img-fluid mb-2"
              />
              <p className="text-md">De texto</p>
              <p className="text-sm">(Máximo de 105 caracteres permitidos)</p>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <Image
                src={`${basePath}/images/tabla/tabla_celda_enlace.svg`}
                alt="Celda de enlace"
                width="800"
                height="464"
                className="img-fluid mb-2"
              />
              <p className="text-md">De enlace</p>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <Image
                src={`${basePath}/images/tabla/tabla_celda_numero.svg`}
                alt="Celda de número"
                width="800"
                height="464"
                className="img-fluid mb-2"
              />
              <p className="text-md">De número</p>
              {/*body secondary*/}
              <p className="text-sm">(Se alinean a la derecha, exceptuando fechas y números de teléfono)</p>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <Image
                src={`${basePath}/images/tabla/tabla_celda_etiqueta.svg`}
                alt="Celda de etiqueta"
                width="800"
                height="464"
                className="img-fluid mb-2"
              />
              <p className="text-md">De etiqueta</p>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <Image
                src={`${basePath}/images/tabla/tabla_celda_boton.svg`}
                alt="Celda de botón"
                width="800"
                height="464"
                className="img-fluid mb-2"
              />
              <p className="text-md">De botón</p>
            </div>
          </div>
          <div className="max-items-1">
            <div className="col d-flex flex-column align-items-center">
              <Image
                src={`${basePath}/images/tabla/tabla_icono.svg`}
                alt="Celda de icono"
                width="800"
                height="464"
                className="img-fluid"
              />
              <p className="text-md">De botones de ícono</p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    subtitle: 'Columna de tabla',
    content: (
      <>
        <p className="text-md mb-4">
          Las tablas suelen contar con una cantidad reducida de columnas para disminuir la carga cognitiva y facilitar
          la lectura en dispositivos pequeños. Generalmente incluyen hasta cinco columnas, sin considerar la casilla de
          selección.
        </p>
        <Image
          src={`${basePath}/images/tabla/tabla_columna.svg`}
          alt="Fila de tabla"
          width="800"
          height="464"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    title: 'Espaciados',
    content: (
      <>
        <p className="text-md mb-4">
          El espaciado interno de la tabla organiza el contenido en filas y columnas, lo que asegura la legibilidad y
          facilita la identificación de la información.
        </p>
        <div className="max-items-2">
          <div className="col d-flex flex-column align-items-center">
            <Image
              src={`${basePath}/images/tabla/tabla_espaciados_1.svg`}
              alt="Ejemplo espaciados 1"
              width="800"
              height="464"
              className="img-fluid mb-2"
            />
          </div>
          <div className="col d-flex flex-column align-items-center">
            <Image
              src={`${basePath}/images/tabla/tabla_espaciados_2.svg`}
              alt="Ejemplo espaciados 2"
              width="800"
              height="464"
              className="img-fluid mb-2"
            />
          </div>
        </div>
        <div className="max-items-1" style={{ marginTop: '32px' }}>
          <div className="col d-flex flex-column align-items-center">
            <Image
              src={`${basePath}/images/tabla/tabla_espaciados_3.svg`}
              alt="Ejemplo espaciados 3"
              width="800"
              height="300"
              className="img-fluid mb-2"
            />
          </div>
        </div>

        <p className="text-md mb-4" style={{ marginTop: '32px' }}>
          Las tablas se integran con otros componentes como filtros,{' '}
          <a href="https://gcba.github.io/Obelisco-V2/components/form-search">campo de búsqueda</a>,{' '}
          <a href="https://gcba.github.io/Obelisco-V2/components/button">botones</a>,{' '}
          <a href="https://gcba.github.io/Obelisco-V2/components/dropdown-sel">desplegables</a> y{' '}
          <a href="https://gcba.github.io/Obelisco-V2/components/pagination">paginado</a>, manteniendo los espaciados
          correspondientes.
        </p>

        <div className="max-items-1 mt-4">
          <div className="col d-flex flex-column align-items-center">
            <Image
              src={`${basePath}/images/tabla/tabla_espaciados_4.svg`}
              alt="Ejemplo espaciados 4"
              width="800"
              height="300"
              className="img-fluid mb-2"
            />
          </div>
        </div>
      </>
    ),
  },
];

const ACCESSIBILITY = [
  {
    title: 'Navegación alternativa',
    firstTitle: true,
    content: (
      <>
        <p className="text-md" style={{ marginBottom: '32px' }}>
          El componente de tabla está construido para ser reconocido por herramientas de asistencia como la navegación
          por teclado o lectores por voz.
        </p>
        <span className="badge badge-default ms-1">TAB</span>
        <span className="badge badge-default">ENTER</span>
        <p className="text-md mb-4">
          Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con el{' '}
          <i>enter</i>, puede accionar los elementos sobre el item en el que la persona está posicionada.
        </p>

        <Image
          src={`${basePath}/images/tabla/tablas_navegacion.svg`}
          alt="Navegacion alternativa de la tabla"
          width="738"
          height="400"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    title: 'Etiquetado descriptivo',
    content: (
      <>
        <p className="text-md">
          El componente Tabla debe construirse utilizando las etiquetas semánticas de HTML: <code>{'<table>'}</code>,
          envuelve toda la estructura de la tabla; <code>{'<th>'}</code>, define las celdas de encabezado y{' '}
          <code>{'<td>'}</code> que especifica las celdas de datos.
        </p>
        <p className="text-md">
          Los encabezados deben incluir el atributo scope (por ejemplo scope=&quot;col&quot;) para indicar la relación
          entre el título y las celdas de datos correspondientes.
        </p>
        <p className="text-md">
          Cuando una celda contenga elementos interactivos (casillas de selección, botones, enlaces, etc.), estos deben
          implementarse con etiquetas semánticas nativas: <code>{'<a>'}</code> para enlaces, <code>{'<button>'}</code>{' '}
          para acciones e <code>{'<input type="checkbox">'}</code> para casillas de selección.
        </p>
        <p className="text-md">
          Además, los elementos deben contar con etiquetas claras. En caso de ser necesario, se recomienda complementar
          con aria-label para proporcionar contexto adicional, indicando a qué fila o elemento corresponde la acción.
        </p>

        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {TABLE_ACCESSIBILTY}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    title: 'Criterios WCAG aplicados',
    content: (
      <>
        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          1.3.1 Info and Relationships (Level A)
        </a>
        <p>
          La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
          mediante programación o están disponibles en el texto.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          1.3.2 Meaningful Sequence (Level A)
        </a>
        <p>
          Cuando la secuencia en que se presenta el contenido afecta su significado, se puede determinar mediante
          programación una secuencia de lectura correcta.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          1.4.1 Use of Color (Level A)
        </a>
        <p>
          El color no se utiliza como el único medio visual para transmitir información, indicar una acción, provocar
          una respuesta o distinguir un elemento visual.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          1.4.11 Non-text Contrast (Level AA)
        </a>
        <p>
          La presentación visual de los siguientes elementos tiene una relación de contraste de al menos 3:1 con
          respecto a los colores adyacentes: componentes de la interfaz de usuario; objetos gráficos.
        </p>
        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          1.4.12 Text Spacing (Level AA)
        </a>
        <p>
          No se produce pérdida de contenido ni funcionalidad al configurar todo lo siguiente y no cambiar ninguna otra
          propiedad de estilo: altura de línea establecida en 1,5; espaciado después de párrafos establecido al menos en
          2 veces el tamaño de fuente; espaciado entre letras establecido al menos en 0,12 veces el tamaño de fuente;
          espaciado entre palabras establecido al menos en 0,16 veces el tamaño de fuente.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          1.4.3 Minimum Contrast (Level AA)
        </a>
        <p>
          La presentación visual del texto y las imágenes del texto tiene una relación de contraste de al menos 4,5:1.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          2.1.1 Keyboard (Level A)
        </a>
        <p>Toda la funcionalidad del contenido se puede operar a través de una interfaz de teclado.</p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          2.1.2 No Keyboard Trap (Level A)
        </a>
        <p>
          Si el foco del teclado se puede mover a un componente de la página usando una interfaz de teclado, entonces el
          foco se puede mover lejos de ese componente usando solo una interfaz de teclado.
        </p>
        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          2.2.1 Timing Adjustable (Level A)
        </a>
        <p>
          Si hay limitaciones de tiempo establecidas por el contenido, se debe cumplir una de las siguientes
          condiciones: desactivar, ajustar, extender, excepción en tiempo real, excepción esencial, excepción de 20
          horas.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          2.5.3 Label in Name (Level A)
        </a>
        <p>
          Para los componentes de la interfaz de usuario con etiquetas que incluyen texto o imágenes de texto, el nombre
          contiene el texto que se presenta visualmente.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          4.1.3 Status Messages (Level AA)
        </a>
        <p>
          En el contenido implementado mediante lenguajes de marcado, los mensajes de estado se pueden determinar
          mediante programación a través de roles o propiedades, de modo que puedan presentarse al usuario mediante
          tecnologías de asistencia sin recibir el foco.
        </p>
      </>
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
        ]}
      />
      <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTIONS_DEV}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
            sectionContent: SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
      />{' '}
    </>
  );
};

export default TableDocs;
