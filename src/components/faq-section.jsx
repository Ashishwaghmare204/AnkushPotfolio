import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { faqs } from './site-content';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);
  return <section className="section dark" id="faq"><div className="container"><span className="eyebrow eyebrow-light">FAQ</span><h2 className="section-title">Questions, answered.</h2><p className="section-copy">A few things customers commonly ask before getting in touch.</p><div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq" key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}{openFaq === index ? <X size={18} /> : <ChevronDown size={18} />}</button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>;
}
