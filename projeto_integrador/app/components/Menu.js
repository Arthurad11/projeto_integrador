"use client"

import { redirect } from "next/navigation";
import "./menu.css";
import { useEffect, useState } from "react";

function Menu() {

    function toggleMenu() {
        const menu = document.querySelector('nav ul');
        menu.classList.toggle('active');
    }

	const[home, alteraHome] = useState()
	const[produtos, alteraProdutos] = useState()
	const[login, alteraLogin] = useState()

	const [logado, setlogado] = useState(false);
	
		useEffect(() => {
			if (localStorage.getItem("usuario") != null) {
				setlogado(true);
			}
		}, []);

	return (
		<header>
			<nav>
                <a>Bar do João</a>

                <div className="mobile-menu" onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

				<ul>
					<li onClick={()=> {redirect("/")}}>Home</li>
					<li onClick={()=> {redirect("/produtos")}}>Produtos</li>
					{
						logado == false &&
						<li onClick={()=> {redirect("/login")}}className="login">Login</li>
					}
					{
						logado == true && 
						<li onClick={()=> {redirect("/comanda_garcom")}}>Comandas</li>
					}
				</ul>
			</nav>
		</header>
	);
}

export default Menu;