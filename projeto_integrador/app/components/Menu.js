"use client"

import "./menu.css";

function Menu() {

    function toggleMenu() {
        const menu = document.querySelector('nav ul');
        menu.classList.toggle('active');
    }

	return (
		<header>
			<nav>
                <a>Bar do Jaum</a>

                <div className="mobile-menu" onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

				<ul>
					<li>Home</li>
					<li>Produtos</li>
					<li className="login">Login</li>
				</ul>
			</nav>
		</header>
	);
}

export default Menu;