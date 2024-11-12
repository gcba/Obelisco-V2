'use client';
import React from 'react';

const ScrollspySubtitle = ({ text, ScrollspyComponent = false }: { text: string; ScrollspyComponent?: boolean }) => {
  return (
    <div
      className={`d-flex align-items-center ${ScrollspyComponent ? 'ps-1' : ''}`.trim()}
      style={{ gap: ScrollspyComponent ? '0.125rem' : '.25rem' }}
    >
      <span
        className="material-symbols-rounded"
        style={{ fontSize: ScrollspyComponent ? '12px' : '16px' }}
        aria-hidden="true"
      >
        arrow_right_alt
      </span>
      {text}
    </div>
  );
};

export default ScrollspySubtitle;
