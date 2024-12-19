'use client';

import { Scrollspy } from '@makotot/ghostui';
import React, { useEffect, useState, useMemo, useCallback } from 'react';

import ScrollspySubtitle from '../ScrollspyTitle';
import ScrollTopButton from './ScrollTopButton';
import SimpleText from './SimpleText';

export interface Section {
  id?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  content?: React.ReactNode;
  description?: string;
}

interface DocumentationTemplateProps {
  sections: Section[];
  type?: string;
  noScrollButton?: boolean;
}

const DocumentationTemplate: React.FC<DocumentationTemplateProps> = ({ sections, type, noScrollButton }) => {
  const sectionRefs = useMemo(() => sections.map(() => React.createRef<HTMLDivElement>()), [sections]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
                  id={section.id || `section-${type}-${index + 1}`}
                  ref={sectionRefs[index]}
                >
                  {section.title && <h2 className="h4 mb-3 mt-4">{section.title}</h2>}
                  {section.subtitle && (
                    <h3 className="text-xl text-body-secondary mb-2">
                      <ScrollspySubtitle text={section.subtitle} />
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

          <div className="nav-scrollspy d-none d-xl-block flex-grow-1">
            <div className="nav-scrollspy-position">
              <p className="text-sm fw-bold text-body-secondary mb-3">
                {type == 'dev' ? 'Variantes' : 'Contenido en esta página'}
              </p>
              <ul className="scrollspy" data-cy="nav-wrapper">
                {sections.map((section, index) => (
                  <li key={`${section.id}-${index}`} className={activeIndex === index ? 'active' : ''}>
                    <a href={`#${section.id || `section-${type}-${index + 1}`}`} className="text-sm">
                      {section.title && section.title}
                      {section.subtitle && <ScrollspySubtitle text={section.subtitle} ScrollspyComponent={true} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Scrollspy>
  );
};

export default DocumentationTemplate;
