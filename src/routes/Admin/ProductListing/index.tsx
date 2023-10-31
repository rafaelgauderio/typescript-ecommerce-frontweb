import './styles.css';
import tabletImage from "../../../assets/tablet.png";
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import ButtonShowMore from '../../../components/ButtonShowMore';
import ButtonWhite from '../../../components/ButtonWhite';

const ProductListing = () => {

    return (
        <main>
            <section id="product-listing-section" className="ec-container">
                <h2 className="ec-section-title ec-margin-bottom-20px">Cadastro de produtos</h2>

                <div className="ec-btn-container ec-margin-bottom-20px">
                    <ButtonWhite message="Inserir Novo"></ButtonWhite>
                </div>

                <form className="ec-search-bar">
                    <button type="submit">🔎︎</button>
                    <input type="text" placeholder="Nome do produto" />
                    <button type="reset">🗙</button>
                </form>

                <table className="ec-table ec-margin-bottom-20px ec-margin-top-20px">
                    <thead>
                        <tr>
                            <th className="ec-table-bootstrap-576px">ID</th>
                            <th></th>
                            <th className="ec-table-bootstrap-576px">Preço</th>
                            <th className="ec-txt-left">Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="ec-table-bootstrap-576px">1712</td>
                            <td><img className="ec-product-listing-image" src={tabletImage} alt="Computer" /> </td>
                            <td className="ec-table-bootstrap-576px">R$ 2400,00</td>
                            <td className="ec-txt-left">Tablet Sansung</td>
                            <td><img className="ec-product-listing-btn" src={editIcon} alt="Editar" /></td>
                            <td><img className="ec-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                        </tr>
                        <tr>
                            <td className="ec-table-bootstrap-576px">1712</td>
                            <td><img className="ec-product-listing-image" src={tabletImage} alt="Computer" /> </td>
                            <td className="ec-table-bootstrap-576px">R$ 2400,00</td>
                            <td className="ec-txt-left">Tablet Sansung</td>
                            <td><img className="ec-product-listing-btn" src={editIcon} alt="Editar" /></td>
                            <td><img className="ec-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                        </tr>
                        <tr>
                            <td className="ec-table-bootstrap-576px">1712</td>
                            <td><img className="ec-product-listing-image" src={tabletImage} alt="Computer" /> </td>
                            <td className="ec-table-bootstrap-576px">R$ 2400,00</td>
                            <td className="ec-txt-left">Tablet Sansung</td>
                            <td><img className="ec-product-listing-btn" src={editIcon} alt="Editar" /></td>
                            <td><img className="ec-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                        </tr>

                    </tbody>
                </table>

                <div><ButtonShowMore>
                </ButtonShowMore></div>
            </section>
        </main>
    );

}

export default ProductListing;