/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import CustomFormInput from "../../../components/CustomFormInput";
import * as inputForms from '../../../utils/forms';
import * as productService from '../../../services/product-services';
import CustomFormTextArea from "../../../components/CustomFormTextArea";


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
                return /^.{10,200}$/.test(descriptionValue);
            },
            message: "Campo descrição tem que ter entre 10 e 200 caracteres"
        }
    });

    const parameters = useParams();

    const isEditing = parameters.productId !== 'create';

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
                            {/*
                            <div>
                                <select className="ec-form-input ec-select" required>
                                    <option value="" disabled selected>Categorias</option>
                                    <option value="1">Valor 1</option>
                                    <option value="2">Valor 2</option>
                                </select>
                            </div>
    */}
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
