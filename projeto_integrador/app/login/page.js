"use client";

import { useState } from "react";
import "./login.css";
import Menu from "../components/Menu";
import axios from "axios";

function Login() {
	const [logar, setLogar] = useState(true);
	const [criarConta, setCriarConta] = useState(false);



	// Cadastro

	const [usuario, setUsuario] = useState("");//usuario
	
	const [email, setEmail] = useState(""); //email e verifica se email estão iguais
	const [confirmaEmail, setConfirmaEmail] = useState("");

	const [senha, setSenha] = useState("");// senha e verifica se as senhas estão iguais
	const [confirmaSenha, setConfirmaSenha] = useState("");

	//

	async function verificaDados(){
		if(usuario == "" || email == "" || confirmaEmail == "" || senha == "" || confirmaSenha == ""){
			alert("Preencha todos os campos")
		} else if(email != confirmaEmail){
			alert("Os emails não são iguais")
		} else if(senha != confirmaSenha){
			alert("As senhas não são iguais")
		} else {
			const obj = {
				nome: usuario,
				email: email,
				senha: senha,
				funcionario: false
			}

			const response = await axios.post("http://localhost:3000/api/login", obj)
			alert("Cadastro realizado com sucesso")
		}
	}

	return (
		<div>
			
			<div>
				{logar == true && (
					<div className="login">
						<h1>LOGIN</h1>

						<label>
							Usuário <br />
						</label>
						<input type="text" placeholder="Usuário"  />

						<br />
						<br />

						<label>
							Senha <br />
						</label>
						<input type="password" placeholder="Senha" />

						<br />
						<br />

						<button className="enter">Entrar</button>
						<button
							className="criarConta"
							onClick={() => {
								setLogar(false);
								setCriarConta(true);
							}}>
							Criar conta
						</button>
					</div>
				)}

				{criarConta == true && (
					<form onSubmit={ (e)=> verificaDados(e) } className="login">
						<h1>Cadastro</h1>

						<label>
							Usuário <br />
						</label>
						<input type="text" placeholder="Usuário" required onChange={ (e)=> setUsuario(e.target.value)}/>

						<br />
						<br />

						<label>
							Email <br />
						</label>
						<input type="email" placeholder="Email" required onChange={ (e)=> setEmail(e.target.value)}/>

						<br />

						<label>
							Confirme seu Email <br />
						</label>
						<input type="email" placeholder="Email" required onChange={ (e)=> setConfirmaEmail(e.target.value)}/>

						<br />
						<br />

						<label>
							Senha <br />
						</label>
						<input type="password" placeholder="Senha" required onChange={ (e)=> setSenha(e.target.value)}/>

						<br />

						<label>
							Confirme a senha <br />
						</label>
						<input type="password" placeholder="Senha" required onChange={ (e)=> setConfirmaSenha(e.target.value)}/>

						<br />
						<br />

						<button className="enter" >Cadastrar</button>
						<button
							className="criarConta"
							onClick={() => {
								setCriarConta(false);
								setLogar(true);
							}}>
							Já tem uma conta? <br /> Entrar
						</button>
					</form>
				)}
			</div>
		</div>
	);
}

export default Login;
