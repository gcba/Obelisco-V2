'use client';
import React, { useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Toaster, toast } from 'sonner';

const CodeCopy = ({ code }: { code: string }) => {
  const codeRef = useRef<HTMLElement | null>(null);

  const copyCode = () => {
    if (codeRef.current) {
      const codeToCopy = codeRef.current.innerText;
      navigator.clipboard.writeText(codeToCopy);

      toast.success('Copiado', {
        duration: 1000,
        className: 'custom-toast',
        description: 'Se copio correctamente',
      });
    }
  };

  return (
    <>
      <div onClick={copyCode} style={{ cursor: 'pointer' }} className="box-code pb-2 w-100">
        <SyntaxHighlighter
          language="tsx"
          style={dracula}
          customStyle={{ cursor: 'pointer' }}
          codeTagProps={{ ref: codeRef }}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <Toaster position="bottom-right" expand={false} />
    </>
  );
};

export default CodeCopy;
