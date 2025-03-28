import "./clientes.css"

function Clientes() {
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="id">ID</th>
                        <th className="nome">Nome</th>
                        <th className="email">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="id">1</td>
                        <td>João Silva</td>
                        <td>joaosil@gmail.com</td>
                    </tr>
                    <tr>
                        <td id="id">2</td>
                        <td>Maria Oliveira</td>
                        <td>maoliveira@email.com</td>
                    </tr>
                    <tr>
                        <td id="id">3</td>
                        <td>Carlos Santos</td>
                        <td>c.santos@outlook.com</td>
                    </tr>
                </tbody>
            </table>

        </div>

     );
}

export default Clientes;