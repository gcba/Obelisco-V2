'use client';

import { Scrollspy } from '@makotot/ghostui';
import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';

import ScrollspySubtitle from '../ScrollspyTitle';
import ScrollTopButton from './ScrollTopButton';
import SimpleText from './SimpleText';

export interface Section {
  id?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  subtitleBold?: string | React.ReactNode;
  content?: React.ReactNode;
  description?: string;
  firstTitle?: boolean;
}

interface DocumentationTemplateProps {
  sections: Section[];
  type?: string;
  noScrollButton?: boolean;
  tabId?: string; // Nueva prop para identificar la pestaña
}

const DocumentationTemplate: React.FC<DocumentationTemplateProps> = ({ sections, type, noScrollButton, tabId }) => {
  const sectionRefs = useMemo(() => sections.map(() => React.createRef<HTMLDivElement>()), [sections]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const hasScrolledToHash = useRef(false);

  const handleScroll = useCallback(() => {
    sectionRefs.forEach((ref, index) => {
      const element = ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 84 && rect.bottom > 84) {
          setActiveIndex(index);
        }
      }
    });
  }, [sectionRefs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Efecto para manejar el hash - solo se ejecuta cuando el componente está montado
  useEffect(() => {
    // Solo ejecutar si este es el componente activo (en la pestaña activa)
    const isActiveTab = document.querySelector(`#${tabId}`)?.classList.contains('active');
    if (!isActiveTab || hasScrolledToHash.current) return;

    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    // Usar un ID único por pestaña
    const element = document.getElementById(`${tabId}-section-${hash}`);
    if (element) {
      hasScrolledToHash.current = true;

      const timer = setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [sections, type, tabId]);

  return (
    <Scrollspy sectionRefs={sectionRefs} offset={84}>
      {() => (
        <div className="box-scrollspy">
          <article className="box-content">
            <div data-cy="section-wrapper">
              {sections.map((section, index) => (
                <section
                  className="box-section"
                  key={`${section.id}-${index}`}
                  id={`${tabId}-section-${index + 1}`} // ID único por pestaña
                  ref={sectionRefs[index]}
                >
                  {section.title && (
                    <h2 className="h4 mb-3" style={{ marginTop: section.firstTitle ? `0px` : '48px' }}>
                      {section.title}
                    </h2>
                  )}

                  {section.subtitle && (
                    <h3 className="text-xl mb-2" style={{ marginLeft: '-16px', marginBottom: '8px !important' }}>
                      <ScrollspySubtitle text={section.subtitle} />
                    </h3>
                  )}

                  {section.subtitleBold && (
                    <h3
                      className="text-xl mb-2 fw-semibold"
                      style={{ marginLeft: '-16px', marginBottom: '8px !important' }}
                    >
                      <ScrollspySubtitle text={section.subtitleBold} />
                    </h3>
                  )}

                  {section.description && <SimpleText description={section.description} />}
                  {section.content && <div style={{ marginBottom: '32px' }}>{section.content}</div>}
                </section>
              ))}
              {!noScrollButton && (
                <div className="pt-5" style={{ paddingBottom: '32px' }}>
                  <ScrollTopButton />
                </div>
              )}
            </div>
          </article>

          {type === 'none' ? (
            <div className="nav-scrollspy-none"></div>
          ) : (
            <div className="nav-scrollspy d-none d-xl-block flex-grow-1">
              <div className="nav-scrollspy-position">
                <p className="text-sm fw-bold text-body-secondary mb-3">
                  {type == 'dev' ? 'Variantes' : 'Contenido en esta página'}
                </p>
                <ul className="scrollspy" data-cy="nav-wrapper">
                  {sections.map((section, index) => (
                    <li key={`${section.id}-${index}`} className={activeIndex === index ? 'active' : ''}>
                      <a
                        href={`#${index + 1}`}
                        className="text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(`${tabId}-section-${index + 1}`);
                          if (element) {
                            // Actualizar URL
                            window.history.pushState(null, '', `#${index + 1}`);
                            // Hacer scroll
                            element.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            });
                            // Actualizar estado activo
                            setActiveIndex(index);
                          }
                        }}
                      >
                        {section.title && section.title}
                        {section.subtitle && <ScrollspySubtitle text={section.subtitle} ScrollspyComponent={true} />}
                        {section.subtitleBold && (
                          <ScrollspySubtitle text={section.subtitleBold} ScrollspyComponent={true} />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </Scrollspy>
  );
};

export default DocumentationTemplate;
