'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import DocumentationTemplate, { Section } from '../Template/DocumentationTemplate';

interface TabItemProps {
  id: string;
  title?: string;
  icon?: string | 'open_in_new';
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

// Componente Tabs
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const tabFromUrl = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(() => {
    if (tabFromUrl) return tabFromUrl;
    if (sectionUx) return 'content-ux';
    if (sectionDev) return 'content-dev';
    if (customSections?.length) return `content-${customSections[0].id}`;
    return '';
  });

  // Sincronizar tab con URL
  useEffect(() => {
    if (tabFromUrl && tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl, activeTab]);

  const handleChangeTab = (id: string) => {
    setActiveTab(id);

    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', id);

    // IMPORTANTE: Remover el hash de la URL al cambiar de pestaña
    const newUrl = `${pathname}?${params.toString()}`;

    router.push(newUrl, { scroll: false });

    // También limpiamos el hash del navegador
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <div>
      <nav className="tabs-box" aria-label="Navegación por pestañas">
        <ul className="nav nav-pills tabs p-0" role="tablist">
          {sectionUx && (
            <TabItem id="content-ux" title="Guía de uso" activeTab={activeTab} setActiveTab={handleChangeTab} />
          )}
          {sectionDev && (
            <TabItem id="content-dev" title="Código" activeTab={activeTab} setActiveTab={handleChangeTab} />
          )}
          {customSections &&
            customSections.map((section) => (
              <TabItem
                key={section.id}
                id={`content-${section.id}`}
                title={section.title}
                activeTab={activeTab}
                setActiveTab={handleChangeTab}
              />
            ))}
        </ul>
      </nav>

      <hr className="mt-0 mb-4" />

      <div className="tab-content" style={{ paddingTop: '32px' }}>
        {sectionUx && (
          <TabPanel id="content-ux" activeTab={activeTab}>
            <DocumentationTemplate sections={sectionUx} type="ux" tabId="content-ux" />
          </TabPanel>
        )}

        {sectionDev && (
          <TabPanel id="content-dev" activeTab={activeTab}>
            <DocumentationTemplate sections={sectionDev} type="dev" tabId="content-dev" />
          </TabPanel>
        )}

        {customSections &&
          customSections.map(
            (section) =>
              section.sectionContent && (
                <TabPanel key={section.id} id={`content-${section.id}`} activeTab={activeTab}>
                  <DocumentationTemplate
                    sections={section.sectionContent}
                    type={section.id.toLowerCase()}
                    tabId={`content-${section.id}`}
                  />
                </TabPanel>
              ),
          )}
      </div>
    </div>
  );
};

export default Tabs;
