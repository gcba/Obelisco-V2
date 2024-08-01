// export default function Collapse () {
//   return (
//     <>
//       <nav className="tabs-slider" aria-label="Navegación por pestañas">
//         <ul className="nav nav-pills tabs" id="simple-myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-1"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-1"
//               aria-selected="false"
//               id="tab-1"
//             >
//               Pestaña 1
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-2"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-2"
//               aria-selected="false"
//               id="tab-2"
//             >
//               Pestaña 2
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link active"
//               data-toggle="tab"
//               data-target="#panel-content-3"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-3"
//               aria-selected="true"
//               id="tab-3"
//             >
//               Pestaña 3
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link disabled"
//               disabled
//               //tabindex="-1"
//               data-toggle="tab"
//               data-target="#panel-content-4"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-4"
//               aria-selected="false"
//               id="tab-4"
//             >
//               Pestaña 4
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div className="tab-content" id="simple-myTabContent">
//         <div
//           className="tab-pane fade"
//           id="panel-content-1"
//           role="tabpanel"
//           aria-labelledby="tab-1"
//         >
//           Contenido Pestaña 1
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-2"
//           role="tabpanel"
//           aria-labelledby="tab-2"
//         >
//           Contenido Pestaña 2
//         </div>
//         <div
//           className="tab-pane fade show active"
//           id="panel-content-3"
//           role="tabpanel"
//           aria-labelledby="tab-3"
//         >
//           Contenido Pestaña 3
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-4"
//           role="tabpanel"
//           aria-labelledby="tab-4"
//         >
//           Contenido Pestaña 4
//         </div>
//       </div>

//       <hr />

//       <nav className="tabs-slider" aria-label="Navegación por pestañas">
//         <ul className="nav nav-pills tabs fixedWidth" id="width-myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link active"
//               data-toggle="tab"
//               data-target="#panel-content-1"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-1"
//               aria-selected="true"
//               id="tab-1"
//             >
//               Pestaña 1
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-2"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-2"
//               aria-selected="false"
//               id="tab-2"
//             >
//               Pestaña 2
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-3"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-3"
//               aria-selected="false"
//               id="tab-3"
//             >
//               Pestaña 3
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link disabled"
//               disabled
//               //tabindex="-1"
//               data-toggle="tab"
//               data-target="#panel-content-4"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-4"
//               aria-selected="false"
//               id="tab-4"
//             >
//               Pestaña 4
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div className="tab-content" id="width-myTabContent">
//         <div
//           className="tab-pane fade show active"
//           id="panel-content-1"
//           role="tabpanel"
//           aria-labelledby="tab-1"
//         >
//           Contenido Pestaña 1
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-2"
//           role="tabpanel"
//           aria-labelledby="tab-2"
//         >
//           Contenido Pestaña 2
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-3"
//           role="tabpanel"
//           aria-labelledby="tab-3"
//         >
//           Contenido Pestaña 3
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-4"
//           role="tabpanel"
//           aria-labelledby="tab-4"
//         >
//           Contenido Pestaña 4
//         </div>
//       </div>

//       <hr />
//       <nav className="tabs-slider" aria-label="Navegación por pestañas">
//         <ul className="nav nav-pills tabs" id="icon-myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link active"
//               data-toggle="tab"
//               data-target="#panel-content-1"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-1"
//               aria-selected="true"
//               id="tab-1"
//             >
//               <div className="nav-icon">
//                 Pestaña 1
//                 <span className="material-icons-round">home</span>
//               </div>
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-2"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-2"
//               aria-selected="false"
//               id="tab-2"
//             >
//               <div className="nav-icon">
//                 Pestaña 2
//                 <span className="material-icons-round">home</span>
//               </div>
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-3"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-3"
//               aria-selected="false"
//               id="tab-3"
//             >
//               <div className="nav-icon">
//                 Pestaña 3
//                 <span className="material-icons-round">home</span>
//               </div>
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link disabled"
//               disabled
//               //tabindex="-1"
//               data-toggle="tab"
//               data-target="#panel-content-4"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-4"
//               aria-selected="false"
//               id="tab-4"
//             >
//               <div className="nav-icon">
//                 Pestaña 4
//                 <span className="material-icons-round">home</span>
//               </div>
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div className="tab-content" id="icon-myTabContent">
//         <div
//           className="tab-pane fade show active"
//           id="panel-content-1"
//           role="tabpanel"
//           aria-labelledby="tab-1"
//         >
//           Contenido Pestaña 1
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-2"
//           role="tabpanel"
//           aria-labelledby="tab-2"
//         >
//           Contenido Pestaña 2
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-3"
//           role="tabpanel"
//           aria-labelledby="tab-3"
//         >
//           Contenido Pestaña 3
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-4"
//           role="tabpanel"
//           aria-labelledby="tab-4"
//         >
//           Contenido Pestaña 4
//         </div>
//       </div>

//       <hr />

//       <div className="storybook__container-tabs">
//         <nav className="tabs-slider" aria-label="Navegación por pestañas">
//           <ul className="nav nav-pills tabs" id="slider-myTab" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link active"
//                 data-toggle="tab"
//                 data-target="#panel-content-14"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-14"
//                 aria-selected="true"
//                 id="tab-14"
//               >
//                 <div className="nav-icon">
//                   Pestaña 1
//                   <span className="material-icons-round">home</span>
//                 </div>
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link"
//                 data-toggle="tab"
//                 data-target="#panel-content-15"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-15"
//                 aria-selected="false"
//                 id="tab-15"
//               >
//                 <div className="nav-icon">
//                   Pestaña 2
//                   <span className="material-icons-round">home</span>
//                 </div>
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link"
//                 data-toggle="tab"
//                 data-target="#panel-content-16"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-16"
//                 aria-selected="false"
//                 id="tab-16"
//               >
//                 <div className="nav-icon">
//                   Pestaña 3
//                   <span className="material-icons-round">home</span>
//                 </div>
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link"
//                 data-toggle="tab"
//                 data-target="#panel-content-17"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-17"
//                 aria-selected="false"
//                 id="tab-17"
//               >
//                 <div className="nav-icon">
//                   Pestaña 4
//                   <span className="material-icons-round">home</span>
//                 </div>
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link"
//                 data-toggle="tab"
//                 data-target="#panel-content-18"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-18"
//                 aria-selected="false"
//                 id="tab-18"
//               >
//                 <div className="nav-icon">
//                   Pestaña 5
//                   <span className="material-icons-round">home</span>
//                 </div>
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link"
//                 data-toggle="tab"
//                 data-target="#panel-content-19"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-19"
//                 aria-selected="false"
//                 id="tab-19"
//               >
//                 <div className="nav-icon">
//                   Pestaña 6
//                   <span className="material-icons-round">home</span>
//                 </div>
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link"
//                 data-toggle="tab"
//                 data-target="#panel-content-20"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-20"
//                 aria-selected="false"
//                 id="tab-20"
//               >
//                 <div className="nav-icon">
//                   Pestaña 7
//                   <span className="material-icons-round">home</span>
//                 </div>
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link"
//                 data-toggle="tab"
//                 data-target="#panel-content-21"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-21"
//                 aria-selected="false"
//                 id="tab-21"
//               >
//                 <div className="nav-icon">
//                   Pestaña 8
//                   <span className="material-icons-round">home</span>
//                 </div>
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link"
//                 data-toggle="tab"
//                 data-target="#panel-content-22"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-22"
//                 aria-selected="false"
//                 id="tab-22"
//               >
//                 <div className="nav-icon">
//                   Pestaña 9
//                   <span className="material-icons-round">home</span>
//                 </div>
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link disabled"
//                 disabled
//                 //tabindex="-1"
//                 data-toggle="tab"
//                 data-target="#panel-content-23"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-23"
//                 aria-selected="false"
//                 id="tab-23"
//               >
//                 <div className="nav-icon">
//                   Pestaña 10
//                   <span className="material-icons-round">home</span>
//                 </div>
//               </button>
//             </li>
//           </ul>
//           <div className="icons-container">
//             <button className="right-left icon" id="left">
//               <span className="material-icons-round">arrow_back_ios</span>
//             </button>
//             <button className="right-left icon" id="right">
//               <span className="material-icons-round">arrow_forward_ios</span>
//             </button>
//           </div>
//         </nav>
//         <div className="tab-content" id="slider-myTabContent">
//           <div
//             className="tab-pane fade show active"
//             id="panel-content-14"
//             role="tabpanel"
//             aria-labelledby="tab-14"
//           >
//             Contenido Pestaña 1
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-15"
//             role="tabpanel"
//             aria-labelledby="tab-15"
//           >
//             Contenido Pestaña 2
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-16"
//             role="tabpanel"
//             aria-labelledby="tab-16"
//           >
//             Contenido Pestaña 3
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-17"
//             role="tabpanel"
//             aria-labelledby="tab-17"
//           >
//             Contenido Pestaña 4
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-18"
//             role="tabpanel"
//             aria-labelledby="tab-18"
//           >
//             Contenido Pestaña 5
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-19"
//             role="tabpanel"
//             aria-labelledby="tab-19"
//           >
//             Contenido Pestaña 6
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-20"
//             role="tabpanel"
//             aria-labelledby="tab-20"
//           >
//             Contenido Pestaña 7
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-21"
//             role="tabpanel"
//             aria-labelledby="tab-21"
//           >
//             Contenido Pestaña 8
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-22"
//             role="tabpanel"
//             aria-labelledby="tab-22"
//           >
//             Contenido Pestaña 9
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-23"
//             role="tabpanel"
//             aria-labelledby="tab-23"
//           >
//             Contenido Pestaña 10
//           </div>
//         </div>
//       </div>

//       <hr />

//       <nav className="tabs-slider" aria-label="Navegación por pestañas">
//         <ul className="nav nav-pills tabs nav-box" id="simple-myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link active"
//               data-toggle="tab"
//               data-target="#panel-content-1"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-1"
//               aria-selected="true"
//               id="tab-1"
//             >
//               Pestaña 1
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-2"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-2"
//               aria-selected="false"
//               id="tab-2"
//             >
//               Pestaña 2
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-3"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-3"
//               aria-selected="false"
//               id="tab-3"
//             >
//               Pestaña 3
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link disabled"
//               disabled
//               //tabindex="-1"
//               data-toggle="tab"
//               data-target="#panel-content-4"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-4"
//               aria-selected="false"
//               id="tab-4"
//             >
//               Pestaña 4
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div className="tab-content" id="simple-myTabContent">
//         <div
//           className="tab-pane fade show active"
//           id="panel-content-1"
//           role="tabpanel"
//           aria-labelledby="tab-1"
//         >
//           Contenido Pestaña 1
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-2"
//           role="tabpanel"
//           aria-labelledby="tab-2"
//         >
//           Contenido Pestaña 2
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-3"
//           role="tabpanel"
//           aria-labelledby="tab-3"
//         >
//           Contenido Pestaña 3
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-4"
//           role="tabpanel"
//           aria-labelledby="tab-4"
//         >
//           Contenido Pestaña 4
//         </div>
//       </div>
//       <hr />

//       <nav className="tabs-slider" aria-label="Navegación por pestañas">
//         <ul
//           className="nav nav-pills tabs nav-box fixedWidth"
//           id="width-myTab"
//           role="tablist"
//         >
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link active"
//               data-toggle="tab"
//               data-target="#panel-content-1"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-1"
//               aria-selected="true"
//               id="tab-1"
//             >
//               Pestaña 1
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-2"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-2"
//               aria-selected="false"
//               id="tab-2"
//             >
//               Pestaña 2
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-3"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-3"
//               aria-selected="false"
//               id="tab-3"
//             >
//               Pestaña 3
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link disabled"
//               disabled
//               //tabindex="-1"
//               data-toggle="tab"
//               data-target="#panel-content-4"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-4"
//               aria-selected="false"
//               id="tab-4"
//             >
//               Pestaña 4
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div className="tab-content" id="width-myTabContent">
//         <div
//           className="tab-pane fade show active"
//           id="panel-content-1"
//           role="tabpanel"
//           aria-labelledby="tab-1"
//         >
//           Contenido Pestaña 1
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-2"
//           role="tabpanel"
//           aria-labelledby="tab-2"
//         >
//           Contenido Pestaña 2
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-3"
//           role="tabpanel"
//           aria-labelledby="tab-3"
//         >
//           Contenido Pestaña 3
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-4"
//           role="tabpanel"
//           aria-labelledby="tab-4"
//         >
//           Contenido Pestaña 4
//         </div>
//       </div>

//       <hr />

//       <nav className="tabs-slider" aria-label="Navegación por pestañas - Tamaño grande">
//         <ul className="nav nav-pills tabs nav-box" id="sizeLg-myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link nav-link-lg"
//               data-toggle="tab"
//               data-target="#panel-content-5"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-5"
//               aria-selected="false"
//               id="tab-5"
//             >
//               Pestaña grande 1
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link nav-link-lg"
//               data-toggle="tab"
//               data-target="#panel-content-6"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-6"
//               aria-selected="false"
//               id="tab-6"
//             >
//               Pestaña grande 2
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link nav-link-lg"
//               data-toggle="tab"
//               data-target="#panel-content-7"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-7"
//               aria-selected="false"
//               id="tab-7"
//             >
//               Pestaña grande 3
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div className="tab-content" id="sizeLg-myTabContent">
//         <div
//           className="tab-pane fade"
//           id="panel-content-5"
//           role="tabpanel"
//           aria-labelledby="tab-5"
//         >
//           Contenido Pestaña 1
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-6"
//           role="tabpanel"
//           aria-labelledby="tab-6"
//         >
//           Contenido Pestaña 2
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-7"
//           role="tabpanel"
//           aria-labelledby="tab-7"
//         >
//           Contenido Pestaña 3
//         </div>
//       </div>
//       <br />
//       <nav className="tabs-slider" aria-label="Navegación por pestañas - Tamaño mediano">
//         <ul className="nav nav-pills tabs nav-box" id="sizeMd-myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-8"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-8"
//               aria-selected="false"
//               id="tab-8"
//             >
//               Pestaña mediana 1
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-9"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-9"
//               aria-selected="false"
//               id="tab-9"
//             >
//               Pestaña mediana 2
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-10"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-10"
//               aria-selected="false"
//               id="tab-10"
//             >
//               Pestaña mediana 3
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div className="tab-content" id="sizeMd-myTabContent">
//         <div
//           className="tab-pane fade"
//           id="panel-content-8"
//           role="tabpanel"
//           aria-labelledby="tab-8"
//         >
//           contenito 1
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-9"
//           role="tabpanel"
//           aria-labelledby="tab-9"
//         >
//           Contenido Pestaña 2
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-10"
//           role="tabpanel"
//           aria-labelledby="tab-10"
//         >
//           Contenido Pestaña 3
//         </div>
//       </div>
//       <br />
//       <nav className="tabs-slider" aria-label="Navegación por pestañas - Tamaño chico">
//         <ul className="nav nav-pills tabs nav-box" id="sizeSm-myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link nav-link-sm"
//               data-toggle="tab"
//               data-target="#panel-content-11"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-11"
//               aria-selected="false"
//               id="tab-11"
//             >
//               Pestaña chica 1
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link nav-link-sm"
//               data-toggle="tab"
//               data-target="#panel-content-12"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-12"
//               aria-selected="false"
//               id="tab-12"
//             >
//               Pestaña chica 2
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link nav-link-sm"
//               data-toggle="tab"
//               data-target="#panel-content-13"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-13"
//               aria-selected="false"
//               id="tab-13"
//             >
//               Pestaña chica 3
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div className="tab-content" id="sizeSm-myTabContent">
//         <div
//           className="tab-pane fade"
//           id="panel-content-11"
//           role="tabpanel"
//           aria-labelledby="tab-11"
//         >
//           Contenido Pestaña 1
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-12"
//           role="tabpanel"
//           aria-labelledby="tab-12"
//         >
//           Contenido Pestaña 2
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-13"
//           role="tabpanel"
//           aria-labelledby="tab-13"
//         >
//           Contenido Pestaña 3
//         </div>
//       </div>


//       <hr />
//       <div className="storybook__container-bg">
//         <nav className="tabs-slider" aria-label="Navegación por pestañas">
//           <ul
//             className="nav nav-pills tabs nav-box-bg"
//             id="container-myTab"
//             role="tablist"
//           >
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link active"
//                 data-toggle="tab"
//                 data-target="#panel-content-1"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-1"
//                 aria-selected="true"
//                 id="tab-1"
//               >
//                 Pestaña 1
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link"
//                 data-toggle="tab"
//                 data-target="#panel-content-2"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-2"
//                 aria-selected="false"
//                 id="tab-2"
//               >
//                 Pestaña 2
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link"
//                 data-toggle="tab"
//                 data-target="#panel-content-3"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-3"
//                 aria-selected="false"
//                 id="tab-3"
//               >
//                 Pestaña 3
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 className="nav-link disabled"
//                 disabled
//                 //tabindex="-1"
//                 data-toggle="tab"
//                 data-target="#panel-content-4"
//                 type="button"
//                 role="tab"
//                 aria-controls="panel-content-4"
//                 aria-selected="false"
//                 id="tab-4"
//               >
//                 Pestaña 4
//               </button>
//             </li>
//           </ul>
//         </nav>
//         <div className="tab-content" id="container-myTabContent">
//           <div
//             className="tab-pane fade show active"
//             id="panel-content-1"
//             role="tabpanel"
//             aria-labelledby="tab-1"
//           >
//             Contenido Pestaña 1
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-2"
//             role="tabpanel"
//             aria-labelledby="tab-2"
//           >
//             Contenido Pestaña 2
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-3"
//             role="tabpanel"
//             aria-labelledby="tab-3"
//           >
//             Contenido Pestaña 3
//           </div>
//           <div
//             className="tab-pane fade"
//             id="panel-content-4"
//             role="tabpanel"
//             aria-labelledby="tab-4"
//           >
//             Contenido Pestaña 4
//           </div>
//         </div>
//       </div>

//       <hr />
//       <nav className="tabs-slider" aria-label="Navegación por pestañas">
//         <ul className="nav nav-pills tabs nav-box" id="icon-myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link active"
//               data-toggle="tab"
//               data-target="#panel-content-1"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-1"
//               aria-selected="true"
//               id="tab-1"
//             >
//               <div className="nav-icon">
//                 Pestaña 1
//                 <span className="material-icons-round">home</span>
//               </div>
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-2"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-2"
//               aria-selected="false"
//               id="tab-2"
//             >
//               <div className="nav-icon">
//                 Pestaña 2
//                 <span className="material-icons-round">home</span>
//               </div>
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               data-toggle="tab"
//               data-target="#panel-content-3"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-3"
//               aria-selected="false"
//               id="tab-3"
//             >
//               <div className="nav-icon">
//                 Pestaña 3
//                 <span className="material-icons-round">home</span>
//               </div>
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link disabled"
//               disabled
//               //tabindex="-1"
//               data-toggle="tab"
//               data-target="#panel-content-4"
//               type="button"
//               role="tab"
//               aria-controls="panel-content-4"
//               aria-selected="false"
//               id="tab-4"
//             >
//               <div className="nav-icon">
//                 Pestaña 4
//                 <span className="material-icons-round">home</span>
//               </div>
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div className="tab-content" id="icon-myTabContent">
//         <div
//           className="tab-pane fade show active"
//           id="panel-content-1"
//           role="tabpanel"
//           aria-labelledby="tab-1"
//         >
//           Contenido Pestaña 1
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-2"
//           role="tabpanel"
//           aria-labelledby="tab-2"
//         >
//           Contenido Pestaña 2
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-3"
//           role="tabpanel"
//           aria-labelledby="tab-3"
//         >
//           Contenido Pestaña 3
//         </div>
//         <div
//           className="tab-pane fade"
//           id="panel-content-4"
//           role="tabpanel"
//           aria-labelledby="tab-4"
//         >
//           Contenido Pestaña 4<div className="storybook__container-tabs">
//             <nav className="tabs-slider" aria-label="Navegación por pestañas">
//               <ul
//                 className="nav nav-pills tabs nav-box"
//                 id="containerSlider-myTab"
//                 role="tablist"
//               >
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     data-toggle="tab"
//                     data-target="#panel-content-14"
//                     type="button"
//                     role="tab"
//                     aria-controls="panel-content-14"
//                     aria-selected="false"
//                     id="tab-14"
//                   >
//                     <div className="nav-icon">
//                       Pestaña 1
//                       <span className="material-icons-round">home</span>
//                     </div>
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     data-toggle="tab"
//                     data-target="#panel-content-15"
//                     type="button"
//                     role="tab"
//                     aria-controls="panel-content-15"
//                     aria-selected="false"
//                     id="tab-15"
//                   >
//                     <div className="nav-icon">
//                       Pestaña 2
//                       <span className="material-icons-round">home</span>
//                     </div>
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     data-toggle="tab"
//                     data-target="#panel-content-16"
//                     type="button"
//                     role="tab"
//                     aria-controls="panel-content-16"
//                     aria-selected="false"
//                     id="tab-16"
//                   >
//                     <div className="nav-icon">
//                       Pestaña 3
//                       <span className="material-icons-round">home</span>
//                     </div>
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     data-toggle="tab"
//                     data-target="#panel-content-17"
//                     type="button"
//                     role="tab"
//                     aria-controls="panel-content-17"
//                     aria-selected="false"
//                     id="tab-17"
//                   >
//                     <div className="nav-icon">
//                       Pestaña 4
//                       <span className="material-icons-round">home</span>
//                     </div>
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     data-toggle="tab"
//                     data-target="#panel-content-18"
//                     type="button"
//                     role="tab"
//                     aria-controls="panel-content-18"
//                     aria-selected="false"
//                     id="tab-18"
//                   >
//                     <div className="nav-icon">
//                       Pestaña 5
//                       <span className="material-icons-round">home</span>
//                     </div>
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     data-toggle="tab"
//                     data-target="#panel-content-19"
//                     type="button"
//                     role="tab"
//                     aria-controls="panel-content-19"
//                     aria-selected="false"
//                     id="tab-19"
//                   >
//                     <div className="nav-icon">
//                       Pestaña 6
//                       <span className="material-icons-round">home</span>
//                     </div>
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     data-toggle="tab"
//                     data-target="#panel-content-20"
//                     type="button"
//                     role="tab"
//                     aria-controls="panel-content-20"
//                     aria-selected="false"
//                     id="tab-20"
//                   >
//                     <div className="nav-icon">
//                       Pestaña 7
//                       <span className="material-icons-round">home</span>
//                     </div>
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     data-toggle="tab"
//                     data-target="#panel-content-21"
//                     type="button"
//                     role="tab"
//                     aria-controls="panel-content-21"
//                     aria-selected="false"
//                     id="tab-21"
//                   >
//                     <div className="nav-icon">
//                       Pestaña 8
//                       <span className="material-icons-round">home</span>
//                     </div>
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     data-toggle="tab"
//                     data-target="#panel-content-22"
//                     type="button"
//                     role="tab"
//                     aria-controls="panel-content-22"
//                     aria-selected="false"
//                     id="tab-22"
//                   >
//                     <div className="nav-icon">
//                       Pestaña 9
//                       <span className="material-icons-round">home</span>
//                     </div>
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link disabled"
//                     disabled
//                     //tabindex="-1"
//                     data-toggle="tab"
//                     data-target="#panel-content-23"
//                     type="button"
//                     role="tab"
//                     aria-controls="panel-content-23"
//                     aria-selected="false"
//                     id="tab-23"
//                   >
//                     <div className="nav-icon">
//                       Pestaña 10
//                       <span className="material-icons-round">home</span>
//                     </div>
//                   </button>
//                 </li>
//               </ul>
//               <div className="icons-container">
//                 <button className="right-left icon" id="left">
//                   <span className="material-icons-round">arrow_back_ios</span>
//                 </button>
//                 <button className="right-left icon" id="right">
//                   <span className="material-icons-round">arrow_forward_ios</span>
//                 </button>
//               </div>
//             </nav>
//             <div className="tab-content" id="containerSlider-myTabContent">
//               <div
//                 className="tab-pane fade"
//                 id="panel-content-14"
//                 role="tabpanel"
//                 aria-labelledby="tab-14"
//               >
//                 Contenido Pestaña 1
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="panel-content-15"
//                 role="tabpanel"
//                 aria-labelledby="tab-15"
//               >
//                 Contenido Pestaña 2
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="panel-content-16"
//                 role="tabpanel"
//                 aria-labelledby="tab-16"
//               >
//                 Contenido Pestaña 3
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="panel-content-17"
//                 role="tabpanel"
//                 aria-labelledby="tab-17"
//               >
//                 Contenido Pestaña 4
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="panel-content-18"
//                 role="tabpanel"
//                 aria-labelledby="tab-18"
//               >
//                 Contenido Pestaña 5
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="panel-content-19"
//                 role="tabpanel"
//                 aria-labelledby="tab-19"
//               >
//                 Contenido Pestaña 6
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="panel-content-20"
//                 role="tabpanel"
//                 aria-labelledby="tab-20"
//               >
//                 Contenido Pestaña 7
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="panel-content-21"
//                 role="tabpanel"
//                 aria-labelledby="tab-21"
//               >
//                 Contenido Pestaña 8
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="panel-content-22"
//                 role="tabpanel"
//                 aria-labelledby="tab-22"
//               >
//                 Contenido Pestaña 9
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="panel-content-23"
//                 role="tabpanel"
//                 aria-labelledby="tab-23"
//               >
//                 Contenido Pestaña 10
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       <hr />

//     </>
//   )
// }

import TabsDocs from "@/documents/Tabs/TabsDocs";
import React from "react";

export default function TabsPage () {
  return <TabsDocs />;
}