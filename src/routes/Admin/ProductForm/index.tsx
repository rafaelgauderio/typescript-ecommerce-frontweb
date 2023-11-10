import { Link, useParams } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import CustomFormInput from "../../../components/CustomFormInput";
import * as inputForms from '../../../utils/forms';
import * as productService from '../../../services/product-services';


const ProductForm = () => {

    const routeCancelInsertion: string = "/admin/products";

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placehodler: "Preço",
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
    });

    const parameters = useParams();

    const isEditing = parameters.productId !== 'create';

    useEffect(() => {

        const objeto = inputForms.validateFields(formData, "price");  
        const objeto2 = inputForms.validateFields(formData, "name");       
        console.log(objeto);
        console.log(objeto2);

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

    const handleInputOnChange = (event: any) => {

        const inputName = event.target.name;
        const inputValue = event.target.value;
        setFormData(inputForms.updateInputFields(
            formData, inputName, inputValue
        ))
    };

    return (
        <main>
            <section id="product-form-section" className="ec-container">
                <div className="ec-product-form-container">
                    <form className="ec-card-general ec-form-general">
                        <h2>Dados do produto</h2>
                        <div className="ec-form-inputs-container">
                            <div>
                                <CustomFormInput
                                    {...formData.name}
                                    onChange={handleInputOnChange}
                                    className="ec-form-input"
                                />
                            </div>
                            <div>
                                <CustomFormInput
                                    {...formData.price}
                                    onChange={handleInputOnChange}
                                    className="ec-form-input"

                                />
                            </div>
                            <div>
                                <CustomFormInput
                                    {...formData.imgUrl}
                                    onChange={handleInputOnChange}
                                    className="ec-form-input"
                                />
                            </div>
                            {/*
                            <div>
                                <select className="ec-form-input ec-select" required>
                                    <option value="" disabled selected>Categorias</option>
                                    <option value="1">Valor 1</option>
                                    <option value="2">Valor 2</option>
                                </select>
                            </div>
                            <div>
                                <textarea className="ec-form-input ec-textarea" placeholder="Descrição"></textarea>
                            </div> */}
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
