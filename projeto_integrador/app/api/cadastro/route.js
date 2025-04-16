import conexao from "@/app/lib/conexao";


export async function POST(request) {
  try {
    const body = await request.json();

    const query = `
      INSERT INTO usuarios (nome, email, senha, funcionario)
      VALUES (?, ?, ?, ?);
    `;

    const [results] = await conexao.execute(query, [
      body.nome,
      body.email,
      body.senha,
      body.funcionario
    ]);

    return new Response(JSON.stringify({ id: results.insertId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error("Erro no backend:", err.message);
    return new Response(JSON.stringify({ error: 'Erro interno do servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
