'use client';
import React, { useEffect, useState } from 'react';

import Footer from '@/components/ObeliscoApi/Footer';
import PanelContent from '@/components/ObeliscoApi/PanelContent';
import { TabImplementation, TabResponseAPI } from '@/components/ObeliscoApi/Tabs';
import { basePathAPI } from '@/components/ObeliscoApi/utils';
import  { TabItem, TabPanel } from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';


const ApiComponents: React.FC = () => {
  const [footerComplete, setFooterComplete] = useState();
  const [activeTab, setActiveTab] = useState('panel-content-footer')

  useEffect(() => {
    fetch(`${basePathAPI}/footer/complete`)
      .then((response) => response.json())
      .then((data) => {
        setFooterComplete(data);
      })
  }, []);

  return (
    <>
      <ComponentHeader
        title="Obelisco API"
        description={[
          'Accedé fácilmente a los endpoints que proporcionan información actualizada sobre diversos aspectos de la vida en la ciudad. Utiliza la documentación y creá aplicaciones innovadoras con datos confiables y accesibles'
        ]}
        divider
      />
      <DocumentationTemplate
        sections={
          [
            {
              title: 'Servicios disponibles',
              id: 'services',
              firstTitle: true,
              content: (
                <section className='d-flex flex-column gap-5'>
                  <p className='m-0'>
                    Los servicios de Obelisco API están diseñados para optimizar tus desarrollos, reduciendo tiempos y esfuerzos de implementación. En esta guía encontrarás un listado de los servicios disponibles, junto con instrucciones y ejemplos para integrarlos de manera correcta.
                  </p>
                  <div>
                    <nav className="tabs-box" aria-label="Navegación por pestañas">
                      <ul className="nav nav-pills tabs p-0" role="tablist">
                        <TabItem
                          // key={section.id}
                          id={`panel-content-footer`}
                          title={'Footer'}
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                        <TabItem
                          // key={section.id}
                          id={`panel-content-header`}
                          title={'Header'}
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                      </ul>
                    </nav>

                    <hr className="mt-0 mb-4" />

                    <div className="tab-content" style={{ paddingTop: '32px' }}>
                      <TabPanel id={`panel-content-footer`} activeTab={activeTab}>
                        <>
                          <div className='d-flex flex-column gap-5'>
                            <div>
                              <h4>Footer</h4>
                              <p className="text-md">El footer de Obelisco API es una sección importante que proporciona información adicional y enlaces utiles. Aquí se puede modificar el footer para incluir imágenes, enlaces a redes sociales y números de contacto.</p>
                            </div>
                            <div>
                              <h4 >Cómo obtener todos los datos</h4>
                              <div className="list-informative mb-3">
                                <ul className="list-informative-bullet">
                                  <li>
                                    Se puede acceder a todos los datos utilizando el endpoint <strong>/footer/complete</strong>.
                                  </li>
                                </ul>
                              </div>

                              <PanelContent data={
                                [
                                  {
                                    id: '1',
                                    button: { title: 'Respuesta API' },
                                    panelContent: (
                                      <TabResponseAPI dataFooterComplete={footerComplete} />
                                    )
                                  },
                                  {
                                    id: '2',
                                    button: { title: 'Implementación' },
                                    panelContent: (
                                      <TabImplementation />
                                    )
                                  },
                                  {
                                    id: '3',
                                    button: { title: 'Resultado' },
                                    panelContent: (
                                      <div style={{ paddingTop: '3rem' }}>
                                        <Footer />
                                      </div>
                                    )
                                  }
                                ]
                              } />
                            </div>
                          </div>
                        </>
                      </TabPanel>
                        <TabPanel id={`panel-content-header`} activeTab={activeTab}>
                          <>
                            <div className='d-flex flex-column gap-5'>
                              <div>
                                <h4>Header</h4>
                                <p className="text-md">Actualmente el header se encuentra en construcción y estará disponible pronto.</p>
                              </div>
                            </div>
                          </>
                        </TabPanel>
                    </div>
                  </div>
                </section>
              )
            },
            {
              title: 'Contribuciones y Retroalimentación',
              id: 'contributions',
              firstTitle: true,
              content: (
                <>
                  <p>
                    ¡Valoramos tu contribución! Si encontrás algún error, tenés sugerencias o deseas contribuir a mejorar esta documentación, no dudes en enviar una solicitud a ejemplo@buenosaires.gob.ar
                  </p>
                </>
              )
            }
          ]
        }
      />
    </>
  );
};

export default ApiComponents;
