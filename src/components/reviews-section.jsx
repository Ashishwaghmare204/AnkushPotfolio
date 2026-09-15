const reviews = [['AM', 'The charging issue was found quickly and explained clearly. Very practical service.', 'EV scooter owner'], ['RS', 'Good mechanical work and no unnecessary part replacement. Honest advice.', 'Two-wheeler owner'], ['VK', 'He took time to trace the electrical fault instead of guessing. Recommended.', 'Local customer']];

export default function ReviewsSection() {
  return <section className="section dark" id="reviews"><div className="container"><span className="eyebrow eyebrow-light">Reviews</span><h2 className="section-title">What customers say</h2><p className="section-copy">A few words from people who trusted me with their two-wheelers.</p><div className="reviews-grid">{reviews.map(([initials, copy, role]) => <article className="review" key={initials}><div className="stars">★★★★★</div><p>“{copy}”</p><strong>{initials}</strong><small>{role}</small></article>)}</div></div></section>;
}
