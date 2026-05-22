function Navbar({ active = 'about' }) {
    return (
        <nav className="w-full flex items-center justify-between py-4 px-0" aria-label="Navigation principale">
            <p className="font-comfortaa text-[18px] text-text-high">Aymeric Moreira</p>

            <ul className="font-raleway text-[18px] text-text-high flex items-center gap-16 md:gap-20 list-none">
                <li>
                    <p className={active === 'about' ? 'font-semibold' : ''}>About</p>
                </li>
                <li>
                    <p className={active === 'projects' ? 'font-semibold' : ''}>Projects</p>
                </li>
                <li>
                    <p className={active === 'contacts' ? 'font-semibold' : ''}>Contacts</p>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
