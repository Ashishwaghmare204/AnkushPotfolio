import { CheckCircle2, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero({ whatsapp, phone, Button }) {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">EV scooter specialist</span>
          <h1>Your EV scooter.<br /><span>My expertise.</span></h1>
          <p className="hero-copy">Experienced two-wheeler mechanic specializing in electric scooter servicing, troubleshooting, electrical diagnosis, and repairs.</p>
          <div className="hero-actions">
            <Button href={whatsapp}><FaWhatsapp size={17} /> WhatsApp me</Button>
            <Button href={`tel:${phone}`} variant="outline"><Phone size={17} /> Call now</Button>
          </div>
          <div className="hero-notes">
            <span><CheckCircle2 size={16} /> EV experience</span>
            <span><CheckCircle2 size={16} /> Hands-on diagnosis</span>
          </div>
        </div>
        <div className="hero-media">
          <img src="https://images.pexels.com/photos/34404241/pexels-photo-34404241.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Mechanic repairing an electric scooter" />
          <div className="experience"><strong>10+</strong><span>Years of experience</span></div>
        </div>
      </div>
    </section>
  );
}
