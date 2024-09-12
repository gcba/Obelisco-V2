import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { BG_THEME_COLORS, TEXT_THEME_COLORS, BG_THEME_COLORS_PASTEL, TEXT_THEME_COLORS_PASTEL } from './code-views';

const ColorsDocs: React.FC = () => {
  const sections = [
    {
      title: 'Paleta de colores',
      content: (
        <MainDescription description="El color es una herramienta que transmite personalidad, establece un tono, llama la atención e indica importancia " />
      ),
      h1: true,
    },
    {
      id: 'section-1',
      title: 'Theme-colors',
      content: (
        <>
          <CodeBox codeHTML={BG_THEME_COLORS}>
            <div className="container">
              <div className="d-flex gap-2 mb-3 flex-wrap text-white mx-auto">
                <div className="color-box bg-primary">
                  <span className="headline-md fw-bold">primary</span>
                  <span className="text-xs">#336ACC</span>
                </div>
                <div className="color-box bg-secondary">
                  <span className="headline-md fw-bold">secondary</span>
                  <span className="text-xs">#101E37</span>
                </div>
                <div className="color-box bg-danger">
                  <span className="headline-md fw-bold">danger</span>
                  <span className="text-xs">#CC3333</span>
                </div>
                <div className="color-box bg-success">
                  <span className="headline-md fw-bold">success</span>
                  <span className="text-xs">#26874A</span>
                </div>
                <div className="color-box bg-warning">
                  <span className="headline-md fw-bold">warning</span>
                  <span className="text-xs">#FF9500</span>
                </div>
                <div className="color-box bg-info">
                  <span className="headline-md fw-bold">info</span>
                  <span className="text-xs">#0086AD</span>
                </div>
                <div className="color-box bg-light text-dark">
                  <span className="headline-md fw-bold">light</span>
                  <span className="text-xs">#F3F6F9</span>
                </div>
                <div className="color-box bg-dark">
                  <span className="headline-md fw-bold">dark</span>
                  <span className="text-xs">#002733</span>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={TEXT_THEME_COLORS}>
            <div className="container">
              <div className="d-flex flex-column gap-2 mb-3">
                <div className="text-primary">primary</div>
                <div className="text-secondary">secondary</div>
                <div className="text-danger">danger</div>
                <div className="text-success">success</div>
                <div className="text-warning">warning</div>
                <div className="text-info">info</div>
                <div className="text-light bg-dark">light</div>
                <div className="text-dark">dark</div>
                <div className="text-white bg-dark">white</div>
                <div className="text-black">black</div>
                <div className="text-body-secondary">text-body-secondary</div>
                <div className="text-body-tertiary">text-body-tertiary</div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-2',
      title: 'Detalles cromáticos',
      content: (
        <>
          <CodeBox codeHTML={BG_THEME_COLORS_PASTEL}>
            <div className="container">
              <div className="d-flex gap-2 mb-3 flex-wrap">
                <div className="color-box bg-sky">
                  <span className="headline-md fw-bold">sky</span>
                  <span className="text-xs">#99E8FF</span>
                </div>
                <div className="color-box bg-lavender">
                  <span className="headline-md fw-bold">lavender</span>
                  <span className="text-xs">#99B5FF</span>
                </div>
                <div className="color-box bg-blackberry">
                  <span className="headline-md fw-bold">blackberry</span>
                  <span className="text-xs">#AF99FF</span>
                </div>
                <div className="color-box bg-berries">
                  <span className="headline-md fw-bold">berries</span>
                  <span className="text-xs">#E299FF</span>
                </div>
                <div className="color-box bg-musket">
                  <span className="headline-md fw-bold">musket</span>
                  <span className="text-xs">
                    <div id="FF99E8"></div>
                  </span>
                </div>
                <div className="color-box bg-strawberry">
                  <span className="headline-md fw-bold">strawberry</span>
                  <span className="text-xs">#FF99E5</span>
                </div>
                <div className="color-box bg-coral">
                  <span className="headline-md fw-bold">coral</span>
                  <span className="text-xs">#FFAF99</span>
                </div>
                <div className="color-box bg-citrus">
                  <span className="headline-md fw-bold">citrus</span>
                  <span className="text-xs">#FFE299</span>
                </div>
                <div className="color-box bg-lime">
                  <span className="headline-md fw-bold">lime</span>
                  <span className="text-xs">#E8FF99</span>
                </div>
                <div className="color-box bg-avocado">
                  <span className="headline-md fw-bold">avocado</span>
                  <span className="text-xs">#B5FF99</span>
                </div>
                <div className="color-box bg-pistachio">
                  <span className="headline-md fw-bold">pistachio</span>
                  <span className="text-xs">#99FFAF</span>
                </div>
                <div className="color-box bg-aqua">
                  <span className="headline-md fw-bold">aqua</span>
                  <span className="text-xs">#99FFE2</span>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={TEXT_THEME_COLORS_PASTEL}>
            <div className="container bg-dark py-3">
              <div className="d-flex flex-column gap-2 mb-3 flex-wrap">
                <div className="text-sky bg-dark">sky</div>
                <div className="text-lavender bg-dark">lavender</div>
                <div className="text-blackberry bg-dark">blackberry</div>
                <div className="text-berries bg-dark">berries</div>
                <div className="text-musket bg-dark">musket</div>
                <div className="text-strawberry bg-dark">strawberry</div>
                <div className="text-coral bg-dark">coral</div>
                <div className="text-citrus bg-dark">citrus</div>
                <div className="text-lime bg-dark">lime</div>
                <div className="text-avocado bg-dark">avocado</div>
                <div className="text-pistachio bg-dark">pistachio</div>
                <div className="text-aqua bg-dark">aqua</div>
              </div>
            </div>
          </CodeBox>
          <br />
          <br />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default ColorsDocs;
