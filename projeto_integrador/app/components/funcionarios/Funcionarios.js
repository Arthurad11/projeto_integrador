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
        <div className="container-tabela">
			<div className="funcionarios">
				<h1>Funcionários</h1>
				<hr />

				<br/>

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
										<button onClick={() => montaEdicao(i)}>Editar</button>
										<button onClick={() => removeProduto(i.id)}>Remover</button>
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