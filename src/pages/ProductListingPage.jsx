import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from './Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import { products } from '../data/products';

const precoFinal = (p) => p.priceDiscount ?? p.price;

export default function ProductListingPage() {
  const [params] = useSearchParams();
  const filtro = params.get('filter') || '';
  const [ordem, setOrdem] = useState('');

  let lista = products.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase())
  );
  if (ordem === 'menor') lista.sort((a, b) => precoFinal(a) - precoFinal(b));
  if (ordem === 'maior') lista.sort((a, b) => precoFinal(b) - precoFinal(a));

  return (
    <Layout>
      <div className="listing-page">
        <div className="container listing">
          <aside className="sidebar">
            <div className="sort">
              <label htmlFor="ordem">Ordenar por</label>
              <select id="ordem" value={ordem} onChange={(e) => setOrdem(e.target.value)}>
                <option value="">Mais relevantes</option>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
              </select>
            </div>

            <div className="filter-box">
              <h3>Filtrar por</h3>
              <hr />
              <FilterGroup title="Marca" inputType="checkbox" options={[
                { text: 'Adidas' }, { text: 'Calenciaga' }, { text: 'K-Swiss' }, { text: 'Nike' }, { text: 'Puma' },
              ]} />
              <FilterGroup title="Categoria" inputType="checkbox" options={[
                { text: 'Esporte e lazer' }, { text: 'Casual' }, { text: 'Utilitário' }, { text: 'Corrida' },
              ]} />
              <FilterGroup title="Gênero" inputType="checkbox" options={[
                { text: 'Masculino' }, { text: 'Feminino' }, { text: 'Unisex' },
              ]} />
              <FilterGroup title="Estado" inputType="radio" options={[
                { text: 'Novo' }, { text: 'Usado' },
              ]} />
            </div>
          </aside>

          <div className="listing-content">
            <Section title={`${lista.length} produtos encontrados`} titleAlign="left">
              <ProductListing products={lista} />
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}