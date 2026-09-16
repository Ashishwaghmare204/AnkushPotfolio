import { CircleUser, Menu, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Header({
  phone,
  whatsapp,
  Button,
  open,
  onToggle,
  onClose,
}) {
  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Work", "#portfolio"],
    ["Reviews", "#reviews"],
    ["FAQ", "#faq"],
  ];
  return (
    <header className="topbar">
      <div className="container nav">
        <a className="brand" href="#hero" onClick={onClose}>
          <span className="brand-mark">
            <CircleUser size={19} />
          </span>
          <span>
            Ankush Waghmare <small>| EV Specialist</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <Button href={`tel:${phone}`} variant="outline">
            <Phone size={15} /> Call
          </Button>
          <Button href={whatsapp}><FaWhatsapp size={15} /> WhatsApp</Button>
          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={onToggle}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav container" aria-label="Mobile navigation">
          {[...links, ["Contact", "#contact"]].map(([label, href]) => (
            <a href={href} onClick={onClose} key={label}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
