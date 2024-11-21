import Link from 'next/link';
import './home.scss';
import React from 'react';

const HomeDocs = () => (
  <div className="row box-home">
    <div className="col col-lg-7">
      <div className="">
        <h1>Conocé Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires. </h1>
        <p>
          Simplificá tu proyecto con nuestra librería de componentes y guía de estilos, para una implementación ágil y
          sencilla.
        </p>
      </div>
      <div className="d-flex flex-wrap gap-2">
        <Link href="https://github.com/gcba/Obelisco-V2" className="btn btn-primary btn-lg btn-icon">
          <i className="bx bxl-github"></i>
          Github
        </Link>
        <Link href="/getting-started" className="btn btn-secondary btn-lg btn-icon">
          Get Started
          <i className="bx bx-right-arrow-alt"></i>
        </Link>
      </div>
    </div>
    <div className="d-none d-lg-flex col-lg-5 justify-content-end">
      <iframe
        src="https://lottie.host/embed/42ed9377-9fc5-44cf-acf2-4979e67e2be9/2H683eyRGi.json"
        width={250}
        height={250}
      ></iframe>
    </div>
  </div>
);

export default HomeDocs;
