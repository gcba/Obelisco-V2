// export default function Buttons() {
//   return (
//     <main>
//       <h4>Botones</h4>
//       <div className="container my-5">
//         <div className="d-flex gap-2 mb-4">
//           <button type="button" className="btn btn-primary">
//             Primario
//           </button>
//           <button type="button" className="btn btn-secondary">
//             Secundario
//           </button>
//           <button type="button" className="btn btn-success">
//             Éxito
//           </button>
//           <button type="button" className="btn btn-danger">
//             Error
//           </button>
//           <button type="button" className="btn btn-link">
//             Link
//           </button>
//         </div>
//         <div className="d-flex gap-2 mb-4">
//           <button type="button" className="btn btn-outline-primary">
//             Primario
//           </button>
//           <button type="button" className="btn btn-outline-secondary">
//             Secundario
//           </button>
//           <button type="button" className="btn btn-outline-success">
//             Éxito
//           </button>
//           <button type="button" className="btn btn-outline-danger">
//             Error
//           </button>
//           <button type="button" className="btn btn-outline-link">
//             Link
//           </button>
//         </div>

//         <h5>Botón expandible</h5>
//         <button type="button" className="btn btn-secondary btn-block">
//           Secundario
//         </button>
//         <h5>Tamaños de botones</h5>
//         <div className="d-flex gap-2">
//           <button type="button" className="btn btn-primary btn-sm">
//             Botón chico
//           </button>
//           <button type="button" className="btn btn-primary">
//             Botón mediano
//           </button>
//           <button type="button" className="btn btn-primary btn-lg">
//             Botón grande
//           </button>
//         </div>
//         <h5>Botón con icono</h5>
//         <div className="d-flex gap-2">

//           <button type="button" className="btn btn-primary btn-icon">
//             <i className="bx bxs-info-circle"></i>Botón
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

import ButtonDocs from "@/documents/Button/ButtonDocs";
import React from "react";

export default function ButtonPage () {
  return <ButtonDocs />;
}