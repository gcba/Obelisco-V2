import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  SWITCH_DARK,
  SWITCH_DEFAULT,
  SWITCH_DISABLED,
  SWITCH_SIZES,
  SWITCH_SIZES_SM,
  SWITCH_WITHOUT_LABEL,
} from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Tipos',
    content: (
      <>
        <CodeBox codeHTML={SWITCH_DEFAULT}>
          <div className="container d-flex gap-4 flex-wrap">
            <label className="switch" htmlFor="switch-1">
              <input type="checkbox" id="switch-1" />
              <span className="slider"></span>
              <span className="switch-label on">Prendido</span>
              <span className="switch-label off">Apagado</span>
            </label>
            <label className="switch" htmlFor="switch-2">
              <input type="checkbox" id="switch-2" defaultChecked />
              <span className="slider"></span>
              <span className="switch-label on">Prendido</span>
              <span className="switch-label off">Apagado</span>
            </label>
          </div>
        </CodeBox>
        <br />
        <CodeBox codeHTML={SWITCH_DARK}>
          <div className="container d-flex gap-4 flex-wrap">
            <label className="switch switch-dark" htmlFor="switch-dark-1">
              <input type="checkbox" id="switch-dark-1" />
              <span className="slider"></span>
              <span className="switch-label on">Prendido</span>
              <span className="switch-label off">Apagado</span>
            </label>
            <label className="switch switch-dark" htmlFor="switch-dark-2">
              <input type="checkbox" id="switch-dark-2" defaultChecked />
              <span className="slider"></span>
              <span className="switch-label on">Prendido</span>
              <span className="switch-label off">Apagado</span>
            </label>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    title: 'Sin label',
    content: (
      <>
        <CodeBox codeHTML={SWITCH_WITHOUT_LABEL}>
          <div className="container">
            <div className="row mb-2">
              <label className="switch" htmlFor="switch-3-1">
                <input type="checkbox" id="switch-3-1" />
                <span className="slider"></span>
                <span className="switch-label on" aria-label="Prendido"></span>
                <span className="switch-label off" aria-label="Apagado"></span>
              </label>
              <label className="switch" htmlFor="switch-3-2">
                <input type="checkbox" id="switch-3-2" defaultChecked />
                <span className="slider"></span>
                <span className="switch-label on" aria-label="Prendido"></span>
                <span className="switch-label off" aria-label="Apagado"></span>
              </label>
            </div>
            <div className="row">
              <label className="switch switch-dark" htmlFor="switch-label-hidden-3-1">
                <input type="checkbox" id="switch-label-hidden-3-1" />
                <span className="slider"></span>
                <span className="switch-label on" aria-label="Prendido"></span>
                <span className="switch-label off" aria-label="Apagado"></span>
              </label>
              <label className="switch switch-dark" htmlFor="switch-label-hidden-3-2">
                <input type="checkbox" id="switch-label-hidden-3-2" defaultChecked />
                <span className="slider"></span>
                <span className="switch-label on" aria-label="Prendido"></span>
                <span className="switch-label off" aria-label="Apagado"></span>
              </label>
            </div>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    title: 'Tamaños',
    content: (
      <>
        <CodeBox codeHTML={SWITCH_SIZES}>
          <div className="container">
            <div className="row mb-2">
              <label className="switch" htmlFor="switch-4-1">
                <input type="checkbox" id="switch-4-1" />
                <span className="slider"></span>
                <span className="switch-label on">Prendido</span>
                <span className="switch-label off">Apagado</span>
              </label>
              <label className="switch" htmlFor="switch-4-2">
                <input type="checkbox" id="switch-4-2" defaultChecked />
                <span className="slider"></span>
                <span className="switch-label on">Prendido</span>
                <span className="switch-label off">Apagado</span>
              </label>
            </div>
          </div>
        </CodeBox>
        <br />
        <CodeBox codeHTML={SWITCH_SIZES_SM}>
          <div className="container">
            <div className="row">
              <label className="switch switch-sm" htmlFor="switch-small-4-1">
                <input type="checkbox" id="switch-small-4-1" />
                <span className="slider"></span>
                <span className="switch-label on" aria-label="Prendido"></span>
                <span className="switch-label off" aria-label="Apagado"></span>
              </label>
              <label className="switch switch-sm" htmlFor="switch-small-4-2">
                <input type="checkbox" id="switch-small-4-2" defaultChecked />
                <span className="slider"></span>
                <span className="switch-label on" aria-label="Prendido"></span>
                <span className="switch-label off" aria-label="Apagado"></span>
              </label>
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
        <CodeBox codeHTML={SWITCH_DISABLED}>
          <div className="container">
            <div className="row">
              <label className="switch mb-2" htmlFor="switch-5-1">
                <input type="checkbox" id="switch-5-1" disabled />
                <span className="slider"></span>
                <span className="switch-label disabled on">Prendido / Deshabilitado</span>
                <span className="switch-label disabled off">Apagado / Deshabilitado</span>
              </label>
              <label className="switch mb-2" htmlFor="switch-5-2">
                <input type="checkbox" id="switch-5-2" disabled defaultChecked />
                <span className="slider"></span>
                <span className="switch-label disabled on">Prendido / Deshabilitado</span>
                <span className="switch-label disabled off">Apagado / Deshabilitado</span>
              </label>
            </div>
            <div className="row">
              <label className="switch" htmlFor="switch-disabled-5-1">
                <input type="checkbox" id="switch-disabled-5-1" disabled />
                <span className="slider"></span>
                <span className="switch-label disabled on" aria-label="Prendido / Deshabilitado"></span>
                <span className="switch-label disabled off" aria-label="Apagado / Deshabilitado"></span>
              </label>
              <label className="switch" htmlFor="switch-disabled-5-2">
                <input type="checkbox" id="switch-disabled-5-2" disabled defaultChecked />
                <span className="slider"></span>
                <span className="switch-label disabled on" aria-label="Prendido / Deshabilitado"></span>
                <span className="switch-label disabled off" aria-label="Apagado / Deshabilitado"></span>
              </label>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
      </>
    ),
  },
];

const SwitchDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Switch"
        description={[
          'Los switchs permiten que las personas usuarias alternen entre dos estados posibles, como “prendido” y “apagado”.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a href="https://gcba.github.io/estandares/componentes/switch/" target="_blank" rel="noopener noreferrer">
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

export default SwitchDocs;
