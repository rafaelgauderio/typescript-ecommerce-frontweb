import ButtonBlue from "../ButtonBlue";

type Props = {
    message: string;
    onDialogClose: () => void;
}

const DialogInfoModal = ({ message, onDialogClose }: Props) => {

    // se clicar fora da caixa modal também fecha a caixa de diálogo
    // , mas se clicar dentro da caixa da dialogo, não fechar a modal
    return (
        <div className="ec-dialog-background" onClick={onDialogClose}>
            <div className="ec-dialog-box" onClick={(evento) => evento.stopPropagation()} >
                <h2>{message}</h2>
                <div className="ec-dialog-btn-container" onClick={onDialogClose}>
                    <ButtonBlue message={"ok"}></ButtonBlue>
                </div>

            </div>
        </div>
    );

}

export default DialogInfoModal;