import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const Skeleton: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Skeleton',
      firstTitle: true,
    },
    {
      subtitle: 'Header',
      content: (
        <>
          <CodeBox codeHTML={''}>
            <div className="container-fluid">
              <div className="header-box-sizing_banner">
                {/* header banner */}
                <div className="header-banner ob-skeleton">
                  <span className="ob-placeholder me-3" style={{ width: '30px', height: '16px' }}></span>
                  <p className="text-sm col-2">
                    <span className="ob-placeholder w-100"></span>
                  </p>
                </div>
                {/* header banner */}
                <header className="o-header o-header_banner navbar ob-skeleton" role="banner" aria-hidden="true">
                  <div className="container header-container">
                    <div className="navbar-brand">
                      <span className="ob-placeholder" style={{ width: '74px', height: '40px' }}></span>
                    </div>

                    <div className="navbar-login-mobile col-2 ms-auto">
                      <span className="ob-placeholder ob-placeholder-action"></span>
                    </div>
                    <span
                      className="ob-placeholder ob-placeholder-action d-xl-none ms-3"
                      style={{ width: '48px' }}
                    ></span>

                    <div className="collapse navbar-collapse" id="navbarContent1">
                      <div className="navbar-content">
                        <div className="navbar-sections">
                          <nav>
                            <p className="navbar-sections-title">Secciones</p>
                            <ul className="nav nav-pills nav-sections">
                              <li className="nav-item col-2">
                                <span className="ob-placeholder ob-placeholder-action"></span>
                              </li>

                              <li className="nav-item col-2">
                                <span className="ob-placeholder ob-placeholder-action"></span>
                              </li>

                              <li className="nav-item col-2">
                                <span className="ob-placeholder ob-placeholder-action"></span>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="navbar-search">
                          <div className="search-container">
                            <span className="ob-placeholder ob-placeholder-action"></span>
                          </div>
                        </div>
                        <div className="navbar-login col-1">
                          <span className="ob-placeholder ob-placeholder-action"></span>
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
      subtitle: 'Footer',
      content: (
        <CodeBox codeHTML={''}>
          <div className="px-4">
            <footer className="main-footer ob-skeleton" aria-hidden="true">
              <div className="container">
                <section>
                  <h3>
                    <span className="ob-placeholder" style={{ width: '132px' }}></span>
                  </h3>
                  <ul className="list-inline">
                    <li className="list-inline-item phone-items">
                      <span className="ob-placeholder" style={{ width: '196px' }}></span>
                    </li>
                    <li className="list-inline-item phone-items">
                      <span className="ob-placeholder" style={{ width: '135px' }}></span>
                    </li>
                    <li className="list-inline-item phone-items">
                      <span className="ob-placeholder" style={{ width: '83px' }}></span>
                    </li>
                    <li className="list-inline-item phone-items">
                      <span className="ob-placeholder" style={{ width: '88px' }}></span>
                    </li>
                    <li className="list-inline-item phone-items">
                      <span className="ob-placeholder" style={{ width: '187px' }}></span>
                    </li>
                    <li className="list-inline-item phone-items">
                      <span className="ob-placeholder" style={{ width: '188px' }}></span>
                    </li>
                  </ul>
                  <span className="ob-placeholder" style={{ width: '170px' }}></span>
                </section>
                <section>
                  <h3>
                    <span className="ob-placeholder" style={{ width: '160px' }}></span>
                  </h3>
                  <ul className="list-inline">
                    <li className="list-inline-item redes-items">
                      <span className="ob-placeholder ob-placeholder-icon me-1"></span>
                      <span className="ob-placeholder" style={{ width: '100px' }}></span>
                    </li>
                    <li className="list-inline-item redes-items">
                      <span className="ob-placeholder ob-placeholder-icon me-1"></span>
                      <span className="ob-placeholder" style={{ width: '100px' }}></span>
                    </li>
                    <li className="list-inline-item redes-items">
                      <span className="ob-placeholder ob-placeholder-icon me-1"></span>
                      <span className="ob-placeholder" style={{ width: '20px' }}></span>
                    </li>
                    <li className="list-inline-item redes-items">
                      <span className="ob-placeholder ob-placeholder-icon me-1"></span>
                      <span className="ob-placeholder" style={{ width: '80px' }}></span>
                    </li>
                    <li className="list-inline-item redes-items">
                      <span className="ob-placeholder ob-placeholder-icon me-1"></span>
                      <span className="ob-placeholder" style={{ width: '80px' }}></span>
                    </li>
                    <li className="list-inline-item redes-items">
                      <span className="ob-placeholder ob-placeholder-icon me-1"></span>
                      <span className="ob-placeholder" style={{ width: '70px' }}></span>
                    </li>
                    <li className="list-inline-item redes-items">
                      <span className="ob-placeholder ob-placeholder-icon me-1"></span>
                      <span className="ob-placeholder" style={{ width: '80px' }}></span>
                    </li>
                  </ul>
                </section>
              </div>
              <hr className="divider" />
              <div className="container">
                <section className="footer-legal-section">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-xl-4 footer-content-img">
                      <span className="ob-placeholder ob-placeholder-logo"></span>
                      <span className="ob-placeholder ob-placeholder-logo"></span>
                    </div>
                    <div className="col-12">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <span className="ob-placeholder" style={{ width: '100px' }}></span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ob-placeholder" style={{ width: '175px' }}></span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ob-placeholder" style={{ width: '160px' }}></span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ob-placeholder" style={{ width: '120px' }}></span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ob-placeholder" style={{ width: '100px' }}></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="footer-license-text">
                    <span className="ob-placeholder col-2"></span>
                    <span className="ob-placeholder col-1 mx-1"></span>
                    <span className="ob-placeholder col-3"></span>
                    <span className="ob-placeholder col-1 ms-1"></span>
                  </div>
                </section>
              </div>
            </footer>
          </div>
        </CodeBox>
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
