"use client"

import "./menu2.css";

function Menu2() {

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

				<ul className="menu">
					<li onClick={()=> {}}>Dashboard</li>
                    <li onClick={()=> {}}>Faturamento</li>
                    <li onClick={()=> {}}>Estoque</li>
                    <li onClick={()=> {}}>Pedidos</li>
                    <li onClick={()=> {}}>Clientes</li>
                    <li onClick={()=> {}}>Funcionários</li>
                    <li><button className="deslogar"><img width="12px" src="https://cdn-icons-png.flaticon.com/512/4043/4043198.png"/> Sair da Conta</button></li>
				</ul>
			</nav>
		</header>
	);
}

export default Menu2;