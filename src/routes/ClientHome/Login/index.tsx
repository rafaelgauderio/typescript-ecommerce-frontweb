import { useState } from 'react';
import './styles.css';
import { CredentialsDTO } from '../../../models/authentication';
import * as authenticationService from '../../../services/authentication-service';

const Login = () => {

    const [formData, setFormData] = useState<CredentialsDTO>({
        // valores iniciais
        username: '',
        password: ''
    });

    const handleSubmitForm = (event: any) => {
        event.preventDefault();
        authenticationService.loginRequest(formData)
            .then(response => {
                authenticationService.saveAccessToken(response.data.access_token);
                //console.log(response.data);
                //console.log(authenticationService.getAccessTokenPayload());
                //console.log(authenticationService.getAccessTokenPayload()?.user_name);
                //console.log(authenticationService.getAccessTokenPayload()?.scope);
            })
            .catch(error => {
                console.log("Login error: " + error);
            })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputOnChange = (event: any) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setFormData({
            ...formData,
            [inputName]: inputValue
        })
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
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputOnChange}
                                    className="ec-form-input"
                                    type="text"
                                    placeholder="Email" />

                            </div>
                            <div>
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputOnChange}
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