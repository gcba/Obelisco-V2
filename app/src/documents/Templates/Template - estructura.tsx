'use client';
// este archivo se usa solamente como referencia para los templates de documentacion de los templates
// import CodeCopy from '@/components/CodeCopy';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { AREA_2 } from './code-views';

export default function Template() {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  return (
    <>
      <div>
        <nav className="tabs-box" aria-label="Navegación por pestañas">
          <ul className="nav nav-pills nav-box tabs p-0" role="tablist">
            <TabItem
              id={`panel-content-docs`}
              title={'Docs'}
              icon="description"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabItem
              id={`panel-content-html`}
              title={'HTML'}
              icon="description"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabItem
              id={`#`}
              title={'Demo'}
              icon="description"
              urlDemo="https://gcba.github.io/obelisco-demo/pagina_area/area_de_gobierno/op2.html"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </nav>

        <hr className="mt-0 mb-4" />

        <div className="tab-content" style={{ paddingTop: '32px' }}>
          <TabPanel id={`panel-content-docs`} activeTab={activeTab}>
            <>
              <DocumentationTemplate sections={[]} />
            </>
          </TabPanel>

          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <>
              <CodeViewTemplate template={AREA_2} />
            </>
          </TabPanel>
        </div>
      </div>
    </>
  );
}
