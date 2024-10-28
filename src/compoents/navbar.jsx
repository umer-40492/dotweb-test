import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
      options: ["PDF", "Aufbereitung der Immobilie","Den richtigen Bewirtschafter finden" ,"Erbschaft einer Immobilie"],
    },
    {
      imgSrc: "/assets/images/ecology-book.svg",
      title: "Ratgeber",
      des: "Immobilien-Expertenrat für Eigentümer.",
      options: ["PDF", "Aufbereitung der Immobilie","Den richtigen Bewirtschafter finden" ,"Erbschaft einer Immobilie"],
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
            <div className='scroll-box'>
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
                  </div>
                  <p className='descp'>{data.des}</p>
                    {openDropdown === i && (
                      <div className="options-list">
                        {data.options.map((option, i) => (
                          <p  key={i}>
                            {option}
                          </p>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            ))}
            </div>
            <div className="profile-info">
              <img
                className="profile-img"
                src="/assets/images/profile.png"
                alt=""
                width={100}
                height={100}
              />
              <div className="about-profile">
                <h4>Carlos Kuk</h4>
                <div className='contact-detail'>
                <FaPhone className='phone' /> 
                <h5>+43 (650) 234-8156
                </h5>
                </div>
                <div className='contact-detail'>
                <MdEmail className='email' />
                <h5>carlos@immotrustag.ch
                </h5>
                </div>
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