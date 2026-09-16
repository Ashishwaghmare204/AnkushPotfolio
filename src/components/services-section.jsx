import { useState } from "react";
import { serviceGroups } from "./site-content";

export default function ServicesSection() {
  const [type, setType] = useState("ev");
  return (
    <section className="section services" id="services">
      <div className="container">
        <span className="eyebrow">Services</span>
        <h2 className="section-title">What I can help you with</h2>
        <p className="section-copy">
          From EV scooter diagnosis to conventional two-wheeler repairs, get
          hands-on service with an honest assessment.
        </p>
        {/* <div className="tabs" role="tablist">
          <button
            className={`tab ${type === "ev" ? "active" : ""}`}
            onClick={() => setType("ev")}
          >
            EV scooter services
          </button>
          <button
            className={`tab ${type === "mechanical" ? "active" : ""}`}
            onClick={() => setType("mechanical")}
          >
            Two-wheeler services
          </button>
        </div> */}
        <div className="card-grid">
          {serviceGroups[type].map(([title, copy, tag, Icon]) => (
            <article className="service-card" key={title}>
              <span className="service-icon">
                <Icon size={21} />
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="card-tag">{tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
