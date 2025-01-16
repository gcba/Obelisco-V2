'use client';
import React from 'react';

export const ScrollspySubtitle = ({
  text,
  ScrollspyComponent = false,
}: {
  text: string | React.ReactNode;
  ScrollspyComponent?: boolean;
}) => {
  return (
    <div
      className={`d-flex align-items-center ${ScrollspyComponent ? 'ps-3' : ''}`.trim()}
      style={{ gap: ScrollspyComponent ? '0.125rem' : '.25rem' }}
    >
      {text}
    </div>
  );
};

export const ScrollspyThirdLevel = ({
  text,
  ScrollspyComponent = false,
}: {
  text: string | React.ReactNode;
  ScrollspyComponent?: boolean;
}) => {
  return (
    <div
      className={`d-flex align-items-center ${ScrollspyComponent ? 'ps-5' : ''}`.trim()}
      style={{ gap: ScrollspyComponent ? '0.125rem' : '.25rem' }}
    >
      {text}
    </div>
  );
};

