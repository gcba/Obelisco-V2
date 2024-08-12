"use client";

import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import Divisor from "@/components/Template/Divisor";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import React, { useRef } from "react";
import {
  FOUR_COLUMNS,
  LAYOUTS,
  ONE_COLUMN,
  THREE_COLUMNS,
  TWO_COLUMNS,
} from "./code-views";

const GridDocs: React.FC = () => {
  return (
    <BoxTemplate>
      <div className="col-12">
        <article className="box-content col-12 pe-lg-3">
          <div data-cy="section-wrapper">
            <section id="section-1">
              <HeadingTemplate>
                <h1>Grilla</h1>
              </HeadingTemplate>
              <MainDescription description="La grilla es la base para colocar elementos en la pantalla. Diseñar con una grilla ayuda a crear interfaces organizadas y fáciles de usar." />
            </section>

            <Divisor />

            <section id="section-2">
              <HeadingTemplate>
                <h2 className="mb-4 bg-light">Layouts</h2>
              </HeadingTemplate>
              <div className="container text-center text-white">
                <div className="bg-primary py-2">container</div>
              </div>
              <br />
              <div className="container text-white text-center">
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <div className="bg-primary py-2">col-12 col-lg-8</div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="bg-primary py-2">col-12 col-lg-4</div>
                  </div>
                </div>
              </div>
              <br />
              <CodeCopy code={LAYOUTS} />
            </section>

            <Divisor />

            <section id="section-3">
              <HeadingTemplate>
                <h2 className="mb-4 bg-light">Disposiciones</h2>
              </HeadingTemplate>
              <div className="container">
                <h3>Cuatro columnas</h3>
                <div className="max-items-4 text-white text-center">
                  <div className="col">
                    <div className="bg-primary py-2">1</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">2</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">3</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">4</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">5</div>
                  </div>
                </div>
              </div>
              <br />
              <CodeCopy code={FOUR_COLUMNS} />
              <br />
              <div className="container">
                <h3>Tres columnas</h3>
                <div className="max-items-3 text-white text-center">
                  <div className="col">
                    <div className="bg-primary py-2">1</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">2</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">3</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">4</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">5</div>
                  </div>
                </div>
              </div>
              <br />
              <CodeCopy code={THREE_COLUMNS} />
              <br />
              <div className="container">
                <h3>Dos columnas</h3>
                <div className="max-items-2 text-white text-center">
                  <div className="col">
                    <div className="bg-primary py-2">1</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">2</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">3</div>
                  </div>
                </div>
              </div>
              <br />
              <CodeCopy code={TWO_COLUMNS} />
              <br />
              <div className="container">
                <h3>Una columna</h3>
                <div className="max-items-1 text-white text-center">
                  <div className="col">
                    <div className="bg-primary py-2">1</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">2</div>
                  </div>
                  <div className="col">
                    <div className="bg-primary py-2">3</div>
                  </div>
                </div>
              </div>
              <br />
              <CodeCopy code={ONE_COLUMN} />
            </section>
          </div>
        </article>
      </div>
    </BoxTemplate>
  );
};

export default GridDocs;
