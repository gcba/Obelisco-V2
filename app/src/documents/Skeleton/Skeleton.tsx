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
              <div className="header-box-sizing_banner ob-skeleton">
                {/* header banner */}
                <div className="header-banner">
                  <span className="ob-placeholder me-3" style={{ width: '30px', height: '16px' }}></span>
                  <p className="text-sm col-2">
                    <span className="ob-placeholder w-100"></span>
                  </p>
                </div>
                {/* header banner */}
                <header className="o-header o-header_banner navbar" role="banner" aria-hidden="true">
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
  ];

  return (
    <>
      <ComponentHeader title="Skeleton" description={['skeleton component']} />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default Skeleton;
