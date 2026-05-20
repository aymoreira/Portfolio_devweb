function Navbar({ active = 'about' }) {
    return (
        <nav
            className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-6 py-4 md:px-8"
            aria-label="Navigation principale"
        >
            <p className="font-comfortaa text-[18px] text-text-high">
                Aymeric Moreira
            </p>

            <ul className="font-raleway text-[18px] text-text-high flex items-center gap-16 md:gap-20 list-none">
                <li>
                    <p>
                        About
                    </p>
                </li>
                <li>
                    <p>
                        Projects
                    </p>
                </li>
                <li>
                    <p>
                        Contacts
                    </p>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
