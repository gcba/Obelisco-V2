'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import Divisor from '@/components/Template/Divisor';
import MainDescription from './MainDescription';
import SimpleText from './SimpleText';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
  description?: string;
}

interface DocumentationTemplateProps {
  sections: Section[];
  title: string;
  description: string;
}

const DocumentationTemplate: React.FC<DocumentationTemplateProps> = ({ sections, title, description }) => {
  const sectionRefs = sections.map(() => useRef<HTMLDivElement>(null));
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = () => {
    sectionRefs.forEach((ref, index) => {
      const element = ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 84 && rect.bottom > 84) {
          setActiveIndex(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Scrollspy sectionRefs={sectionRefs} offset={84}>
      {() => (
        <div className='box-scrollspy'>
          <article className="box-content">
            <div data-cy="section-wrapper">
              <section>
                <HeadingTemplate className='pt-0'>
                  <h1>{title}</h1>
                </HeadingTemplate>
                <MainDescription description={description} />
              </section>

              <Divisor />

              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  ref={sectionRefs[index]}
                >
                  <HeadingTemplate className='pt-5'>
                    <h2 className="mb-4">{section.title}</h2>
                  </HeadingTemplate>
                  {section.description && <SimpleText description={section.description} />}
                  {section.content}
                  {index < sections.length - 1 && <Divisor />}
                </section>
              ))}
            </div>
          </article>

          <div className='nav-scrollspy d-none d-lg-block flex-grow-1'>
            <ul className='scrollspy' data-cy="nav-wrapper">
              <p className='headline-md fw-bold mb-1'>On this page</p>
              {sections.map((section, index) => (
                <li key={section.id} className={activeIndex === index ? "active" : ""}>
                  <a href={`#${section.id}`} className='text-sm'>{section.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Scrollspy>
  );
};

export default DocumentationTemplate;
