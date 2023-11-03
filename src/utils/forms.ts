export function updateInputFields(inputs: any, name: string, newValue: any) {

    return {
        ...inputs,
        [name]: { ...inputs[name], value: newValue }
    };

}