import { Link } from 'react-router-dom';

const formatar = (valor) => valor.toFixed(2).replace('.', ',');

export default function ProductCard({ id, image, name, price, priceDiscount, category }) {
  const desconto = priceDiscount ? Math.round((1 - priceDiscount / price) * 100) : 0;

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card-img">
        {priceDiscount && <span className="badge">{desconto}% OFF</span>}
        <img src={image} alt={name} />
      </div>
      {category && <small>{category}</small>}
      <h3>{name}</h3>
      <div className="prices">
        {priceDiscount ? (
          <>
            <span className="price-old">R$ {formatar(price)}</span>
            <strong>R$ {formatar(priceDiscount)}</strong>
          </>
        ) : (
          <strong>R$ {formatar(price)}</strong>
        )}
      </div>
    </Link>
  );
}