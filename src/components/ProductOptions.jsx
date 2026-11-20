import { useState } from 'react';

export default function ProductOptions({ options, radius = '4px', shape = 'square', type = 'text' }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="options">
      {options.map((opt) => (
        <button
          key={opt}
          className={`option ${shape} ${selected === opt ? 'selected' : ''}`}
          style={{
            borderRadius: shape === 'square' ? radius : '50%',
            background: type === 'color' ? opt : undefined,
          }}
          onClick={() => setSelected(opt)}
        >
          {type === 'text' ? opt : ''}
        </button>
      ))}
    </div>
  );
}