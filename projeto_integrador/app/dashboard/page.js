"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import Clientes from "../components/clientes/Clientes";
import Estoque from "../components/produtos/Estoque";
import Funcionarios from "../components/funcionarios/Funcionarios";
import Menu2 from "../components/Menu2";
import { useEffect, useState } from "react";
import "./dashboard.css";
import Faturamento from "../components/faturamento/Faturamento";
import Home from "../components/Home";
import { redirect } from "next/dist/server/api-utils";
import Vendas from "../components/vendas/Vendas";

function Dashboard() {
	const [home, alteraHome] = useState(true);
	const [faturamento, alteraFaturamento] = useState();
	const [estoque, alteraEstoque] = useState();
	const [pedidos, alteraPedidos] = useState();
	const [clientes, alteraClientes] = useState();
	const [funcionarios, alteraFuncionarios] = useState();

	return (
		<div>
			<Menu2 />
			<div className="container">
				<aside>
					<ul>
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
								<img className="imagemSair" src="https://cdn-icons-png.flaticon.com/512/4043/4043198.png" /> Sair da Conta
							</button>
						</li>
					</ul>
				</aside>
				<main>
					{home == true && <Home />}

					{faturamento == true && <Faturamento />}

					{estoque == true && <Estoque />}

					{pedidos == true && <Vendas />}

					{clientes == true && <Clientes />}

					{funcionarios == true && <Funcionarios />}
				</main>
			</div>
		</div>
	);
}

export default Dashboard;
