import conexao from "@/app/lib/conexao"


export async function POST(request){
    
    const body = await request.json()

    const query = `INSERT INTO usuarios (nome, email, senha, funcionario) VALUES (?, ?, ?, false);`

    const [results] = await conexao.execute(
        query,
        [body.nome, body.email, body.senha, body.funcionario]
    )

    return new Response(JSON.stringify(results.insertId) )
}