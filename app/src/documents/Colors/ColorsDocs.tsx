import CodeBox from "@/components/CodeBox";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import MainDescription from "@/components/Template/MainDescription";

import {
  BG_THEME_COLORS,
  TEXT_THEME_COLORS,
  BG_THEME_COLORS_PASTEL,
  TEXT_THEME_COLORS_PASTEL,
} from "./code-views";

const ColorsDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Colores",
      content: <MainDescription description="lorem " />,
      h1: true,
    },
    {
      id: "section-2",
      title: "Theme-colors",
      content: (
        <>
          <CodeBox codeHTML={BG_THEME_COLORS}>
            <div className="container">
              <div className="d-flex gap-2 mb-3 flex-wrap text-white">
                <div className="color-box bg-primary">primary</div>
                <div className="color-box bg-secondary">secondary</div>
                <div className="color-box bg-danger">danger</div>
                <div className="color-box bg-success">success</div>
                <div className="color-box bg-warning">warning</div>
                <div className="color-box bg-info">info</div>
                <div className="color-box bg-light text-dark">light</div>
                <div className="color-box bg-dark">dark</div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={TEXT_THEME_COLORS}>
            <div className="container">
              <div className="d-flex flex-column gap-2 mb-3">
                <p className="text-body-secondary">text-body-secondary</p>
                <p className="text-body-tertiary">text-body-tertiary</p>
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
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: "section-3",
      title: "Colores pasteles",
      content: (
        <>
          <CodeBox codeHTML={BG_THEME_COLORS_PASTEL}>
            <div className="container">
              <div className="d-flex gap-2 mb-3 flex-wrap">
                <div className="color-box bg-sky">sky</div>
                <div className="color-box bg-lavender">lavender</div>
                <div className="color-box bg-blackberry">blackberry</div>
                <div className="color-box bg-berries">berries</div>
                <div className="color-box bg-musket">musket</div>
                <div className="color-box bg-strawberry">strawberry</div>
                <div className="color-box bg-coral">coral</div>
                <div className="color-box bg-citrus">citrus</div>
                <div className="color-box bg-lime">lime</div>
                <div className="color-box bg-avocado">avocado</div>
                <div className="color-box bg-pistachio">pistachio</div>
                <div className="color-box bg-aqua">aqua</div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={TEXT_THEME_COLORS_PASTEL}>
            <div className="container">
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
          <br /><br /><br /><br />
        </>
      ),
    },
  ];

  return (
    <DocumentationTemplate sections={sections} />
  );
};

export default ColorsDocs;
