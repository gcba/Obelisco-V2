(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9816],{59130:function(n,e,o){Promise.resolve().then(o.bind(o,26129))},40044:function(n,e,o){"use strict";var a=o(57437);o(2265),e.Z=n=>{let{description:e}=n;return(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"lead",children:e})})}},26129:function(n,e,o){"use strict";o.d(e,{default:function(){return r}});var a=o(57437),d=o(2265),s=o(11321),i=o(25156),l=o(40044);let c=[{title:"Desplegable de selecci\xf3n",content:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{description:"Los desplegables muestran una lista de opciones permitiendo que una persona usuaria pueda seleccionar una o varias en simult\xe1neo. Una opci\xf3n seleccionada puede usarse como una acci\xf3n para filtrar u ordenar el contenido existente."}),(0,a.jsxs)("p",{className:"lead mb-4",children:["Si quieres conocer las buenas pr\xe1cticas de uso del componente, puedes visitar el siguiente\xa0",(0,a.jsx)("a",{href:"https://gcba.github.io/estandares/componentes/desplegables/desplegables_seleccion/",target:"_blank",rel:"noopener noreferrer",children:"enlace."})]})]}),h1:!0},{id:"section-1",title:"Con selecci\xf3n m\xfaltiple",content:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.default,{codeHTML:'\n<div class="dropdown">\n  <button\n    type="button"\n    class="btn btn-dropdown btn-dropdown-border"\n    data-bs-toggle="dropdown"\n    aria-expanded="false"\n    data-bs-auto-close="outside"\n  >\n    <span\n      class="material-symbols-rounded o-icon"\n      aria-label="hidden"\n    >\n      person\n    </span>\n    <span class="btn-dropdown-text ellipsis-1">Desplegable</span>\n    <span\n      class="material-symbols-rounded btn-dropdown-icon"\n      aria-label="hidden"\n    >\n      expand_more\n    </span>\n  </button>\n  <div class="dropdown-menu">\n    <div class="form-checkbox">\n      <input\n        class="form-checkbox-input"\n        type="checkbox"\n        name="dropdownCheckbox"\n        id="option-1"\n        value="option-1"\n        />\n      <label class="form-checkbox-label" for="option-1">\n        Opci\xf3n de selecci\xf3n m\xfaltiple 1\n      </label>\n    </div>\n    <div class="form-checkbox">\n      <input\n        class="form-checkbox-input"\n        type="checkbox"\n        name="dropdownCheckbox"\n        id="option-2"\n        value="option-2"\n        />\n      <label class="form-checkbox-label" for="option-2">\n        Opci\xf3n de selecci\xf3n m\xfaltiple 2\n      </label>\n    </div>\n    <div class="form-checkbox">\n      <input\n        class="form-checkbox-input"\n        type="checkbox"\n        name="dropdownCheckbox"\n        id="option-3"\n        value="option-3"\n        disabled\n        />\n      <label class="form-checkbox-label" for="option-3">\n        Opci\xf3n de selecci\xf3n m\xfaltiple 3\n      </label>\n    </div>\n  </div>\n</div>\n',children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"dropdown",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-dropdown btn-dropdown-border","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside",children:[(0,a.jsx)("span",{className:"material-symbols-rounded o-icon","aria-label":"hidden",children:"person"}),(0,a.jsx)("span",{className:"btn-dropdown-text ellipsis-1",children:"Desplegable"}),(0,a.jsx)("span",{className:"material-symbols-rounded btn-dropdown-icon","aria-label":"hidden",children:"expand_more"})]}),(0,a.jsxs)("div",{className:"dropdown-menu",children:[(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckbox",id:"option-1",value:"option-1"}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-1",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 1"})]}),(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckbox",id:"option-2",value:"option-2"}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-2",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 2"})]}),(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckbox",id:"option-3",value:"option-3",disabled:!0}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-3",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 3"})]})]})]})})})})},{id:"section-2",title:"Con selecci\xf3n \xfanica",content:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.default,{codeHTML:'\n  <div class="dropdown">\n    <button\n      type="button"\n      class="btn btn-dropdown btn-dropdown-border"\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-bs-auto-close="outside"\n    >\n      <span\n        class="material-symbols-rounded o-icon"\n        aria-label="hidden"\n      >\n        person\n      </span>\n      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>\n      <span\n        class="material-symbols-rounded btn-dropdown-icon"\n        aria-label="hidden"\n      >\n        expand_more\n      </span>\n    </button>\n    <div class="dropdown-menu">\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadio"\n          id="option-radio-1"\n          value="option-1"\n          />\n        <label class="form-radio-label" for="option-radio-1">\n          Opci\xf3n de selecci\xf3n \xfanica 1\n        </label>\n      </div>\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadio"\n          id="option-radio-2"\n          value="option-2"\n          />\n        <label class="form-radio-label" for="option-radio-2">\n          Opci\xf3n de selecci\xf3n \xfanica 2\n        </label>\n      </div>\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadio"\n          id="option-radio-3"\n          value="option-3"\n          disabled\n          />\n        <label class="form-radio-label" for="option-radio-3">\n          Opci\xf3n de selecci\xf3n \xfanica 3\n        </label>\n      </div>\n    </div>\n  </div>\n',children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"dropdown",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-dropdown btn-dropdown-border","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside",id:"btnDropdownRadio",children:[(0,a.jsx)("span",{className:"material-symbols-rounded o-icon","aria-label":"hidden",children:"person"}),(0,a.jsx)("span",{className:"btn-dropdown-text ellipsis-1",id:"btnDropdownRadioText",children:"Desplegable"}),(0,a.jsx)("span",{className:"material-symbols-rounded btn-dropdown-icon","aria-label":"hidden",children:"expand_more"})]}),(0,a.jsxs)("div",{className:"dropdown-menu",children:[(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadio",id:"option-radio-1",value:"option-1"}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-1",children:"Opci\xf3n de selecci\xf3n \xfanica 1"})]}),(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadio",id:"option-radio-2",value:"option-2"}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-2",children:"Opci\xf3n de selecci\xf3n \xfanica 2"})]}),(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadio",id:"option-radio-3",value:"option-3",disabled:!0}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-3",children:"Opci\xf3n de selecci\xf3n \xfanica 3"})]})]})]})})})})},{id:"section-3",title:"Tama\xf1os - selecci\xf3n m\xfaltiple",content:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default,{codeHTML:'\n  <div class="dropdown dropdown-lg">\n    <button\n      type="button"\n      class="btn btn-dropdown btn-dropdown-border"\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-bs-auto-close="outside"\n    >\n      <span\n        class="material-symbols-rounded o-icon"\n        aria-label="hidden"\n      >\n        person\n      </span>\n      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>\n      <span\n        class="material-symbols-rounded btn-dropdown-icon"\n        aria-label="hidden"\n      >\n        expand_more\n      </span>\n    </button>\n    <div class="dropdown-menu">\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxLg"\n          id="option-checkbox-lg-1"\n          value="option-1"\n          />\n        <label class="form-checkbox-label" for="option-checkbox-lg-1">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 1\n        </label>\n      </div>\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxLg"\n          id="option-checkbox-lg-2"\n          value="option-2"\n          />\n        <label class="form-checkbox-label" for="option-checkbox-lg-2">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 2\n        </label>\n      </div>\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxLg"\n          id="option-checkbox-lg-3"\n          value="option-3"\n          disabled\n          />\n        <label class="form-checkbox-label" for="option-checkbox-lg-3">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 3\n        </label>\n      </div>\n    </div>\n  </div>\n',children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"dropdown dropdown-lg",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-dropdown btn-dropdown-border","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside",children:[(0,a.jsx)("span",{className:"material-symbols-rounded o-icon","aria-label":"hidden",children:"person"}),(0,a.jsx)("span",{className:"btn-dropdown-text ellipsis-1",children:"Desplegable"}),(0,a.jsx)("span",{className:"material-symbols-rounded btn-dropdown-icon","aria-label":"hidden",children:"expand_more"})]}),(0,a.jsxs)("div",{className:"dropdown-menu",children:[(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxLg",id:"option-checkbox-lg-1",value:"option-1"}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-checkbox-lg-1",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 1"})]}),(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxLg",id:"option-checkbox-lg-2",value:"option-2"}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-checkbox-lg-2",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 2"})]}),(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxLg",id:"option-checkbox-lg-3",value:"option-3",disabled:!0}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-checkbox-lg-3",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 3"})]})]})]})})}),(0,a.jsx)("br",{}),(0,a.jsx)(s.default,{codeHTML:'\n  <div class="dropdown">\n    <button\n      type="button"\n      class="btn btn-dropdown btn-dropdown-border"\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-bs-auto-close="outside"\n    >\n      <span\n        class="material-symbols-rounded o-icon"\n        aria-label="hidden"\n      >\n        person\n      </span>\n      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>\n      <span\n        class="material-symbols-rounded btn-dropdown-icon"\n        aria-label="hidden"\n      >\n        expand_more\n      </span>\n    </button>\n    <div class="dropdown-menu">\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxMd"\n          id="option-checkbox-1"\n          value="option-1"\n          />\n        <label class="form-checkbox-label" for="option-checkbox-1">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 1\n        </label>\n      </div>\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxMd"\n          id="option-checkbox-2"\n          value="option-2"\n          />\n        <label class="form-checkbox-label" for="option-checkbox-2">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 2\n        </label>\n      </div>\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxMd"\n          id="option-checkbox-3"\n          value="option-3"\n          disabled\n          />\n        <label class="form-checkbox-label" for="option-checkbox-3">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 3\n        </label>\n      </div>\n    </div>\n  </div>\n',children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"dropdown",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-dropdown btn-dropdown-border","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside",children:[(0,a.jsx)("span",{className:"material-symbols-rounded o-icon","aria-label":"hidden",children:"person"}),(0,a.jsx)("span",{className:"btn-dropdown-text ellipsis-1",children:"Desplegable"}),(0,a.jsx)("span",{className:"material-symbols-rounded btn-dropdown-icon","aria-label":"hidden",children:"expand_more"})]}),(0,a.jsxs)("div",{className:"dropdown-menu",children:[(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxMd",id:"option-checkbox-1",value:"option-1"}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-checkbox-1",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 1"})]}),(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxMd",id:"option-checkbox-2",value:"option-2"}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-checkbox-2",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 2"})]}),(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxMd",id:"option-checkbox-3",value:"option-3",disabled:!0}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-checkbox-3",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 3"})]})]})]})})}),(0,a.jsx)("br",{}),(0,a.jsx)(s.default,{codeHTML:'\n  <div class="dropdown dropdown-sm">\n    <button\n      type="button"\n      class="btn btn-dropdown btn-dropdown-border"\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-bs-auto-close="outside"\n    >\n      <span\n        class="material-symbols-rounded o-icon"\n        aria-label="hidden"\n      >\n        person\n      </span>\n      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>\n      <span\n        class="material-symbols-rounded btn-dropdown-icon"\n        aria-label="hidden"\n      >\n        expand_more\n      </span>\n    </button>\n    <div class="dropdown-menu">\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxSm"\n          id="option-checkbox-sm-1"\n          value="option-1"\n          />\n        <label class="form-checkbox-label" for="option-checkbox-sm-1">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 1\n        </label>\n      </div>\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxSm"\n          id="option-checkbox-sm-2"\n          value="option-2"\n          />\n        <label class="form-checkbox-label" for="option-checkbox-sm-2">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 2\n        </label>\n      </div>\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxSm"\n          id="option-checkbox-sm-3"\n          value="option-3"\n          disabled\n          />\n        <label class="form-checkbox-label" for="option-checkbox-sm-3">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 3\n        </label>\n      </div>\n    </div>\n  </div> \n',children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"dropdown dropdown-sm",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-dropdown btn-dropdown-border","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside",children:[(0,a.jsx)("span",{className:"material-symbols-rounded o-icon","aria-label":"hidden",children:"person"}),(0,a.jsx)("span",{className:"btn-dropdown-text ellipsis-1",children:"Desplegable"}),(0,a.jsx)("span",{className:"material-symbols-rounded btn-dropdown-icon","aria-label":"hidden",children:"expand_more"})]}),(0,a.jsxs)("div",{className:"dropdown-menu",children:[(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxSm",id:"option-checkbox-sm-1",value:"option-1"}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-checkbox-sm-1",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 1"})]}),(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxSm",id:"option-checkbox-sm-2",value:"option-2"}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-checkbox-sm-2",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 2"})]}),(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxSm",id:"option-checkbox-sm-3",value:"option-3",disabled:!0}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-checkbox-sm-3",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 3"})]})]})]})})})]})},{id:"section-4",title:"Tama\xf1os - selecci\xf3n \xfanica",content:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default,{codeHTML:'\n  <div class="dropdown dropdown-lg">\n    <button\n      type="button"\n      class="btn btn-dropdown btn-dropdown-border"\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-bs-auto-close="outside"\n    >\n      <span\n        class="material-symbols-rounded o-icon"\n        aria-label="hidden"\n      >\n        person\n      </span>\n      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>\n      <span\n        class="material-symbols-rounded btn-dropdown-icon"\n        aria-label="hidden"\n      >\n        expand_more\n      </span>\n    </button>\n    <div class="dropdown-menu">\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioLg"\n          id="option-radio-lg-1"\n          value="option-1"\n          />\n        <label class="form-radio-label" for="option-radio-lg-1">\n          Opci\xf3n de selecci\xf3n \xfanica 1\n        </label>\n      </div>\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioLg"\n          id="option-radio-lg-2"\n          value="option-2"\n          />\n        <label class="form-radio-label" for="option-radio-lg-2">\n          Opci\xf3n de selecci\xf3n \xfanica 2\n        </label>\n      </div>\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioLg"\n          id="option-radio-lg-3"\n          value="option-3"\n          disabled\n          />\n        <label class="form-radio-label" for="option-radio-lg-3">\n          Opci\xf3n de selecci\xf3n \xfanica 3\n        </label>\n      </div>\n    </div>\n  </div>\n',children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"dropdown dropdown-lg",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-dropdown btn-dropdown-border","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside",children:[(0,a.jsx)("span",{className:"material-symbols-rounded o-icon","aria-label":"hidden",children:"person"}),(0,a.jsx)("span",{className:"btn-dropdown-text ellipsis-1",children:"Desplegable"}),(0,a.jsx)("span",{className:"material-symbols-rounded btn-dropdown-icon","aria-label":"hidden",children:"expand_more"})]}),(0,a.jsxs)("div",{className:"dropdown-menu",children:[(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioLg",id:"option-radio-lg-1",value:"option-1"}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-lg-1",children:"Opci\xf3n de selecci\xf3n \xfanica 1"})]}),(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioLg",id:"option-radio-lg-2",value:"option-2"}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-lg-2",children:"Opci\xf3n de selecci\xf3n \xfanica 2"})]}),(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioLg",id:"option-radio-lg-3",value:"option-3",disabled:!0}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-lg-3",children:"Opci\xf3n de selecci\xf3n \xfanica 3"})]})]})]})})}),(0,a.jsx)("br",{}),(0,a.jsx)(s.default,{codeHTML:'\n  <div class="dropdown">\n    <button\n      type="button"\n      class="btn btn-dropdown btn-dropdown-border"\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-bs-auto-close="outside"\n    >\n      <span\n        class="material-symbols-rounded o-icon"\n        aria-label="hidden"\n      >\n        person\n      </span>\n      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>\n      <span\n        class="material-symbols-rounded btn-dropdown-icon"\n        aria-label="hidden"\n      >\n        expand_more\n      </span>\n    </button>\n    <div class="dropdown-menu">\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioMd"\n          id="option-radio-md-1"\n          value="option-1"\n          />\n        <label class="form-radio-label" for="option-radio-md-1">\n          Opci\xf3n de selecci\xf3n \xfanica 1\n        </label>\n      </div>\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioMd"\n          id="option-radio-md-2"\n          value="option-2"\n          />\n        <label class="form-radio-label" for="option-radio-md-2">\n          Opci\xf3n de selecci\xf3n \xfanica 2\n        </label>\n      </div>\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioMd"\n          id="option-radio-md-3"\n          value="option-3"\n          disabled\n          />\n        <label class="form-radio-label" for="option-radio-md-3">\n          Opci\xf3n de selecci\xf3n \xfanica 3\n        </label>\n      </div>\n    </div>\n  </div>\n',children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"dropdown",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-dropdown btn-dropdown-border","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside",children:[(0,a.jsx)("span",{className:"material-symbols-rounded o-icon","aria-label":"hidden",children:"person"}),(0,a.jsx)("span",{className:"btn-dropdown-text ellipsis-1",children:"Desplegable"}),(0,a.jsx)("span",{className:"material-symbols-rounded btn-dropdown-icon","aria-label":"hidden",children:"expand_more"})]}),(0,a.jsxs)("div",{className:"dropdown-menu",children:[(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioMd",id:"option-radio-md-1",value:"option-1"}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-md-1",children:"Opci\xf3n de selecci\xf3n \xfanica 1"})]}),(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioMd",id:"option-radio-md-2",value:"option-2"}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-md-2",children:"Opci\xf3n de selecci\xf3n \xfanica 2"})]}),(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioMd",id:"option-radio-md-3",value:"option-3",disabled:!0}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-md-3",children:"Opci\xf3n de selecci\xf3n \xfanica 3"})]})]})]})})}),(0,a.jsx)("br",{}),(0,a.jsx)(s.default,{codeHTML:'\n  <div class="dropdown dropdown-sm">\n    <button\n      type="button"\n      class="btn btn-dropdown btn-dropdown-border"\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-bs-auto-close="outside"\n    >\n      <span\n        class="material-symbols-rounded o-icon"\n        aria-label="hidden"\n      >\n        person\n      </span>\n      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>\n      <span\n        class="material-symbols-rounded btn-dropdown-icon"\n        aria-label="hidden"\n      >\n        expand_more\n      </span>\n    </button>\n    <div class="dropdown-menu">\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioSm"\n          id="option-radio-sm-1"\n          value="option-1"\n          />\n        <label class="form-radio-label" for="option-radio-sm-1">\n          Opci\xf3n de selecci\xf3n \xfanica 1\n        </label>\n      </div>\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioSm"\n          id="option-radio-sm-2"\n          value="option-2"\n          />\n        <label class="form-radio-label" for="option-radio-sm-2">\n          Opci\xf3n de selecci\xf3n \xfanica 2\n        </label>\n      </div>\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioSm"\n          id="option-radio-sm-3"\n          value="option-3"\n          disabled\n          />\n        <label class="form-radio-label" for="option-radio-3">\n          Opci\xf3n de selecci\xf3n \xfanica 3\n        </label>\n      </div>\n    </div>\n  </div>\n',children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"dropdown dropdown-sm",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-dropdown btn-dropdown-border","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside",children:[(0,a.jsx)("span",{className:"material-symbols-rounded o-icon","aria-label":"hidden",children:"person"}),(0,a.jsx)("span",{className:"btn-dropdown-text ellipsis-1",children:"Desplegable"}),(0,a.jsx)("span",{className:"material-symbols-rounded btn-dropdown-icon","aria-label":"hidden",children:"expand_more"})]}),(0,a.jsxs)("div",{className:"dropdown-menu",children:[(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioSm",id:"option-radio-sm-1",value:"option-1"}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-sm-1",children:"Opci\xf3n de selecci\xf3n \xfanica 1"})]}),(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioSm",id:"option-radio-sm-2",value:"option-2"}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-sm-2",children:"Opci\xf3n de selecci\xf3n \xfanica 2"})]}),(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioSm",id:"option-radio-sm-3",value:"option-3",disabled:!0}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-3",children:"Opci\xf3n de selecci\xf3n \xfanica 3"})]})]})]})})})]})},{id:"section-5",title:"Implementaci\xf3n",content:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"A continuaci\xf3n, se presenta un ejemplo de c\xf3digo JavaScript para su implementaci\xf3n, teniendo en cuenta los estilos y funcionalidad al seleccionar una opci\xf3n."}),(0,a.jsx)("p",{children:"Es importante tener en cuenta que la funcionalidad deber\xe1 integrarse de acuerdo con la tecnolog\xeda utilizada, como por ejemplo React o Angular."}),(0,a.jsx)("h3",{className:"fw-normal",children:"Desplegable con casillas de opci\xf3n m\xfaltiple"}),(0,a.jsx)(s.default,{codeHTML:'\n  <div class="dropdown">\n    <button\n      type="button"\n      class="btn btn-dropdown btn-dropdown-border"\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-bs-auto-close="outside"\n      id="btnDropdownCheckboxJs"\n    >\n      <span\n        class="material-symbols-rounded o-icon"\n        aria-label="hidden"\n      >\n        person\n      </span>\n      <span class="btn-dropdown-text ellipsis-1">Desplegable\n        <span id="counterDropdownCheckboxJs"></span>\n      </span>\n      \n      <span\n        class="material-symbols-rounded btn-dropdown-icon"\n        aria-label="hidden"\n      >\n        expand_more\n      </span>\n    </button>\n    <div class="dropdown-menu">\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxJs"\n          id="option-1-js"\n          value="option-1-js"\n          />\n        <label class="form-checkbox-label" for="option-1-js">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 1\n        </label>\n      </div>\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxJs"\n          id="option-2-js"\n          value="option-2-js"\n          />\n        <label class="form-checkbox-label" for="option-2-js">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 2\n        </label>\n      </div>\n      <div class="form-checkbox">\n        <input\n          class="form-checkbox-input"\n          type="checkbox"\n          name="dropdownCheckboxJs"\n          id="option-3-js"\n          value="option-3-js"\n          disabled\n          />\n        <label class="form-checkbox-label" for="option-3-js">\n          Opci\xf3n de selecci\xf3n m\xfaltiple 3\n        </label>\n      </div>\n    </div>\n  </div>\n',codeJS:"\n  const checkboxes = document.querySelectorAll('input[type=\"checkbox\"][name=\"dropdownCheckboxJs\"]');\n  const counter = document.getElementById('counterDropdownCheckboxJs');\n  const btnDropdown = document.getElementById('btnDropdownCheckboxJs');\n  if (checkboxes) {\n    checkboxes.forEach((checkbox) => {\n      checkbox.addEventListener('change', function() {\n        const selectedCount = Array.from(checkboxes).filter(cb => cb.checked).length;\n        if (counter) {\n          if (selectedCount == 0) {\n            counter.textContent = '';\n            btnDropdown?.classList.remove('selected');\n          } else {\n            counter.textContent = ` (${selectedCount}) `;\n            btnDropdown?.classList.add('selected');\n          }\n        }\n      });\n    });\n  }\n",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"dropdown",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-dropdown btn-dropdown-border","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside",id:"btnDropdownCheckboxJs",children:[(0,a.jsx)("span",{className:"material-symbols-rounded o-icon","aria-label":"hidden",children:"person"}),(0,a.jsxs)("span",{className:"btn-dropdown-text ellipsis-1",children:["Desplegable",(0,a.jsx)("span",{id:"counterDropdownCheckboxJs"})]}),(0,a.jsx)("span",{className:"material-symbols-rounded btn-dropdown-icon","aria-label":"hidden",children:"expand_more"})]}),(0,a.jsxs)("div",{className:"dropdown-menu",children:[(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxJs",id:"option-1-js",value:"option-1-js"}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-1-js",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 1"})]}),(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxJs",id:"option-2-js",value:"option-2-js"}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-2-js",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 2"})]}),(0,a.jsxs)("div",{className:"form-checkbox",children:[(0,a.jsx)("input",{className:"form-checkbox-input",type:"checkbox",name:"dropdownCheckboxJs",id:"option-3-js",value:"option-3-js",disabled:!0}),(0,a.jsx)("label",{className:"form-checkbox-label",htmlFor:"option-3-js",children:"Opci\xf3n de selecci\xf3n m\xfaltiple 3"})]})]})]})})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("h3",{className:"fw-normal",children:"Desplegable con casillas de opci\xf3n \xfanica"}),(0,a.jsx)(s.default,{codeHTML:'\n  <div class="dropdown">\n    <button\n      type="button"\n      class="btn btn-dropdown btn-dropdown-border"\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-bs-auto-close="outside"\n      id="btnDropdownRadioJs"\n    >\n      <span\n        class="material-symbols-rounded o-icon"\n        aria-label="hidden"\n      >\n        person\n      </span>\n      <span class="btn-dropdown-text ellipsis-1" id="btnDropdownRadioTextJs">Desplegable</span>\n      <span\n        class="material-symbols-rounded btn-dropdown-icon"\n        aria-label="hidden"\n      >\n        expand_more\n      </span>\n    </button>\n    <div class="dropdown-menu">\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioJs"\n          id="option-radio-1-js"\n          value="option-1"\n          />\n        <label class="form-radio-label" for="option-radio-1-js">\n          Opci\xf3n de selecci\xf3n \xfanica 1\n        </label>\n      </div>\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioJs"\n          id="option-radio-2-js"\n          value="option-2"\n          />\n        <label class="form-radio-label" for="option-radio-2-js">\n          Opci\xf3n de selecci\xf3n \xfanica 2\n        </label>\n      </div>\n      <div class="form-radio reverse">\n        <input\n          class="form-radio-input"\n          type="radio"\n          name="dropdownRadioJs"\n          id="option-radio-3-js"\n          value="option-3"\n          disabled\n          />\n        <label class="form-radio-label" for="option-radio-3-js">\n          Opci\xf3n de selecci\xf3n \xfanica 3\n        </label>\n      </div>\n    </div>\n  </div>\n',codeJS:"\n  const radios = document.querySelectorAll('input[type=\"radio\"][name=\"dropdownRadioJs\"]');\n  if (radios) {\n    radios.forEach((radio) => {\n      radio.addEventListener('change', function() {\n        const selectedText = this.nextElementSibling.textContent.trim();\n        const buttonText = document.getElementById('btnDropdownRadioTextJs');\n        const button = document.getElementById('btnDropdownRadioJs');\n        if (buttonText && button) {\n          buttonText.textContent = selectedText;\n          button.classList.add('selected');\n        }\n      });\n    });\n  }\n",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"dropdown",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-dropdown btn-dropdown-border","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside",id:"btnDropdownRadioJs",children:[(0,a.jsx)("span",{className:"material-symbols-rounded o-icon","aria-label":"hidden",children:"person"}),(0,a.jsx)("span",{className:"btn-dropdown-text ellipsis-1",id:"btnDropdownRadioTextJs",children:"Desplegable"}),(0,a.jsx)("span",{className:"material-symbols-rounded btn-dropdown-icon","aria-label":"hidden",children:"expand_more"})]}),(0,a.jsxs)("div",{className:"dropdown-menu",children:[(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioJs",id:"option-radio-1-js",value:"option-1"}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-1-js",children:"Opci\xf3n de selecci\xf3n \xfanica 1"})]}),(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioJs",id:"option-radio-2-js",value:"option-2"}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-2-js",children:"Opci\xf3n de selecci\xf3n \xfanica 2"})]}),(0,a.jsxs)("div",{className:"form-radio reverse",children:[(0,a.jsx)("input",{className:"form-radio-input",type:"radio",name:"dropdownRadioJs",id:"option-radio-3-js",value:"option-3",disabled:!0}),(0,a.jsx)("label",{className:"form-radio-label",htmlFor:"option-radio-3-js",children:"Opci\xf3n de selecci\xf3n \xfanica 3"})]})]})]})})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}];var r=()=>((0,d.useEffect)(()=>{document.querySelectorAll('input[type="radio"][name="dropdownRadioJs"]').forEach(n=>{n.addEventListener("change",function(n){var e,o;let a=(null===(o=n.currentTarget.nextElementSibling)||void 0===o?void 0:null===(e=o.textContent)||void 0===e?void 0:e.trim())||"",d=document.getElementById("btnDropdownRadioTextJs"),s=document.getElementById("btnDropdownRadioJs");d&&s&&(d.textContent=a,s.classList.add("selected"))})});let n=document.querySelectorAll('input[type="checkbox"][name="dropdownCheckboxJs"]'),e=document.getElementById("counterDropdownCheckboxJs"),o=document.getElementById("btnDropdownCheckboxJs");n.forEach(a=>{a.addEventListener("change",function(){let a=Array.from(n).filter(n=>n.checked).length;e&&(0==a?(e.textContent="",null==o||o.classList.remove("selected")):(e.textContent=" (".concat(a,") "),null==o||o.classList.add("selected")))})})},[]),(0,a.jsx)(i.default,{sections:c}))}},function(n){n.O(0,[5646,7161,4547,2971,7023,1744],function(){return n(n.s=59130)}),_N_E=n.O()}]);