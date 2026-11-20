import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  function buscar() {
    navigate(`/products?filter=${encodeURIComponent(busca)}`);
  }

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/"><Logo /></Link>

        <div className="search">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') buscar(); }}
          />
          <button onClick={buscar} aria-label="Buscar">🔍</button>
        </div>

        <a href="#" className="link-cadastro">Cadastre-se</a>
        <a href="#" className="btn-entrar">Entrar</a>
        <span className="cart">🛒</span>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Produtos</NavLink>
        <NavLink to="/categorias" className={({ isActive }) => (isActive ? 'active' : '')}>Categorias</NavLink>
        <NavLink to="/pedidos" className={({ isActive }) => (isActive ? 'active' : '')}>Meus Pedidos</NavLink>
      </nav>
    </header>
  );
}