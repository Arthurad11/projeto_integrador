import conexao from "@/app/lib/conexao"

export async function GET(){

    const query = `SELECT * FROM vendas WHERE id_cliente = ? AND finalizado = false`;
    const [results] = await conexao.execute ( query )

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json"}
        }
    )

}