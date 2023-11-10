const CustomFormInput = (props: any) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { validation, invalid, ...inputProps } = props;

    // renomear o campo invalid para data-invalid
    return (
        <input
            {...inputProps} data-invalid={invalid}
        ></input>
    );
}

export default CustomFormInput;