"use client";

import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Produto from "./components/Produto";

import "./produtos.css";
import axios from "axios";

function Produtos() {
	//busca cerveja
	const [cerveja, setCerveja] = useState();
	async function buscaCerveja() {
		const response = await axios.get("http://localhost:3000/api/produtos/cerveja");
		setCerveja(response.data);
	}

	//busca chopp
	const [chopp, setChopp] = useState();
	async function buscaChopp() {
		const response = await axios.get("http://localhost:3000/api/produtos/chopp");
		setChopp(response.data);
	}

	//busca drinks
	const [drinks, setDrinks] = useState();
	async function buscaDrinks() {
		const response = await axios.get("http://localhost:3000/api/produtos/drinks");
		setDrinks(response.data);
	}

	//busca sucos
	const [sucos, setSucos] = useState();
	async function buscaSucos() {
		const response = await axios.get("http://localhost:3000/api/produtos/sucos");
		setSucos(response.data);
	}

	//busca refrigerantes
	const [refrigerantes, setRefrigerantes] = useState();
	async function buscaRefrigerantes() {
		const response = await axios.get("http://localhost:3000/api/produtos/refrigerantes");
		setRefrigerantes(response.data);
	}

	//busca bebidas em geral
	const [bebidas, setBebidas] = useState();
	async function buscaBebidas() {
		const response = await axios.get("http://localhost:3000/api/produtos/bebidas");
		setBebidas(response.data);
	}

	//busca espetinhos
	const [espetinhos, setEspetinhos] = useState();
	async function buscaEspetinhos() {
		const response = await axios.get("http://localhost:3000/api/produtos/espetinhos");
		setEspetinhos(response.data);
	}

	//busca porções
	const [porcoes, setPorcoes] = useState();
	async function buscaPorcoes() {
		const response = await axios.get("http://localhost:3000/api/produtos/porcoes");
		setPorcoes(response.data);
	}

	useEffect(() => {
		buscaCerveja();
		buscaChopp();
		buscaDrinks();
		buscaSucos();
		buscaRefrigerantes();
		buscaBebidas();
		buscaEspetinhos();
		buscaPorcoes();
	}, []);

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
					{cerveja?.map((i) => (
						<Produto key={i.nome} nome={i.nome} preco={i.preco.toFixed(2)} imagem={`${i.imagem}`} />
					))}
				</div>

				<br />
				<br />

				<h2>Chopp</h2>
				<br />

				<div className="item-container">
					{chopp?.map((i) => (
						<Produto key={i.nome} nome={i.nome} preco={i.preco.toFixed(2)} imagem={`${i.imagem}`} />
					))}
				</div>
				<br />
				<br />

				<h2>Drinks</h2>
				<br />

				<div className="item-container">
					{drinks?.map((i) => (
						<Produto key={i.nome} nome={i.nome} preco={i.preco.toFixed(2)} imagem={`${i.imagem}`} />
					))}
				</div>

				<h2>Sucos</h2>
				<br />

				<div className="item-container">
					{sucos?.map((i) => (
						<Produto key={i.nome} nome={i.nome} preco={i.preco.toFixed(2)} imagem={`${i.imagem}`} />
					))}
				</div>

				<h2>Refrigerantes</h2>
				<br />

				<div className="item-container">
					{refrigerantes?.map((i) => (
						<Produto key={i.nome} nome={i.nome} preco={i.preco.toFixed(2)} imagem={`${i.imagem}`} />
					))}
				</div>

				<h2>Bebidas em Geral</h2>
				<br />

				<div className="item-container">
					{bebidas?.map((i) => (
						<Produto key={i.nome} nome={i.nome} preco={i.preco.toFixed(2)} imagem={`${i.imagem}`} />
					))}
				</div>

				<h2>Espetinhos</h2>
				<br />

				<div className="item-container">
					{espetinhos?.map((i) => (
						<Produto key={i.nome} nome={i.nome} preco={i.preco.toFixed(2)} imagem={`${i.imagem}`} />
					))}
				</div>

				<h2>Porções</h2>
				<br />

				<div className="item-container">
					{porcoes?.map((i) => (
						<Produto key={i.nome} nome={i.nome} preco={i.preco.toFixed(2)} imagem={`${i.imagem}`} />
					))}
				</div>
			</div>

			<br />
		</div>
	);
}

export default Produtos;
