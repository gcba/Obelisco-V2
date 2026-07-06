'use client';
import React from 'react';

interface ScrollspySubtitleProps {
  text: string | React.ReactNode;
  ScrollspyComponent?: boolean;
  tertiaryLevel?: boolean;
}

const ScrollspySubtitle: React.FC<ScrollspySubtitleProps> = ({
  text,
  ScrollspyComponent = false,
  tertiaryLevel = false,
}) => {
  // Convertir a string si es un ReactNode y extraer la primera parte del texto
  const textoString = typeof text === 'string' ? text : '';
  const primeraParte = textoString.split('<i>')[0].trim();

  const textosAplicarSaltoDeLinea = [
    'Enlaces independientes',
    'Enlaces de anclaje',
    'Enlaces en bloques de texto',
  ].includes(primeraParte);

  // Aplicar tamaño pequeño SOLO en el CONTENIDO PRINCIPAL para tercer nivel
  const tertiaryStyle =
    !ScrollspyComponent && tertiaryLevel
      ? {
          fontSize: '0.875rem', // Tamaño pequeño para tercer nivel en CONTENIDO
        }
      : {};

  // Aplicar indentación SOLO en el scrollspy
  const indentStyle =
    ScrollspyComponent && tertiaryLevel
      ? {
          marginLeft: '32px',
        }
      : {};

  return (
    <div
      className={`${textosAplicarSaltoDeLinea && ScrollspyComponent ? 'd-flex flex-column ps-3' : ''}`.trim()}
      style={
        textosAplicarSaltoDeLinea && ScrollspyComponent
          ? {
              gap: '0.125rem',
              alignItems: 'flex-start',
              ...indentStyle,
              ...tertiaryStyle,
            }
          : {
              gap: '.25rem',
              alignItems: 'center',
              marginLeft: ScrollspyComponent && tertiaryLevel ? '32px' : '16px',
              ...indentStyle,
              ...tertiaryStyle,
            }
      }
    >
      {text}
    </div>
  );
};

export default ScrollspySubtitle;
