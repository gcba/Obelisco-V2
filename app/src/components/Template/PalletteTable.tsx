import React from 'react';

export interface ColorTableArray {
  base: string;
  variable: string;
  hex: string;
  use: string;
  customBorder?: boolean;
}

interface PalletteTableProps {
  arrayTableColors: ColorTableArray[];
}

const PalletteTable: React.FC<PalletteTableProps> = ({ arrayTableColors }) => {
  return (
    <div className="responsive-scroll mt-4 mb-5" tabIndex={0}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ width: '24%', minWidth: "fit-content" }} className="tb-text">
              <span className="th-title">Base</span>
            </th>
            <th scope="col" style={{ width: '29%', minWidth: "fit-content" }} className="tb-text">
              <span className="th-title">Variable</span>
            </th>
            <th scope="col" style={{ width: '47%', minWidth: "fit-content" }} className="tb-text">
              <span className="th-title">Uso</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {arrayTableColors.map(({ base, hex, variable, use, customBorder }) => (
            <tr key={variable}>
              <td className="text-right">
                <div className="bg-light p-2 rounded-3 d-inline-block">
                  <span>{base}</span>
                </div>
              </td>
              <td>
                <div className="d-flex gap-2 align-items-center">
                  <span
                    className="rounded-1"
                    style={{
                      minWidth: '32px',
                      width: '32px',
                      height: '32px',
                      backgroundColor: hex,
                      border: customBorder ? '1px solid #E6EBF0' : undefined,
                    }}
                  ></span>
                  <span>{variable}</span>
                </div>
              </td>
              <td>
                <span>{use}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PalletteTable;
