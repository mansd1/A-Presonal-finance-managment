import React from "react";
import "./SectionMain.css";

export default function SectionBody({ title, description, btnName }) {
  return (
    <section className="container-main">
      <div className="section-details">
        <h1 className="title-main">{title}</h1>
        <p className="description-main">{description}</p>
        <a href="#Account" className="button-link">
          <button className="cta-button">{btnName}</button>
        </a>
      </div>

      <div className="img-main">
        <img
          src="/public/Finance leaders-rafiki.png"
          alt="Finance illustration"
          className="imgOne"
        />
      </div>
    </section>
  );
}
