// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomFormTextArea = (props: any) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { validation,
        invalid = "false",
        dirty = "false",
        onBecameDirty,
        ...textAreaProps
    } = props;


    function handleBlur() {
        onBecameDirty(props.name);
    }

    return (
        <textarea
            {...textAreaProps}
            onBlur={handleBlur}
            data-invalid={invalid}
            data-dirty={dirty}

        ></textarea>
    );
}

export default CustomFormTextArea;