import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/" state={{ val: 123 }}>
        {' '}
        [ Home ]{' '}
      </Link>
      <Link to="/users"> [ All Users ] </Link>
      <Link to="/users/123"> [ User 123 ] </Link>
      <Link to="/users/me"> [ User Me ] </Link>
      <NavLink
        state={{ val: 456 }}
        to="/loc?id=234&name=bob#someHashValue"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'gold' })}
        className={({ isActive }) => {}}
      >
        useLocation
      </NavLink>
    </nav>
  );
}
