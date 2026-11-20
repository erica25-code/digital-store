const formatar = (valor) => valor.toFixed(2).replace('.', ',');

export default function BuyBox({
  name, reference, stars, rating, price, priceDiscount, description, children,
}) {
  return (
    <div className="buybox">
      <h1>{name}</h1>
      <p className="reference">{reference}</p>

      <div className="rating-row">
        <span className="stars">{stars} ★</span>
        <span className="rating">({rating} avaliações)</span>
      </div>

      <div className="buybox-price">
        {priceDiscount ? (
          <>
            <strong className="price-now">R$ {formatar(priceDiscount)}</strong>
            <span className="price-old">R$ {formatar(price)}</span>
          </>
        ) : (
          <strong className="price-now">R$ {formatar(price)}</strong>
        )}
      </div>

      <p className="options-label">Descrição do produto</p>
      <p className="description">{description}</p>

      {children}

      <button className="buy-btn">COMPRAR</button>
    </div>
  );
}