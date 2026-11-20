import { useState } from 'react';

const px = (v) => (/^\d+$/.test(String(v)) ? `${v}px` : v);

export default function Gallery({ images, width, height, radius = '0px', showThumbs, className = '' }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={`gallery ${className}`} style={{ width: px(width) }}>
      <div className="gallery-slide" style={{ height: px(height), borderRadius: radius }}>
        <div className="gallery-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <img key={i} src={img.src} alt={`Imagem ${i + 1}`} />
          ))}
        </div>

        <button className="arrow left" disabled={index === 0} onClick={() => setIndex(index - 1)}>❮</button>
        <button className="arrow right" disabled={index === images.length - 1} onClick={() => setIndex(index + 1)}>❯</button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`Miniatura ${i + 1}`}
              className={i === index ? 'selected' : ''}
              style={{ borderRadius: radius }}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}