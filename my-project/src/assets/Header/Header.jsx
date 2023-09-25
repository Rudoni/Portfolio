
import React, { useEffect, useState } from 'react';


const Header = () => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let st = document.documentElement.scrollTop;

            if (st > 0) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="bg-white pt-4 pb-4">
            <nav>
                <ul className="text-brown text-2xl  flex justify-center items-start space-x-8" >
                    <li className="bubble-item"><a href="/About">À PROPOS</a></li>
                    <li className="bubble-item"><a href="/Projects">PROJETS</a></li>
                    <li className="bubble-item"><a href="/Contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
