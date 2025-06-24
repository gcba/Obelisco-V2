import Image from "next/image";
import { useEffect, useState } from "react";

import { FooterData } from "./utils";

const Footer = () => {
  const [footer, setFooter] = useState<FooterData>();
  const { links, socialMedia, phones, images } = footer || {};

  useEffect(() => {
    fetch('https://obelisco-api.onrender.com/api/footer/complete')
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
                <li
                  className={`list-inline-item redes-items ${sm.name == 'X' ? sm.icon : ''} `}
                  key={sm.id}
                >
                  <a href={sm.url}>
                    <i className={`${sm.name !== 'X' ? sm.icon  : ''}`}></i>
                    {sm.name}
                  </a>
                </li>
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


export default Footer;