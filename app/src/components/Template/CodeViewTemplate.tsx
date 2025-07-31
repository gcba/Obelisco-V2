import { useEffect, useRef, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { toast, Toaster } from 'sonner';

import styles from '@/components/CodeBox/CodeBox.module.scss';

export const CodeViewTemplate = ({ template }: { template: string }) => {
  const [toggleExpandHTML, setToggleExpandHTML] = useState(false);
  const codeRefHTML = useRef<HTMLDivElement | null>(null);
  const [showButtonHTML, setShowButtonHTML] = useState(false);

  const copyCode = (codeElementRef: React.RefObject<HTMLElement>) => {
    if (codeElementRef.current) {
      const codeToCopy = codeElementRef.current.innerText;
      navigator.clipboard.writeText(codeToCopy);

      toast.success('Copiado', {
        duration: 1000,
        className: 'custom-toast',
        description: 'Se copio correctamente',
      });
    }
  };

  useEffect(() => {
    const currentCodeHTMLRef = codeRefHTML.current;

    const observerHTML = new ResizeObserver(() => {
      if (currentCodeHTMLRef) {
        const height = currentCodeHTMLRef.clientHeight;
        setShowButtonHTML(height >= 300);
      }
    });

    if (currentCodeHTMLRef) {
      observerHTML.observe(currentCodeHTMLRef);
    }

    return () => {
      if (currentCodeHTMLRef) {
        observerHTML.unobserve(currentCodeHTMLRef);
      }
    };
  }, [template]);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      {showButtonHTML && (
        <button
          className={`btn btn-outline-tertiary btn-sm my-2 `}
          style={{ position: 'absolute', right: '1rem', top: '-3rem', minWidth: '140px' }}
          onClick={() => setToggleExpandHTML(!toggleExpandHTML)}
        >
          {toggleExpandHTML ? 'Ver menos' : 'Ver más'}
        </button>
      )}

      <div style={{ position: 'relative', ...(!toggleExpandHTML ? { maxHeight: '300px', overflowY: 'hidden' } : {}) }}>
        <div ref={codeRefHTML}>
          <div className={!toggleExpandHTML ? styles.faded : ''}></div>
          <SyntaxHighlighter language="tsx" style={dracula} wrapLongLines>
            {template}
          </SyntaxHighlighter>
        </div>

        <button className={`btn btn-xs ${styles.btnCopy}`} onClick={() => copyCode(codeRefHTML)}>
          <span className="material-symbols-rounded" aria-hidden="true">
            content_copy
          </span>
        </button>
      </div>
      <Toaster position="bottom-right" expand={false} />
    </div>
  );
};
