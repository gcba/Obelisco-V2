
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { blueArray, cyanArray, grayArray, greenArray, orangeArray, purpleArray, redArray, skyArray, slateArray, themeColors, yellowArray } from './constants';

const ColorsDocs: React.FC = () => {
  const sections = [
    {
      title: 'Paleta de colores',
      content: (
        <MainDescription description="El color es una herramienta que transmite personalidad, establece un tono, llama la atención e indica importancia " />
      ),
      h1: true,
    },
    {
      id: 'section-1',
      title: 'Colores primitivos',
    },
    {
      id: 'section-2',
      subtitle: 'Amarillo (Yellow)',
      content: (
        <div className="container">
          <div className="d-flex mb-3 flex-wrap">
            {yellowArray.map(({ name, hex, accessibility, textWhite }) => (
              <div className={`color-box-ramp ${textWhite ? "text-white" : ""}`} key={hex}  style={{backgroundColor: hex}}>
                <span className="badge badge-default" style={{ backgroundColor: 'transparent', outlineColor: `${textWhite ? 'white' : '#101e37'}`, color: textWhite ? 'white' : '#101e37'}}>{accessibility}</span>
                <span className="headline-lg fw-bold">{name}</span>
                <span className="">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'section-3',
      subtitle: 'Azul (Blue)',
      content: (
        <div className="container">
          <div className="d-flex mb-3 flex-wrap">
            {blueArray.map(({ name, hex, accessibility, textWhite }) => (
              <div className={`color-box-ramp ${textWhite ? "text-white" : ""}`} key={hex}  style={{backgroundColor: hex}}>
                <span className="badge badge-default" style={{ backgroundColor: 'transparent', outlineColor: `${textWhite ? 'white' : '#101e37'}`, color: textWhite ? 'white' : '#101e37'}}>{accessibility}</span>
                <span className="headline-lg fw-bold">{name}</span>
                <span className="">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'section-4',
      subtitle: 'Cian (Cyan)',
      content: (
        <div className="container">
          <div className="d-flex mb-3 flex-wrap">
            {cyanArray.map(({ name, hex, accessibility, textWhite }) => (
              <div className={`color-box-ramp ${textWhite ? "text-white" : ""}`} key={hex}  style={{backgroundColor: hex}}>
                <span className="badge badge-default" style={{ backgroundColor: 'transparent', outlineColor: `${textWhite ? 'white' : '#101e37'}`, color: textWhite ? 'white' : '#101e37'}}>{accessibility}</span>
                <span className="headline-lg fw-bold">{name}</span>
                <span className="">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'section-5',
      subtitle: 'Cielo (Sky)',
      content: (
        <div className="container">
          <div className="d-flex mb-3 flex-wrap">
            {skyArray.map(({ name, hex, accessibility, textWhite }) => (
              <div className={`color-box-ramp ${textWhite ? "text-white" : ""}`} key={hex}  style={{backgroundColor: hex}}>
                <span className="badge badge-default" style={{ backgroundColor: 'transparent', outlineColor: `${textWhite ? 'white' : '#101e37'}`, color: textWhite ? 'white' : '#101e37'}}>{accessibility}</span>
                <span className="headline-lg fw-bold">{name}</span>
                <span className="">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'section-6',
      subtitle: 'Verde (Green)',
      content: (
        <div className="container">
          <div className="d-flex mb-3 flex-wrap">
            {greenArray.map(({ name, hex, accessibility, textWhite }) => (
              <div className={`color-box-ramp ${textWhite ? "text-white" : ""}`} key={hex}  style={{backgroundColor: hex}}>
                <span className="badge badge-default" style={{ backgroundColor: 'transparent', outlineColor: `${textWhite ? 'white' : '#101e37'}`, color: textWhite ? 'white' : '#101e37'}}>{accessibility}</span>
                <span className="headline-lg fw-bold">{name}</span>
                <span className="">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'section-7',
      subtitle: 'Naranja (Orange)',
      content: (
        <div className="container">
          <div className="d-flex mb-3 flex-wrap">
            {orangeArray.map(({ name, hex, accessibility, textWhite }) => (
              <div className={`color-box-ramp ${textWhite ? "text-white" : ""}`} key={hex}  style={{backgroundColor: hex}}>
                <span className="badge badge-default" style={{ backgroundColor: 'transparent', outlineColor: `${textWhite ? 'white' : '#101e37'}`, color: textWhite ? 'white' : '#101e37'}}>{accessibility}</span>
                <span className="headline-lg fw-bold">{name}</span>
                <span className="">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'section-8',
      subtitle: 'Rojo (Red)',
      content: (
        <div className="container">
          <div className="d-flex mb-3 flex-wrap">
            {redArray.map(({ name, hex, accessibility, textWhite }) => (
              <div className={`color-box-ramp ${textWhite ? "text-white" : ""}`} key={hex}  style={{backgroundColor: hex}}>
                <span className="badge badge-default" style={{ backgroundColor: 'transparent', outlineColor: `${textWhite ? 'white' : '#101e37'}`, color: textWhite ? 'white' : '#101e37'}}>{accessibility}</span>
                <span className="headline-lg fw-bold">{name}</span>
                <span className="">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'section-9',
      subtitle: 'Púrpura (Purple)',
      content: (
        <div className="container">
          <div className="d-flex mb-3 flex-wrap">
            {purpleArray.map(({ name, hex, accessibility, textWhite }) => (
              <div className={`color-box-ramp ${textWhite ? "text-white" : ""}`} key={hex}  style={{backgroundColor: hex}}>
                <span className="badge badge-default" style={{ backgroundColor: 'transparent', outlineColor: `${textWhite ? 'white' : '#101e37'}`, color: textWhite ? 'white' : '#101e37'}}>{accessibility}</span>
                <span className="headline-lg fw-bold">{name}</span>
                <span className="">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'section-10',
      subtitle: 'Grisulado (Slate)',
      content: (
        <div className="container">
          <div className="d-flex mb-3 flex-wrap">
            {slateArray.map(({ name, hex, accessibility, textWhite }) => (
              <div className={`color-box-ramp ${textWhite ? "text-white" : ""}`} key={hex}  style={{backgroundColor: hex}}>
                <span className="badge badge-default" style={{ backgroundColor: 'transparent', outlineColor: `${textWhite ? 'white' : '#101e37'}`, color: textWhite ? 'white' : '#101e37'}}>{accessibility}</span>
                <span className="headline-lg fw-bold">{name}</span>
                <span className="">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'section-11',
      subtitle: 'Escala de grises (Grayscale)',
      content: (
        <div className="container">
          <div className="d-flex mb-3 flex-wrap">
            {grayArray.map(({ name, hex, accessibility, textWhite }) => (
              <div className={`color-box-ramp ${textWhite ? "text-white" : ""}`} key={hex}  style={{backgroundColor: hex}}>
                <span className="badge badge-default" style={{ backgroundColor: 'transparent', outlineColor: `${textWhite ? 'white' : '#101e37'}`, color: textWhite ? 'white' : '#101e37'}}>{accessibility}</span>
                <span className="headline-lg fw-bold">{name}</span>
                <span className="">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'section-12',
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
      id: 'section-13',
      title: 'Fondos',
      content: (
        <>
        <div className="container">
          <div className="d-flex gap-4 justify-content-center mb-3 flex-wrap text-white mx-auto">
            <div className="color-box bg-white text-dark">
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

  return <DocumentationTemplate sections={sections} />;
};

export default ColorsDocs;
