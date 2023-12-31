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
import { useNavigate } from 'react-router-dom';

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
        message: "Tem certeza que deseja realizar essa operação de exclusão/edição",
        id: 0
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [queryParameters, setQueryparameters] = useState<QueryParameters>({
        page: 0,
        name: ""
    });

    const navigate = useNavigate();

    const routeInsertNewProduct: string = "/admin/products/create";
    const routeUpdateExistingProduct: string = ("/admin/products/");

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

    const functionHandleInsertNewProduct = () => {
        navigate(routeInsertNewProduct);

    }

    const functionHandleDialogInfoModalClose = () => {
        // sumir com a caixa se a modal emitir o evento de fehcar o componente
        setDialogInfoModalData({ ...dialogInfoModalData, visiable: false })
    }

    const functionHandleDeleteClick = (productId: number) => {
        setDialogConfirmationModalData({ ...dialogConfirmationModalData, visiable: true, id: productId })
    }

    const functionHandleUpdateClick = (productId: number) => {
        navigate(routeUpdateExistingProduct + `${productId}`);        
    }

    const functionHandleDialogConfirmationAnswer = (arg1: boolean, productId: number) => {
        //console.log("Resposta da caixa de confirmação: " + arg1);
        if (arg1 === true) {
            productService.deleteProductById(productId)
                // após deletar o produto, renderizar a lista novamente
                .then(() => {
                    setProducts([]);
                    setQueryparameters({
                        ...queryParameters,
                        page: 0
                    });
                })
                .catch((erro) => {
                    setDialogInfoModalData({
                        visiable: true,
                        message: erro.response.data.error + ". Não é possível excluir um produto já vinculado a algum um pedido!"
                    })
                })
        }
        setDialogConfirmationModalData({ ...dialogConfirmationModalData, visiable: false }); // ocultar a janela após responder
    }

    return (
        <main>
            <section id="product-listing-section" className="ec-container">
                <h2 className="ec-section-title ec-margin-bottom-20px">Cadastro de produtos</h2>

                <div className="ec-btn-container ec-margin-bottom-20px">
                    <div onClick={functionHandleInsertNewProduct}>
                        <ButtonWhite message="Inserir Novo"></ButtonWhite>
                    </div>
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
                                    <td><img className="ec-product-listing-btn" onClick={() => functionHandleUpdateClick(produto.id)} src={editIcon} alt="Editar" /></td>
                                    <td><img className="ec-product-listing-btn" onClick={() => functionHandleDeleteClick(produto.id)} src={deleteIcon} alt="Deletar" /></td>
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
                    onDialogAnswer={functionHandleDialogConfirmationAnswer}
                    id={dialogConfirmationModalData.id} />
            }

        </main>
    );

}

export default ProductListing;

