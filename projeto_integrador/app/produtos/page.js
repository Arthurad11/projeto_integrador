import Menu from "../components/Menu";
import Produto from "./components/Produto";

import "./produtos.css";

function Produtos() {
	return (
		<div>
			<Menu />
			<br />
			<br />

			<h1>Produtos</h1>
			<br />

			<div className="produtos">
				<h2>Cerveja</h2>
				<br />

				<div className="item-container">
					<Produto />
					<Produto />
					<Produto />
					<Produto />
				</div>

				<br />
				<br />

				<h2>Whisky</h2>
				<br />

				<div className="item-container">
					<Produto />
					<Produto />
					<Produto />
					<Produto />
				</div>
				<br />
				<br />

				<h2>Porções</h2>
				<br />

				<div className="item-container">
					<Produto />
					<Produto />
					<Produto />
					<Produto />
				</div>
			</div>

			<br />
		</div>
	);
}

export default Produtos;
