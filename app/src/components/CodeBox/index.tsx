'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useId } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Toaster, toast } from 'sonner';

import styles from './CodeBox.module.scss';

const CodeBox = ({ codeHTML, children, codeJS }: { codeHTML: string; children?: React.ReactNode; codeJS?: string }) => {
  const [showButtonHTML, setShowButtonHTML] = useState(false);
  const [isExpandedHTML, setIsExpandedHTML] = useState(false);
  const [isHigherHTML, setIsHigherHTML] = useState(false);

  const [showButtonJS, setShowButtonJS] = useState(false);
  const [isExpandedJS, setIsExpandedJS] = useState(false);
  const [isHigherJS, setIsHigherJS] = useState(false);

  const codeHTMLRef = useRef<HTMLDivElement | null>(null);
  const codeJSRef = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    const currentCodeHTMLRef = codeHTMLRef.current;
    const currentCodeJSRef = codeJSRef.current;

    const observerHTML = new ResizeObserver(() => {
      if (currentCodeHTMLRef) {
        const height = currentCodeHTMLRef.clientHeight;
        setShowButtonHTML(height > 300);
        setIsHigherHTML(height > 300);
      }
    });

    const observerJS = new ResizeObserver(() => {
      if (currentCodeJSRef) {
        const height = currentCodeJSRef.clientHeight;
        setShowButtonJS(height > 300);
        setIsHigherJS(height > 300);
      }
    });

    if (currentCodeHTMLRef) {
      observerHTML.observe(currentCodeHTMLRef);
    }

    if (currentCodeJSRef) {
      observerJS.observe(currentCodeJSRef);
    }

    return () => {
      if (currentCodeHTMLRef) {
        observerHTML.unobserve(currentCodeHTMLRef);
      }

      if (currentCodeJSRef) {
        observerJS.unobserve(currentCodeJSRef);
      }
    };
  }, [codeHTML, codeJS]);

  const toggleExpandHTML = () => {
    setIsExpandedHTML(!isExpandedHTML);
  };

  const toggleExpandJS = () => {
    setIsExpandedJS(!isExpandedJS);
  };

  const codeRef = useRef<HTMLElement | null>(null);

  const copyCode = (codeElementRef: React.RefObject<HTMLElement>) => {
    if (codeElementRef.current) {
      const codeToCopy = codeElementRef.current.innerText;
      navigator.clipboard.writeText(codeToCopy);

      toast.success('Copiado', {
        duration: 1500,
        className: 'custom-toast',
        description: 'Se copió correctamente',
      });
    }
  };

  return (
    <>
      <nav className="tabs-box" aria-label="Navegación por pestañas">
        <ul className="nav nav-pills tabs nav-box" id={`icon-myTab-${id}`} role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target={`#panel-bg-content-1-${id}`}
              type="button"
              role="tab"
              aria-controls={`panel-bg-content-1-${id}`}
              aria-selected="true"
              id={`tab-bg-1-${id}`}
            >
              <div className="nav-icon">
                <i className="bx bxs-component"></i>
                Componente
              </div>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target={`#panel-bg-content-2-${id}`}
              type="button"
              role="tab"
              aria-controls={`panel-bg-content-2-${id}`}
              aria-selected="false"
              id={`tab-bg-2-${id}`}
            >
              <div className="nav-icon">
                <i className="bx bx-code-alt"></i>
                HTML
              </div>
            </button>
          </li>
          {codeJS && (
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target={`#panel-bg-content-3-${id}`}
                type="button"
                role="tab"
                aria-controls={`panel-bg-content-3-${id}`}
                aria-selected="false"
                id={`tab-bg-3-${id}`}
              >
                <div className="nav-icon">
                  <i className="bx bxs-file-js"></i>
                  JS
                </div>
              </button>
            </li>
          )}
        </ul>
      </nav>
      <div className={`tab-content ${styles.tabCodeBox}`} id={`icon-myTabContent-${id}`}>
        <div
          className="tab-pane fade show active"
          id={`panel-bg-content-1-${id}`}
          role="tabpanel"
          aria-labelledby={`tab-bg-1-${id}`}
        >
          <div className="py-5">{children}</div>
        </div>
        <div
          className="tab-pane fade p-2 position-relative"
          id={`panel-bg-content-2-${id}`}
          role="tabpanel"
          aria-labelledby={`tab-bg-2-${id}`}
        >
          <div
            className={`${styles.codeBoxDisplay} ${!isExpandedHTML ? styles.expanded : ''} ${isHigherHTML ? styles.codeMargin : ''}`}
            style={{ maxHeight: isExpandedHTML ? 'none' : '300px' }}
          >
            <div className={styles.boxCode} ref={codeHTMLRef}>
              <div className={isHigherHTML && !isExpandedHTML ? styles.faded : ''}></div>
              <SyntaxHighlighter
                language="tsx"
                style={dracula}
                customStyle={{ margin: 0 }}
                codeTagProps={{ ref: codeRef }}
                wrapLongLines
              >
                {codeHTML}
              </SyntaxHighlighter>
            </div>
            <button className={`btn btn-xs ${styles.btnCopy}`} onClick={() => copyCode(codeHTMLRef)}>
              <span className="material-symbols-rounded" aria-hidden="true">
                content_copy
              </span>
            </button>
          </div>
          {showButtonHTML && (
            <button className={`btn btn-primary btn-sm ${styles.codeBoxButton}`} onClick={toggleExpandHTML}>
              {isExpandedHTML ? 'Ver menos' : 'Ver más'}
              <span
                className={`material-symbols-rounded ${styles.codeBoxButtonIcon} ${isExpandedHTML ? styles.expanded : ''}`}
                aria-hidden="true"
              >
                keyboard_arrow_down
              </span>
            </button>
          )}
        </div>
        {codeJS && (
          <div
            className="tab-pane fade p-2 position-relative"
            id={`panel-bg-content-3-${id}`}
            role="tabpanel"
            aria-labelledby={`tab-bg-3-${id}`}
          >
            <div
              className={`${styles.codeBoxDisplay} ${!isExpandedJS ? styles.expanded : ''} ${isHigherJS ? styles.codeMargin : ''}`}
              style={{ maxHeight: isExpandedJS ? 'none' : '300px' }}
            >
              <div className={styles.boxCode} ref={codeJSRef}>
                <div className={isHigherJS && !isExpandedJS ? styles.faded : ''}></div>
                <SyntaxHighlighter
                  language="tsx"
                  style={dracula}
                  customStyle={{ cursor: 'pointer', margin: 0 }}
                  codeTagProps={{ ref: codeRef }}
                  wrapLongLines
                >
                  {codeJS}
                </SyntaxHighlighter>
              </div>
              <button className={`btn btn-xs ${styles.btnCopy}`} onClick={() => copyCode(codeJSRef)}>
                <span className="material-symbols-rounded" aria-hidden="true">
                  content_copy
                </span>
              </button>
            </div>
            {showButtonJS && (
              <button className={`btn btn-primary btn-sm ${styles.codeBoxButton}`} onClick={toggleExpandJS}>
                {isExpandedJS ? 'Ver menos' : 'Ver más'}
                <span
                  className={`material-symbols-rounded ${styles.codeBoxButtonIcon} ${isExpandedJS ? styles.expanded : ''}`}
                  aria-hidden="true"
                >
                  keyboard_arrow_down
                </span>
              </button>
            )}
          </div>
        )}
      </div>
      <Toaster position="bottom-right" expand={false} />
    </>
  );
};

export default CodeBox;
