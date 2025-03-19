"use client"

import Clientes from "../components/Clientes";
import Estoque from "../components/Estoque";
import Funcionarios from "../components/Funcionarios";
import Menu2 from "../components/Menu2";
import { useState } from "react";
import "./dashboard.css";

function Dashboard() {
    const[dashboard , alteraDashboard] = useState()
    const[faturamento , alteraFaturamento] = useState()
    const[estoque, alteraEstoque] = useState()
    const[pedidos, alteraPedidos] = useState()
    const[clientes, alteraClientes] = useState()
    const[funcionarios, alteraFuncionarios] = useState()


    return ( 
        <div>
            <Menu2 />
            <aside>
                <ul>
                    <li onClick={()=> {alteraDashboard(true); alteraFaturamento(false); alteraEstoque(false);alteraPedidos(false);alteraClientes(false);alteraFuncionarios(false)}} className="first" >Dashboard</li>

                    <li onClick={()=> {alteraDashboard(false); alteraFaturamento(true); alteraEstoque(false);alteraPedidos(false);alteraClientes(false);alteraFuncionarios(false)}}>Faturamento</li>

                    <li onClick={()=> {alteraDashboard(false); alteraFaturamento(false); alteraEstoque(true);alteraPedidos(false);alteraClientes(false);alteraFuncionarios(false)}}>Estoque</li>

                    <li onClick={()=> {alteraDashboard(false); alteraFaturamento(false); alteraEstoque(false);alteraPedidos(true);alteraClientes(false);alteraFuncionarios(false)}}>Pedidos</li>

                    <li onClick={()=> {alteraDashboard(false); alteraFaturamento(false); alteraEstoque(false);alteraPedidos(false);alteraClientes(true);alteraFuncionarios(false)}}>Clientes</li>

                    <li onClick={()=> {alteraDashboard(false); alteraFaturamento(false); alteraEstoque(false);alteraPedidos(false);alteraClientes(false);alteraFuncionarios(true)}}>Funcionários</li>

                    <li><button className="deslogar"><img width="12px" src="https://cdn-icons-png.flaticon.com/512/4043/4043198.png"/> Sair da Conta</button></li>
                </ul>
            </aside>
            <main>
                {/* {
                    alteraDashboard == true && 

                    
                    

                } */}

                {/* {
                    alteraFaturamento == true &&


                } */}

                {
                    estoque == true &&
                    <Estoque/>


                }

                {



                }

                {
                    clientes == true &&
                    <Clientes/>


                }

                {
                    funcionarios == true &&
                    <Funcionarios/>


                }
            </main>

        </div>
    );
}

export default Dashboard;