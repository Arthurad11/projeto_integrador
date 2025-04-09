'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import "./estoque.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';

function Estoque() {

	//Mostra de produtos
	const [produtos, alteraProdutos] = useState([]);

	async function buscaTodosProdutos() {
		const response = await axios.get("http://localhost:3000/api/produtos");
		alteraProdutos(response.data);
	}


	//Pesquisa de produtos, seja por ID ou Nome
    const [pesquisa, alteraPesquisa] = useState("");

    async function buscaPorId( id ) {
		const response = await axios.get("http://localhost:3000/api/produtos/"+id)
		alteraProdutos( response.data )
	}
	//

	


	useEffect(() => {
		buscaTodosProdutos();
	}, []);

	return (
		<div>

            <h1>Produtos</h1>
            <hr/>

            <div>
                <p>Pesquisar produto:</p>
                <input type="text" placeholder="Digite o nome ou ID" onChange={ (e)=> alteraPesquisa(e.target.value)}/> 
                <button onClick={ ()=> buscaPorId(pesquisa)}>Pesquisar</button>
            </div>

            <br/>
            <hr/>

			<table>
				<thead>
					<tr >
						<th>ID</th>
						<th>Categoria</th>
						<th>Produto</th>
						<th>Preço</th>
						<th className="remover">
							Ferramentas / <button onClick={() => redirect("/cadastroproduto/")}>Adicionar produto</button>
						</th>
					</tr>
				</thead>
				<tbody>
					{produtos.map((i) => (
						<tr key={i.id}>
							<td>{i.id}</td>
							<td>{i.id_categoria}</td>
							<td>{i.nome}</td>
							<td>R$ {i.preco.toFixed(2)}</td>
							<td>
								<button onClick={() => redirect("/produto/" + i.id)}><FontAwesomeIcon icon={faEye} /></button>
								<button onClick={() => montaEdicao(i)}><FontAwesomeIcon icon={faPenToSquare} /></button>
								<button onClick={() => removeProdutos(i.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Estoque;
