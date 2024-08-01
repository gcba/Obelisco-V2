import React, { ReactNode } from "react";
interface BoxData {
  children: ReactNode | ReactNode[];
}

const BoxTemplate = ({ children }: BoxData) => {
  return (
    <div className="py-3 py-md-5">
      {children}
    </div>
  );
};
export default BoxTemplate;
