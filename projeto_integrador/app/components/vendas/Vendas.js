'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';



import axios from "axios";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';

function Estoque() {

	//Mostra de produtos
	const [vendas, alteraVendas] = useState([]);

	async function buscaTodasVendas() {
		const response = await axios.get("http://localhost:3000/api/vendas");
		alteraVendas(response.data);
	}


	//Pesquisa de produtos, seja por ID ou Nome
    const [pesquisa, alteraPesquisa] = useState("");

    async function buscaPorId( id ) {
		const response = await axios.get("http://localhost:3000/api/vendas/"+id)
		alteraVendas( response.data )
	}
	//


	//Formatação da data da venda
	function formataData( valor ){
		

		let data = valor.split("T")[0]
		let hora = valor.split("T")[1]

		data = data.split("-")
		data = data.reverse()
		data = data.join("/")

		hora = hora.split(".")[0]
		hora = hora.split(":")
		hora = hora[0]+":"+hora[1]

		return data+" às "+hora

	}


	useEffect(() => {
		buscaTodasVendas();
	}, []);

	return (
		<div>

            <h1>Vendas</h1>
            <hr/>

            <div>
                <p>Procurar venda:</p>
                <input type="text" placeholder="Digite o nome ou ID" onChange={ (e)=> alteraPesquisa(e.target.value)}/> 
                <button onClick={ ()=> buscaPorId(pesquisa)}>Buscar</button>
            </div>

            <br/>
            <hr/>

			<div>
            <table>
						<thead>
							<tr>
								<td>ID</td>
								<td>ID do Cliente</td>
								<td>ID do Produto</td>						
								<td>Quantidade</td>
								<td>Data</td>
								<td>Finalizado</td>
							</tr>
						</thead>
						<tbody>
							{
								vendas.map( i=>
									<tr key={i.id}>
										<td>{i.id}</td>
										<td>{i.id_cliente}</td>
										<td>{i.id_produto}</td>
										<td>{i.quantidade}</td>
										<td>{ formataData(i.data) }</td>
										<td>{ i.finalizado === "0"  ? "Não finalizado💬" : "Finalizado✅"}</td>
									</tr>

								)
							}
						</tbody>

					</table>

        </div>
		</div>
	);
}

export default Estoque;
