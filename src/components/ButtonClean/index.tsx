import './styles.css';

type Props = {
    message: string;
};

export default function ButtonClean( {message} : Props)  {

    return (
        <button className="ec-btn ec-btn-clean">
            {message}            
        </button>
    );
}