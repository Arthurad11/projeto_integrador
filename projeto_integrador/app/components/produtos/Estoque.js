"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "./estoque.css";


import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import axios from "axios";
import host from "@/app/lib/host";

function Estoque() {
	//Mostra de produtos
	const [produtos, alteraProdutos] = useState([]);

	async function buscaTodosProdutos() {
		const response = await axios.get(host+"/produtos");
		alteraProdutos(response.data);
	}

	//Pesquisa de produtos, seja por ID ou Nome
	const [pesquisa, alteraPesquisa] = useState("");

	async function buscaPorId(id) {
		const response = await axios.get(host+`/produtos/${id}`);
		alteraProdutos(response.data);
	}
	//

	//Remover produtos
	async function removeProdutos(id) {
		await axios.delete(host+"/produtos/" + id);
		buscaTodosProdutos();
	}

	useEffect(() => {
		buscaTodosProdutos();
	}, []);

	return (
		<div className="container-tabela">
			<div className="produtos">
				<h1>Produtos</h1>
				<hr />

				<div>
					<p>Pesquisar produto:</p>
					<input type="text" placeholder="Digite o nome ou ID" onChange={(e) => alteraPesquisa(e.target.value)} />
					<button onClick={() => buscaPorId(pesquisa)}>Pesquisar</button>
				</div>

				<br/>
				<hr />
				<br/>
				

				<div className="scroll-tabela">
					<table className="tabela-produtos">
						<thead className="cabecalho">
							<tr className="cabecalho">
								<th>ID</th>
								<th>Categoria</th>
								<th>Produto</th>
								<th>Preço</th>
								<th className="ferramentas">
									<button onClick={() => redirect("/cadastroproduto/")}>Adicionar produto</button>
								</th>
							</tr>
						</thead>
						<tbody>
							{produtos.map((i) => (
								<tr key={i.id}>
									<td>{i.id}</td>
									<td>
										{i.id_categoria == "1"
											? "Cerveja"
											: i.id_categoria == "2"
											? "Chopp"
											: i.id_categoria == "3"
											? "Drinks"
											: i.id_categoria == "4"
											? "Sucos"
											: i.id_categoria == "5"
											? "Refrigerantes"
											: i.id_categoria == "6"
											? "Bebidas em geral"
											: i.id_categoria == "7"
											? "Porções"
											: i.id_categoria == "8"
											? "Espetinhos"
											: "Cat. Desconhecida"}
									</td>
									<td>{i.nome}</td>
									<td>R$ {i.preco.toFixed(2)}</td>
									<td>
										
										{/* <button onClick={() => montaEdicao(i)}>
											<FontAwesomeIcon icon={faPenToSquare} />
										</button> */}
										<button onClick={() => removeProdutos(i.id) } style={{color: "red", padding: "5px"}}>
											Remover <FontAwesomeIcon icon={faTrashCan} style={{color: "red"}} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

export default Estoque;
