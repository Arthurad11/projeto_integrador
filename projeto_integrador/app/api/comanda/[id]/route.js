import conexao from "@/app/lib/conexao"

export async function GET( request, { params } ){


    const id = (await params).id

    const query = `SELECT * FROM vendas JOIN produtos ON vendas.id_produto = produtos.id WHERE id_cliente = ? AND finalizado = 0`;
    const [results] = await conexao.execute ( query, [id] )

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json"}
        }
    )

}