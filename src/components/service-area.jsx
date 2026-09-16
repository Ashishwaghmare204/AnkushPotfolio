import { MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ServiceArea({ whatsapp, Button }) {
  return (
    <section className="section service-area" id="area">
      <div className="container">
        <span className="eyebrow">Service area</span>
        <h2 className="section-title">Serving customers around Kinwat</h2>
        <div className="area-grid">
          <div className="area-map">
            <iframe
              title="Map showing PCMC, Pune"
              src="https://www.google.com/maps?q=Pimpri-Chinchwad%20Municipal%20Corporation%2C%20Pune&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="area-content">
            <h3>Based in PCMC Pune, Maharashtra</h3>
            <p>
              I serve customers in and around PCMC. If you are not sure
              whether your area is covered, contact me first to confirm service
              availability.
            </p>
            <div className="area-pin">
              <MapPin size={19} /> PCMC Pune, Maharashtra
            </div>
            <p>Contact me first to confirm availability in your area.</p>
            <div className="area-buttons">
              <Button
                href="https://www.google.com/maps/search/?api=1&query=Pimpri-Chinchwad+Municipal+Corporation,+Pune"
                variant="outline"
              >
                <MapPin size={16} /> Get directions
              </Button>
              <Button href={whatsapp}>
                <FaWhatsapp size={16} /> WhatsApp me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
