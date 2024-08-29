import React, { ReactNode } from 'react';

interface BoxTemplateProps {
  children: ReactNode | ReactNode[];
  className?: string;
}

const BoxTemplate = ({ children, className }: BoxTemplateProps) => {
  return <div className={className}>{children}</div>;
};

export default BoxTemplate;
