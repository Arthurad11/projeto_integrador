"use client"

import "./menu.css";
import { useState } from "react";

function Menu() {

    function toggleMenu() {
        const menu = document.querySelector('nav ul');
        menu.classList.toggle('active');
    }

	const[home, alteraHome] = useState()
	const[produtos, alteraProdutos] = useState()
	const[login, alteraLogin] = useState()


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
					<li onClick={()=> {alteraHome(true)}}>Home</li>
					<li onClick={()=> {alteraProdutos(true)}}>Produtos</li>
					<li onClick={()=> {alteraLogin(true)}}className="login">Login</li>
				</ul>
			</nav>
		</header>
	);
}

export default Menu;