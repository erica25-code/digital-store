export default function InfoLinks({ title, informations }) {
  return (
    <div className="info-links">
      <h4>{title}</h4>
      {informations.map((item) => (
        <a key={item.text} href={item.link}>{item.text}</a>
      ))}
    </div>
  );
}