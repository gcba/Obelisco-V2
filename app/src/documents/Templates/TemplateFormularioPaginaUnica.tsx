'use client';
import Link from 'next/link';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { TEMPLATE_FORM } from './code-views';

const TemplateFormulario: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-html');

  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/templates">Plantillas</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/templates/formularios">Formularios</Link>
          </li>
        </ol>
      </nav>

      <ComponentHeader
        title="Formulario de página única"
        description={[
          `
          Permiten a las personas interactuar con el sistema, ingresando, editando o confirmando información. Se usan para registrarse en un servicio, programa o beneficio, para solicitar turnos o iniciar sesión en una cuenta.
          `,
        ]}
      />

      <a
        className="btn btn-outline-secondary"
        href="https://gcba.github.io/obelisco-demo/formularios/trabaja_con_nosotros/index.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginBottom: '32px' }}
      >
        Acceder a la plantilla
        <span className="material-symbols-rounded o-icon">open_in_new</span>
      </a>

      <div>
        <nav className="tabs-box" aria-label="Navegación por pestañas">
          <ul className="nav nav-pills nav-box tabs p-0" role="tablist">
            <TabItem id={`panel-content-html`} title={'Código'} activeTab={activeTab} setActiveTab={setActiveTab} />
          </ul>
        </nav>

        <hr className="mt-0 mb-4" />

        <div className="tab-content" style={{ paddingTop: '32px' }}>
          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <CodeViewTemplate template={TEMPLATE_FORM} />
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default TemplateFormulario;
