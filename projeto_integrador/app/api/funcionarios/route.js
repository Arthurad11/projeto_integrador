import conexao from "@/app/lib/conexao"

export async function GET (){

    const query = `SELECT * FROM usuarios WHERE funcionario = 1`;
    const [results] = await conexao.execute ( query )

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json"}
        }
    )

}

export async function POST ( request ){
    
    const body = await request.json()

    const query = `
        INSERT INTO usuarios
        (nome, email, senha, registro)
        VALUES
        (?, ?, ?, ?);
    `

    const [results] = await conexao.execute(
        query,
        [body.nome, body.email, body.senha]
    )

    return new Response( JSON.stringify(results.insertId) )

}

