import React, { ReactNode } from 'react';

interface ComponentHeaderProps {
  title: string;
  description?: string | ReactNode | (string | ReactNode)[];
  divider?: boolean;
}

const ComponentHeader: React.FC<ComponentHeaderProps> = ({ title, description, divider = false }) => {
  return (
    <div className="component-header">
      <h1>{title}</h1>
      {Array.isArray(description) ? description.map((el, index) => <p key={index}>{el}</p>) : <p>{description}</p>}
      {divider && <hr className="nav-divider" />}
    </div>
  );
};

export default ComponentHeader;
