'use client';
import React from 'react';

const ScrollspySubtitle = ({ text, ScrollspyComponent = false }: { text: string | React.ReactNode; ScrollspyComponent?: boolean }) => {
  return (
    <div
      className={`d-flex align-items-center ${ScrollspyComponent ? 'ps-3' : ''}`.trim()}
      style={{ gap: ScrollspyComponent ? '0.125rem' : '.25rem' }}
    >
      {text}
    </div>
  );
};

export default ScrollspySubtitle;
