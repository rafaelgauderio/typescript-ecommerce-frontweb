import HeaderClient from '../../components/headerClient';
import tableImg from '../../assets/tablet.png';
import './styles.css';
import SearchBar from '../../components/SearchBar';

const ProductCatalog = () => {
    return (
        <>
            <HeaderClient></HeaderClient>
            <main>
                <section id="catalog-details-section" className="ec-container">    
                <SearchBar ></SearchBar>              
                    <div className="ec-catalog-cards ec-margin-top-20px ec-margin-bottom-20px">
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>
                                    Tablet Sansung - Processor core i5 - 16 giga de memória ram.</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>Tablet Sansung</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>Tablet Sansung</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>Tablet Sansung</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>Tablet Sansung</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>Tablet Sansung</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>Tablet Sansung</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>Tablet Sansung</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>Tablet Sansung</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>Tablet Sansung</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                        <div className="ec-card-general">
                            <div className="ec-catalog-card-top ec-line-bottom">
                                <img src={tableImg} alt="table" />
                            </div>
                            <div className="ec-catalog-card-bottom">
                                <h4>Tablet Sansung</h4>
                                <h3>R$ 4.500,00</h3>
                            </div>
                        </div>
                    </div>
                    <button className="ec-btn ec-btn-show-more">Mostrar mais</button>
                </section>
            </main>
        </>
    );

}

export default ProductCatalog;