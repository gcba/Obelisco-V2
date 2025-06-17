import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
const basePath = '/Obelisco-V2';

import {
  INPUT_BACKGROUND,
  INPUT_BLOCK,
  INPUT_DATE,
  INPUT_DISABLED,
  INPUT_MAIL,
  INPUT_NUMBER,
  INPUT_SELECT,
  INPUT_TEXT,
  INPUT_TEXT_ACCESSIBILITY,
} from './code-views';

import Link from 'next/link';

const FormTextDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Texto',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={INPUT_TEXT}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="input_text" className="form-label">
                    Campo de texto
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="input_text"
                  name="campoTexto"
                  aria-describedby="Texto"
                  placeholder="Ingrese textos"
                />
                <p className="form-label-description">Texto de asistencia</p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Número',
      content: (
        <>
          <CodeBox codeHTML={INPUT_NUMBER}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="input_number" className="form-label">
                    Campo numérico
                  </label>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="input_number"
                  name="campoNumero"
                  aria-describedby="Number"
                  placeholder="Ingrese números"
                />
                <p className="form-label-description">Campo de asistencia</p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Correo electrónico',
      content: (
        <>
          <CodeBox codeHTML={INPUT_MAIL}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="input-email" className="form-label">
                    Campo de email
                  </label>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="input-email"
                  name="campoEmail"
                  aria-describedby="Email"
                  placeholder="email@test.com"
                />
                <p className="form-label-description">Campo de asistencia</p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Fecha',
      content: (
        <>
          <CodeBox codeHTML={INPUT_DATE}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="input-date" className="form-label">
                    Nombre del campo
                  </label>
                </div>
                <input
                  type="date"
                  className="form-control"
                  id="input-date"
                  name="campoFecha"
                  aria-describedby="Date"
                  placeholder="Selecciona la fecha"
                />
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Bloque de texto',
      content: (
        <>
          <CodeBox codeHTML={INPUT_BLOCK}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="input-textarea" className="form-label">
                    Nombre del campo
                  </label>
                </div>
                <textarea
                  className="form-control"
                  id="input-textarea"
                  name="campoBloqueTexto"
                  placeholder="Texto de ejemplo"
                ></textarea>
                <p className="form-label-description">Campo de asistencia</p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'De selección',
      content: (
        <>
          <CodeBox codeHTML={INPUT_SELECT}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="input-select" className="form-label">
                    Nombre del selector
                  </label>
                </div>
                <select className="form-control form-select" aria-label="Ejemplo de selección por defecto">
                  <option value="0">Seleccionar</option>
                  <option value="1">Opción</option>
                  <option value="2">Opción</option>
                  <option value="3">Opción</option>
                </select>
                <p className="form-label-description">Campo de asistencia</p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Deshabilitado',
      content: (
        <>
          <CodeBox codeHTML={INPUT_DISABLED}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="example-five-disabled" className="form-label disabled">
                    Ejemplo campo de texto
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="example-five-disabled"
                  aria-describedby="Texto"
                  placeholder="Textos"
                  disabled
                />
              </div>

              <br />

              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="example-four-disabled" className="form-label disabled">
                    Ejemplo campo de numero
                  </label>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="example-four-disabled"
                  aria-describedby="campo de número"
                  placeholder="Números"
                  disabled
                />
              </div>

              <br />

              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="example-three-disabled" className="form-label disabled">
                    Ejemplo campo de email
                  </label>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="example-three-disabled"
                  aria-describedby="Email"
                  placeholder="Email@test.com"
                  disabled
                />
              </div>

              <br />

              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="example-two-disabled" className="form-label disabled">
                    Ejemplo campo de fecha
                  </label>
                </div>
                <input
                  type="date"
                  className="form-control"
                  id="example-two-disabled"
                  aria-describedby="Date"
                  placeholder="selecciona tu fecha"
                  disabled
                />
              </div>

              <br />

              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="example-one-disabled" className="form-label disabled">
                    Ejemplo TextArea
                  </label>
                </div>
                <textarea className="form-control" id="example-one-disabled" maxLength={50} disabled></textarea>
              </div>

              <br />

              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="select-example" className="form-label disabled">
                    Ejemplo campo de selección deshabilitado.
                  </label>
                </div>
                <select
                  id="select-example"
                  className="form-control form-select"
                  aria-label="Ejemplo de input de selección por defecto"
                  disabled
                  defaultValue="1"
                >
                  <option value="0">Campo de selección</option>
                  <option value="1">Opción</option>
                  <option value="2">Opción</option>
                  <option value="3">Opción</option>
                </select>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con fondo',
      content: (
        <>
          <p className="headline-md">Con fondo light</p>
          <CodeBox codeHTML={INPUT_BACKGROUND}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="p-4 form-bg-light">
                  <div className="form-label-container">
                    <label htmlFor="input-text-bg" className="form-label">
                      Campo de texto con fondo
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="input-text-bg"
                    name="campoTextoBg"
                    aria-describedby="Texto"
                    placeholder="Textos"
                  />
                </div>
              </div>
            </div>
          </CodeBox>
        </>
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
              <li>
                Para datos concisos que no requieran más de una línea, como el nombre de una persona, el correo
                electrónico o número de teléfono utilizá el{' '}
                <Link href={'/components/form-text/#campo_de_texto'}>campo de texto</Link>.
              </li>
              <li>
                Cuando se espera una respuesta larga, como una consulta, comentario o descripción, utilizá el campo de{' '}
                <Link href={'/components/form-text/#area_de_texto'}> área de texto</Link>.
              </li>
              <li>
                Puede utilizarse para mostrar datos precargados que puedan requerir edición por parte de la persona
                usuaria.
              </li>
            </ul>
          </div>
          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Cuando haya opciones conocidas y definidas de antemano, por ejemplo: provincias, países, tipo de
                documento, utilizá el componente <code>selector</code>.
              </li>
              <li>
                Cuando la persona usuaria necesite seleccionar más de una opción, utilizá el componente{' '}
                <Link href={'/components/form-check'}>casilla de verificación</Link>.
              </li>
              <li>
                Cuando la persona usuaria necesite seleccionar una única opción visible, utilizá el componente{' '}
                <Link href={'/components/form-radio'}>botón de radio</Link>.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Campo de texto',
      content: (
        <>
          <p className="text-md mt-2 mb-4" id="campo_de_texto">
            Se utiliza para ingresar datos breves, de una sola línea, como nombres, dirección de correo electrónico o
            números de teléfonos.
          </p>
          <Image
            src={`${basePath}/images/form_text/campo_de_texto.svg`}
            alt="Ejemplo visual de campo de texto"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Tipos de campos de texto',
      content: (
        <>
          <p className="text-md mb-4 mt-3">
            El componente campo de texto admite diferentes formatos para adaptarse a distintas necesidades del
            formulario. Su apariencia, validación y comportamiento pueden variar según el valor <i>type</i> configurado.
          </p>

          <p className="text-md" style={{ marginBottom: '32px' }}>
            Podés acceder a la{' '}
            <a href="https://gcba.github.io/Obelisco-V2/patterns"> ficha de patrones de formulario</a> para consultar el
            diseño sugerido para cada tipo de campo.
          </p>

          <div className="responsive-scroll mt-4" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Tipo
                  </th>
                  <th scope="col" className="tb-text">
                    Comportamiento
                  </th>
                  <th scope="col" className="tb-text">
                    Consideraciones
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Texto</td>
                  <td>Campo por defecto. Permite cualquier texto corto en una sola línea.</td>
                  <td>
                    Usar cuando no hay validaciones específicas. Es necesario definir el propósito con un <i>label</i>.
                  </td>
                </tr>
                <tr>
                  <td>Contraseña</td>
                  <td>Oculta el valor ingresado y permite mostrar/ocultar contenido con un ícono.</td>
                  <td>
                    Requiere accesibilidad del botón de &quot;ver contraseña&quot; <i>(aria-label)</i>.
                  </td>
                </tr>
                <tr>
                  <td>Correo</td>
                  <td>
                    Valida el formato de dirección de correo. En dispositivos <i>mobile</i> muestra teclado con el
                    símbolo &quot;@&quot;.
                  </td>
                  <td>
                    Evitar el uso de autocorrector. Informar a la persona usuaria si el formato ingresado no es válido.
                  </td>
                </tr>
                <tr>
                  <td>Número</td>
                  <td>
                    Acepta sólo números. Muestra teclado numérico en <i>mobile</i>.
                  </td>
                  <td>
                    No siempre es ideal para datos como DNI o códigos postales ya que puede impedir caracteres no
                    numéricos, como espacios.
                  </td>
                </tr>
                <tr>
                  <td>Teléfono</td>
                  <td>
                    Permite ingresar números de teléfono. Muestra el teclado numérico en <i>mobile</i>.
                  </td>
                  <td>
                    A diferencia del tipo Número, acepta caracteres como +, -, y espacios. Considerar un{' '}
                    <i>placeholder</i> para indicar el formato esperado.
                  </td>
                </tr>
                <tr>
                  <td>Fecha</td>
                  <td>Muestra un selector de fecha nativo (calendario).</td>
                  <td>
                    El diseño del selector nativo puede variar entre navegadores. Considerar un <i>placeholder</i> para
                    indicar el formato esperado.
                  </td>
                </tr>
                <tr>
                  <td>Hora</td>
                  <td>Muestra selector nativo de hora.</td>
                  <td>
                    Funciona bien cuando el dato es específico, por ejemplo en turnos. Informar si el formato es 12h o
                    24h.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      subtitle: 'Prefijos y sufijos',
      content: (
        <>
          <p className="text-md" style={{ marginBottom: '32px' }}>
            Son útiles cuando existe un símbolo o abreviatura que ayuden a entender mejor qué tipo de información se
            espera. Recomendamos no utilizar únicamente prefijos o sufijos, ya que los lectores de pantalla no los
            leerán.
          </p>

          <p className="text-xl">Ejemplos de uso de prefijos</p>
          <div className="col mb-4">
            <Image
              src={`${basePath}/images/form_text/ejemplo_de_uso_de_prefijos_incorrecto.svg`}
              alt="Mala práctica de uso de prefijos"
              width="800"
              height="280"
              className="img-fluid"
              style={{ marginTop: '2rem !important' }}
            ></Image>
            <div className="d-flex pt-3">
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">Evitar el uso de prefijos como único indicador del dato que se espera ingresar. </p>
            </div>
          </div>
          <div className="col">
            <Image
              src={`${basePath}/images/form_text/ejemplo_de_uso_de_prefijos_correcto.svg`}
              alt="Buena práctica de uso de prefijos"
              width="800"
              height="280"
              className="img-fluid"
            ></Image>
            <div className="d-flex pt-3">
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Utilizar el <strong>texto de prefijo</strong> para reforzar el tipo de dato que se espera, como los
                símbolos de una moneda.
              </p>
            </div>
          </div>

          <p className="text-xl" style={{ marginTop: '32px' }}>
            Ejemplos de uso de sufijos
          </p>
          <div className="col mb-4">
            <Image
              src={`${basePath}/images/form_text/ejemplo_de_uso_de_sufijos_incorrecto.svg`}
              alt="Buena práctica de uso de sufijos"
              width="800"
              height="280"
              className="img-fluid"
              style={{ marginTop: '2rem !important' }}
            ></Image>
            <div className="d-flex pt-3">
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">Evitar el uso de sufijos como único indicador del dato que se espera ingresar. </p>
            </div>
          </div>
          <div className="col">
            <Image
              src={`${basePath}/images/form_text/ejemplo_de_uso_de_sufijos_correcto.svg`}
              alt="Buena práctica de uso de sufijos"
              width="800"
              height="280"
              className="img-fluid"
            ></Image>
            <div className="d-flex pt-3">
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Utilizar el <strong>texto de prefijo</strong> para reforzar el tipo de dato que se espera, como los
                símbolos de una moneda.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      subtitle: 'Iconos accionables y decorativos',
      content: (
        <>
          <p className="text-md mt-3 mb-4">
            Se pueden incluir iconos dentro de los campos de texto para complementar visualmente su propósito o brindar
            acciones adicionales.
          </p>
          <ul className="list-informative-bullet">
            <li>
              <strong>Iconos decorativos</strong>. Se ubican al comienzo del campo, y ayudan a reforzar el contexto del
              dato que se espera, por ejemplo, un icono de ubicación en un campo de dirección.
            </li>
            <li>
              <strong>Iconos accionables</strong>. Se ubican generalmente al final del campo, y permiten ejecutar una
              acción relacionada, como copiar contenido, activar dictado por voz, o mostrar/ocultar contraseña.
            </li>
          </ul>

          {/* imgs */}
          <p className="text-xl mt-4">Ejemplos de uso</p>
          <Image
            src={`${basePath}/images/form_text/ej_de_uso_accionables_1.svg`}
            alt="Ejemplo de uso de accionables 1"
            width="800"
            height="280"
            className="img-fluid"
          ></Image>
          <Image
            src={`${basePath}/images/form_text/ej_de_uso_accionables_2.svg`}
            alt="Ejemplo de uso de accionables 2"
            width="800"
            height="280"
            className="img-fluid mt-4"
          ></Image>
        </>
      ),
    },
    {
      subtitle: 'Mensaje de error',
      content: (
        <>
          <p className="text-md">
            Si los datos ingresados son inválidos, aparecerá un mensaje de error debajo del campo de texto describiendo
            lo que está mal. Los errores más comunes incluyen:
          </p>
          <ul className="list-informative-bullet">
            <li>
              <strong>Formato incorrecto de datos</strong>. El contenido no coincide con el formato esperado, por
              ejemplo, una dirección de correo sin &quot;@&quot;.
            </li>
            <li>
              <strong>Caracteres no permitidos</strong>. Se ingresaron símbolos o letras que no están habilitados para
              ese campo, por ejemplo, letras en un campo numérico.
            </li>
            <li>
              <strong>Dejar un campo obligatorio incompleto</strong>. Falta completar un dato obligatorio que el
              formulario necesita para avanzar.
            </li>
          </ul>

          <p className="text-xl mt-4">Ejemplos de uso</p>
          <div className="max-items-2">
            {/* 1 */}
            <div className="col">
              <Image
                src={`${basePath}/images/form_text/mns_de_error_ej_de_uso_incorrecto.svg`}
                alt="Mala práctica en mensaje de error en formularios"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="mb-0">Evitá términos técnicos o específicos del sistema que puedan confundir.</p>
              </div>
            </div>
            {/* 2 */}
            <div className="col">
              <Image
                src={`${basePath}/images/form_text/mns_de_error_ej_de_uso_correcto.svg`}
                alt="Buena práctica en mensaje de error en formularios"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">Utilizá descripciones simples, directas y orientadas a la solución. </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Área de texto',
      content: (
        <>
          <p className="text-md mb-4" id="area_de_texto">
            Se utiliza para permitir que las personas usuarias ingresen una cantidad de texto que sea más extensa de una
            sola línea. Se suele usar para comentarios o preguntas en formularios.
          </p>

          <Image
            src={`${basePath}/images/form_text/area_de_texto.svg`}
            alt="Ejemplo visual de campo de area de texto"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginBottom: '32px' }}
          />

          <p className="text-xl">Contador de caracteres</p>
          <p className="text-md">
            Es un indicador que informa a las personas usuarias cuánto texto pueden ingresar cuando hay un límite en la
            cantidad de caracteres. Recomendamos utilizar este indicador sólo cuando exista una buena razón para limitar
            los caracteres, por ejemplo:
          </p>
          <ul className="list-informative-bullet">
            <li>
              Para mantener la información clara y fácil de leer en procesos como solicitudes o formularios breves.
            </li>
            <li>
              Restricciones técnicas o legales. Cuando el sistema tiene un límite específico, por ejemplo, en un campo
              de nombre o código.
            </li>
            <li>
              <strong>Dejar un campo obligatorio incompleto</strong>. Falta completar un dato obligatorio que el
              formulario necesita para avanzar.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Indicador de requerido y opcional',
      content: (
        <>
          <p className="text-md mb-4">
            Indica si un campo es obligatorio u opcional, ayudando a las personas a completar el formulario con
            claridad. Podés consultar la{' '}
            <a href="https://gcba.github.io/Obelisco-V2/patterns">ficha de patrones de formulario</a> para conocer los
            lineamientos de uso del indicador.
          </p>

          <Image
            src={`${basePath}/images/form_text/indicador.svg`}
            alt="Ejemplo visual de indicador de requerido y opcional"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Ancho mínimo y máximo',
      content: (
        <>
          <p className="text-md">
            El ancho de cada campo debe ser proporcional a la longitud del contenido esperado.Podés conocer más sobre la
            disposición de los campos en la{' '}
            <a href="https://gcba.github.io/Obelisco-V2/patterns">ficha de patrones de formulario</a>.
          </p>
          <ul className="list-informative-bullet mb-4">
            <li>
              El ancho <strong>mínimo</strong> del campo de texto es de 160px.{' '}
            </li>
            <li>
              El ancho <strong>máximo</strong> del campo de texto es de 356px.
            </li>
            <li>
              En dispositivos <i>mobile</i> el campo ocupa todo el ancho disponible.
            </li>
          </ul>
          <Image
            src={`${basePath}/images/form_text/ancho_minimo_maximo.svg`}
            alt="Ejemplo visual de ancho mínimo y máximo, indicando columnas"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Contenidos',
      content: (
        <>
          <p className="text-xl">
            Etiquetas <i>(label)</i>
          </p>
          <p className="text-md">
            Cada campo de texto debe tener una etiqueta para identificar y describir su propósito. El texto de la
            etiqueta debe estar alineado a la izquierda. Recomendamos escribir el texto de la etiqueta en mayúsculas y
            minúsculas, siendo lo más conciso posible, y no utilizar dos puntos después de los nombres de las etiquetas.
          </p>
          <p className="text-xl" style={{ marginTop: '32px' }}>
            Texto descriptivo
          </p>
          <p className="text-md">
            Es un texto que guía al usuario para ingresar datos en el formato apropiado, brindando una explicación del
            campo y ayudando a prevenir errores. El texto descriptivo aparece debajo del campo de texto, es opcional,
            pero recomendado, y no debe contener más de 3 líneas de texto.
          </p>
          <p className="text-xl" style={{ marginTop: '32px' }}>
            Texto del marcador de posición <i>(placeholder)</i>
          </p>
          <p className="text-md">
            El texto de marcador de posición <i>(placeholder)</i> es opcional y proporciona sugerencias o ejemplos de lo
            que se debe ingresar. El placeholder desaparece una vez que la persona usuaria comienza a ingresar datos,
            por lo tanto, no debe sustituir a la etiqueta <i>(label)</i> ni contener información crucial. Además,
            sugerimos que se relacione con el texto descriptivo ya que los lectores de pantalla no lo leen y puede ser
            difícil para las personas recordar la información proporcionada.
          </p>
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
            src={`${basePath}/images/form_text/anatomia_input_text.svg`}
            alt="Anatomia del input de texto"
            width="800"
            height="280"
            className="img-fluid"
          />

          <div className="responsive-scroll mt-4" tabIndex={0}>
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
                  <td>
                    1. Etiqueta (<i>label</i>)
                  </td>
                  <td>Obligatorio, indicá que tipo de información requiere el campo.</td>
                </tr>
                <tr>
                  <td>2. Campo (InputField)</td>
                  <td>Obligatorio, es el área donde las personas usuarias ingresan el texto.</td>
                </tr>
                <tr>
                  <td>3. Indicador de requerido</td>
                  <td>Opcional, los campos pueden etiquetarse como obligatorios u opcionales según el contexto.</td>
                </tr>
                <tr>
                  <td>4. Placeholder</td>
                  <td>Opcional, puede usarse para ejemplificar el formato del dato esperado.</td>
                </tr>
                <tr>
                  <td>5. Acción &quot;eliminar contenido&quot;</td>
                  <td>Opcional, se utiliza como atajo para eliminar el contenido del campo.</td>
                </tr>
                <tr>
                  <td>6. Texto sufijo</td>
                  <td>
                    Opcional, se utiliza para ayudar a entender mejor qué tipo de información se espera, y se ubica al
                    final del campo.
                  </td>
                </tr>
                <tr>
                  <td>7. Icono derecho</td>
                  <td>Opcional, muestra un icono decorativo a la derecha del campo de entrada.</td>
                </tr>
                <tr>
                  <td>8. Icono izquierdo</td>
                  <td>Opcional, muestra un icono, decorativo o accionable, a la izquierda del campo de entrada.</td>
                </tr>
                <tr>
                  <td>9. Texto prefijo</td>
                  <td>
                    Opcional, se utiliza para ayudar a entender mejor qué tipo de información se espera y se ubica al
                    inicio del campo.
                  </td>
                </tr>
                <tr>
                  <td>10. Texto descriptivo</td>
                  <td>
                    Opcional pero recomendado, se utiliza para proporcionar ayuda o contexto adicional sobre el dato a
                    ingresar.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Estados',
      content: (
        <>
          <p className="text-xl">
            Predeterminado <i> (default) </i>
          </p>
          <p className="text-md">Estado predeterminado del campo de texto en una interfaz. </p>
          <Image
            src={`${basePath}/images/form_text/estado_default.svg`}
            alt="Estado predeterminado del input de texto"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />

          <p className="text-xl">
            En Foco <i> (focus) </i>
          </p>
          <p className="text-md">
            Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
            claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En
            Obelisco se utiliza un borde o anillo (focus ring) por fuera del componente en un color distintivo.{' '}
          </p>
          <Image
            src={`${basePath}/images/form_text/estado_en_foco.svg`}
            alt="Estado en foco del input de texto"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />

          <p className="text-xl">Activo</p>
          <p className="text-md">Cuando un usuario está escribiendo contenido activamente en el campo.</p>
          <Image
            src={`${basePath}/images/form_text/estado_activo.svg`}
            alt="Estado activo del input de texto"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />

          <p className="text-xl">Completado</p>
          <p className="text-md">Indica que la persona usuaria ingresó información válida en el campo de texto.</p>
          <Image
            src={`${basePath}/images/form_text/estado_completado.svg`}
            alt="Estado activo del input de texto"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />

          <p className="text-xl">Error</p>
          <p className="text-md">
            Para garantizar la accesibilidad, el estado de error debe ser claramente perceptible. En los campos de
            texto, se utiliza un borde en color rojo con suficiente contraste. Esto asegura que todas las personas
            puedan identificar y corregir errores fácilmente, cumpliendo con las pautas de accesibilidad (WCAG).
          </p>
          <Image
            src={`${basePath}/images/form_text/estado_error.svg`}
            alt="Estado de error del input de texto"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />

          <p className="text-xl">
            Deshabilitado <i> (disabled) </i>
          </p>
          <p className="text-md">
            Estado que indica que el campo de texto no está disponible para la interacción, lo que significa que no
            puede activarse.
          </p>
          <Image
            src={`${basePath}/images/form_text/estado_deshabilitado.svg`}
            alt="Estado deshabilitado del input de texto"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />
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
          <p className="text-md">
            El componente de migas de pan está construido para ser reconocido por herramientas de asistencia como la
            navegación por teclado o lectores por voz.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <p className="text-md">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con
            el <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
            otros.
          </p>

          <Image
            src={`${basePath}/images/form_text/alternative_navigate.svg`}
            alt="Navegacion alternativa del campo de texto"
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
            Utilizá el atributo for para asociar una etiqueta <i>{`<label>`}</i> con un elemento de formulario como{' '}
            <i>{`<input>`}</i> o <i>{`<textarea>`}</i>, haciendo coincidir su valor con el atributo &quot;id&quot; del
            elemento correspondiente.
          </p>

          <p className="text-md">
            Además, los campos de formulario deben incluir el atributo <i>name</i>, que define el nombre del dato al
            enviarse el formulario, y el atributo <i>type</i>, que especifica el tipo de información esperada, por
            ejemplo, texto, correo o contraseña.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {INPUT_TEXT_ACCESSIBILITY}
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
            href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.1.1 Non-text Content (Level A){' '}
          </a>
          <p>
            Si el campo tiene un ícono decorativo, por ejemplo, un ícono de búsqueda, debe tener una alternativa textual
            o estar marcado como decorativo (aria-hidden=&quot;true&quot; o role=&quot;presentation&quot;).
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.3.1 Info and Relationships (Level A)
          </a>
          <p>
            La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
            mediante programación o están disponibles en el texto.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.11 Non-Text Contrast (Level AA){' '}
          </a>
          <p>
            La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
            relación de contraste de 3:1 con respecto a los colores adyacentes.{' '}
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.1 Keyboard (Level A){' '}
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.6 Headings and Labels (Level AA){' '}
          </a>
          <p>
            Si se utilizan encabezados o etiquetas, deben describir con precisión el propósito o contenido al que se
            refieren. Esto facilita la comprensión y navegación del contenido, especialmente para personas con
            discapacidades cognitivas o que utilizan lectores de pantalla.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.htmll"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.7 Focus Visible (Level AA){' '}
          </a>
          <p>
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible. Cuando utiliza un teclado para navegar por los checkboxs, los enlaces tienen un
            subrayado visible y un recuadro outline que indica que los enlaces son interactivos.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.3.2 Labels or Instructions (Level A){' '}
          </a>
          <p>
            Asegúrese de que todo el texto de ayuda y los mensajes de error proporcionen asistencia significativa para
            ayudar a los usuarios a evitar o corregir errores.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 4.1.2 Name, Role, Value (Level A){' '}
          </a>
          <p>
            Para todos los componentes de la interfaz de usuario (incluidos, entre otros: elementos de formulario,
            enlaces y componentes generados por scripts), el nombre y la función se pueden determinar mediante
            programación; los estados, propiedades y valores que puede establecer el usuario se pueden configurar
            mediante programación; y la notificación de cambios en estos elementos está disponible para los agentes de
            usuario, incluidas las tecnologías de asistencia.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Campo de texto (input text)"
        description={[
          'Los campos de texto permiten a las personas usuarias ingresar nombres, direcciones de correo electrónico, contraseñas, comentarios y otros tipos de texto sin formato. Generalmente, se usa en formularios.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
            sectionContent: SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'section-accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default FormTextDocs;
