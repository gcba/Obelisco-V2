'use client';



import React, { useEffect, useState } from 'react';


import Footer from '@/components/ObeliscoApi/Footer';
import PanelContent from '@/components/ObeliscoApi/PanelContent';
import { TabImplementation, TabResponseAPI } from '@/components/ObeliscoApi/Tabs';
import { basePathAPI } from '@/components/ObeliscoApi/utils';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';



const ApiComponents: React.FC = () => {
  const [footerComplete, setFooterComplete] =useState();
  

  useEffect(() => {
    fetch(`${basePathAPI}/footer/complete`)
      .then((response) => response.json())
      .then((data) => {
        setFooterComplete(data);
      })
  } , []);


  const SECTION_HOME = [
    {
      title: 'Introducción',
      firstTitle: true,
      content: (
        <>
            <p className="text-md">Esta guía integral está diseñada para ayudarte a maximizar el uso de Obelisco API, proporcionando información esencial, ejemplos prácticos y consejos útiles.</p>
            <h3 className='text-xl fw-semibold'>Contenido destacado</h3>
            <div className="list-informative mb-3">
              <ul className="list-informative-bullet">
                <li>[Servicio Footer]: Descubre cómo configurar el footer, añadiendo imágenes, enlaces, redes sociales y números de contacto.</li>
              </ul>
            </div>
        
        </>
      ),
    },
    {
      subtitle: 'Contribuciones y Retroalimentación',
      content: (
        <>
        <p className="text-md">¡Valoramos tu contribución! Si encuentras algún error, tienes sugerencias o deseas contribuir a mejorar esta documentación, no dudes en enviar una solicitud a <a href="">ejemplo@ejemplo.com.ar.</a></p>
        </>
      )
}
  ];

  const SECTION_FOOTER = [
    {
      title: 'Footer',
      firstTitle: true,
      content: (
        <>
          <p className="text-md">El footer de Obelisco API es una sección importante que proporciona información adicional y enlaces útiles. Aquí puedes personalizar el footer para incluir imágenes, enlaces a redes sociales y números de contacto.</p>
          <h3 className='text-xl fw-semibold'>Obtene todos los datos</h3>
          <div className="list-informative mb-3">
            <ul className="list-informative-bullet">
              <li>
                Puedes acceder a todos los datos utilizando el endpoint <strong>/footer/complete</strong>.
              </li>
            </ul>
          </div>
        
          <PanelContent data={
            [
              {
                id: '1',
                button: {title:'Respuesta API'},
                panelContent: (       
                  <TabResponseAPI   dataFooterComplete={footerComplete}/>
                )
              },
              {
                id: '2',
                button: {title:'Implementación'},
                panelContent: (       
                  <TabImplementation    />
                )
              },
              {
                id: '3',
                button: {title:'Resultado'},
                panelContent: (
                  <div style={{paddingTop: '3rem'}}>
                    <Footer/>
                  </div>
                )
              }
            ]
          } />
    
        </>
      ),
    },
  ]

  return (
    <>
      <ComponentHeader
        title="Obelisco API"
        description={[
          'Accedé fácilmente a los endpoints que proporcionan información actualizada sobre diversos aspectos de la vida en la ciudad. Utiliza la documentación y creá aplicaciones innovadoras con datos confiables y accesibles'
        ]}
      />
      <Tabs
        customSections={[
          {
            title: 'Introducción',
            id: 'home',
            sectionContent: SECTION_HOME,
          },
          {
            title: 'Footer',
            id: 'footer',
            sectionContent: SECTION_FOOTER,
          },
        ]}
      />
    </>
  );
};

export default ApiComponents;
