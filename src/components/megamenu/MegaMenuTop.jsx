import React from "react";
import "./MegaMenu.css";

const MegaMenuTop = () => {
  const categories = [
    {
      title: "Air Tools",
      items: [
        "Pipe Cutters",
        "Air Compressors",
        "Grinding Air Tools",
        "Pneumatic Impact",
        "Angle Grinders",
      ],
    },
    {
      title: "Hand Tools",
      items: [
        "Straight Grinders",
        "Hand Measure",
        "Pliers & Cutters",
        "Screwdrivers",
        "SDS-Plus Drill",
      ],
    },
  ];

  const offers = [
    {
      label: "OFFER",
      title: "Flat 80% OFF",
      img: "/images/drill.png",
      className: "",
    },
    {
      label: "SPECIAL OFFER",
      title: "Up to 30% OFF New Arrivals",
      img: "/images/nailer.png",
      className: "blue",
    },
  ];

  return (
    <div className="mega-menu">

      {/* LEFT SIDE */}
      <div className="menu-left">
        {categories.map((cat, index) => (
          <div className="menu-column" key={index}>
            <h4>{cat.title}</h4>
            {cat.items.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="menu-right">
        {offers.map((offer, index) => (
          <div className={`offer-card ${offer.className}`} key={index}>
            <span>{offer.label}</span>
            <h3>{offer.title}</h3>
            <img src={offer.img} alt="" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default MegaMenuTop;