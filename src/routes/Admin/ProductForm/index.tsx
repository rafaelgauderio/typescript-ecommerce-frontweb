/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import CustomFormInput from "../../../components/CustomFormInput";
import * as inputForms from '../../../utils/forms';
import * as productService from '../../../services/product-services';
import * as categoryService from '../../../services/category-services';
import CustomFormTextArea from "../../../components/CustomFormTextArea";
import { CategoryDTO } from "../../../models/category";
import CustomFormSelect from "../../../components/CustomFormSelect";
import { selectStyles } from "../../../utils/select";


const ProductForm = () => {

    const routeCancelInsertion: string = "/admin/products";

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function (nameValue: string) {
                //return nameValue.length >=5 && nameValue.length <=50;
                return /^.{5,50}$/.test(nameValue);
            },
            message: "Campo nome tem que ter entre 5 e 50 caracteres"
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
            validation: function (priceValue: any) {
                return Number(priceValue) > 0
            },
            message: "Informar um valor positivo para preço do produto"
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem do Produto"
        },
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descrição do Produto",
            validation: function (descriptionValue: string) {
                return /^.{10,800}$/.test(descriptionValue);
            },
            message: "Campo descrição tem que ter entre 10 e 200 caracteres"
        },
        // categorias selecionados no select
        categories: {
            value: [],
            id: "categories",
            name: "categories",
            placeholder: "Categorias do Produto",
            validation: function (categoriesValue: CategoryDTO[]) {
                return categoriesValue.length > 0;
            },
            message: "Produto deve ser vinculado a pelo menos uma categoria"
        },
    });

    //vetor mocado de object do tipo select para categorias
    /*
    const mockCategories = [
        { value: 'computadores', label: "Computadores" },
        { value: "eletronicos", label: "Eletrônicos" },
        { value: "livros", label: "Livros" }
    ];
    */

    const [categories, setCategories] = useState<CategoryDTO[]>([]);

    const parameters = useParams();

    const isEditing = parameters.productId !== 'create';

    const navigate = useNavigate();

    useEffect(() => {
        categoryService.findAllCategoriesRequest()
            .then((response) => {
                setCategories(response.data);
            })
    });

    useEffect(() => {

        /*
        const objeto = inputForms.validateFields(formData, "price");  
        const objeto2 = inputForms.validateFields(formData, "name");       
        console.log(objeto);
        console.log(objeto2);
        */
        // se estiver editando tem que buscar do banco de dados
        if (isEditing === true) {
            productService.findProductById(Number(parameters.productId))
                .then((requestResponse) => {
                    //console.log(requestResponse.data);
                    //console.log(requestResponse.data.name);
                    //console.log(requestResponse.status);
                    //console.log(inputForms.updateAllFields(formData, requestResponse.data));
                    // atualizando os com os valores dos campos do formulario que vieram da requisição do banco de dados                    
                    const newFormDataFromDatabase = inputForms.updateAllFields(formData, requestResponse.data);
                    setFormData(newFormDataFromDatabase);
                })
        }

    }, []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputOnChange = (event: any) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        // atualizando os dados
        //const updateData = inputForms.updateInputFields(formData, inputName, inputValue);
        // validando os dados atualizados
        //const validateData = inputForms.validateFields(updateData, inputName);
        // setando os dados validos e atualizados
        const updatedAndValidatedData = inputForms.updateAndValidateFields(formData, inputName, inputValue);
        setFormData(updatedAndValidatedData);
    };

    const handleInputBecameDirty = (name: string) => {
        const newFormData = inputForms.addFieldDirtyAndValidatedData(formData, name);
        setFormData(newFormData);
    };

    // função para enviar o formulário
    const handleOnSubmit = (event: any): void => {
        event.preventDefault();
        const formDataValidatedAfterTurnDiry = inputForms.validateAllFieldsAfterDirtyAllFiedls(formData);
        if (inputForms.hasAnyInvalidFieldAfterValidateAll(formDataValidatedAfterTurnDiry) == true) {
            setFormData(formDataValidatedAfterTurnDiry);
            return; // sai da função e não envia o formulário
        }
        const requestBody = inputForms.getFieldValueFromInputObject(formData);
        if (isEditing == true) {
            requestBody.id = parameters.productId;
        }
        productService.updateProductById(requestBody)
            .then((requestResponse) => {
                navigate(routeCancelInsertion);
                console.log(requestResponse);
            })
        console.log(requestBody);
    };

    return (
        <main>
            <section id="product-form-section" className="ec-container">
                <div className="ec-product-form-container">
                    <form className="ec-card-general ec-form-general" onSubmit={handleOnSubmit}>
                        <h2>Dados do produto</h2>
                        <div className="ec-form-inputs-container">
                            <div>
                                <CustomFormInput
                                    {...formData.name}
                                    onChange={handleInputOnChange}
                                    onBecameDirty={handleInputBecameDirty}
                                    className="ec-form-input"
                                />
                                <div className="ec-form-error">{formData.name.message}</div>
                            </div>
                            <div>
                                <CustomFormInput
                                    {...formData.price}
                                    onChange={handleInputOnChange}
                                    onBecameDirty={handleInputBecameDirty}
                                    className="ec-form-input"
                                />
                                <div className="ec-form-error">{formData.price.message}</div>
                            </div>
                            <div>
                                <CustomFormInput
                                    {...formData.imgUrl}
                                    onChange={handleInputOnChange}
                                    onBecameDirty={handleInputBecameDirty}
                                    className="ec-form-input"
                                />
                            </div>
                            <div>
                                <CustomFormSelect
                                    {...formData.categories}
                                    className="ec-form-input ec-form-select-container"
                                    options={categories}
                                    styles={selectStyles}
                                    onChange={(objeto: any) => {
                                        const newFormData = inputForms.updateAndValidateFields(formData, "categories", objeto);
                                        // atualizando a lista selecionada
                                        //console.log(newFormData.categories);
                                        setFormData(newFormData);
                                    }}
                                    isMulti
                                    onBecameDirty={handleInputBecameDirty}
                                    getOptionLabel={(objeto: any) => objeto.name}
                                    getOptionValue={(objeto: any) => String(objeto.id)
                                    }

                                />
                                <div className="ec-form-error">{formData.categories.message}</div>
                            </div>
                            <div>
                                <CustomFormTextArea
                                    {...formData.description}
                                    onChange={handleInputOnChange}
                                    onBecameDirty={handleInputBecameDirty}
                                    className="ec-form-input ec-textarea"
                                />
                                <div className="ec-form-error">{formData.description.message}</div>
                            </div>
                        </div>

                        <div className="ec-product-form-buttons">
                            <Link to={routeCancelInsertion}>
                                <button type="reset" className="ec-btn ec-btn-cancel">Cancelar</button>
                            </Link>
                            <button type="submit" className="ec-btn ec-btn-salvar">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default ProductForm;
