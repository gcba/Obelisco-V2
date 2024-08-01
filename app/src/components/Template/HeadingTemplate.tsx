import React, { ReactElement } from "react";

interface HeadingTemplateProps {
  children: ReactElement;
  id?: string;
  className?: string;
  ref?: any;
}

const HeadingTemplate = ({ id, children, className, ref }: HeadingTemplateProps) => {
  return <div className={`mb-4 pt-3 heading-top ${className}`} id={id} ref={ref}>{children}</div>;
};

export default HeadingTemplate;
