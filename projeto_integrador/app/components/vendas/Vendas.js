"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "./vendas.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import host from "@/app/lib/host";

function Vendas() {
	//Mostra de produtos
	const [vendas, alteraVendas] = useState([]);

	async function buscaTodasVendas() {
		const response = await axios.get(host+"/vendas");
		alteraVendas(response.data);
	}

	//Pesquisa de produtos, seja por ID ou Nome
	const [pesquisa, setPesquisa] = useState("");

	async function buscaPorId(id) {
		const response = await axios.get(host+"/vendas/" + id);
		alteraVendas(response.data);
	}
	//

	//Formatação da data da venda
	function formataData(valor) {
		let data = valor.split("T")[0];
		let hora = valor.split("T")[1];

		data = data.split("-");
		data = data.reverse();
		data = data.join("/");

		hora = hora.split(".")[0];
		hora = hora.split(":");
		hora = hora[0] + ":" + hora[1];

		return data + " às " + hora;
	}

	useEffect(() => {
		buscaTodasVendas();
	}, []);

	return (
		<div className="container-tabela">
			<div className="vendas">
				<h1>Vendas</h1>
				<hr />

				<div>
					<p>Buscar venda:</p>
					<input
						type="text"
						placeholder="Digite o ID"
						onChange={(e) => setPesquisa(e.target.value)}
					/>
					<button onClick={() => buscaPorId(pesquisa)}>Buscar</button>
				</div>

				<br />
				<hr />
				<br/>

				<div className="scroll-tabela">
					<table className="tabela">
						<thead>
							<tr>
								<th>ID</th>
								<th>ID do Cliente</th>
								<th>ID do Produto</th>
								<th>Quantidade</th>
								<th>Data</th>
								<th>Finalizado</th>
							</tr>
						</thead>
						<tbody>
							{vendas.map((i) => (
								<tr key={i.id}>
									<td>{i.id}</td>
									<td>{i.id_cliente}</td>
									<td>{i.id_produto}</td>
									<td>{i.quantidade}</td>
									<td>{formataData(i.data)}</td>
									<td>{i.finalizado === "0" ? "Não finalizado 💬" : "Finalizado ✅"}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Vendas;
