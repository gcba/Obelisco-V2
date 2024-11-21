'use client';

import React, { useState } from 'react';

import DocumentationTemplate, { Section } from '../Template/DocumentationTemplate';

interface TabItemProps {
  id: string;
  title: string;
  icon?: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabItem: React.FC<TabItemProps> = ({ id, title, icon, activeTab, setActiveTab }) => {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${activeTab === id ? 'active' : ''}`}
        type="button"
        role="tab"
        aria-controls={id}
        onClick={() => setActiveTab(id)}
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

const TabPanel: React.FC<TabPanelProps> = ({ id, children, activeTab }) => {
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
}
interface TabsProps {
  sectionUx?: Section[];
  sectionDev?: Section[];
  customSection?: CustomSectionProps;
}

const Tabs: React.FC<TabsProps> = ({ sectionUx, sectionDev, customSection }) => {
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
          {customSection && (
            <TabItem
              id={`panel-content-${customSection.id}`}
              title={customSection.title}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
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
        {customSection && customSection.sectionContent && (
          <TabPanel id={`panel-content-${customSection.id}`} activeTab={activeTab}>
            <DocumentationTemplate sections={customSection.sectionContent} type={customSection.id.toLowerCase()} />
          </TabPanel>
        )}
      </div>
    </div>
  );
};

export default Tabs;
