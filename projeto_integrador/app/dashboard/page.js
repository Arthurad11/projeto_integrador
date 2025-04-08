"use client";

import Clientes from "../components/clientes/Clientes";
import Estoque from "../components/produtos/Estoque";
import Funcionarios from "../components/funcionarios/Funcionarios";
import Menu2 from "../components/Menu2";
import { useState } from "react";
import "./dashboard.css";
import Faturamento from "../components/vendas/Faturamento";
import Home from "../components/Home";


function Dashboard() {
	const [home, alteraHome] = useState();
	const [faturamento, alteraFaturamento] = useState();
	const [estoque, alteraEstoque] = useState();
	const [pedidos, alteraPedidos] = useState();
	const [clientes, alteraClientes] = useState();
	const [funcionarios, alteraFuncionarios] = useState();

<<<<<<< Updated upstream
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
=======
    const[dashboard , alteraDashboard] = useState(true)
    const[faturamento , alteraFaturamento] = useState(true)
    const[estoque, alteraEstoque] = useState(true)
    const[pedidos, alteraPedidos] = useState(true)
    const[clientes, alteraClientes] = useState(true)
    const[funcionarios, alterafuncionarios] = useState(true)


>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
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
=======
    return ( 
        <div>
            <Menu />
            <aside>
                <ul>
                    <li onClick={()=> {}} className="first" >Dashboard</li>
                    <li onClick={()=> {}}>Faturamento</li>
                    <li onClick={()=> {}}>Estoque</li>
                    <li onClick={()=> {}}>Pedidos</li>
                    <li onClick={()=> {}}>Clientes</li>
                    <li onClick={()=> {}}>Funcionários</li>
                    <li><button className="deslogar"><img width="12px" src="https://cdn-icons-png.flaticon.com/512/4043/4043198.png"/> Sair da Conta</button></li>
                </ul>
            </aside>
            <main>
                {
                
>>>>>>> Stashed changes

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
				</aside>
				<main>
					{home == true && <Home />}

					{faturamento == true && <Faturamento />}

					{estoque == true && <Estoque />}

					{}

					{clientes == true && <Clientes />}

					{funcionarios == true && <Funcionarios />}
				</main>
			</div>
		</div>
	);
}

export default Dashboard;
