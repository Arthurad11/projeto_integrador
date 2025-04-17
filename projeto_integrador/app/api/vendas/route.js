import conexao from "@/app/lib/conexao";

export async function GET(){

    const query = `SELECT * FROM vendas ORDER BY ID DESC;`;
    const [ results ] = await conexao.execute(query);

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json"}
        }
    )
}

export async function POST( request ){

    const body = await request.json();

    const query = `INSERT INTO vendas (id_cliente, id_produto, quantidade, mesa, finalizado) VALUES (?, ?, ?, ?, ?);`;

    const [results] = await conexao.execute(
        query,
        [body.id_cliente, body.id_produto, body.quantidade, body.mesa, false] // Alterei os nomes das variáveis para 'categoria' e 'valor'
    );

    return new Response(
        JSON.stringify(results.insertId),
        { 
            status: 200, 
            headers: { "Content-Type": "application/json" } 
        }
    );

}