import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import CodeCopy from "@/components/CodeBox";
import {
  EGcodeSimpleAlert,
  EGcodeCloseAlert,
  EGcodeWithStrong,
} from "./code-views";
import MainDescription from "@/components/Template/MainDescription";

const FormRadioDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Introducción",
      content: (
        <MainDescription description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga praesentium qui libero illum. Deleniti exercitationem at labore nam." />
      ),
    },
    {
      id: "section-2",
      title: "Casilla única",
      content: (
        <div className="">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Default radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Default checked radio
            </label>
          </div>
          
          <br />
          <CodeCopy code={EGcodeSimpleAlert} />
        </div>
      ),
    },
    {
      id: "section-3",
      title: "Con cierre",
      content: (
        <div className="w-50 d-flex flex-column gap-2 mb-3">
          <div
            className="alert alert-warning alert-dismissible show fade"
            role="alert"
          >
            <p>Esta es la descripción de una alerta de error.</p>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Cerrar"
            >
              <span className="material-icons-round">close</span>
            </button>
          </div>
          <CodeCopy code={EGcodeCloseAlert} />
        </div>
      ),
    },
    {
      id: "section-4",
      title: "Con lista",
      content: (
        <div className="w-50 d-flex flex-column gap-2 mb-3 mx-auto">
          <div className="alert alert-danger" role="alert">
            <p>
              <strong>Este es un destacado de una alerta de error.</strong>
              Esta es la descripción de una alerta de error que continua al
              texto destacado.
            </p>
            <ol className="list-links">
              <li>
                <a href="#">Ancla al error 1</a>
              </li>
              <li>
                <a href="#">Ancla al error 2</a>
              </li>
              <li>
                <a href="#">Ancla al error 3</a>
              </li>
              <li>
                <a href="#">Ancla al error 4</a>
              </li>
              <li>
                <a href="#">Ancla al error 5</a>
              </li>
            </ol>
          </div>
          <CodeCopy code={EGcodeWithStrong} />
        </div>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default FormRadioDocs;
