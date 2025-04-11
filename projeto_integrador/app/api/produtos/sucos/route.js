import conexao from "@/app/lib/conexao";

export async function GET(){

    const query = `SELECT * FROM produtos WHERE id_categoria = 4`;
    const [ results ] = await conexao.execute(query);

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json"}
        }
    )
}