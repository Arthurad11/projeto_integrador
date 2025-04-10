import React from 'react';
import { Chart } from 'react-google-charts';
import './faturamento.css'; // Importa o arquivo CSS

function Faturamento() {
  // Dados para o gráfico de faturamento mensal
  const graficoFaturamentoMensalData = [
    ['Mês', 'Entrada', 'Saída', 'Lucro'],
    ['Jan', 1000, 400, 600],
    ['Fev', 1170, 460, 710],
    ['Mar', 660, 1120, -460],
    ['Abr', 1030, 540, 490],
  ];

  // Dados para o gráfico de faturamento anual
  const graficoFaturamentoAnualData = [
    ['Ano', 'Entrada', 'Saída', 'Lucro'],
    ['2021', 4000, 2000, 2000],
    ['2022', 5000, 2500, 2500],
    ['2023', 6000, 3000, 3000],
  ];

  // Dados para o gráfico de vendas mensal
  const graficoVendasMensalData = [
    ['Mês', 'Vendas Realizadas'],
    ['Jan', 800],
    ['Fev', 900],
    ['Mar', 700],
    ['Abr', 1000],
  ];

  // Dados para o gráfico de vendas anual
  const graficoVendasAnualData = [
    ['Ano', 'Vendas Realizadas'],
    ['2021', 8000],
    ['2022', 9000],
    ['2023', 10000],
  ];

  // Opções para os gráficos (Barras verticais)
  const options = {
    chart: {
      title: 'Desempenho Financeiro e Vendas',
      subtitle: 'Entrada, Saída, Lucro e Vendas',
    },
    bars: 'vertical', // Define as barras como verticais
    hAxis: {
      title: 'Mês / Ano', // Eixo horizontal (Mês / Ano)
    },
    vAxis: {
      title: 'Valor', // Eixo vertical (valor numérico)
    },
  };

  return (
    
      
    <div className="faturamento-container">
      <h1>Gráficos de Desempenho Financeiro e Vendas</h1>

      {/* Primeira linha de gráficos (faturamento mensal e vendas mensal) */}
      <div className="chart-row">
        {/* Gráfico de faturamento mensal */}
        <div className="chart-container">
          <h3>Gráfico de Faturamento Mensal</h3>
          <Chart
            chartType="Bar"
            width="100%"
            height="300px"
            data={graficoFaturamentoMensalData}
            options={options}
          />
        </div>

        {/* Gráfico de vendas mensal */}
        <div className="chart-container">
          <h3>Gráfico de Vendas Mensal</h3>
          <Chart
            chartType="Bar"
            width="100%"
            height="300px"
            data={graficoVendasMensalData}
            options={options}
          />
        </div>
      </div>

      {/* Segunda linha de gráficos (faturamento anual e vendas anual) */}
      <div className="chart-row">
        {/* Gráfico de faturamento anual */}
        <div className="chart-container">
          <h3>Gráfico de Faturamento Anual</h3>
          <Chart
            chartType="Bar"
            width="100%"
            height="300px"
            data={graficoFaturamentoAnualData}
            options={options}
          />
        </div>

        {/* Gráfico de vendas anual */}
        <div className="chart-container">
          <h3>Gráfico de Vendas Anual</h3>
          <Chart
            chartType="Bar"
            width="100%"
            height="300px"
            data={graficoVendasAnualData}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

export default Faturamento;
