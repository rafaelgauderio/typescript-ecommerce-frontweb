import './styles.css';
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import ButtonShowMore from '../../../components/ButtonShowMore';
import ButtonWhite from '../../../components/ButtonWhite';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-services';
import SearchBar from '../../../components/SearchBar';
import DialogInfoModal from '../../../components/DialogInfoModal';

type QueryParameters = {
    page: number;
    name: string;
}

const ProductListing = () => {

    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [queryParameters, setQueryparameters] = useState<QueryParameters>({
        page: 0,
        name: ""
    });

    useEffect(() => {

        productService.findAllPageRequest(queryParameters.page, queryParameters.name)
            .then((requestPromiseResponse) => {
                const nextPage = requestPromiseResponse.data.content;
                setProducts(products.concat(nextPage));
                setIsLastPage(requestPromiseResponse.data.last);
            });

    }, [queryParameters]);

    const handleNextPageOnClick = () => {
        setQueryparameters({
            ...queryParameters,
            page: queryParameters.page + 1
        });
    }

    const handleSearchBar = (searchBarText: string) => {
        setProducts([]); // zerar a buscar
        setQueryparameters({
            ...queryParameters,
            page: 0,
            name: searchBarText
        })
    }

    return (
        <main>
            <section id="product-listing-section" className="ec-container">
                <h2 className="ec-section-title ec-margin-bottom-20px">Cadastro de produtos</h2>

                <div className="ec-btn-container ec-margin-bottom-20px">
                    <ButtonWhite message="Inserir Novo"></ButtonWhite>
                </div>

                <SearchBar eventOnSearch={handleSearchBar}></SearchBar>

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
                        {
                            products.map((produto) => (
                                <tr key={produto.id}>
                                    <td className="ec-table-bootstrap-576px">{produto.id}</td>
                                    <td><img className="ec-product-listing-image" src={produto.imgUrl} alt={produto.name} /> </td>
                                    <td className="ec-table-bootstrap-576px">R$ {produto.price.toFixed(2)}</td>
                                    <td className="ec-txt-left">{produto.name}</td>
                                    <td><img className="ec-product-listing-btn" src={editIcon} alt="Editar" /></td>
                                    <td><img className="ec-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {
                    isLastPage === false &&
                    <div onClick={handleNextPageOnClick}>
                        <ButtonShowMore />
                    </div>
                }
            </section>
            <DialogInfoModal></DialogInfoModal>
        </main>
    );

}

export default ProductListing;

