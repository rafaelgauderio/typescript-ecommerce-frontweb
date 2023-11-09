import { Link } from "react-router-dom";
import "./styles.css";


const ProductForm = () => {

    const routeCancelInsertion: string = "/admin/products";

    return (
        <main>
            <section id="product-form-section" className="ec-container">
                <div className="ec-product-form-container">
                    <form className="ec-card-general ec-form-general">
                        <h2>Dados do produto</h2>
                        <div className="ec-form-inputs-container">
                            <div>
                                <input className="ec-form-input" type="text" placeholder="Nome"></input>
                            </div>
                            <div>
                                <input className="ec-form-input" type="text" placeholder="Preço"></input>
                            </div>
                            <div>
                                <input className="ec-form-input" type="text" placeholder="Imagem"></input>
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
                            </div>
    */}
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
