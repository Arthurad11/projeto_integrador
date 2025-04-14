'use client'
import host from "@/app/lib/host";
import axios from "axios";
import { useParams, redirect } from "next/navigation";
import { useEffect, useState } from "react";

function Produto() {

    const id = useParams().id

    const [ produtos, alteraProdutos ] = useState([])

    async function buscaPorID( id ){
        const response = await axios.get(host+"/produtos/"+id)
        alteraProdutos( response.data )
    }

    useEffect( ()=> {
        if(id){
            buscaPorID(id)
        }
    }, [id] )

    return (
        <div>
            <h1>Detalhes do produto { id } </h1>

            <hr/>

            <button onClick={ () => redirect("/")}>Voltar</button>
            {
                produtos.length > 0 &&
                    <div>
                        <p><strong>{produtos[0].nome}</strong></p>
                        <p>R$ <strong>{produtos[0].preco.toFixed(2)}</strong></p>
                    </div>
            }

        </div>
    );
}

export default Produto;