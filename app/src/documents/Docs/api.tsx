'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
// const basePath = '/Obelisco-V2';
const basePathAPI = 'http://localhost:3000/api';

const footerCompleteImplementationReact = `
import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [footer, setFooter] = useState();
  const { links, socialMedia, phones, images } = footer || {};

  useEffect(() => {
    fetch('http://localhost:3000/api/footer/complete')
      .then((res) => res.json())
      .then((data) => setFooter(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <footer className="main-footer">
      <div className="container">
        <section>
          <h3>Teléfonos útiles</h3>
          <ul className="list-inline">
            {phones?.map((phone) => (
              <li
                className="list-inline-item phone-items"
                key={phone.id}
              >
                <a href={phone.number}>{phone.name}</a>
              </li>
            ))}
          </ul>
          <a href="https://buenosaires.gob.ar/inicio/telefonos">
            Ver todos los teléfonos
          </a>
        </section>

        <section>
          <h3>Redes de la ciudad</h3>
          <ul className="list-inline">
            {socialMedia?.map((sm) =>
              sm.name === 'Twitter' ? (
                <li
                  className={'list-inline-item redes-items ' + (sm.icon)}
                  key={sm.id}
                >
                  <a href={sm.url}>{sm.name}</a>
                </li>
              ) : (
                <li
                  className='list-inline-item redes-items'
                  key={sm.id}
                >
                  <a href={sm.url}>
                    <i className={sm.icon}></i>
                    {sm.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </section>
      </div>
      <hr className="divider" />
      <div className="container">
        <section className="footer-legal-section">
          <h3 className="sr-only">Información gubernamental</h3>
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-xl-4 footer-content-img">
              <img
                className="d-md-none"
                src={images ? 'http://localhost:3000/' + (images[1]?.url ?? '') : ''}
                alt="Logo de Ciudad de Buenos Aires"
                height="48"
              />
              <img
                className="d-none d-md-inline"
                src={images ? 'http://localhost:3000/' + (images[0]?.url ?? '') : ''}
                alt="Logo de Ciudad de Buenos Aires"
                height="40"
              />
              <img
                className="img-vamos-ba"
                src={images ? 'http://localhost:3000/' + (images[2]?.url ?? '') : ''}
                alt="Logo de Vamos Buenos Aires"
              />
            </div>
            <div className="col-12">
              <ul className="list-inline">
                {links?.map((link) => (
                  <li
                    className="list-inline-item"
                    key={link.id}
                  >
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="footer-license-text">
            Los contenidos de buenosaires.gob.ar están licenciados bajo Creative
            Commons Reconocimiento 2.5 Argentina License.
          </div>
        </section>
      </div>
    </footer>
  );
}
`

const footerCompleteImplementationAngular = `
// SERVICIO
@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private apiUrl = 'http://localhost:3000/api/footer/complete';

  constructor(private http: HttpClient) {}

  getFooterData(): Observable<FooterData> {
    return this.http.get<FooterData>(this.apiUrl);
  }
}

// COMPONENTE
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [FooterService], 
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  footerData?: FooterData;

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
    this.footerService.getFooterData().subscribe({
      next: (data) => (this.footerData = data),
      error: (err) => console.error(err),
    });
  }
}

// HTML 
<footer class="main-footer" *ngIf="footerData">
  <div class="container">
    <section>
      <h3>Teléfonos útiles</h3>
      <ul class="list-inline">
        <li *ngFor="let phone of footerData.phones" class="list-inline-item phone-items">
          <a [href]="phone.number">{{ phone.name }}</a>
        </li>
      </ul>
      <a href="https://buenosaires.gob.ar/inicio/telefonos">Ver todos los teléfonos</a>
    </section>

    <section>
      <h3>Redes de la ciudad</h3>
        <ul class="list-inline">
          <ng-container *ngFor="let sm of footerData.socialMedia">
            <li
              *ngIf="sm.name === 'Twitter'; else normalSocial"
              class="list-inline-item redes-items"
              [ngClass]="sm.icon"
              [attr.key]="sm.id"
            >
              <a [href]="sm.url">{{ sm.name }}</a>
            </li>

            <ng-template #normalSocial>
              <li class="list-inline-item redes-items" [attr.key]="sm.id">
                <a [href]="sm.url">
                  <i [class]="sm.icon"></i>
                  {{ sm.name }}
                </a>
              </li>
            </ng-template>
          </ng-container>
        </ul>
    </section>
  </div>

  <hr class="divider" />
  <div class="container">
    <section class="footer-legal-section">
      <h3 class="sr-only">Información gubernamental</h3>
      <div class="row align-items-center">
        <div class="col-12 col-md-5 col-xl-4 footer-content-img">
          <img *ngIf="footerData.images[1]?.url" class="d-md-none"
            [src]="'http://localhost:3000/' + footerData.images[1].url" alt="Logo de Ciudad de Buenos Aires" height="48"
            width="160" />
          <img *ngIf="footerData.images[0]?.url" class="d-none d-md-inline"
            [src]="'http://localhost:3000/' + footerData.images[0].url" alt="Logo de Ciudad de Buenos Aires" height="40"
            width="160" />
          <img *ngIf="footerData.images[2]?.url" class="img-vamos-ba"
            [src]="'http://localhost:3000/' + footerData.images[2].url" alt="Logo de Vamos Buenos Aires" height="40"
            width="160" />
        </div> 
        <div class="col-12">
          <ul class="list-inline">
            <li *ngFor="let link of footerData.links" class="list-inline-item">
              <a [href]="link.url">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <div class="footer-license-text">
        Los contenidos de buenosaires.gob.ar están licenciados bajo Creative
        Commons Reconocimiento 2.5 Argentina License.
      </div>
    </section>
  </div>
</footer>



`

import Image from 'next/image';

interface FooterLink {
  id: string | number;
  name: string;
  url: string;
}

interface FooterSocialMedia {
  id: string | number;
  name: string;
  url: string;
  icon: string;
}

interface FooterPhone {
  id: string | number;
  name: string;
  number: string;
}

interface FooterImage {
  id: string | number;
  url: string;
}

interface FooterData {
  links: FooterLink[];
  socialMedia: FooterSocialMedia[];
  phones: FooterPhone[];
  images: FooterImage[];
}


const EXAMPLES_IMPLEMENTATION = {
  react: 'react',
  angular: 'angular',
}

const Footer = () => {
  const [footer, setFooter] = useState<FooterData>();
  const { links, socialMedia, phones, images } = footer || {};

  useEffect(() => {
    fetch('http://localhost:3000/api/footer/complete')
      .then((res) => res.json())
      .then((data) => setFooter(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <footer className='main-footer'>
      <div className='container'>
        <section>
          <h3>Teléfonos útiles</h3>
          <ul className='list-inline'>
            {phones?.map((phone) => (
              <li
                className='list-inline-item phone-items'
                key={phone.id}
              >
                <a href={phone.number}>{phone.name}</a>
              </li>
            ))}
          </ul>
          <a href='https://buenosaires.gob.ar/inicio/telefonos'>
            Ver todos los teléfonos
          </a>
        </section>

        <section>
          <h3>Redes de la ciudad</h3>
          <ul className='list-inline'>
            {socialMedia?.map((sm) =>
              sm.name === 'Twitter' ? (
                <li
                  className={`list-inline-item redes-items ${sm.icon}`}
                  key={sm.id}
                >
                  <a href={sm.url}>{sm.name}</a>
                </li>
              ) : (
                <li
                  className='list-inline-item redes-items'
                  key={sm.id}
                >
                  <a href={sm.url}>
                    <i className={sm.icon}></i>
                    {sm.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </section>
      </div>
      <hr className='divider' />
      <div className='container'>
        <section className='footer-legal-section'>
          <h3 className='sr-only'>Información gubernamental</h3>
          <div className='row align-items-center'>
            <div className='col-12 col-md-5 col-xl-4 footer-content-img'>
              {images && images[1]?.url && (
                <Image
                  className='d-md-none'
                  src={`http://localhost:3000/${images[1].url}`}
                  alt='Logo de Ciudad de Buenos Aires'
                  height={48}
                  width={160}
                  priority
                />
              )}
              {images && images[0]?.url && (
                <Image
                  className='d-none d-md-inline'
                  src={`http://localhost:3000/${images[0].url}`}
                  alt='Logo de Ciudad de Buenos Aires'
                  height={40}
                  width={160}
                  priority
                />
              )}
              {images && images[2]?.url && (
                <Image
                  className='img-vamos-ba'
                  src={`http://localhost:3000/${images[2].url}`}
                  alt='Logo de Vamos Buenos Aires'
                  height={40}
                  width={160}
                  priority
                />
              )}
            </div>
            <div className='col-12'>
              <ul className='list-inline'>
                {links?.map((link) => (
                  <li
                    className='list-inline-item'
                    key={link.id}
                  >
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className='footer-license-text'>
            Los contenidos de buenosaires.gob.ar están licenciados bajo Creative
            Commons Reconocimiento 2.5 Argentina License.
          </div>
        </section>
      </div>
    </footer>
  );
}


const ApiComponents: React.FC = () => {
  const [footerComplete, setFooterComplete] =useState();
  const [toggleExpandHTML, setToggleExpandHTML] =useState(false);
  const [showExampleImplementation, setShowExampleImplementation] = useState<string>(EXAMPLES_IMPLEMENTATION.react);

  const handleToggleExpandHTML = () => {
    setToggleExpandHTML(!toggleExpandHTML);
  }

  useEffect(() => {
    fetch(`${basePathAPI}/footer/complete`)
      .then((response) => response.json())
      .then((data) => {
        setFooterComplete(data);
        // Aquí puedes manejar los datos obtenidos del endpoint
        console.log('Datos del footer:', data);
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
        

          <nav className="tabs-box" aria-label="Navegación por pestañas">
            <ul className="nav nav-pills tabs nav-box" id="icon-myTab" role="tablist">
              
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#panel-bg-content-1"
                  type="button"
                  role="tab"
                  aria-controls="panel-bg-content-1"
                  aria-selected="true"
                  id="tab-bg-1"
                >
                  <div className="nav-icon">
                    <span>Respuesta API</span>
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">description</span>
                  </div>
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#panel-bg-content-2"
                  type="button"
                  role="tab"
                  aria-controls="panel-bg-content-2"
                  aria-selected="false"
                  id="tab-bg-2"
                >
                  <div className="nav-icon">
                    <span>Implementación</span>
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">description</span>
                  </div>
                </button>
              </li>
              
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#panel-bg-content-3"
                  type="button"
                  role="tab"
                  aria-controls="panel-bg-content-3"
                  aria-selected="false"
                  id="tab-bg-3"
                >
                  <div className="nav-icon">
                    <span>Resultado</span>
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">description</span>
                  </div>
                </button>
              </li>
            
            </ul>
          </nav>
          <div className="tab-content" id="icon-myTabContent" style={{outline: 'rgb(230, 235, 240) solid 0.125rem', outlineOffset: '-0.125rem', borderRadius: '0px 0.75rem 0.75rem', padding: '1rem'}}>
            <div
              className="tab-pane fade show active"
              id="panel-bg-content-1"
              role="tabpanel"
              aria-labelledby="tab-bg-1"
            >
              <div style={{ position: "relative", paddingTop: "3rem", ...(!toggleExpandHTML ? { maxHeight: "300px", overflowY: "hidden",  } : {}) }}>
                <button
                  className={`btn btn-outline-tertiary btn-sm my-2`}
                  style={{ position: 'absolute', top: '5px', right: '10px' }}
                  onClick={handleToggleExpandHTML}
                >
                  {toggleExpandHTML ? 'Ver menos' : 'Ver más'}
                </button>
                <SyntaxHighlighter language="json" style={dracula} wrapLongLines>
                  {JSON.stringify(footerComplete, null, 2)}
                </SyntaxHighlighter>
              </div>  
            </div>

            <div className="tab-pane fade" id="panel-bg-content-2" role="tabpanel" aria-labelledby="tab-bg-2">
              <div style={{ position: "relative", paddingTop: "3rem", ...(!toggleExpandHTML ? { maxHeight: "300px", overflowY: "hidden",  } : {}) }}>
                <div  style={{ position: 'absolute', top: '0px', padding: '0 0.25rem' }} className='w-100 d-flex justify-content-between '>
                    <div className='d-flex gap-4'>
                      <button
                      className={`btn btn-outline-primary btn-sm my-2`}
                      onClick={() => setShowExampleImplementation(EXAMPLES_IMPLEMENTATION.react)}
                      style={{ backgroundColor: showExampleImplementation === EXAMPLES_IMPLEMENTATION.react ? '#336acc' : 'transparent', color: showExampleImplementation === EXAMPLES_IMPLEMENTATION.react ? '#fff' : '#000' }}
                    >
                      React JS
                    </button>
                      <button
                      className={`btn btn-outline-primary btn-sm my-2`}
                      onClick={() => setShowExampleImplementation(EXAMPLES_IMPLEMENTATION.angular)}
                      style={{ backgroundColor: showExampleImplementation === EXAMPLES_IMPLEMENTATION.angular ? '#336acc' : 'transparent', color: showExampleImplementation === EXAMPLES_IMPLEMENTATION.angular ? '#fff' : '#000' }}
                    >
                      Angular JS
                    </button>
                    </div>
                    <button
                      className={`btn btn-outline-tertiary btn-sm my-2`}
                      onClick={handleToggleExpandHTML}
                    >
                      {toggleExpandHTML ? 'Ver menos' : 'Ver más'}
                    </button>
                </div>
                <SyntaxHighlighter language="tsx" style={dracula} wrapLongLines>
                  {
                  showExampleImplementation === EXAMPLES_IMPLEMENTATION.react ?  footerCompleteImplementationReact 
                  :
                  showExampleImplementation === EXAMPLES_IMPLEMENTATION.angular ?  footerCompleteImplementationAngular
                  : ''
                  }
                </SyntaxHighlighter>
              </div>  
            </div>

            <div className="tab-pane fade" id="panel-bg-content-3" role="tabpanel" aria-labelledby="tab-bg-3">
              <div style={{paddingTop: '3rem'}}>
                <Footer/>
              </div>
            </div>

          </div>
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
