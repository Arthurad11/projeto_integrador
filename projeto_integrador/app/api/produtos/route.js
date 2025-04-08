import conexao from "@/app/lib/conexao";

export async function GET(){

    const query = `SELECT * FROM produtos;`;
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

    const query = `INSERT INTO produtos (nome, id_categoria, preco) VALUES (?, ?, ?);`;

    const [results] = await conexao.execute(
        query,
        [body.nome, body.id_categoria, body.preco]
    )

    return new Response(
        JSON.stringify(results.insertId)
    )
}