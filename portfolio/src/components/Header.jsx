// src/components/Header.jsx
import Navbar from './Navbar';

function Header({ activeNav = 'about' }) {
    return (
        <header className="bg-transparent">
            <Navbar active={activeNav} />
        </header>
    );
}

export default Header;
