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
                    <li onClick={()=> {}} className="first" >Dashboard</li>
                    <li onClick={()=> {}}>Faturamento</li>
                    <li onClick={()=> {}}>Estoque</li>
                    <li onClick={()=> {}}>Pedidos</li>
                    <li onClick={()=> {}}>Clientes</li>
                    <li onClick={()=> {}}>Funcionários</li>
                    <li><button className="deslogar"><img width="12px" src="https://cdn-icons-png.flaticon.com/512/4043/4043198.png"/> Sair da Conta</button></li>
                </ul>
            </aside>
            <main>
                {1


                }

                {2


                }

                {3


                }

                {4


                }

                {5


                }

                {6


                }
            </main>

        </div>
    );
}

export default Dashboard;