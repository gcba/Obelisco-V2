'use client';

import React, { useState } from 'react';

import DocumentationTemplate, { Section } from '../Template/DocumentationTemplate';

interface TabItemProps {
  id: string;
  title?: string;
  icon?: string;
  urlDemo?: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const TabItem: React.FC<TabItemProps> = ({ id, title, icon, urlDemo, activeTab, setActiveTab }) => {
  const handleClickDemo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <li className="nav-item" role="presentation" onClick={urlDemo ? () => handleClickDemo(urlDemo) : undefined}>
      <button
        className={`nav-link ${activeTab === id ? 'active' : ''}`}
        type="button"
        role="tab"
        aria-controls={id}
        onClick={id !== '#' ? () => setActiveTab(id) : undefined}
      >
        <div className="nav-icon">
          <span>{title}</span>
          {icon && <span className="material-symbols-rounded o-icon">{icon}</span>}
        </div>
      </button>
    </li>
  );
};

interface TabPanelProps {
  id: string;
  children: React.ReactNode;
  activeTab: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({ id, children, activeTab }) => {
  return (
    <div
      className={`tab-pane fade ${activeTab === id ? 'show active' : ''}`}
      id={id}
      role="tabpanel"
      aria-labelledby={id}
    >
      {children}
    </div>
  );
};

interface CustomSectionProps {
  sectionContent?: Section[];
  id: string;
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
}
interface TabsProps {
  sectionUx?: Section[];
  sectionDev?: Section[];
  customSections?: CustomSectionProps[];
}

const Tabs: React.FC<TabsProps> = ({ sectionUx, sectionDev, customSections }) => {
  const [activeTab, setActiveTab] = useState(sectionUx ? 'panel-content-ux' : 'panel-content-dev');

  return (
    <div>
      <nav className="tabs-box" aria-label="Navegación por pestañas">
        <ul className="nav nav-pills tabs p-0" role="tablist">
          {sectionUx && (
            <TabItem id="panel-content-ux" title="Guía de uso" activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {sectionDev && (
            <TabItem id="panel-content-dev" title="Código" activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {customSections &&
            customSections.map((section) => (
              <TabItem
                key={section.id}
                id={`panel-content-${section.id}`}
                title={section.title}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
        </ul>
      </nav>

      <hr className="mt-0 mb-4" />

      <div className="tab-content" style={{ paddingTop: '32px' }}>
        {sectionUx && (
          <TabPanel id={`panel-content-ux`} activeTab={activeTab}>
            <DocumentationTemplate sections={sectionUx} type="ux" />
          </TabPanel>
        )}
        {sectionDev && (
          <TabPanel id={`panel-content-dev`} activeTab={activeTab}>
            <DocumentationTemplate sections={sectionDev} type="dev" />
          </TabPanel>
        )}
        {customSections &&
          customSections.map(
            (section) =>
              section.sectionContent && (
                <TabPanel
                  key={section.id} // Clave única requerida por React
                  id={`panel-content-${section.id}`}
                  activeTab={activeTab}
                >
                  <DocumentationTemplate sections={section.sectionContent} type={section.id.toLowerCase()} />
                </TabPanel>
              ),
          )}
      </div>
    </div>
  );
};

export default Tabs;
