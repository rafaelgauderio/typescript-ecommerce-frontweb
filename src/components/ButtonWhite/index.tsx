import './styles.css';

type Props = {
    message: string;
};

export default function ButtonWhite({ message }: Props) {

    return (
        <button className="ec-btn ec-btn-voltar">
            {message}
        </button>
    );
}