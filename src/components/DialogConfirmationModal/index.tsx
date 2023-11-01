import ButtonClean from "../ButtonClean";
import ButtonWhite from "../ButtonWhite";

type Props = {
    message: string;
    onDialogAnswer: (answer: boolean, productId: number) => void;
    id: number;
}

export default function DialogConfirmationModal({ message, onDialogAnswer, id }: Props) {

    // se clicar em SIM altera para true o evento, se clicar em NÃO deixa false o evento

    return (
        <div
            className="ec-dialog-background"
            onClick={() => onDialogAnswer(false, id)}>
            <div
                className="ec-dialog-box"
                onClick={(evento) => evento.stopPropagation()} >
                <h2>{message}</h2>
                <div
                    className="ec-dialog-btn-container">
                    <div onClick={() => onDialogAnswer(true, id)}>
                        <ButtonClean message={"SIM"}></ButtonClean>
                    </div>
                    <div onClick={() => onDialogAnswer(false, id)}>
                        <ButtonWhite message={"NÃO"}></ButtonWhite>
                    </div>
                </div>
            </div>
        </div>

    );
}