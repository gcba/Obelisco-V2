// Hoja de rutas: app/src/components/Template/MainDescription.tsx
import React from 'react';

interface DescriptionTemplate {
  description: string;
}

const MainDescription = ({ description }: DescriptionTemplate) => {
  return (
    <div>
      <p className="lead">{description}</p>
    </div>
  );
};
export default MainDescription;
