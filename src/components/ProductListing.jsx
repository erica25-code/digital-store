import ProductCard from './ProductCard';

export default function ProductListing({ products }) {
  return (
    <div className="product-listing">
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}