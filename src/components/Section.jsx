import { Link } from 'react-router-dom';

export default function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <section className="section">
      <div className={`section-header ${titleAlign}`}>
        <h2>{title}</h2>
        {link && <Link to={link.href}>{link.text} →</Link>}
      </div>
      {children}
    </section>
  );
}