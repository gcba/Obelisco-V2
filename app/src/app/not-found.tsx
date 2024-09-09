import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="container d-flex align-items-center h-100">
      <div className="d-flex">
        <div>
          <h1 className="headline-lg">¡Oops! No hemos podido encontrar la página que buscas.</h1>
          <p className="text-muted">Código de error: 404</p>
          <p>Te sugerimos volver a tu búsqueda inicial.</p>
          <Link href="/" className="btn btn-secondary">
            Volver a la página principal
          </Link>
        </div>
        <div className="d-none d-lg-block">
          <Image src="/images/404.svg" width={300} height={200} alt="404 Not Found" className="mb-4" />
        </div>
      </div>
    </div>
  );
}
