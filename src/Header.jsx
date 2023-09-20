import GlobalNav from './GlobalNav';
import './Header.css';
import headerlogo from "./Header Logo.jpeg";



function Header({ setPage }) {
    return (
        <header className="header">
            <a className="skip-to-content-link" href="#main">Skip to content</a>
            <img
                src= {headerlogo}
                alt="A gray kitten facing forward toward the camera and its body hidden by a white sweater"
                className="header__logo"
            />
            <h1 className="header__title">
                Cat Nation
            </h1>
            <GlobalNav className="header__nav" setPage={setPage} />
        </header>
    );
}
export default Header;