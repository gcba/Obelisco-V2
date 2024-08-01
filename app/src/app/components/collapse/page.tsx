// export default function Collapse() {
//   return (
//     <main>
//       <h4>Colapsable</h4>
//       <div className="container">
//         <div className="accordion" id="accordionExample">
//           <div className="card">
//             <button
//               className="card-header collapsed"
//               data-toggle="collapse"
//               data-target="#collapseOne"
//             >
//               Título
//             </button>
//             <div
//               id="collapseOne"
//               className="collapse"
//               data-parent="#accordionExample"
//             >
//               <div className="card-body">
//                 <p>
//                   Esta es la descripción que se encuentra dentro de un
//                   colapsable. Recomendamos no utilizar demasiado texto, para
//                   generar una lectura óptima.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <button
//               className="card-header collapsed"
//               data-toggle="collapse"
//               data-target="#collapseTwo"
//             >
//               Título
//             </button>
//             <div
//               id="collapseTwo"
//               className="collapse"
//               data-parent="#accordionExample"
//             >
//               <div className="card-body">
//                 <p>
//                   Esta es la descripción que se encuentra dentro de un
//                   colapsable. Recomendamos no utilizar demasiado texto, para
//                   generar una lectura óptima.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <button
//               className="card-header collapsed"
//               data-toggle="collapse"
//               data-target="#collapseThree"
//             >
//               Título
//             </button>
//             <div
//               id="collapseThree"
//               className="collapse"
//               data-parent="#accordionExample"
//             >
//               <div className="card-body">
//                 <p>
//                   Esta es la descripción que se encuentra dentro de un
//                   colapsable. Recomendamos no utilizar demasiado texto, para
//                   generar una lectura óptima.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="accordion accordion-white" id="accordionExampleTwo">
//           <div className="card">
//             <button
//               className="card-header collapsed"
//               data-toggle="collapse"
//               data-target="#collapseFour"
//               /* data-bs-toggle="collapse"
//               data-bs-target="#collapseFour"
//               aria-expanded="false"
//               aria-controls="collapseFour" */
//             >
//               Título
//             </button>
//             <div
//               id="collapseFour"
//               className="collapse"
//               data-parent="#accordionExampleTwo"
//             >
//               <div className="card-body">
//                 <p>
//                   Esta es la descripción que se encuentra dentro de un
//                   colapsable. Recomendamos no utilizar demasiado texto, para
//                   generar una lectura óptima.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <button
//               className="card-header collapsed"
//               data-toggle="collapse"
//               data-target="#collapseFive"
//             >
//               Título
//             </button>
//             <div
//               id="collapseFive"
//               className="collapse"
//               data-parent="#accordionExampleTwo"
//             >
//               <div className="card-body">
//                 <p>
//                   Esta es la descripción que se encuentra dentro de un
//                   colapsable. Recomendamos no utilizar demasiado texto, para
//                   generar una lectura óptima.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <button
//               className="card-header collapsed"
//               data-toggle="collapse"
//               data-target="#collapseSix"
//             >
//               Título
//             </button>
//             <div
//               id="collapseSix"
//               className="collapse"
//               data-parent="#accordionExampleTwo"
//             >
//               <div className="card-body">
//                 <p>
//                   Esta es la descripción que se encuentra dentro de un
//                   colapsable. Recomendamos no utilizar demasiado texto, para
//                   generar una lectura óptima.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container mb-5">
//         <h2>Accordion B5</h2>
//         <div className="accordion" id="accordionExample">
//           <div className="accordion-item">
//             <h2 className="accordion-header">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseOne"
//                 aria-expanded="true"
//                 aria-controls="collapseOne"
//               >
//                 Accordion Item #1
//               </button>
//             </h2>
//             <div
//               id="collapseOne"
//               className="accordion-collapse collapse"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 <strong>This is the first item's accordion body.</strong> It is
//                 shown by default, until the collapse plugin adds the appropriate
//                 classNamees that we use to style each element. These classNamees
//                 control the overall appearance, as well as the showing and
//                 hiding via CSS transitions. You can modify any of this with
//                 custom CSS or overriding our default variables. It's also worth
//                 noting that just about any HTML can go within the{" "}
//                 <code>.accordion-body</code>, though the transition does limit
//                 overflow.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseTwo"
//                 aria-expanded="false"
//                 aria-controls="collapseTwo"
//               >
//                 Accordion Item #2
//               </button>
//             </h2>
//             <div
//               id="collapseTwo"
//               className="accordion-collapse collapse"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 <strong>This is the second item's accordion body.</strong> It is
//                 hidden by default, until the collapse plugin adds the
//                 appropriate classNamees that we use to style each element. These
//                 classNamees control the overall appearance, as well as the
//                 showing and hiding via CSS transitions. You can modify any of
//                 this with custom CSS or overriding our default variables. It's
//                 also worth noting that just about any HTML can go within the{" "}
//                 <code>.accordion-body</code>, though the transition does limit
//                 overflow.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseThree"
//                 aria-expanded="false"
//                 aria-controls="collapseThree"
//               >
//                 Accordion Item #3
//               </button>
//             </h2>
//             <div
//               id="collapseThree"
//               className="accordion-collapse collapse"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 <strong>This is the third item's accordion body.</strong> It is
//                 hidden by default, until the collapse plugin adds the
//                 appropriate classNamees that we use to style each element. These
//                 classNamees control the overall appearance, as well as the
//                 showing and hiding via CSS transitions. You can modify any of
//                 this with custom CSS or overriding our default variables. It's
//                 also worth noting that just about any HTML can go within the{" "}
//                 <code>.accordion-body</code>, though the transition does limit
//                 overflow.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container mb-5">
//         <h2>Colapsable B5</h2>
//         <p className="d-inline-flex gap-1">
//           <button
//             className="btn btn-primary"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapseExample"
//             aria-expanded="false"
//             aria-controls="collapseExample"
//           >
//             Colapsable
//           </button>
//         </p>
//         <div className="collapse" id="collapseExample">
//           <div className="card card-body">
//             Some placeholder content for the collapse component. This panel is
//             hidden by default but revealed when the user activates the relevant
//             trigger.
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


import CollapseDocs from "@/documents/Collapse/CollapseDocs";
import React from "react";

export default function CollapsePage () {
  return <CollapseDocs />;
}