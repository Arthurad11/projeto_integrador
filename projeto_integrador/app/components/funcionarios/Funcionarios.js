"use client";

import { useEffect, useState } from "react";
import "./funcionarios.css";
import axios from "axios";
import { redirect } from "next/navigation";
import host from "@/app/lib/host";

function Funcionarios() {
	const [pesquisa, alteraPesquisa] = useState("");

	const [clientes, alteraClientes] = useState([]);

	const [remover, alteraRemover] = useState([]);

	async function atualizaFUNC(id) {
		const obj = {
			funcionario: false,
		};

		const response = await axios.put(host + "/funcionarios/" + id, obj);
		buscaTodos();
	}

	async function buscaPorID(id) {
		const response = await axios.get(host + "/funcionarios/" + id);
		alteraClientes(response.data);
	}

	async function buscaTodos() {
		const response = await axios.get(host + "/funcionarios");
		alteraClientes(response.data);
	}

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
		buscaTodos();
	}, []);

	return (
		<div className="container-tabela">
			<div className="funcionarios">
				<h1>Funcionários</h1>
				<hr />

				<br />

				<button className="btn-add" onClick={() => redirect("/cadastro")}>
					Adicionar Funcionário
				</button>

				<br />
				<div className="scroll-tabela">
					<table className="tabela">
						<thead>
							<tr>
								<th>ID</th>
								<th>Nome</th>
								<th>Email</th>
								<th>Registro</th>
								<th>Ações</th>
								
							</tr>
						</thead>
						<tbody>
							{clientes.map((i) => (
								<tr key={i.id}>
									<td>{i.id}</td>
									<td>{i.nome}</td>
									<td>{i.email}</td>
									<td>{formataData(i.registro)}</td>
									<td className="ferramentas">
										<button onClick={() => atualizaFUNC(i.id)}>Atualizar</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Funcionarios;
