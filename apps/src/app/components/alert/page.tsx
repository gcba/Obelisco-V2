// export default function Alert() {
//     return (
//       <main>

//         <h4>Alerta</h4>

//         <div className="w-50 d-flex flex-column gap-2 mb-3">
//           <div className="alert alert-info" role="alert">
//             <p>Esta es la descripción de una alerta de información.</p>
//           </div>
//           <div className="alert alert-primary" role="alert">
//             <p>Esta es la descripción de una alerta primaria.</p>
//           </div>
//           <div className="alert alert-success" role="alert">
//             <p>Esta es la descripción de una alerta de éxito.</p>
//           </div>
//           <div className="alert alert-danger" role="alert">
//             <p>Esta es la descripción de una alerta de error.</p>
//           </div>
//           <div className="alert alert-warning" role="alert">
//             <p>Esta es la descripción de una alerta de advertencia.</p>
//           </div>
//         </div>

//         <div className="w-50 d-flex flex-column gap-2 mb-3">
//           con cierre
//           <div
//             className="alert alert-warning alert-dismissible show fade"
//             role="alert"
//           >
//             <p>Esta es la descripción de una alerta de error.</p>
//             <button
//               type="button"
//               className="close"
//               data-dismiss="alert"
//               aria-label="Cerrar"
//             >
//               <span className="material-icons-round">close</span>
//             </button>
//           </div>
//           Nuevo html de B5
//           <div
//             className="alert alert-warning alert-dismissible fade show"
//             role="alert"
//           >
//             <strong>Holy guacamole!</strong> You should check in on some of those
//             fields below.
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="alert"
//               aria-label="Cerrar"
//             ></button>
//           </div>
//         </div>
//         <div className="w-50 d-flex flex-column gap-2 mb-3">
//           <div className="alert alert-danger" role="alert">
//             <p>
//               <strong>Este es un destacado de una alerta de error.</strong>
//               Esta es la descripción de una alerta de error que continua al texto
//               destacado.
//             </p>
//             <ol className="list-links">
//               <li>
//                 <a href="#">Ancla al error 1</a>
//               </li>
//               <li>
//                 <a href="#">Ancla al error 2</a>
//               </li>
//               <li>
//                 <a href="#">Ancla al error 3</a>
//               </li>
//               <li>
//                 <a href="#">Ancla al error 4</a>
//               </li>
//               <li>
//                 <a href="#">Ancla al error 5</a>
//               </li>
//             </ol>
//           </div>
//           <div className="alert alert-info" role="alert">
//             <p>
//               <strong>Este es un destacado de una alerta de información.</strong>
//               Esta es la descripción de una alerta de información que continua al
//               texto destacado.
//             </p>
//             <ol className="">
//               <li>
//                 <span>Texto descriptivo 1</span>
//               </li>
//               <li>
//                 <span>Texto descriptivo 2</span>
//               </li>
//               <li>
//                 <span>Texto descriptivo 3</span>
//               </li>
//               <li>
//                 <span>Texto descriptivo 4</span>
//               </li>
//               <li>
//                 <span>Texto descriptivo 5</span>
//               </li>
//             </ol>
//           </div>
//         </div>
//       </main>
//     );
//   }

import AlertDocs from "@/documents/Alert/AlertDocs";
import React from "react";

export default function AlertPage () {
  return <AlertDocs />;
}
