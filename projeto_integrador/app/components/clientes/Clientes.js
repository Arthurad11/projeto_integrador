import "./clientes.css"

function Clientes() {
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>João Silva</td>
                        <td>joaosil@gmail.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Maria Oliveira</td>
                        <td>maoliveira@email.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Carlos Santos</td>
                        <td>c.santos@outlook.com</td>
                    </tr>
                </tbody>
            </table>

        </div>

     );
}

export default Clientes;