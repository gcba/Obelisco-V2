'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { TEMPLATE_PERFIL_INSTITUCIONAL } from './code-views';
const basePath = '/Obelisco-V2';

const TemplatePaginaSimpleDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  const DOC_SECTIONS = [
    {
      firstTitle: true,
      title: 'Encabezados',
      content: (
        <>
          <p className="text-md m-0">
            Se encuentra al comienzo de la página, justo debajo del header y está formado por:
          </p>
          <div className="list-informative d-flex flex-column gap-2">
            <ul className="list-informative-bullet">
              <li>Migas de pan, que nos indican el recorrido de la persona usuaria hasta la página actual.</li>
              <li>Título, que debe ser claro y utilizar el nombre formal del organismo.</li>
              <li>
                Breve descripción que explica la función o responsabilidad principal del área con un máximo de 120
                caracteres.
              </li>
            </ul>
          </div>
          <Image
            src={`${basePath}/images/templates/perfil_institucional/1.svg`}
            alt="Ejemplo de perfil institucional"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Buenas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Utilizar textos breves para la bajada.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Evitar abreviaturas o denominaciones informales.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Usar mayúsculas solo donde corresponda.</p>
          </div>
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Malas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">
              Modificar la estructura visual del componente (tamaño, alineación, espaciados, colores).
            </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Usar textos demasiado largos o técnicos en la bajada.</p>
          </div>
        </>
      ),
    },
    {
      title: 'Autoridad o referente del área',
      content: (
        <>
          <p className="text-md">
            Este bloque presenta la información principal de una autoridad o referente del área y está compuesto por:
          </p>
          <ul className="list-informative-bullet">
            <li>
              Una fotografía que presenta visualmente a la autoridad asociada al área.
              <br />
              <strong>Dimensiones</strong>: 352 x 352 px
              <br />
              <strong>Peso máximo</strong>: 400 KB
              <br />
              <strong>Formato permitido</strong>: .jpg, .jpeg, .webp, .avif
              <br />
              <strong>Estilo fotográfico</strong>: primer plano o plano medio corto y vestimenta formal.
            </li>
            <li>Nombre completo que identifica a la persona a cargo.</li>
            <li>Mención del rol actual.</li>
            <li>
              Bajada biográfica que resume la formación y trayectoria de la autoridad. Se recomienda un máximo de 700
              caracteres.
            </li>
            <li>
              Se deberá incluir un apartado obligatorio con datos de contacto utilizando enlaces y la fecha de última
              actualización.
            </li>
          </ul>
          <Image
            src={`${basePath}/images/templates/perfil_institucional/2.svg`}
            alt="Ejemplo de perfil institucional"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Buenas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Verificar ortografía, formato y longitud del texto antes de ser publicado.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Validar la fotografía con el área correspondiente.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Verificar que los canales de contacto se encuentren correctamente enlazados.</p>
          </div>
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Malas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Utilizar fotografías informales, con fondo ruidoso o mala calidad. </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Modificar tamaños, márgenes o estructura del módulo.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">
              Incluir información personal sensible (por ej.: DNI, datos privados, teléfonos personales).
            </p>
          </div>
        </>
      ),
    },
    {
      title: 'Información institucional',
      content: (
        <>
          <p className="text-md">
            Este módulo tiene como finalidad presentar información institucional del área de forma clara y estructurada.
            Deberá incluir obligatoriamente dos colapsables: “Misión y funciones” y “Responsabilidades primarias”.
          </p>
          <Image
            src={`${basePath}/images/templates/perfil_institucional/3.svg`}
            alt="Ejemplo de información institucional"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px' }}
          />
          <Image
            src={`${basePath}/images/templates/perfil_institucional/4.svg`}
            alt="Ejemplo de información institucional"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Buenas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              Mantener la consistencia en la forma de redactar títulos y contenido de los colapsables.
            </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Priorizar información permanente o estructural del área.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Utilizar párrafos breves y/o listas si corresponde.</p>
          </div>
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Malas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Crear colapsables con contenido duplicado o que podrían fusionarse.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Utilizar textos demasiado extensos o sin estructura.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Utilizar títulos que no tengan relación clara con su contenido. </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Usar lenguaje técnico o siglas no explicadas.</p>
          </div>
        </>
      ),
    },
    {
      title: 'Normativa',
      content: (
        <>
          <p className="text-md">
            Este módulo permite visualizar y acceder a documentos oficiales vinculados al área. Su objetivo es
            centralizar la normativa relevante para facilitar su consulta. El bloque está compuesto por:
          </p>
          <ul className="list-informative-bullet">
            <li>Nombre de la normativa.</li>
            <li>
              Botón que permite acceder al documento. Incluye ícono de enlace externo e indica apertura en nueva
              pestaña.
            </li>
          </ul>
          <Image
            src={`${basePath}/images/templates/perfil_institucional/5.svg`}
            alt="Ejemplo de información institucional"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Buenas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Verificar que los enlaces funcionen correctamente antes de publicar. </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Asegurarse que el archivo abra en una nueva pestaña.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Asegurarse de que el nombre de la normativa esté escrito correctamente.</p>
          </div>
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Malas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Vincular normativas duplicadas o no vigentes.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Renombrar la normativa.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Incluir enlaces rotos.</p>
          </div>
        </>
      ),
    },
    {
      title: 'Acceso al organigrama',
      content: (
        <>
          <p className="text-md">
            Su función es permitir que la persona usuaria explore la estructura jerárquica completa, incluyendo las
            autoridades dependientes y áreas internas asociadas.
          </p>
          <Image
            src={`${basePath}/images/templates/perfil_institucional/6.svg`}
            alt="Ejemplo de información institucional"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Buenas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              El botón debe redirigir a la subsección correspondiente del organigrama que se encuentra esa área; si no
              existe una subsección específica, deberá dirigir a la página de inicio del organigrama.
            </p>
          </div>
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Malas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">
              Redireccionar a la página de inicio del organigrama si existe una subsección específica.
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/templates">Plantillas</Link>
          </li>
        </ol>
      </nav>
      <ComponentHeader
        title="Perfil institucional"
        description={[
          `Esta guía está diseñada para proporcionar instrucciones claras para completar la ficha de perfil institucional. Busca asegurar consistencia y facilitar la carga correcta del contenido.`,
        ]}
      />

      <a
        className="btn btn-outline-secondary"
        href="https://gcba.github.io/obelisco-demo/perfil_institucional/pagina_simple_op5/index.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginBottom: '32px' }}
      >
        Acceder a la plantilla
        <span className="material-symbols-rounded o-icon">open_in_new</span>
      </a>

      <div>
        <nav className="tabs-box" aria-label="Navegación por pestañas">
          <ul className="nav nav-pills nav-box tabs p-0" role="tablist">
            <TabItem
              id={`panel-content-docs`}
              title={'Especificaciones'}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabItem id={`panel-content-html`} title={'Código'} activeTab={activeTab} setActiveTab={setActiveTab} />
          </ul>
        </nav>

        <hr className="mt-0 mb-4" />

        <div className="tab-content" style={{ paddingTop: '32px' }}>
          <TabPanel id={`panel-content-docs`} activeTab={activeTab}>
            <DocumentationTemplate sections={DOC_SECTIONS} type="ux" />
          </TabPanel>
          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <CodeViewTemplate template={TEMPLATE_PERFIL_INSTITUCIONAL} />
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default TemplatePaginaSimpleDocs;
