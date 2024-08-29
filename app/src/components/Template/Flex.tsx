import React, { ReactNode } from 'react';

interface FlexData {
  children: ReactNode[] | ReactNode;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  justifySm?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  justifyMd?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  justifyLg?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
}

const Flex = ({ children, justify, justifySm, justifyMd, justifyLg }: FlexData) => {
  const getJustifyClass = (breakpoint?: string) => (value?: string) =>
    value ? `justify-content${breakpoint ? `-${breakpoint}` : ''}-${value}` : '';

  const justifyClass = getJustifyClass()(justify);
  const justifySmClass = getJustifyClass('sm')(justifySm);
  const justifyMdClass = getJustifyClass('md')(justifyMd);
  const justifyLgClass = getJustifyClass('lg')(justifyLg);

  const className = `d-flex ${justifyClass} ${justifySmClass} ${justifyMdClass} ${justifyLgClass}`;

  return <div className={className}>{children}</div>;
};

export default Flex;

// <>
// /* Ejemplo 1: Justificar al inicio en todos los breakpoints */
// <Flex justify="start">
//   <div>Elemento 1</div>
//   <div>Elemento 2</div>
// </Flex>

// /* Ejemplo 2: Justificar al centro en dispositivos pequeños y alrededor en dispositivos grandes */
// <Flex justifySm="center" justifyLg="around">
//   <div>Elemento 1</div>
//   <div>Elemento 2</div>
// </Flex>

// /* Ejemplo 3: Justificar entre elementos en dispositivos medianos y uniformemente en dispositivos grandes */
// <Flex justifyMd="between" justifyLg="evenly">
//   <div>Elemento 1</div>
//   <div>Elemento 2</div>
// </Flex>

// /* Ejemplo 4: Justificar al final en todos los breakpoints */
// <Flex justify="end" justifySm="end" justifyMd="end" justifyLg="end">
//   <div>Elemento 1</div>
//   <div>Elemento 2</div>
// </Flex>

// /* Ejemplo 5: Justificar alrededor en dispositivos pequeños y al final en dispositivos grandes */
// <Flex justifySm="around" justifyLg="end">
//   <div>Elemento 1</div>
//   <div>Elemento 2</div>
// </Flex>
// </>
