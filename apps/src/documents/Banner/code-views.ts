export const EGcodeBannerImport = `import Banner from "@componentes/Banner";`;

export const EGcodeBannerComplete = `
  <Banner
    iconBanner="bx bx-info-circle"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    buttons={
      <>
        <button className="btn btn-sm btn-primary">Click Me</button>
        <button className="btn btn-sm btn-secondary">Click Me</button>
      </>
    }
  />

  <br />

  <Banner
    iconBanner="face"
    isDark={true}
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    buttons={
      <>
        <button className="btn btn-sm btn-primary">Click Me</button>
        <button className="btn btn-sm btn-secondary">Click Me</button>
      </>
    }
  />
`;

export const EGcodeBannerChildren = `
  <Banner
    iconBanner="bx bx-info-circle"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  >
    {children}
  </Banner>
`

export const EGcodeBannerTextIcon = `
  <Banner
    iconBanner="bx bx-info-circle"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  />

  <br />

  <Banner
    iconBanner="face"
    isDark={true}
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  />
`;

export const EGcodeBannerText = `
  <Banner
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  />

  <br />

  <Banner
    isDark={true}
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  />
`;