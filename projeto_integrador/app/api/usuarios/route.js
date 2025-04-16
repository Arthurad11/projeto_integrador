import conexao from "@/app/lib/conexao"

export async function GET (){

    const query = `SELECT * FROM usuarios WHERE email = ? AND senha = ?`;
    const [results] = await conexao.execute ( query )

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json"}
        }
    )

}