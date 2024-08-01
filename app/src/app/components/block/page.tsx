// export default function Block() {
//   return (
//     <main>
//       <h4>Bloque de trámite</h4>
//       <div className="container my-5">
//         <div className="col-4">
//           <div className="card card-block position-sticky" style={{ top: 48 }}>
//             <div className="card-body">
//               <h2 className="block-title">
//                 Iniciá el trámite y completá todos los pasos
//               </h2>
//               <a
//                 href="#"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="btn btn-lg btn-primary btn-block"
//               >
//                 Iniciar trámite
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import BlockDocs from "@/documents/Badge/BadgeDocs";
import React from "react";

export default function BlockPage () {
  return <BlockDocs />;
}