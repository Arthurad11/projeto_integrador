import { useEffect, useState } from "react"
import "./funcionarios.css"
import axios from "axios"

function Funcionarios() {

    const [pesquisa, alteraPesquisa] = useState("")

    const [clientes, alteraClientes] = useState([])


    async function buscaPorID( id ){
        const response = await axios.get("http://localhost:3000/api/funcionarios/"+id)
        alteraClientes(response.data)
    }


    async function buscaTodos() {
        const response = await axios.get("http://localhost:3000/api/funcionarios")
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
								clientes.map( i=>
									<tr key={i.id}>
										<td>{i.id}</td>
										<td>{i.nome}</td>
										<td>{i.email}</td>
										<td>{ formataData(i.registro) }</td>
										<td>
											<button onClick={()=> montaEdicao(i)} >Editar</button>
											<button onClick={()=> removeProduto(i.id)}>Remover</button>
										</td>
									</tr>

								)
							}
						</tbody>

					</table>

        </div>

     );
}

export default Funcionarios;