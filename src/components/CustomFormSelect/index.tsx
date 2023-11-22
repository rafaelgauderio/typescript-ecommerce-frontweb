import Select from "react-select";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomFormSelect = (props: any) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
        validation,
        className,
        invalid = "false",
        dirty = "false",
        onBecameDirty,
        ...selectProps
    } = props;

    function handleBlur() {
        onBecameDirty(props.name);
    }

    return (
        <div
            data-invalid={invalid}
            data-dirty={dirty}
            className={className}
        >
            <Select
                {...selectProps}
                onBlur={handleBlur}
            />
        </div>

    );
}

export default CustomFormSelect;