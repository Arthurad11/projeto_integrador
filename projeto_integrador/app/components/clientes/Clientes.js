'use client'

import { useEffect, useState } from "react";
import "./clientes.css"
import axios from "axios";



function Clientes() {

    const [pesquisa, alteraPesquisa] = useState("")

    const [clientes, alteraClientes] = useState([])


    async function buscaPorID( id ){
        const response = await axios.get("http://localhost:3000/api/clientes/"+id)
        alteraClientes(response.data)
    }


    async function buscaTodos() {
        const response = await axios.get("http://localhost:3000/api/clientes")
        alteraClientes(response.data)
    }

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

    useEffect(()=> {
        buscaTodos();
    },[])

    return ( 
        <div className="container-tabela">
			<div className="clientes">
				<h1>Clientes</h1>
				<hr />
				<p>Busca de clientes:</p>
				<input placeholder="Digite o nome ou ID" onChange={(e) => alteraPesquisa(e.target.value)} />
				<button onClick={() => buscaPorID(pesquisa)}>Pesquisar</button>

				<br />
				<br />
				<hr />
				<br />

				<div className="scroll-tabela">
					<table className="tabela">
						<thead>
							<tr>
								<th>ID</th>
								<th>Nome</th>
								<th>Email</th>
								<th>Registro</th>
								
							</tr>
						</thead>
						<tbody>
							{clientes.map((i) => (
								<tr key={i.id}>
									<td>{i.id}</td>
									<td>{i.nome}</td>
									<td>{i.email}</td>
									<td>{formataData(i.registro)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
     );
}

export default Clientes;