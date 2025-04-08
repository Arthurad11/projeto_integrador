import "./funcionarios.css"

function Funcionarios() {
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Login</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>João Silva</td>
                        <td>Jsilva01</td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Maria Oliveira</td>
                        <td>MaOliveira02</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Carlos Santos</td>
                        <td>SantCarlos03</td>

                    </tr>
                </tbody>
            </table>

        </div>

     );
}

export default Funcionarios;