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
