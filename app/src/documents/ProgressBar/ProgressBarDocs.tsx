"use client";

import CodeCopy from "@/components/CodeBox";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";

import { PROGRESSBAR_TYPES, SPINNER_SIZES } from "./code-views";

const ProgressBarDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Barra de progreso",
      description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. lorem ipsum dolor sit amet lorem. Lorem ipsum dolor sit",
      h1: true,
      content: (
        <>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{width: '25%'}}
            ></div>
          </div>
          
          <br/>
          
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{width: '50%'}}
            ></div>
          </div>
          
          <br />        
          
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{width: '100%'}}
            ></div>
          </div>
          
          <br />

          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{width: '25%'}}
            ></div>
          </div>
          
          <br />

          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{width: '50%'}}
            ></div>
          </div>

          <br />
          
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{width: '100%'}}
            ></div>
          </div>
          <br />
          <CodeCopy code={PROGRESSBAR_TYPES} />
        </>
      ),
    },
    {
      id: "section-2",
      title: "Con descripción",
      content: (
        <>
          <p className="steps">Descripción</p>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{width: '50%'}}
            ></div>
          </div>
            
          <br/>
            
          <p className="steps">Descripción</p>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{width: '100%'}}
            ></div>
          </div>
            
          <br />

          <p className="steps">Descripción</p>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{width: '50%'}}
            ></div>
          </div>
            
          <br/>
            
          <p className="steps">Descripción</p>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{width: '100%'}}
            ></div>
          </div>

          <br />
          <CodeCopy code={SPINNER_SIZES} />
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

export default ProgressBarDocs;
