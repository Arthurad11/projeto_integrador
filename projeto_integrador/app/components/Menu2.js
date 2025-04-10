"use client";

import { useState } from "react";
import "./menu2.css";
import Estoque from "./produtos/Estoque";
import Clientes from "./clientes/Clientes";
import Funcionarios from "./funcionarios/Funcionarios";
import Faturamento from "./faturamento/Faturamento";
import Home from "../page";

function Menu2() {
	function toggleMenu() {
		const menu = document.querySelector("nav ul");
		menu.classList.toggle("active");
	}

	const [home, alteraHome] = useState();
	const [faturamento, alteraFaturamento] = useState();
	const [estoque, alteraEstoque] = useState();
	const [pedidos, alteraPedidos] = useState();
	const [clientes, alteraClientes] = useState();
	const [funcionarios, alteraFuncionarios] = useState();

	return (
		<div>
			<header>
				<nav>
					<a>Bar do João</a>

					<div className="mobile-menu" onClick={toggleMenu}>
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</div>

					<ul className="menu">
						<li
							onClick={() => {
								alteraHome(true);
								alteraFaturamento(false);
								alteraEstoque(false);
								alteraPedidos(false);
								alteraClientes(false);
								alteraFuncionarios(false);
							}}
							className="first">
							Home
						</li>

						<li
							onClick={() => {
								alteraHome(false);
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
								alteraHome(false);
								alteraFaturamento(false);
								alteraEstoque(true);
								alteraPedidos(false);
								alteraClientes(false);
								alteraFuncionarios(false);
							}}>
							Produtos
						</li>

						<li
							onClick={() => {
								alteraHome(false);
								alteraFaturamento(false);
								alteraEstoque(false);
								alteraPedidos(true);
								alteraClientes(false);
								alteraFuncionarios(false);
							}}>
							Vendas
						</li>

						<li
							onClick={() => {
								alteraHome(false);
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
								alteraHome(false);
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
				{home == true && <Home />}

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
