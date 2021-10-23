import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/city/London">City</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/blabla">404</Link>
        </nav>
      </div>
    </header>
  );
}
