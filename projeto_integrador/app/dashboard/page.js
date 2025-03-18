import Clientes from "../components/Clientes";
import Funcionarios from "../components/Funcionarios";
import Menu from "../components/Menu";

import "./dashboard.css";

function Dashboard() {



    return ( 
        <div>
            <Menu />
            <aside>
                <ul>
                    <li className="first" >Dashboard</li>
                    <li>Faturamento</li>
                    <li>Estoque</li>
                    <li>Pedidos</li>
                    <li>Clientes</li>
                    <li>Funcionários</li>
                    <li><button className="deslogar"><img width="12px" src="https://cdn-icons-png.flaticon.com/512/4043/4043198.png"/> Sair da Conta</button></li>
                </ul>
            </aside>
            <main>
                <Funcionarios/>
                <Clientes/>
            </main>

        </div>
    );
}

export default Dashboard;