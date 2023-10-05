import './styles.css';

const Login = () => {

    return (

        <main>
            <section id="login-section" className="ec-container">
                <div className="ec-login-form-container">
                    <form className="ec-card-general ec-form-general">
                        <h2>Login</h2>
                        <div className="ec-form-inputs-container">
                            <div>
                                <input
                                    className="ec-form-input"
                                    type="text"
                                    placeholder="Email" />

                            </div>
                            <div>
                                <input
                                    className="ec-form-input"
                                    type="password"
                                    placeholder="Senha" />
                            </div>
                        </div>

                        <div className="ec-login-form-buttons ec-margin-bottom-20px">
                            <button type="submit" className="ec-btn ec-btn-entrar">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>

    );
}

export default Login;