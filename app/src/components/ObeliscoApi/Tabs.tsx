/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { footerCompleteImplementationAngular, footerCompleteImplementationReact } from './ImplementationExamples';
import { EXAMPLES_IMPLEMENTATION } from './utils';


export const TabResponseAPI = ({ dataFooterComplete }: any) => {

  const [toggleExpandHTML, setToggleExpandHTML] = useState(false);

  return (
    <div style={{ position: "relative", paddingTop: "3rem", ...(!toggleExpandHTML ? { maxHeight: "300px", overflowY: "hidden", } : {}) }}>
      <button
        className={"btn btn-outline-tertiary btn-sm my-2"}
        style={{ position: 'absolute', top: '5px', right: '10px' }}
        onClick={() => setToggleExpandHTML(!toggleExpandHTML)}
      >
        {toggleExpandHTML ? 'Ver menos' : 'Ver más'}
      </button>
      <SyntaxHighlighter language="json" style={dracula} wrapLongLines>
        {JSON.stringify(dataFooterComplete, null, 2)}
      </SyntaxHighlighter>
    </div>
  )
}

export const TabImplementation = () => {

  const [toggleExpandHTML, setToggleExpandHTML] = useState(false);
  const [showExampleImplementation, setShowExampleImplementation] = useState<string>(EXAMPLES_IMPLEMENTATION.react);

  return (
    <div style={{ position: "relative", paddingTop: "3rem", transition: 'all', ...(!toggleExpandHTML ? { maxHeight: "300px", overflowY: "hidden", } : {}) }}>
      <div style={{ position: 'absolute', top: '0px', padding: '0 0.25rem' }} className='w-100 d-flex justify-content-between '>
        <div className='d-flex gap-4'>
          <button
            className={`btn btn-outline-primary btn-sm my-2`}
            onClick={() => setShowExampleImplementation(EXAMPLES_IMPLEMENTATION.react)}
            style={{ backgroundColor: showExampleImplementation === EXAMPLES_IMPLEMENTATION.react ? '#336acc' : 'transparent', color: showExampleImplementation === EXAMPLES_IMPLEMENTATION.react ? '#fff' : '#000' }}
          >
            React JS
          </button>
          <button
            className={`btn btn-outline-primary btn-sm my-2`}
            onClick={() => setShowExampleImplementation(EXAMPLES_IMPLEMENTATION.angular)}
            style={{ backgroundColor: showExampleImplementation === EXAMPLES_IMPLEMENTATION.angular ? '#336acc' : 'transparent', color: showExampleImplementation === EXAMPLES_IMPLEMENTATION.angular ? '#fff' : '#000' }}
          >
            Angular JS
          </button>
        </div>
        <button
          className={`btn btn-outline-tertiary btn-sm my-2`}
          onClick={() => setToggleExpandHTML(!toggleExpandHTML)}
        >
          {toggleExpandHTML ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
      <SyntaxHighlighter language="tsx" style={dracula} wrapLongLines>
        {
          showExampleImplementation === EXAMPLES_IMPLEMENTATION.react ? footerCompleteImplementationReact
            :
            showExampleImplementation === EXAMPLES_IMPLEMENTATION.angular ? footerCompleteImplementationAngular
              : ''
        }
      </SyntaxHighlighter>
    </div>
  )
}