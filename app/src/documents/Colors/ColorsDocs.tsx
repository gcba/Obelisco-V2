'use client';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
import PalletteColor from '@/components/Template/PalletteColor';
import PalletteTable from '@/components/Template/PalletteTable';

import {
  ALERT_COLORS,
  BACKGROUND_COLORS,
  BADGE_COLORS,
  BLOCKQUOTE_COLORS,
  blueArray,
  BORDER_COLORS,
  BUTTON_COLORS,
  CALENDAR_COLORS,
  cyanArray,
  FOOTER_COLORS,
  grayArray,
  greenArray,
  LINK_COLORS,
  orangeArray,
  PRINCIPALS_COLORS,
  PROGRESS_COLORS,
  purpleArray,
  redArray,
  SCROLL_COLORS,
  skyArray,
  slateArray,
  SPINNER_COLORS,
  STATES_COLORS,
  TEXT_COLORS,
  themeColors,
  yellowArray,
} from './constants';

const basePath = '/Obelisco-V2';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const ColorsDocs: React.FC = () => {
  const SECTION_DEV = [
    {
      title: 'Colores principales',
      content: (
        <div className="container">
          <div className="d-flex gap-4 justify-content-center mb-3 flex-wrap text-white mx-auto">
            {themeColors.map(({ name, hex, textDark }) => (
              <div className={`color-box ${textDark ? 'text-dark' : ''}`} style={{ backgroundColor: hex }} key={name}>
                <span className="headline-md fw-bold">{name}</span>
                <span className="text-xs">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Fondos',
      content: (
        <>
          <div className="container">
            <div className="d-flex gap-4 justify-content-center mb-3 flex-wrap text-white mx-auto">
              <div className="color-box bg-white text-dark" style={{ border: '2px solid #e6ebf0' }}>
                <span className="headline-md fw-bold">bg-white</span>
                <span className="text-xs">#ffffff</span>
              </div>
              <div className="color-box bg-light text-dark">
                <span className="headline-md fw-bold">bg-light</span>
                <span className="text-xs">#f3f6f9</span>
              </div>
              <div className="color-box bg-dark text-white">
                <span className="headline-md fw-bold">bg-dark</span>
                <span className="text-xs">#002733</span>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  const SECTION_PALLETTE = [
    {
      title: 'Colores primitivos',
      content: (
        <>
          <p>
            Son los colores de la primera capa de la arquitectura de la paleta de color. No se utilizan directamente,
            sino que sirven como referencia para crear variables más específicas en las capas semántica y funcional.
          </p>
          <p
            className="text-body-secondary d-flex text-sm align-items-center gap-1 mb-0"
            style={{ paddingBottom: '44px' }}
          >
            <span className="material-symbols-rounded" aria-hidden="true" style={{ color: '#CC7700' }}>
              lock
            </span>
            <span>No podés acceder a estos colores, sólo están como referencia.</span>
          </p>
          <div className="d-flex gap-5 flex-wrap pb-5">
            <PalletteColor arrayColor={yellowArray} title="Amarillo (Yellow)" titleName="yellow" />
            <PalletteColor arrayColor={orangeArray} title="Naranja (Orange)" titleName="orange" />
            <PalletteColor arrayColor={redArray} title="Rojo (Red)" titleName="red" />
            <PalletteColor arrayColor={purpleArray} title="Púrpura (Purple)" titleName="purple" />
            <PalletteColor arrayColor={blueArray} title="Azul (Blue)" titleName="blue" />
            <PalletteColor arrayColor={skyArray} title="Cielo (Sky)" titleName="sky" />
            <PalletteColor arrayColor={cyanArray} title="Cyan (Cyan)" titleName="cyan" />
            <PalletteColor arrayColor={greenArray} title="Verde (Green)" titleName="green" />
            <PalletteColor arrayColor={slateArray} title="Grisulado (Slate)" titleName="slate" />
            <PalletteColor arrayColor={grayArray} title="Escala de grises (Grayscale)" titleName="grayscale" />
          </div>
        </>
      ),
    },
    {
      title: 'Colores semánticos',
      content: (
        <div>
          <p>
            Los colores semánticos pertenecen a la segunda capa de significación dentro de la arquitectura de la paleta
            de color. A cada color se le asigna un contexto de uso y un nivel de importancia.{' '}
          </p>
          <p
            className="text-body-secondary d-flex text-sm align-items-center gap-1 mb-0"
            style={{ paddingBottom: '16px' }}
          >
            <span className="material-symbols-rounded" aria-hidden="true" style={{ color: '#0086AD' }}>
              info
            </span>
            <span>Estas variables están disponibles sólo en Figma. No están disponibles en el código. </span>
          </p>
        </div>
      ),
    },
    {
      subtitle: 'Colores principales',
      content: (
        <div>
          <p>
            Son las variables base que definen los niveles de importancia y el contexto de uso general dentro de la
            paleta de color.{' '}
          </p>
          <PalletteTable arrayTableColors={PRINCIPALS_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Colores de texto',
      content: (
        <div>
          <p>
            Existen variables de color de texto para cada color principal. Sin embargo, las que utilizamos por defecto
            para activos digitales del GCBA son <strong>$body-primary</strong> y <strong>$body-secondary</strong>, que
            aseguran un buen contraste y legibilidad.
          </p>
          <PalletteTable arrayTableColors={TEXT_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Colores de estados',
      content: (
        <div>
          <p>
            Son los colores que utilizamos para identificar los diferentes estados de un componente, y que sirven para
            informar a la persona usuaria sobre elementos accionables e interactivos.
          </p>
          <PalletteTable arrayTableColors={STATES_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Colores de bordes',
      content: (
        <div>
          <p>Son los colores que utilizamos para los bordes de los elementos de la interfaz o para divisores.</p>
          <PalletteTable arrayTableColors={BORDER_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Colores de fondos',
      content: (
        <div>
          <p>
            Son los colores que utilizamos para los fondos de componentes y páginas construidas para activos digitales
            del GCBA. El color de fondo predeterminado para cualquier elemento y plantillas de Obelisco es $bg-white.
          </p>
          <PalletteTable arrayTableColors={BACKGROUND_COLORS} />
        </div>
      ),
    },
    {
      title: 'Colores funcionales',
      content: (
        <div>
          <p>
            Los colores funcionales pertenecen a la tercera capa de significación dentro de la arquitectura de la paleta
            de color. Estas variables están asignadas a componentes específicos, y pueden provenir de la primera o la
            segunda capa.{' '}
          </p>
          <p
            className="text-body-secondary d-flex text-sm align-items-center gap-1 mb-0"
            style={{ paddingBottom: '16px' }}
          >
            <span className="material-symbols-rounded" aria-hidden="true" style={{ color: '#0086AD' }}>
              info
            </span>
            <span>Estas variables están disponibles sólo en Figma. No están disponibles en el código.</span>
          </p>
        </div>
      ),
    },
    {
      subtitle: 'Componente: alerta',
      content: (
        <div>
          <p>Estos colores se utilizan únicamente dentro del componente Alerta.</p>
          <PalletteTable arrayTableColors={ALERT_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Componente: barra de desplazamiento',
      content: (
        <div>
          <p>Estos colores se utilizan únicamente dentro del componente Barra de desplazamiento.</p>
          <PalletteTable arrayTableColors={SCROLL_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Componente: barra de progreso',
      content: (
        <div>
          <p>Estos colores se utilizan únicamente dentro del componente Barra de progreso.</p>
          <PalletteTable arrayTableColors={PROGRESS_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Componente: botón',
      content: (
        <div>
          <p>Estos colores se utilizan únicamente dentro del componente Botón.</p>
          <PalletteTable arrayTableColors={BUTTON_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Componente: calendario',
      content: (
        <div>
          <p>Estos colores se utilizan únicamente dentro del componente Calendario.</p>
          <PalletteTable arrayTableColors={CALENDAR_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Componente: citas',
      content: (
        <div>
          <p>Estos colores se utilizan únicamente dentro del componente de Citas.</p>
          <PalletteTable arrayTableColors={BLOCKQUOTE_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Componente: etiqueta',
      content: (
        <div>
          <p>Estos colores se utilizan únicamente dentro del componente de Etiqueta.</p>
          <PalletteTable arrayTableColors={BADGE_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Componente: enlace',
      content: (
        <div>
          <p>
            Estos colores se utilizan únicamente dentro del componente Enlace. El color del texto de enlace
            predeterminado lo toma de la variable <strong>$text-link</strong>.
          </p>
          <PalletteTable arrayTableColors={LINK_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Componente: spinner',
      content: (
        <div>
          <p>Estos colores se utilizan únicamente dentro del componente Spinner.</p>
          <PalletteTable arrayTableColors={SPINNER_COLORS} />
        </div>
      ),
    },
    {
      subtitle: 'Componente: pie de página (footer)',
      content: (
        <div>
          <p>Estos colores se utilizan únicamente dentro del componente Pie de página (footer).</p>
          <PalletteTable arrayTableColors={FOOTER_COLORS} />
          <div className="text-end me-1">
            <button className="btn btn-outline-tertiary btn-lg" type="button" onClick={scrollToTop}>
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_upward
              </span>
              Volver arriba
            </button>
          </div>
        </div>
      ),
    },
  ];
  const SECTION_UX = [
    {
      title: 'Principios',
      content: (
        <div className="list-informative pb-3">
          <ul className="list-informative-bullet">
            <li>
              <span className="fw-semibold">Accesibilidad</span>: todas las combinaciones de color definidas deben pasar
              los requerimientos de contraste mínimos de accesibilidad especificados por WCAG 2.2.{' '}
            </li>
            <li>
              <span className="fw-semibold">Coherencia</span>: se deben mantener los significados estipulados para cada
              color. Por ejemplo, el color rojo se relaciona con peligro, y el verde con éxito.{' '}
            </li>
            <li>
              <span className="fw-semibold">Funcionalidad</span>: nuestro sistema propone que los colores estén atados a
              un propósito y significado específico. No deben utilizarse de forma arbitraria y no tienen un objetivo
              decorativo.{' '}
            </li>
            <li>
              <span className="fw-semibold">Moderación</span>: el uso excesivo de color en una interfaz puede reducir la
              claridad de la comunicación y distraer a las personas usuarias. Recomendamos dosificar el color sólo para
              resaltar información o acciones clave.{' '}
            </li>
            <li>
              <span className="fw-semibold">Flexibilidad</span>: trabajamos con variables para poder generar un sistema
              robusto y escalable.{' '}
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Accesibilidad',
      content: (
        <>
          <p>
            Los colores de nuestra paleta de color fueron seleccionados y testeados para poder cumplir con los
            requerimientos de accesibilidad de WCAG 2.2 en contraste y uso del color. Evitá usar colores por fuera de
            esta paleta, ya que puede generar experiencias inaccesibles para algunas personas usuarias.{' '}
          </p>
        </>
      ),
    },
    {
      subtitle: 'Combinaciones de texto y fondo',
      content: (
        <div>
          <p>
            En la sección de paleta vas a encontrar muestras de cada color con una etiqueta del nivel de conformidad que
            pasa la combinación de texto y fondo. Recomendamos siempre utilizar combinaciones AAA para garantizar el
            máximo contraste posible. Si encontrás muestras que no tienen ni la etiqueta AA o AAA, es porque esa
            combinación no pasa accesibilidad y por lo tanto debe evitarse su uso.
          </p>
          <img src={`${basePath}/images/colors/color_1.svg`} className="w-100" alt="Combinaciones de texto y fondo" />
        </div>
      ),
    },
    {
      subtitle: 'Uso del color',
      content: (
        <div>
          <p>
            El color no debe usarse como el único medio para transmitir información, indicar una acción, generar una
            respuesta o distinguir un elemento visual. Dado que muchas personas usuarias tienen dificultades para
            percibir el color, es importante reforzar el mensaje añadiendo otros elementos. Un ejemplo puede ser agregar
            texto de soporte en un campo de formulario con error, además de cambiar el color de su borde por el rojo.{' '}
          </p>
        </div>
      ),
    },
    {
      subtitle: 'Contraste',
      content: (
        <div>
          <p>
            Un nivel de contraste AAA implica que la presentación de texto e imágenes de texto tiene un ratio de
            contraste de por lo menos 7:1, con excepción de textos grandes que deben tener un ratio de 4.5:1. También se
            encuentran exentos los textos o imágenes que sean incidentales (es decir, que son parte de componentes
            inactivos de la interfaz), los puramente decorativos y los logotipos.{' '}
          </p>
        </div>
      ),
    },
    {
      subtitle: 'Contraste para elementos que no son de texto',
      content: (
        <div>
          <p>
            Los componentes de una interfaz, sus estados, y los objetos gráficos deben tener como mínimo un ratio de
            contraste de 3:1 con respecto a los colores adyacentes.{' '}
          </p>
          <p>Los criterios de éxito que tenemos en cuenta son:</p>
          <div className="list-link pb-3">
            <a href="#" target="_blank" rel="noopener noreferrer" className="external text-sm">
              Success Criterion 1.4.11 Non-text Contrast
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="external text-sm">
              Success Criterion 1.4.1 Use of Color
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="external text-sm">
              Success Criterion 1.4.6 Contrast (Enhanced)
            </a>
          </div>
        </div>
      ),
    },
    {
      title: 'Uso',
    },
    {
      subtitle: 'Paleta global',
      content: (
        <div>
          <p>
            Incluye 10 colores, cada uno con 11 tonalidades. Nuestra paleta se compone de colores de marca relacionados
            a la Ciudad de Buenos Aires y de colores que cumplen un rol específico dentro de la interfaz a nivel
            comunicacional.{' '}
          </p>
        </div>
      ),
    },
    {
      subtitle: 'Construcción en capas',
      content: (
        <div>
          <p className="mb-4">
            Construimos nuestra paleta en base a diferentes capas que van asignando roles a cada color:
          </p>
          <div className="list-informative">
            <ul className="list-informative-bullet">
              <li>
                <span className="fw-semibold">Color base</span>: es el código hexadecimal puro y no se toma aún dentro
                de la arquitectura como una capa formal.
              </li>
              <li>
                <span className="fw-semibold">Capa primitiva</span>: contiene todos los códigos hexadecimales de la
                paleta y los clasifica por nombre y tonalidad del color. Esta capa se encuentra oculta. Los colores
                primitivos sólo pueden utilizarse directamente en el diseño de ilustraciones decorativas.
              </li>
              <li>
                <span className="fw-semibold">Capa semánticos</span>: asigna roles a los colores para textos, fondos,
                bordes y estados globales.
              </li>
              <li>
                <span className="fw-semibold">Capa funcional</span>: asigna variables a roles dentro de componentes
                específicos, como por ejemplo el fondo de un botón o el borde de una alerta.
              </li>
            </ul>
          </div>
          <p className="mt-4">
            De esta forma generamos un sistema con una estructura intuitiva y fácil de utilizar en los diseños,
            permitiendo conocer el rol o la función del color ya desde su nomenclatura.{' '}
          </p>
        </div>
      ),
    },
    {
      subtitle: 'Variables en Figma',
      content: (
        <div>
          <p>
            La paleta de color está disponible en Figma en forma de variables. El uso de variables facilita el
            mantenimiento y permite trabajar en un sistema escalable y robusto.
          </p>
          <img src={`${basePath}/images/colors/color_2.svg`} className="w-100" alt="Variables en Figma" />
        </div>
      ),
    },
    {
      title: 'Recursos',
      content: (
        <div className="list-link pt-2 pb-3">
          <a href="#" target="_blank" rel="noopener noreferrer" className="external text-sm">
            WebAIM Contrast Checker
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="external text-sm">
            Stark - Contrast & Accessibility Checker (Figma Community)
          </a>
        </div>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Colores"
        description="El color comunica significados, estados y roles dentro de una interfaz. Permite jerarquizar información clave para generar una estructura de navegación clara, y fomenta experiencias cohesivas a través de múltiples productos digitales."
      />
      <Tabs
        sectionDev={SECTION_DEV}
        sectionUx={SECTION_UX}
        customSection={{
          title: 'Paleta',
          id: 'pallette',
          sectionContent: SECTION_PALLETTE,
        }}
      />
    </>
  );
};

export default ColorsDocs;
