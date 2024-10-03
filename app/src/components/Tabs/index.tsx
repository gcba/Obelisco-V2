"use client";

import React, { useState } from 'react';

interface TabItemProps {
  id: string;
  title: string;
  icon: string;
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
          <span className="material-symbols-rounded o-icon">{icon}</span>
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
    <div className={`tab-pane fade ${activeTab === id ? 'show active' : ''}`} id={id} role="tabpanel" aria-labelledby={id}>
      {children}
    </div>
  );
};

interface TabsProps {
  children: React.ReactNode[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("panel-content-1");

  return (
    <div>
      <nav className="tabs-box" aria-label="Navegación por pestañas">
        <ul className="nav nav-pills tabs fixed-width p-0" role="tablist">
          <TabItem id="panel-content-1" title="Uso" icon="subject" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabItem id="panel-content-2" title="Código" icon="code" activeTab={activeTab} setActiveTab={setActiveTab} />
        </ul>
      </nav>

      <hr className="my-0" />

      <div className="tab-content pt-4">
        {children.map((child, index) => (
          <TabPanel key={index} id={`panel-content-${index + 1}`} activeTab={activeTab}>
            {child}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
