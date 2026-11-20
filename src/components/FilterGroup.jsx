export default function FilterGroup({ title, inputType = 'checkbox', options }) {
  return (
    <div className="filter-group">
      <h4>{title}</h4>
      {options.map((opt) => (
        <label key={opt.text}>
          <input type={inputType} name={title} value={opt.value ?? opt.text} />
          {opt.text}
        </label>
      ))}
    </div>
  );
}