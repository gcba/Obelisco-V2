'use client';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { TEMPLATE_PAG_SIMPLE } from './code-views';

const TemplatePaginaSimpleDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-html');

  return (
    <>
      <ComponentHeader
        title="Página simple"
        description={[
          `
          Las usamos para transmitir información estática de menor jerarquía, en comparación a una página de área, y con menor cantidad de contenido.
          `,
        ]}
      />

      <div>
        <nav className="tabs-box" aria-label="Navegación por pestañas">
          <ul className="nav nav-pills nav-box tabs p-0" role="tablist">
            <TabItem id={`panel-content-html`} title={'HTML'} activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabItem
              id={`#`}
              title={'Demo'}
              icon="open_in_new"
              urlDemo="https://gcba.github.io/obelisco-demo/pagina_simple/tramites/index.html"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </nav>

        <hr className="mt-0 mb-4" />

        <div className="tab-content" style={{ paddingTop: '32px' }}>
          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <>
              <CodeViewTemplate template={TEMPLATE_PAG_SIMPLE} />
            </>
          </TabPanel>

          <TabPanel id={'panel-content-react'} activeTab={activeTab}>
            <></>
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default TemplatePaginaSimpleDocs;
