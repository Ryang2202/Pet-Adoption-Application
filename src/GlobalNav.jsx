import menu from './menu';
import { useState } from 'react';

import './GlobalNav.css';


function GlobalNav({ className, setPage }) {
    const [showMenu, setShowMenu] = useState(false);

    const list = menu.map(item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a className="global-nav__link"
                    href={item.path}
                    onClick={(e) => {
                        e.preventDefault();
                        setPage(item.name);
                    }}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    const menuClass = showMenu ? 'global-nav__list--open' : '';
    return (
        <nav className={`global-nav ${className}`}>
            <div className="hamburger">
            <button
                className="hamburgerbtn" type="button" aria-label="Hamburger Menu button"
                onClick={() => setShowMenu(!showMenu)}
            >
                <span className="icon"></span>
                <span className="icon"></span>
                <span className="icon"></span>
            </button>
            </div>
            <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul>
        </nav>
    );
}
export default GlobalNav;