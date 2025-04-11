import conexao from "@/app/lib/conexao"


export async function PUT( request, { params } ){
    
    const id = (await params).id;
    const body = await request.json();

    const query = `UPDATE usuarios SET funcionario = 0 WHERE id= ? `;

    const [results] = await conexao.execute( query, [id] )
    
    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}