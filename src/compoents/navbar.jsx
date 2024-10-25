import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import '../styles/navbar.css'
const sidebatrdata = [
    {
      imgSrc: "/assets/images/city.svg",
      title: "Immobilienlexikon",
      des: "Immobilienwissen für alle Fälle.",
      options: ["KI"],
    },
    {
      imgSrc: "/assets/images/elevator.svg",
      title: "Preisschätzung",
      des: "Den Wert Ihres Hauses schätzen lassen.",
      options: ["KI"],
    },
    {
      imgSrc: "/assets/images/clipboard-check.svg",
      title: "Checklisten",
      des: "Praktische Checklisten für jeden Schritt.",
      options: ["PDF", "OP"],
    },
    {
      imgSrc: "/assets/images/ecology-book.svg",
      title: "Ratgeber",
      des: "Immobilien-Expertenrat für Eigentümer.",
      options: ["PDF", "LOP"],
    },
    {
      imgSrc: "/assets/images/compass.svg",
      title: "Mandatsnavigator",
      des: "Verständlich zum Verkaufsabschluss.",
      options: ["KI"],
    },
    {
      imgSrc: "/assets/images/golf.svg",
      title: "Wohntraumfinder",
      des: "Zum Traumheim mit KI-Unterstützung.",
      options: ["KI"],
    },
  ];

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <div className="sidebar">
            <div className="sec-1">
              <img
                src="/assets/images/tools.svg"
                alt=""
                width={100}
                height={100}
              />
              <p>NACHTMODUS</p>
            </div>
            <div className="logo">
              <img src="/assets/images/nav-logo.svg" alt="logo" height={100} />
            </div>
            {sidebatrdata.map((data, i) => (
              <div className="sec-2">
                <img
                  className="icon-div"
                  src={data.imgSrc}
                  alt="logo"
                  height={100}
                />
                <div className="data-div">
                  <div className="heading-div">
                    <h4>{data.title}</h4>
                    <div className="dropdown-item">
                      {data.options.length > 1 ? (
                        <div
                          className="dropdown-header"
                          onClick={() => toggleDropdown(i)}
                        >
                          <div className="single-option">{data.options[0]}</div>
                          {/* Display up or down icon based on the dropdown state */}
                          {openDropdown === i ? (
                            <FaChevronUp className="dropdown-icon" />
                          ) : (
                            <FaChevronDown className="dropdown-icon" />
                          )}
                        </div>
                      ) : (
                        // Render the single option without a dropdown
                        <div className="single-option">{data.options[0]}</div>
                      )}
                    </div>
                    {openDropdown === i && (
                      <div className="options-list">
                        {data.options.map((option, i) => (
                          <p className="single-option" key={i}>
                            {option}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  <p>{data.des}</p>
                </div>
              </div>
            ))}
            <div className="profile-info">
              <img
                className="profile-img"
                src="/assets/images/profile.png"
                alt=""
                width={100}
                height={100}
              />
              <div className="about-profile">
                <h4>Immotrust AG </h4>
                <h5>
                  Vertrauensvolle <br />
                  Immobilienberatung seit 2008.
                </h5>
                <h6>Carlos Kuk - Eigentümer</h6>
              </div>
            </div>
            <div className="google-review">
            <img  src="/assets/images/google.png" alt="logo" height={100} />
            <p>4,6 VON 5 BASIEREND AUF 245 BEWERTUNGEN</p>
            </div>
          </div>
  )
}

export default Navbar