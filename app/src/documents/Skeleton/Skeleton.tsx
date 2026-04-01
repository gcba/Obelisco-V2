import Image from 'next/image';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const img_placeholder = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

const Skeleton: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Skeleton',
      firstTitle: true,
    },
    {
      subtitle: 'Header - default',
      content: (
        <>
          <CodeBox codeHTML={''}>
            <div className="container-fluid">
              <div className="header-box-sizing_banner placeholder-glow">
                {/* header banner */}
                <div className="header-banner">
                  <Image
                    className="header-banner-img placeholder bg-dark"
                    src={img_placeholder}
                    alt="..."
                    width={30}
                    height={16}
                  />
                  <p className="text-sm col-2">
                    <span className="placeholder bg-dark w-100"></span>
                  </p>
                </div>
                {/* header banner */}
                <header className="o-header o-header_banner navbar" role="banner" aria-hidden="true">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <div className="navbar-brand">
                      <Image
                        className="d-none d-xl-block placeholder bg-dark"
                        src={img_placeholder}
                        alt="..."
                        width={74}
                        height={40}
                      />
                      <Image
                        className="d-xl-none placeholder bg-dark"
                        src={img_placeholder}
                        alt="..."
                        width={74}
                        height={40}
                      />
                    </div>

                    <div className="navbar-login-mobile col-2 ms-auto">
                      <LinkClient
                        className="btn btn-lg btn-icon btn-outline-tertiary placeholder bg-dark disabled w-100"
                        aria-disabled="true"
                      >
                        {''}
                      </LinkClient>
                    </div>
                    <button
                      className="navbar-toggler placeholder bg-dark disabled"
                      type="button"
                      style={{ background: 'unset' }}
                      aria-disabled="true"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent1">
                      <div className="navbar-content">
                        <div className="navbar-sections">
                          <nav>
                            <p className="navbar-sections-title">Secciones</p>
                            <ul className="nav nav-pills nav-sections">
                              <li className="nav-item col-2">
                                <LinkClient
                                  className="nav-link nav-link-lg placeholder bg-dark disabled"
                                  aria-disabled="true"
                                >
                                  {''}
                                </LinkClient>
                              </li>

                              <li className="nav-item col-2">
                                <LinkClient
                                  className="nav-link nav-link-lg placeholder bg-dark disabled"
                                  aria-disabled="true"
                                >
                                  {''}
                                </LinkClient>
                              </li>

                              <li className="nav-item col-2">
                                <LinkClient
                                  className="nav-link nav-link-lg placeholder bg-dark disabled"
                                  aria-disabled="true"
                                >
                                  {''}
                                </LinkClient>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="navbar-search">
                          <div className="search-container">
                            <input className="form-control input-search input-search-with-button placeholder disabled bg-dark" />
                          </div>
                        </div>
                        <div className="navbar-login col-1">
                          <LinkClient className="btn btn-lg placeholder bg-dark disabled w-100" aria-disabled="true">
                            {''}
                          </LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Header - shimmer',
      content: (
        <>
          <CodeBox codeHTML={''}>
            <div className="container-fluid">
              <div className="header-box-sizing_banner ob-skeleton">
                {/* header banner */}
                <div className="header-banner">
                  <Image
                    className="header-banner-img placeholder bg-dark"
                    src={img_placeholder}
                    alt="..."
                    width={30}
                    height={16}
                  />
                  <p className="text-sm col-2">
                    <span className="placeholder bg-dark w-100"></span>
                  </p>
                </div>
                {/* header banner */}
                <header className="o-header o-header_banner navbar" role="banner" aria-hidden="true">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <div className="navbar-brand">
                      <Image
                        className="d-none d-xl-block placeholder bg-dark"
                        src={img_placeholder}
                        alt="..."
                        width={74}
                        height={40}
                      />
                      <Image
                        className="d-xl-none placeholder bg-dark"
                        src={img_placeholder}
                        alt="..."
                        width={74}
                        height={40}
                      />
                    </div>

                    <div className="navbar-login-mobile col-2 ms-auto">
                      <LinkClient
                        className="btn btn-lg btn-icon btn-outline-tertiary placeholder bg-dark disabled w-100"
                        aria-disabled="true"
                      >
                        {''}
                      </LinkClient>
                    </div>
                    <button
                      className="navbar-toggler placeholder bg-dark disabled"
                      type="button"
                      style={{ background: 'unset' }}
                      aria-disabled="true"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent1">
                      <div className="navbar-content">
                        <div className="navbar-sections">
                          <nav>
                            <p className="navbar-sections-title">Secciones</p>
                            <ul className="nav nav-pills nav-sections">
                              <li className="nav-item col-2">
                                <LinkClient
                                  className="nav-link nav-link-lg placeholder bg-dark disabled"
                                  aria-disabled="true"
                                >
                                  {''}
                                </LinkClient>
                              </li>

                              <li className="nav-item col-2">
                                <LinkClient
                                  className="nav-link nav-link-lg placeholder bg-dark disabled"
                                  aria-disabled="true"
                                >
                                  {''}
                                </LinkClient>
                              </li>

                              <li className="nav-item col-2">
                                <LinkClient
                                  className="nav-link nav-link-lg placeholder bg-dark disabled"
                                  aria-disabled="true"
                                >
                                  {''}
                                </LinkClient>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="navbar-search">
                          <div className="search-container">
                            <input className="form-control input-search input-search-with-button placeholder disabled bg-dark" />
                          </div>
                        </div>
                        <div className="navbar-login col-1">
                          <LinkClient className="btn btn-lg placeholder bg-dark disabled w-100" aria-disabled="true">
                            {''}
                          </LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader title="Skeleton" description={['skeleton component']} />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default Skeleton;
