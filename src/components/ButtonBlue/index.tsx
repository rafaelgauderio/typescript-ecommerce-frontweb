import './styles.css';

type Props = {
    message: string;
};

export default function ButtonBlue( {message} : Props)  {

    return (
        <button className="ec-btn ec-btn-comprar">
            {message}            
        </button>
    );
}