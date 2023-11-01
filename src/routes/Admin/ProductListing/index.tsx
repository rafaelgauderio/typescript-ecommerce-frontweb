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
import DialogConfirmationModal from '../../../components/DialogConfirmationModal';

type QueryParameters = {
    page: number;
    name: string;
}

const ProductListing = () => {

    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [dialogInfoModalData, setDialogInfoModalData] = useState({
        visiable: false,
        message: "Operação realizada com sucesso"
    });

    const [dialogConfirmationModalData, setDialogConfirmationModalData] = useState({
        visiable: false,
        message: "Confirma a exclusão do item"
    });

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

    const functionHandleDialogInfoModalClose = () => {
        // sumir com a caixa se a modal emitir o evento de fehcar o componente
        setDialogInfoModalData({ ...dialogInfoModalData, visiable: false })
    }

    const functionHandleDeleteClick = () => {
        setDialogConfirmationModalData({ ...dialogConfirmationModalData, visiable: true })
    }

    const functionHandleEditClick = () => {
        setDialogInfoModalData({ ...dialogConfirmationModalData, visiable: true })
    }

    const functionHandleDialogConfirmationAnswer = (arg: boolean) => {
        console.log("Resposta da caixa de confirmação: " + arg);
        setDialogConfirmationModalData({ ...dialogConfirmationModalData, visiable: false }); // ocultar a janela após responder
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
                                    <td><img className="ec-product-listing-btn" onClick={functionHandleEditClick} src={editIcon} alt="Editar" /></td>
                                    <td><img className="ec-product-listing-btn" onClick={functionHandleDeleteClick} src={deleteIcon} alt="Deletar" /></td>
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
            {
                dialogInfoModalData.visiable == true &&
                <DialogInfoModal
                    message={dialogInfoModalData.message}
                    onDialogClose={functionHandleDialogInfoModalClose} />

            }

            {
                dialogConfirmationModalData.visiable == true &&
                <DialogConfirmationModal
                    message={dialogConfirmationModalData.message}
                    onDialogAnswer={functionHandleDialogConfirmationAnswer} />
            }

        </main>
    );

}

export default ProductListing;

