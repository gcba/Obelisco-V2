import React from "react";
import "./animation.scss";

const Animation = () => {
  return (
    <>
      <div id="content">
        <div id="react">
          <div id="inner-ellipse-left"></div>
          <div id="inner-ellipse-top"></div>
          <div id="dot"></div>

          <div id="inner-ellipse-right"></div>

          <div className="Atom">
            <div className="Atom-orbit Atom-orbit--left Atom-orbit--foreground">
              <div className="Atom-electron"></div>
            </div>
            <div className="Atom-orbit Atom-orbit--right Atom-orbit--foreground">
              <div className="Atom-electron"></div>
            </div>
            <div className="Atom-orbit Atom-orbit--top Atom-orbit--foreground">
              <div className="Atom-electron"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
