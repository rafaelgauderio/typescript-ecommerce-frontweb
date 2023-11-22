import Select from "react-select";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomFormSelect = (props: any) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { validation,
        invalid = "false",
        dirty = "false",
        onBecameDirty,
        ...selectProps
    } = props;
  
    function handleBlur() {
        onBecameDirty(props.name);
    }

    return (
        <Select
            {...selectProps}
            onBlur={handleBlur}
            data-invalid={invalid}
            data-dirty={dirty}

        ></Select>
    );
}

export default CustomFormSelect;