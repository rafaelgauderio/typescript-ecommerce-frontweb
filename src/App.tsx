import './App.css'
import computerImg from './assets/computer.png';
import cartImg from './assets/cart.svg';

function App() {

  return (
    <>
      <header className="ec-header-client">
        <nav className="ec-container">
          <h1>Eletronics Ecommerce</h1>
          <div className="ec-navbar-header-right">
            <div className="ec-menu-items-container">
              <div className="ec-menu-item">
                <img src={cartImg} alt="Carrinho de compras" />
              </div>
            </div>
            <a href="logar">Entrar</a>
          </div>
        </nav>
      </header>
      <main>
        <section id="product-details-section" className="ec-container">
          <div className="ec-card-general ec-margin-bottom-20px">
            <div className="ec-product-details-top">
              <img src={computerImg} alt="computador" />
            </div>
            <div className="ec-product-details-bottom ec-line-top">
              <h3>R$ 2500,99</h3>
              <h4>Computador Desktop Intel i5</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cumque autem porro reprehenderit dicta eveniet quam maiores explicabo asperiores pariatur doloremque dolores dolorem quis quas reiciendis provident voluptatibus eos, veritatis corrupti sint assumenda. Magni accusantium dolorem vel, repellendus impedit labore debitis adipisci voluptatem est, tenetur delectus expedita, inventore qui! Labore similique iure odio architecto, delectus rem quidem fugit quis veritatis ad incidunt cum asperiores eos impedit omnis ipsa saepe dolore sapiente ex, minus consequatur, velit doloribus. Rerum rem id quibusdam quidem ducimus accusamus repudiandae culpa! Unde, vel perferendis ullam reiciendis sed consectetur sunt architecto id ad expedita et. Perspiciatis, corporis.</p>
              <div className="ec-categories-container">
                <span className="ec-categories">Computadores</span>
                <span className="ec-categories">Eletrônicos</span>
              </div>
            </div>
          </div>
          <div className="ec-btn-container">
            <button className="ec-btn ec-btn-comprar">Comprar</button>
            <button className="ec-btn ec-btn-voltar">Voltar</button>
          </div>
        </section>
      </main>
    </>
  );

}

export default App
