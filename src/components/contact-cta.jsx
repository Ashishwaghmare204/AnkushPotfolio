import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactCta({ phone, whatsapp, Button }) {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <span className="eyebrow eyebrow-light">Get in touch</span>
        <h2 className="section-title">Have an EV problem? Let's talk.</h2>
        <p className="section-copy">
          Send the scooter model and symptoms. I will help you understand the
          next practical step.
        </p>
        <div className="cta-actions">
          <Button href={whatsapp}>
            <FaWhatsapp size={17} /> WhatsApp me
          </Button>
          <Button href={`tel:${phone}`} variant="outline">
            <Phone size={17} /> Call now
          </Button>
        </div>
      </div>
    </section>
  );
}
