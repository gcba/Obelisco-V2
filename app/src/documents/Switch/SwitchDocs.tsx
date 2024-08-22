import MainDescription from "@/components/Template/MainDescription";
import { SwitchDisabled, SwitchSizes, SwitchTypes, SwitchWithoutLabel } from "./code-views";
import CodeCopy from "@/components/CodeBox";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";

const SwitchDocs: React.FC = () => {

  const sections = [
    {
      id: "section-1",
      title: "Switch",
      h1: true,
      content: (
        <MainDescription description="Los interruptores permiten a los usuarios alternar entre dos estados, como encendido y apagado. Son útiles para configuraciones rápidas y fáciles de usar." />
      )
    },
    {
      id: "section-2",
      title: "Tipos",
      content: (
        <>
          <div className="row mb-2">
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
          <div className="row">
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
          <CodeCopy code={SwitchTypes} />
        </>
      ),
    },
    {
      id: "section-3",
      title: "Sin label",
      content: (
        <>
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
          <CodeCopy code={SwitchWithoutLabel} />
        </>
      ),
    },
    {
      id: "section-4",
      title: "Tamaños",
      content: (
        <>
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
          <CodeCopy code={SwitchSizes} />
        </>
      ),
    },
    {
      id: "section-5",
      title: "Deshabilitado",
      content: (
        <>
          <div className="row">
            <label className="switch mb-2" htmlFor="switch-5-1">
              <input type="checkbox" id="switch-5-1" disabled />
              <span className="slider"></span>
              <span className="switch-label disabled on">
                Prendido / Deshabilitado
              </span>
              <span className="switch-label disabled off">
                Apagado / Deshabilitado
              </span>
            </label>
            <label className="switch mb-2" htmlFor="switch-5-2">
              <input type="checkbox" id="switch-5-2" disabled defaultChecked />
              <span className="slider"></span>
              <span className="switch-label disabled on">
                Prendido / Deshabilitado
              </span>
              <span className="switch-label disabled off">
                Apagado / Deshabilitado
              </span>
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
          <CodeCopy code={SwitchDisabled} />
        </>
      ),
    }
  ];

  return (
    <DocumentationTemplate
      sections={sections}
    />
  );
};

export default SwitchDocs;
