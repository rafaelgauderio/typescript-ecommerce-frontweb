import { useEffect, useState } from 'react';
import './styles.css';
import { UserDTO } from '../../../models/user';
import * as userService from '../../../services/user.service';

const AdminHome = () => {

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        userService.findUser()
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch((error) => {
                console.log("Error: " + error);
            })
    }, []);


    return (
        <main>
            <section id="admin-panel-home-section" className="ec-container">
                <h2 className="ec-section-title ec-margin-bottom-20px" >Bem-vindo ao painel do Administrador {user?.name}</h2>
            </section>
        </main>
    )
}

export default AdminHome;


