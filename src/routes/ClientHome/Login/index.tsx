import { useState } from 'react';
import { loginRequest } from '../../../services/authentication';
import './styles.css';

const Login = () => {

    const [formData, setFormData] = useState<CredentialDTO>({
        // valores iniciais
        username: '',
        password: ''
    });

    const handleSubmitForm = (event: any) => {
        event.preventDefault();
        loginRequest(formData);
    }

    return (

        <main>
            <section id="login-section" className="ec-container">
                <div className="ec-login-form-container" onSubmit={handleSubmitForm}>
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