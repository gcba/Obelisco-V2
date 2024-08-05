"use client";

import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import Divisor from "@/components/Template/Divisor";
import SimpleText from "@/components/Template/SimpleText";
import {
  BG_THEME_COLORS,
  TEXT_THEME_COLORS,
  BG_THEME_COLORS_PASTEL,
  TEXT_THEME_COLORS_PASTEL,
} from "./code-views";

const ColorsDocs: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);

  return (
    <BoxTemplate>
      <div className="col-12">
        <Scrollspy
          sectionRefs={[
            section1Ref,
            section2Ref,
            section3Ref,
            section4Ref,
            section5Ref,
            section6Ref,
            section7Ref,
          ]}
        >
          {({ currentElementIndexInViewport }) => (
            <div className="box-scrollspy">
              <div className="nav-scrollspy d-none d-lg-block">
                <ul className="scrollspy" data-cy="nav-wrapper">
                  <p className="font-weight-bold mb-1"> On this page</p>
                  <li
                    className={
                      currentElementIndexInViewport === 0 ? "active" : ""
                    }
                  >
                    <a href="#section-1">Colores</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 1 ? "active" : ""
                    }
                  >
                    <a href="#section-2">Theme-colors</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 2 ? "active" : ""
                    }
                  >
                    <a href="#section-3">Colores pasteles</a>
                  </li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Colores</h1>
                    </HeadingTemplate>
                    <MainDescription description="lorem " />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">theme-colors</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <div className="d-flex gap-2 mb-3 flex-wrap text-white">
                        <div className="color-box bg-primary"> primary</div>
                        <div className="color-box bg-secondary">
                          {" "}
                          secondary
                        </div>
                        <div className="color-box bg-danger"> danger</div>
                        <div className="color-box bg-success"> success</div>
                        <div className="color-box bg-warning"> warning</div>
                        <div className="color-box bg-info"> info</div>
                        <div className="color-box bg-light text-dark"> light</div>
                        <div className="color-box bg-dark">
                          {" "}
                          dark
                        </div>
                      </div>
                      <CodeCopy code={BG_THEME_COLORS} />
                      <div className="d-flex flex-column gap-2 mb-3">
                        <p className="text-body-secondary">
                          text-body-secondary
                        </p>
                        <p className="text-body-tertiary">text-body-tertiary</p>
                        <div className="text-primary"> primary</div>
                        <div className="text-secondary"> secondary</div>
                        <div className="text-danger"> danger</div>
                        <div className="text-success"> success</div>
                        <div className="text-warning"> warning</div>
                        <div className="text-info"> info</div>
                        <div className="text-light bg-dark"> light</div>
                        <div className="text-dark"> dark</div>
                        <div className="text-white bg-dark"> white</div>
                        <div className="text-black"> black</div>
                      </div>
                    </div>
                    <CodeCopy code={TEXT_THEME_COLORS} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Colores pasteles</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <div className="d-flex gap-2 mb-3 flex-wrap">
                        <div className="color-box bg-sky"> sky</div>
                        <div className="color-box bg-lavender"> lavender</div>
                        <div className="color-box bg-blackberry">
                          {" "}
                          blackberry
                        </div>
                        <div className="color-box bg-berries"> berries</div>
                        <div className="color-box bg-musket"> musket</div>
                        <div className="color-box bg-strawberry">
                          {" "}
                          strawberry
                        </div>
                        <div className="color-box bg-coral"> coral</div>
                        <div className="color-box bg-citrus"> citrus</div>
                        <div className="color-box bg-lime"> lime</div>
                        <div className="color-box bg-avocado"> avocado</div>
                        <div className="color-box bg-pistachio"> pistachio</div>
                        <div className="color-box bg-aqua"> aqua</div>
                      </div>
                      <CodeCopy code={BG_THEME_COLORS_PASTEL} />
                      <div className="d-flex flex-column gap-2 mb-3 flex-wrap">
                        <div className="text-sky bg-dark"> sky</div>
                        <div className="text-lavender bg-dark"> lavender</div>
                        <div className="text-blackberry bg-dark"> blackberry</div>
                        <div className="text-berries bg-dark"> berries</div>
                        <div className="text-musket bg-dark"> musket</div>
                        <div className="text-strawberry bg-dark"> strawberry</div>
                        <div className="text-coral bg-dark"> coral</div>
                        <div className="text-citrus bg-dark"> citrus</div>
                        <div className="text-lime bg-dark"> lime</div>
                        <div className="text-avocado bg-dark"> avocado</div>
                        <div className="text-pistachio bg-dark"> pistachio</div>
                        <div className="text-aqua bg-dark"> aqua</div>
                      </div>
                    </div>
                    <CodeCopy code={TEXT_THEME_COLORS_PASTEL} />
                  </section>
                </div>
              </article>
            </div>
          )}
        </Scrollspy>
      </div>
    </BoxTemplate>
  );
};

export default ColorsDocs;
