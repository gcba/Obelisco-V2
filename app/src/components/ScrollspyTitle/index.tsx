'use client';
import React from 'react';

const ScrollspySubtitle = ({
  text,
  ScrollspyComponent = false,
}: {
  text: string | React.ReactNode;
  ScrollspyComponent?: boolean;
}) => {
  // Convertir a string si es un ReactNode y extraer la primera parte del texto
  const textoString = typeof text === 'string' ? text : '';
  const primeraParte = textoString.split('<i>')[0].trim();

  const textosAplicarSaltoDeLinea = [
    'Enlaces independientes',
    'Enlaces de anclaje',
    'Enlaces en bloques de texto',
  ].includes(primeraParte);

  return (
    <div
      className={`${textosAplicarSaltoDeLinea && ScrollspyComponent ? 'd-flex flex-column ps-3' : ''}`.trim()}
      style={
        textosAplicarSaltoDeLinea && ScrollspyComponent
          ? {
              gap: '0.125rem',
              alignItems: 'flex-start',
            }
          : {
              gap: '.25rem',
              alignItems: 'center',
            }
      }
    >
      {text}
    </div>
  );
};

export default ScrollspySubtitle;
