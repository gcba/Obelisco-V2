import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { MAP_INSTITUTION, MAP_LATERAL } from './code-views';

const MapDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Lateral',
      content: (
        <CodeBox codeHTML={MAP_LATERAL}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="map">
                  <div className="map-body">
                    <h2 className="map-title">Ubicación</h2>
                    <p className="map-text">Av. Uspallata 3160</p>
                    <div className="map-iframe">
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
                    <LinkClient
                      href="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&amp;lng=-58.407032&amp;zl=15&amp;modo=transporte&amp;dir=Uspallata+3160"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Cómo llego
                    </LinkClient>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Institucional',
      content: (
        <CodeBox codeHTML={MAP_INSTITUTION}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="map">
                  <div className="map-body">
                    <h3 className="map-title">Ubicación</h3>
                    <p className="map-text">Av. Uspallata 3160</p>
                    <div className="map-iframe">
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
                    <LinkClient
                      href="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&amp;lng=-58.407032&amp;zl=15&amp;modo=transporte&amp;dir=Uspallata+3160"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Cómo llego
                    </LinkClient>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Mapa"
        description={[
          'El mapa brinda contexto sobre una ubicación geográfica y redirige a la persona usuaria al mapa interactivo de Buenos Aires. A su vez, permite a las personas usuarias anticipar y planificar sus acciones.',
          <>
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;{' '}
            <a href="https://gcba.github.io/estandares/componentes/mapa/" target="_blank" rel="noopener noreferrer">
              {' '}
              enlace
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default MapDocs;
