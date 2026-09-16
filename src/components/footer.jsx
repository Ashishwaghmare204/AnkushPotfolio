import {CircleUser, Bolt, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer({ phone, whatsapp }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <a className="brand" href="#hero">
            <span className="brand-mark">  <CircleUser size={19} /></span>
            <span>Ankush Waghmare <small>| EV Specialist</small></span>
          </a>
          <p>EV scooter mechanic and two-wheeler specialist in Kinwat, Maharashtra.</p>
          <p><MapPin size={14} /> PCMC Pune, Maharashtra</p>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Work</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><a href={`tel:${phone}`}><Phone size={14} /> Call me</a></li>
            <li><a href={whatsapp}><FaWhatsapp size={16} /> WhatsApp me</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        &copy; {new Date().getFullYear()} Ankush Waghmare. EV and two-wheeler specialist.
      </div>
    </footer>
  );
}
