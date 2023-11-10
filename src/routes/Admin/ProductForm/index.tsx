import { Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import CustomFormInput from "../../../components/CustomFormInput";
import * as inputForms from '../../../utils/forms';


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
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem do Produto"
        },
    });

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
