import logo from '../assets/logo-header.svg';

export default function Logo({ white = false }) {
  return (
    <img
      src={logo}
      width="253"
      height="44"
      alt="Digital Store"
      className={white ? 'logo-white' : ''}
    />
  );
}