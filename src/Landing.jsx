import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import "./styles/landing.css";
import Navbar from "./compoents/navbar";

function Landing() {
  return (
    <div className="main-continer">
      <div className="section-1">
        <Navbar />
        <div className="body-section">
          <div className="top-section">
            <div className="data">
              <h4>Beginnen Sie Ihre Verkaufsreise 👋 </h4>
              <h6>
                Entdecken Sie mühelos jede Facette Ihres
                Verkaufsmandatsvertrags.
              </h6>
            </div>
            <div className="questionMark">
              <CiCircleQuestion className="circle" />
              <p className="reload-text">Reload</p>
            </div>
          </div>
          <div className="center-section">
            <div class="boxes-con">
              <div class="boxes">
                <img
                  src="/assets/images/Block 1.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div class="boxes">
                <img
                  src="/assets/images/Block 8.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div class="boxes">
                <img
                  src="/assets/images/Block 2.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div class="boxes">
                <img
                  src="/assets/images/Block 4.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div class="boxes">
                <img
                  src="/assets/images/Block 3.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div class="boxes">
                <img
                  src="/assets/images/Block 5.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div class="boxes">
                <img
                  src="/assets/images/Block 6.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div class="boxes">
                <img
                  src="/assets/images/Block 4.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>

              <div class="boxes nested">
                <h4>Insert Random Video</h4>
                <button>Nesting</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
