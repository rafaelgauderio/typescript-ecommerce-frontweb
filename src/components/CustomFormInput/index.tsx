// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomFormInput = (props: any) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { validation,
        invalid = "false",
        dirty = "false",
        onTurnDirty,
        ...inputProps
    } = props;

    // renomear o campo invalid para data-invalid
    // evento onBlur é disparado quando é removido o foco no campo
    // no caso ativar a função dirty apenas quando o usuário sair do campo
    function handleBlur() {
        onTurnDirty(props.name);
    }

    return (
        <input
            {...inputProps}
            onBlur={handleBlur}
            data-invalid={invalid}
            data-dirty={dirty}

        ></input>
    );
}

export default CustomFormInput;