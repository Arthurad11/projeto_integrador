import "./altfunc.css"

function AlteraCadFunc() {
    return ( 

        <div class="conjunto">

            <h1 class="titulo"> Alterar cadastro de funcionário </h1>
            <p> Nome Completo: </p>
            <input placeholder="Digite seu nome aqui..."/>
            <p> Senha: </p>
            <input placeholder="Digite sua senha..."/>
            <p>Nova Senha: </p>
            <input placeholder="Digite sua nova senha..."/>
            <br/> <br/>
            <button class="botao"> Atualizar </button>

        </div>

     );
}

export default AlteraCadFunc;