import conexao from "@/app/lib/conexao"

export async function GET( request, { params } ){


    const id = (await params).id

    const query = `SELECT * FROM vendas JOIN produtos ON vendas.id_produto = produtos.id WHERE mesa = ? AND finalizado = 0`;
    const [results] = await conexao.execute ( query, [id] )

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json"}
        }
    )

}


export async function POST(request, { params }) {
  const id = params.id; // número da mesa

  try {
    // Atualiza o campo 'finalizado' para 1 (true) na tabela 'vendas' para a mesa correspondente
    const query = `UPDATE vendas SET finalizado = 1 WHERE mesa = ? AND finalizado = 0`;
    const [result] = await conexao.execute(query, [id]);

    // Verifica se a atualização foi feita (afectou alguma linha)
    if (result.affectedRows > 0) {
      return new Response(
        JSON.stringify({ message: "Comanda finalizada com sucesso!" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ message: "Comanda já finalizada ou mesa inválida." }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Erro ao finalizar comanda:", error);
    return new Response(
      JSON.stringify({ message: "Erro ao finalizar comanda." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
