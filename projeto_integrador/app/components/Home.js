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
		const response = await axios.get(host + "/faturamento")
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
	},[])

	return (
		<div>
			<h1>Bem vindo(a) {nome}</h1>
			<main>

				<div className="card">
					<h3>Vendas realizadas hoje:</h3>
					<p><FontAwesomeIcon icon={faCartArrowDown} /></p>
					<p>{vendas}</p>
				</div>

				<div className="card">
					<h3>Faturamento</h3>
					<p><FontAwesomeIcon icon={faMoneyBillTrendUp} /></p>
					<p>6464654464</p>
				</div>

			</main>
		</div>
	);
}

export default Home;
