import './styles.css';
import tabletImage from "../../../assets/tablet.png";
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";

const ProductListing = () => {

    return (
        <main>
            <section id="product-listing-section" className="ec-container">
                <h2 className="ec-section-title ec-mb20">Cadastro de produtos</h2>

                <div className="ec-btn-page-container ec-mb20">
                    <div className="ec-btn ec-btn-white">Novo</div>
                </div>

                <form className="ec-search-bar">
                    <button type="submit">🔎︎</button>
                    <input type="text" placeholder="Nome do produto" />
                    <button type="reset">🗙</button>
                </form>

                <table className="ec-table ec-mb20 ec-mt20">
                    <thead>
                        <tr>
                            <th className="ec-tb576">ID</th>
                            <th></th>
                            <th className="ec-tb768">Preço</th>
                            <th className="ec-txt-left">Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="ec-tb576">1712</td>
                            <td><img className="ec-product-listing-image" src={tabletImage} alt="Computer" /> </td>
                            <td className="ec-tb768">R$ 2400,00</td>
                            <td className="ec-txt-left">Tablet Sansung</td>
                            <td><img className="ec-product-listing-btn" src={editIcon} alt="Editar" /></td>
                            <td><img className="ec-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                        </tr>
                        <tr>
                            <td className="ec-tb576">1712</td>
                            <td><img className="ec-product-listing-image" src={tabletImage} alt="Computer" /> </td>
                            <td className="ec-tb768">R$ 2400,00</td>
                            <td className="ec-txt-left">Tablet Sansung</td>
                            <td><img className="ec-product-listing-btn" src={editIcon} alt="Editar" /></td>
                            <td><img className="ec-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                        </tr>
                        <tr>
                            <td className="ec-tb576">1712</td>
                            <td><img className="ec-product-listing-image" src={tabletImage} alt="Computer" /> </td>
                            <td className="ec-tb768">R$ 2400,00</td>
                            <td className="ec-txt-left">Tablet Sansung</td>
                            <td><img className="ec-product-listing-btn" src={editIcon} alt="Editar" /></td>
                            <td><img className="ec-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                        </tr>

                    </tbody>
                </table>

                <div className="ec-btn-next-page">Carregar mais</div>
            </section>
        </main>
    );

}

export default ProductListing;