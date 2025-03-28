import './estoque.css'

function Estoque() {
    return ( 

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Categoria</th>
                    <th>Produto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Cerveja</td>
                    <td>Skol</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Cerveja</td>
                    <td>Império</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Destilados</td>
                    <td>Red Label</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Destilados</td>
                    <td>Tanqueray</td>
                </tr>

            </tbody>


        </table>


     );
}

export default Estoque;