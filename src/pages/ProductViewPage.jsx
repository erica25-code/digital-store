import { useParams } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { products } from '../data/products';

const images = [
  { src: '/product-image-1.png' },
  { src: '/product-image-2.png' },
  { src: '/product-image-3.png' },
  { src: '/product-image-4.png' },
  { src: '/product-image-5.png' },
];

export default function ProductViewPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];

  return (
    <Layout>
      <div className="product-page">
        <div className="container">
          <p className="breadcrumb">Home / Produtos / Tênis / {product.name}</p>

          <div className="product-main">
            <Gallery images={images} showThumbs width={700} height={570} radius="4px" />

            <BuyBox
              name={product.name}
              reference="Casual | Nike | REF:38416711"
              stars={4.7}
              rating={90}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
              <p className="options-label">Tamanho</p>
              <ProductOptions options={['39', '40', '41', '42', '43']} shape="square" radius="4px" type="text" />

              <p className="options-label">Cor</p>
              <ProductOptions options={['#6FEEFF', '#FF6B6B', '#555555', '#6B6BB5']} shape="circle" type="color" />
            </BuyBox>
          </div>

          <Section title="Produtos Relacionados" link={{ text: 'Ver todos', href: '/products' }}>
            <ProductListing products={products.slice(0, 4)} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}