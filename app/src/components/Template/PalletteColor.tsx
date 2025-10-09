import React from 'react';

export interface ColorArray {
  name: string;
  hex: string;
  accessibility: string;
  danger?: boolean;
  customBorder?: boolean;
  fixedWidth?: boolean;
}

interface PalletteColorProps {
  arrayColor: ColorArray[];
  title: string;
  titleName: string;
}

const PalletteColor: React.FC<PalletteColorProps> = ({ title, arrayColor, titleName = false }) => {
  return (
    <div>
      <p className="fw-bold" style={{ marginBottom: '.75rem' }}>
        {title}
      </p>
      {arrayColor.map(({ name, hex, accessibility, danger, customBorder, fixedWidth = true }) => (
        <div className="box-color" key={hex}>
          <div
            className={`box-color-rectangle`}
            style={{ backgroundColor: hex, border: customBorder ? '2px solid #E6EBF0' : undefined }}
          ></div>
          <p className={`box-color-title ${fixedWidth ? 'fixed' : null}`}>{`${titleName}-${name}`}</p>
          <p className={`box-color-hex ${fixedWidth ? 'fixed' : null}`}>{hex.toUpperCase()}</p>
          {danger ? (
            <span className="badge badge-danger">{accessibility}</span>
          ) : (
            <span
              className="badge badge-default"
              style={{
                backgroundColor: 'transparent',
                outlineColor: '#101e37',
                color: '#101e37',
              }}
            >
              {accessibility}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default PalletteColor;
