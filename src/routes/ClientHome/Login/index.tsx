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
            validation: function (value: string) {
                //return value.length >= 6;
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/.test(value);
            },
            message: "Campo senha com mínimo de 8 caractes e no máximo 30, pelo menos um caracter maiúsculo, um minúsculo e um alfa numérico.",
        }
    })

    const navigate = useNavigate();

    const [submitResponseFormWithFail, setSubmitResponseFormWithFail] = useState(false);

    const { setGlobalContextTokenPayload } = useContext(GlobalContextToken);

    const handleSubmitForm = (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();

        setSubmitResponseFormWithFail(false);
        // se o campo email estiver sujo (email inválido), sai da função e não enviar o form ao backend para testar email e senha no bando de dados    
        const formDataValidatedAfterTurnDiry = inputForms.validateAllFieldsAfterDirtyAllFiedls(formData);
        if (inputForms.hasAnyInvalidFieldAfterValidateAll(formDataValidatedAfterTurnDiry) == true) {
            setFormData(formDataValidatedAfterTurnDiry);
            return;
        }

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
                // se tiver algum erro seta como verdadeiro para renderizar a div de erro
                setSubmitResponseFormWithFail(true);
                //console.log("Errro de Login: " + error);
                //console.log(error);
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
                                <div className='ec-form-error'>{formData.username.message}</div>
                            </div>
                            <div>
                                <CustomFormInput
                                    {...formData.password}
                                    onChange={handleInputOnChange}
                                    onBecameDirty={handleInputBecameDirty}
                                    className="ec-form-input"
                                />
                                <div className='ec-form-error'>{formData.password.message}</div>
                            </div>
                        </div>{
                            submitResponseFormWithFail == true &&
                            <div className="ec-form-global-error">
                                Usuário ou senha inválidos
                            </div>
                        }

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