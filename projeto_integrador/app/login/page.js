'use client'

import "./login.css"

function Login() {
    return ( 
    <div className="login">   
        <h1>LOGIN</h1>

        <label for="">Usuário <br/></label>
        <input type="text" placeholder="Usuário"/>

        <br/>
        <br/>

        <label for="">Senha <br/></label>
        <input type="password" placeholder="Senha"/>

        <br/>
        <br/>

        <button>Entrar</button>

    </div>
    );
}

export default Login;