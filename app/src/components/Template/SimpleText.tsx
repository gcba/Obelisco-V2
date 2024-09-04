import React from 'react';

interface SimpleTextTemplate {
  description: string;
}

const SimpleText = ({ description }: SimpleTextTemplate) => {
  return (
    <div>
      <p className="mb-4">{description}</p>
    </div>
  );
};
export default SimpleText;
