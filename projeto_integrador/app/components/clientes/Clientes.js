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
        <div>

            <h1>Clientes</h1>
            <hr/>
            <p>Busca de clientes:</p>
			<input placeholder="Digite o nome ou ID" onChange={(e)=> alteraPesquisa(e.target.value)} />
			<button onClick={()=> buscaPorID(pesquisa)} >Pesquisar</button> 
            <br/>
            <br/>
            <br/>

          
            <hr/>

            <br/>
           

            <table>
						<thead>
							<tr>
								<td>ID</td>
								<td>Nome</td>
								<td>Email</td>
								<td>Registro</td>
							</tr>
						</thead>
						<tbody>
							{
								clientes.map( (i)=>
									<tr key={i.id}>
										<td>{i.id}</td>
										<td>{i.nome}</td>
										<td>{i.email}</td>
										<td>{ formataData(i.registro) }</td>
										<td>
											<button className="botaoEditRemov" onClick={()=> montaEdicao(i)} >Editar</button>
											<button className="botaoEditRemov" onClick={()=> removeProduto(i.id)}>Remover</button>
										</td>
									</tr>

								)
							}
						</tbody>

					</table>


        </div>

     );
}

export default Clientes;