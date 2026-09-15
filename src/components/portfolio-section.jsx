import { useState } from 'react';
import { portfolioItems } from './site-content';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? portfolioItems : portfolioItems.filter((item) => item[2] === filter);
  return <section className="section" id="portfolio"><div className="container"><span className="eyebrow">Portfolio</span><h2 className="section-title">Work I have done</h2><p className="section-copy">Real problems. Practical diagnosis. Hands-on work.</p><div className="filters" role="tablist">{['All', 'EV', 'Mechanical', 'Electrical'].map((item) => <button className={`filter ${filter === item ? 'active' : ''}`} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="portfolio-grid">{items.map(([title, copy, category, image]) => <article className="portfolio-card" key={title}><img src={image} alt={title} loading="lazy" /><div className="portfolio-card-body"><span className="portfolio-category">{category}</span><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>;
}
