import conexao from "@/app/lib/conexao";

export async function GET() {
	const query = `
		SELECT 
			COALESCE(SUM(p.preco * v.quantidade), 0) AS total
		FROM 
			vendas v
		JOIN 
			produtos p ON v.id_produto = p.id
		WHERE 
			DATE(v.data) = CURDATE();
	`;

	const [results] = await conexao.execute(query);

	return new Response(JSON.stringify({ total: results[0].total }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
