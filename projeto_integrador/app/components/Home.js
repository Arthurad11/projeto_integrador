import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import host from "../lib/host";


function Home() {
	// Dados para o gráfico de faturamento mensal
	const graficoFaturamentoMensalData = [
		["Mês", "Entrada", "Saída", "Lucro"],
		["Jan", 1000, 400, 600],
		["Fev", 1170, 460, 710],
		["Mar", 660, 1120, -460],
		["Abr", 1030, 540, 490],
	];

	// Dados para o gráfico de faturamento anual
	const graficoVendasMensalData = [
		["Mês", "Vendas Realizadas"],
		["Jan", 800],
		["Fev", 900],
		["Mar", 700],
		["Abr", 1000],
	];

	const options = {
		chart: {
			title: "Desempenho Financeiro e Vendas",
			subtitle: "Entrada, Saída, Lucro e Vendas",
		},
		bars: "vertical", // Define as barras como verticais
		hAxis: {
			title: "Mês / Ano", // Eixo horizontal (Mês / Ano)
		},
		vAxis: {
			title: "Valor", // Eixo vertical (valor numérico)
		},
	};

	const [ vendas, setVendas ] = useState()
	async function pegaVendas() {
		const response = await axios.get(host + "/vendas/dash")
		setVendas(response.data.length)
	}

	const [ faturamento, setFaturamento ] = useState()
	async function pegaFaturamento() {
		const response = await axios.get(host + "/faturamento");
		setFaturamento(response.data.total); 
	}


	const [ nome, setNome ] = useState("")
	function pegaUser() {
		const usuarioString = localStorage.getItem("usuario");
	
		if (usuarioString) {
			const usuario = JSON.parse(usuarioString); 
			setNome(usuario.nome); 
		}


	}

	useEffect( () => {
		pegaUser()
		pegaVendas()
		pegaFaturamento();
	},[])

	return (
		<div>
			<h1>Bem vindo(a) {nome}</h1>
			<div className="container">

				<div className="card">
					<h3>Vendas realizadas hoje:</h3>
					<FontAwesomeIcon icon={faCartArrowDown} className="icone"/>
					<h2><strong>{vendas !== undefined ? `${vendas}` : "0"}</strong></h2>
				</div>

				<div className="card">
					<h3>Faturamento</h3>
					<FontAwesomeIcon icon={faMoneyBillTrendUp} className="icone"/>
					<h2><strong>{faturamento !== undefined ? `R$ ${faturamento.toFixed(2)}` : "R$ 0.00"}</strong></h2>
				</div>

				<div className="card" onClick={() => window.location.href = "/comanda_garcom"} style={{cursor: "pointer"}} >
					<h3>Comandas</h3>
					<p>Clique Aqui para Ver as Comandas</p>
					
				</div>

			</div>
		</div>
	);
}

export default Home;
