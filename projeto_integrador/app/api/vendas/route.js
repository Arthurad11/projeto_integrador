import conexao from "@/app/lib/conexao";

export async function GET() {
	const query = `SELECT * FROM vendas ORDER BY ID DESC;`;
	const [results] = await conexao.execute(query);

	return new Response(JSON.stringify(results), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}

export async function POST(request) {
	const body = await request.json();

	//const query = `INSERT INTO vendas JOIN produtos ON vendas.id_produto = produtos.id (id_produto, quantidade, mesa, finalizado) VALUES (?, ?, ?, ?)`;
	const query = `INSERT INTO vendas (id_produto, quantidade, mesa, finalizado) VALUES (?, ?, ?, ?)`;

	const [results] = await conexao.execute(query, [body.id_produto, body.quantidade, body.mesa, 0]);

	return new Response(JSON.stringify(results.insertId));
}
