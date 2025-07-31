'use client';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { TEMPLATE_PAG_LIBRO } from './code-views';

const TemplatePaginaLibroDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-html');

  return (
    <>
      <ComponentHeader
        title="Página de libro"
        description={[
          `
          Las usamos para agrupar información sobre un mismo tema en subtemas. Los índices y las subpáginas deben tener como mínimo 2 párrafos de 5 líneas de información.
          `,
        ]}
      />

      <div>
        <nav className="tabs-box" aria-label="Navegación por pestañas">
          <ul className="nav nav-pills nav-box tabs p-0" role="tablist">
            <TabItem
              id={`panel-content-html`}
              title={'HTML'}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabItem
              id={`#`}
              title={'Demo'}
              icon="open_in_new"
              urlDemo="https://gcba.github.io/obelisco-demo/pagina_libro/index.html"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </nav>

        <hr className="mt-0 mb-4" />

        <div className="tab-content" style={{ paddingTop: '32px' }}>
          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <>
              <CodeViewTemplate template={TEMPLATE_PAG_LIBRO} />
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

export default TemplatePaginaLibroDocs;
