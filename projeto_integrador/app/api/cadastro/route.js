export async function POST(request) {
    
      const body = await request.json();
  
      const query = `
        INSERT INTO usuarios (nome, email, senha)
        VALUES (?, ?, ?);
      `;
  
      const [results] =  conexao.execute(query, [
        body.nome,
        body.email,
        body.senha,
      ]);
  
      return new Response(JSON.stringify({ id: results.insertId })), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }}