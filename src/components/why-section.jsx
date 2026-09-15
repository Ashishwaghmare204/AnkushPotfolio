const reasons = [['01', 'Practical experience', 'Years of hands-on two-wheeler experience with real problems.'], ['02', 'EV knowledge', 'Experience working with modern electric scooters at a TVS EV service center.'], ['03', 'Honest diagnosis', 'I understand the actual problem before suggesting a solution.'], ['04', 'Clear communication', 'You get practical advice in plain language, without unnecessary complexity.']];

export default function WhySection() {
  return <section className="section why"><div className="container"><span className="eyebrow">Why customers choose me</span><h2 className="section-title">Honest work. Real experience.</h2><p className="section-copy">No false promises. Just practical diagnosis and straightforward communication.</p><div className="why-grid">{reasons.map(([number, title, copy]) => <article className="why-card" key={number}><span className="why-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>;
}
