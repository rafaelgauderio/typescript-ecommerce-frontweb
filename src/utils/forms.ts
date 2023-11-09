/* eslint-disable @typescript-eslint/no-explicit-any */
export function updateInputFields(inputs: any, name: string, newValue: any) {

    return {
        ...inputs,
        [name]: { ...inputs[name], value: newValue }
    };

}


export function getFieldValueFromInputObject(inputs: any) {
    const objectData: any = {};
    // percorrer todos os atributos do objeto e pegar apenas o value
    for (const attribute in inputs) {
        objectData[attribute] = inputs[attribute].value;
    }

    return objectData;
}