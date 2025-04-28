import { useState } from "react";
import "./produto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import host from "@/app/lib/host";
import axios from "axios";

function Produto(attr) {
	const [quantidadeInicial, setQuantidadeInicial] = useState(1);
	const [quantidade, setQuantidade] = useState(quantidadeInicial);

	const [mesa, setMesa] = useState(1);

	async function mandaVenda() {

		const obj = {
			id_produto: attr.id,
			quantidade: quantidade,
			mesa: mesa,
		};

		const response = await axios.post(host + "/vendas/", obj);

	}

	return (
		<div>
			<div className="item">
				<h3>{attr.nome}</h3>
				<br />
				<img width={80} height={80} src={attr.imagem} />
				<br />
				<br />
				<p className="preco">
					<strong>R$ {attr.preco}</strong>
				</p>
				<p>
					<select onChange={(e) => setMesa(e.target.value)}>
						<option value={1}>Mesa 1</option>
						<option value={2}>Mesa 2</option>
						<option value={3}>Mesa 3</option>
						<option value={4}>Mesa 4</option>
						<option value={5}>Mesa 5</option>
						<option value={6}>Mesa 6</option>
						<option value={7}>Mesa 7</option>
						<option value={8}>Mesa 8</option>
						<option value={9}>Mesa 9</option>
						<option value={10}>Mesa 10</option>
					</select>
					<button className="botao-qntd" onClick={() => setQuantidade(quantidade - 1)}>
						<FontAwesomeIcon icon={faMinus} width={30} />
					</button>
					{quantidade}
					<button className="botao-qntd" onClick={() => setQuantidade(quantidade + 1)}>
						<FontAwesomeIcon icon={faPlus} width={30} />
					</button>
					<button className="btn-compra" onClick={() => mandaVenda()}>
						Adicionar
					</button>
				</p>
			</div>
		</div>
	);
}

export default Produto;
