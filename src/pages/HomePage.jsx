import Layout from './Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { products } from '../data/products';

const slides = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
];

export default function HomePage() {
  return (
    <Layout>
      <Gallery images={slides} width={1440} height={681} />

      <div className="container">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="collections">
            <img src="/collection-1.png" alt="Coleção 1" />
            <img src="/collection-2.png" alt="Coleção 2" />
            <img src="/collection-3.png" alt="Coleção 3" />
          </div>
        </Section>

        <Section title="Produtos em alta" titleAlign="left">
          <ProductListing products={products} />
        </Section>
      </div>
    </Layout>
  );
}