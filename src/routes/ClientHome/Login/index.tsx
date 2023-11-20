import { useState } from 'react';
import './styles.css';
import * as authenticationService from '../../../services/authentication-service';
import { useNavigate } from 'react-router-dom';
import { GlobalContextToken } from '../../../utils/global-context-token';
import { useContext } from 'react';
import CustomFormInput from '../../../components/CustomFormInput';
import * as inputForms from '../../../utils/forms';

const Login = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    const navigate = useNavigate();

    const { setGlobalContextTokenPayload } = useContext(GlobalContextToken);

    const handleSubmitForm = (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();
        //console.log(inputForms.getFieldValueFromInputObject(formData));
        authenticationService.loginRequest(
            inputForms.getFieldValueFromInputObject(formData)
        )
            .then(response => {
                //salvar o token
                authenticationService.saveAccessToken(response.data.access_token);
                // atualizar o contexto do payload do local storage
                setGlobalContextTokenPayload(authenticationService.getAccessTokenPayload());
                // ir para o carrinho após o login
                navigate("/cart");
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
        const updatedAndValidatedData = inputForms.updateAndValidateFields(formData, inputName, inputValue);
        setFormData(updatedAndValidatedData);
    };

    const handleInputBecameDirty = (name: string) => {
        const newFormData = inputForms.addFieldDirtyAndValidatedData(formData, name);
        setFormData(newFormData);
    };
    return (

        <main>
            <section id="login-section" className="ec-container">
                <div className="ec-login-form-container" onSubmit={handleSubmitForm}>
                    <form className="ec-card-general ec-form-general">
                        <h2>Login</h2>
                        <div className="ec-form-inputs-container">
                            <div>
                                <CustomFormInput
                                    {...formData.username}
                                    onChange={handleInputOnChange}
                                    onBecameDirty={handleInputBecameDirty}  
                                    className="ec-form-input"
                                />
                            </div>
                            <div>
                                <CustomFormInput
                                    {...formData.password}
                                    onChange={handleInputOnChange}
                                    onBecameDirty={handleInputBecameDirty}                                    
                                    className="ec-form-input"
                                />
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