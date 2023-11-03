const CustomFormInput = (props: any) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { validation,...inputProps } = props;

    return (
        <input
            {...inputProps}
        ></input>
    );
}

export default CustomFormInput;