import './cadfunc.css'

function Cadastro() {
    return ( 
        
        <div className="conjunto">

        <h1 className="titulo"> Alterar cadastro de funcionário </h1>
        <p> Nome Completo: </p>
        <input placeholder="Digite seu nome aqui..."/>
        <p> Senha: </p>
        <input placeholder="Digite sua senha..."/>
        <p>Nova Senha: </p>
        <input placeholder="Digite sua nova senha..."/>
        <br/> <br/>
        <button className="botao"> Atualizar </button>

    </div>
     );
}

export default Cadastro;