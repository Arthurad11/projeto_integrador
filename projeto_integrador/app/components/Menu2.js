"use client";

import { useState } from "react";
import "./menu2.css";
import Estoque from "./Estoque";
import Clientes from "./Clientes";
import Funcionarios from "./Funcionarios";
import Faturamento from "./Faturamento";

function Menu2() {
	function toggleMenu() {
		const menu = document.querySelector("nav ul");
		menu.classList.toggle("active");
	}

	const [dashboard, alteraDashboard] = useState();
	const [faturamento, alteraFaturamento] = useState();
	const [estoque, alteraEstoque] = useState();
	const [pedidos, alteraPedidos] = useState();
	const [clientes, alteraClientes] = useState();
	const [funcionarios, alteraFuncionarios] = useState();

	return (
		<div>
			<header>
				<nav>
					<a>Bar do Jaum</a>

					<div className="mobile-menu" onClick={toggleMenu}>
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</div>

					<ul className="menu">
						<li
							onClick={() => {
								alteraDashboard(true);
								alteraFaturamento(false);
								alteraEstoque(false);
								alteraPedidos(false);
								alteraClientes(false);
								alteraFuncionarios(false);
							}}
							className="first">
							Dashboard
						</li>

						<li
							onClick={() => {
								alteraDashboard(false);
								alteraFaturamento(true);
								alteraEstoque(false);
								alteraPedidos(false);
								alteraClientes(false);
								alteraFuncionarios(false);
							}}>
							Faturamento
						</li>

						<li
							onClick={() => {
								alteraDashboard(false);
								alteraFaturamento(false);
								alteraEstoque(true);
								alteraPedidos(false);
								alteraClientes(false);
								alteraFuncionarios(false);
							}}>
							Estoque
						</li>

						<li
							onClick={() => {
								alteraDashboard(false);
								alteraFaturamento(false);
								alteraEstoque(false);
								alteraPedidos(true);
								alteraClientes(false);
								alteraFuncionarios(false);
							}}>
							Pedidos
						</li>

						<li
							onClick={() => {
								alteraDashboard(false);
								alteraFaturamento(false);
								alteraEstoque(false);
								alteraPedidos(false);
								alteraClientes(true);
								alteraFuncionarios(false);
							}}>
							Clientes
						</li>

						<li
							onClick={() => {
								alteraDashboard(false);
								alteraFaturamento(false);
								alteraEstoque(false);
								alteraPedidos(false);
								alteraClientes(false);
								alteraFuncionarios(true);
							}}>
							Funcionários
						</li>
						<li>
							<button className="deslogar">
								<img width="12px" src="https://cdn-icons-png.flaticon.com/512/4043/4043198.png" /> Sair da Conta
							</button>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				{/* {
                    alteraDashboard == true && 

                    
                    

                } */}

				{faturamento == true && <Faturamento />}

				{estoque == true && <Estoque />}

				{}

				{clientes == true && <Clientes />}

				{funcionarios == true && <Funcionarios />}
			</main>
		</div>
	);
}

export default Menu2;
