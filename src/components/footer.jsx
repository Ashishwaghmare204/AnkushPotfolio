import { Bolt, MapPin, Phone } from 'lucide-react';

export default function Footer({ phone, whatsapp }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#hero">
            <span className="brand-mark"><Bolt size={19} /></span>
            <span>Rahul Patil <small>| EV Specialist</small></span>
          </a>
          <p>EV scooter mechanic and two-wheeler specialist in Kinwat, Maharashtra.</p>
          <p><MapPin size={14} /> Kinwat, Maharashtra</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Work</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={`tel:${phone}`}><Phone size={14} /> Call me</a></li>
            <li><a href={whatsapp}>WhatsApp me</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        &copy; {new Date().getFullYear()} Rahul Patil. EV and two-wheeler specialist.
      </div>
    </footer>
  );
}
