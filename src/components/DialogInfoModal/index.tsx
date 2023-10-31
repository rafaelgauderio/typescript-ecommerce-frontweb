import ButtonBlue from "../ButtonBlue";

const DialogInfoModal = () => {

    return (
        <div className="ec-dialog-background">
            <div className="ec-dialog-box">
                <h2>Operação realizada com sucesso.</h2>
                <ButtonBlue message={"ok"}></ButtonBlue>
            </div>
        </div>
    );

}

export default DialogInfoModal;