import React from "react";
import { Chart } from "react-google-charts";
import Funcionarios from "./funcionarios/Funcionarios";

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
	return (
		<div>
			<h1>Resumo</h1>
			<div>
				{/* Primeira linha de gráficos (faturamento mensal e vendas mensal) */}
				<div className="chart-row">
					{/* Gráfico de faturamento mensal */}
					<div className="chart-container">
						<h3>Gráfico de Faturamento Mensal</h3>
						<Chart chartType="Bar" width="100%" height="300px" data={graficoFaturamentoMensalData} options={options} />
					</div>

					{/* Gráfico de vendas mensal */}
					<div className="chart-container">
						<h3>Gráfico de Vendas Mensal</h3>
						<Chart chartType="Bar" width="100%" height="300px" data={graficoVendasMensalData} options={options} />
					</div>

					<Funcionarios />
				</div>
			</div>
		</div>
	);
}

export default Home;
