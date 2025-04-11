import conexao from "@/app/lib/conexao";

export async function GET( request, { params } ){

    const id =  params.id;

		const query = `SELECT * FROM vendas WHERE id = ? OR id_cliente = ?`;

		const [results] = await conexao.execute(
			query, [id, id]);

		return new Response(JSON.stringify(results), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
}