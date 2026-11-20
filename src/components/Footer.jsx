import Logo from './Logo';
import InfoLinks from './InfoLinks';

const informacao = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' },
  { text: 'Meus Pedidos', link: '/pedidos' },
];

const categorias = [
  { text: 'Camisetas', link: '/products' },
  { text: 'Calças', link: '/products' },
  { text: 'Bonés', link: '/products' },
  { text: 'Headphones', link: '/products' },
  { text: 'Tênis', link: '/products' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Logo white />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>

        <InfoLinks title="Informação" informations={informacao} />
        <InfoLinks title="Categorias" informations={categorias} />

        <div className="info-links">
          <h4>Contato</h4>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

      <hr />
      <p className="copyright">© {new Date().getFullYear()} Digital Store</p>
    </footer>
  );
}