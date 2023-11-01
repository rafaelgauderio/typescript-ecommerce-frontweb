import ButtonBlue from "../ButtonBlue";
import ButtonClean from "../ButtonClean";
import ButtonWhite from "../ButtonWhite";

type Props = {
    message: string;
    onDialogAnswer: (arg1: boolean) => void;
}

export default function DialogConfirmationModal({ message, onDialogAnswer }: Props) {

    // se clicar em SIM altera para true o evento, se clicar em NÃO deixa false o evento

    return (
        <div
            className="ec-dialog-background"
            onClick={() => onDialogAnswer(false)}>
            <div
                className="ec-dialog-box"
                onClick={(evento) => evento.stopPropagation()} >
                <h2>{message}</h2>
                <div
                    className="ec-dialog-btn-container">
                    <div onClick={() => onDialogAnswer(true)}>
                        <ButtonClean message={"SIM"}></ButtonClean>
                    </div>
                    <div onClick={() => onDialogAnswer(false)}>
                        <ButtonWhite message={"NÃO"}></ButtonWhite>
                    </div>
                </div>
            </div>
        </div>

    );
}