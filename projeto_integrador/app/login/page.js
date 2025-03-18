"use client";

import { useState } from "react";
import "./login.css";
import Menu from "../components/Menu";

function Login() {
	const [logar, setLogar] = useState(true);
	const [criarConta, setCriarConta] = useState(false);

	return (
		<div>
			
			<div>
				{logar == true && (
					<div className="login">
						<h1>LOGIN</h1>

						<label>
							Usuário <br />
						</label>
						<input type="text" placeholder="Usuário" />

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
					<div className="login">
						<h1>Cadastro</h1>

						<label>
							Usuário <br />
						</label>
						<input type="text" placeholder="Usuário" required />

						<br />
						<br />

						<label>
							Email <br />
						</label>
						<input type="email" placeholder="Usuário" required />

						<br />

						<label>
							Confirme seu Email <br />
						</label>
						<input type="email" placeholder="Usuário" required />

						<br />
						<br />

						<label>
							Senha <br />
						</label>
						<input type="password" placeholder="Senha" required />

						<br />

						<label>
							Confirme a senha <br />
						</label>
						<input type="password" placeholder="Senha" required />

						<br />
						<br />

						<button className="enter">Cadastrar</button>
						<button
							className="criarConta"
							onClick={() => {
								setCriarConta(false);
								setLogar(true);
							}}>
							Já tem uma conta? <br /> Entrar
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Login;
