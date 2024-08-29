import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { MAP_INSTITUTION, MAP_LATERAL } from './code-views';

const MapDocs: React.FC = () => {
  const sections = [
    {
      title: 'Mapa',
      h1: true,
      content: (
        <MainDescription description="El mapa brinda contexto sobre una ubicación geográfica y redirige a la persona usuaria al mapa interactivo de Buenos Aires. A su vez, permite a las personas usuarias anticipar y planificar sus acciones." />
      ),
    },
    {
      id: 'section-1',
      title: 'Lateral',
      content: (
        <CodeBox codeHTML={MAP_LATERAL}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="card card-map">
                  <div className="card-body">
                    <h2 className="card-title">Ubicación</h2>
                    <p className="card-text">Av. Uspallata 3160</p>
                    <div className="card-iframe">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar"
                        width="600"
                        height="146"
                        title="Mapa de como llegar"
                        allowFullScreen={true}
                        loading="lazy"
                        tabIndex={-1}
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: '0px' }}
                      ></iframe>
                    </div>
                    <a
                      href="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&amp;lng=-58.407032&amp;zl=15&amp;modo=transporte&amp;dir=Uspallata+3160"
                      className="btn btn-primary btn-lg btn-block"
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={0}
                    >
                      Cómo llego
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Institucional',
      content: (
        <CodeBox codeHTML={MAP_INSTITUTION}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <div className="card card-map">
                  <div className="card-body">
                    <h3 className="card-title">Ubicación</h3>
                    <p className="card-text">Av. Uspallata 3160</p>
                    <div className="card-iframe">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar"
                        width="600"
                        height="146"
                        title="Mapa de como llegar"
                        allowFullScreen={true}
                        loading="lazy"
                        tabIndex={-1}
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: '0px' }}
                      ></iframe>
                    </div>
                    <a
                      href="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&amp;lng=-58.407032&amp;zl=15&amp;modo=transporte&amp;dir=Uspallata+3160"
                      className="btn btn-primary btn-lg btn-block"
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={0}
                    >
                      Cómo llego
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default MapDocs;
