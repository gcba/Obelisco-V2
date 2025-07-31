'use client';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { TEMPLATE_PAG_NOTICIAS } from './code-views';

const TemplatePaginaNoticiasDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-html');

  return (
    <>
      <ComponentHeader
        title="Noticias"
        description={[
          `
          Las utilizamos para comunicar noticias y novedades. Este tipo de página debe actualizarse al menos 1 vez por semana.
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
              urlDemo="https://gcba.github.io/obelisco-demo/noticias/galeria.html"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </nav>

        <hr className="mt-0 mb-4" />

        <div className="tab-content" style={{ paddingTop: '32px' }}>
          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <>
              <CodeViewTemplate template={TEMPLATE_PAG_NOTICIAS} />
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

export default TemplatePaginaNoticiasDocs;
