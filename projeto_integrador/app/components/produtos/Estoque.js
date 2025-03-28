import './estoque.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Estoque() {
    
    return ( 

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Categoria</th>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th className='remover'>Remover</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Cerveja</td>
                    <td>Skol</td>
                    <td>R$ 4,00</td>
                    <td className='botaoremover'>
                    <button className='botaolixeira'>
                        <img width={20} src='iconelixeira.png'/>
                    </button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Cerveja</td>
                    <td>Império</td>
                    <td>R$ 5,00</td>
                    <td className='botaoremover'>
                    <button className='botaolixeira'>
                        <img width={20} src='iconelixeira.png'/>
                    </button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Destilados</td>
                    <td>Red Label</td>
                    <td>R$ 90,00</td>
                    <td className='botaoremover'>
                    <button className='botaolixeira'>
                        <img width={20} src='iconelixeira.png'/>
                    </button>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Destilados</td>
                    <td>Tanqueray</td>
                    <td>R$ 100,00</td>
                    <td className='botaoremover'>
                    <button className='botaolixeira'>
                        <img width={20} src='iconelixeira.png'/>
                    </button>
                    </td>
                </tr>
              
            </tbody>


        </table>


     );
}

export default Estoque;