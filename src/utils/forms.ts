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
// mantém os valores dos campos já preenchidos e atualizados os valores dos 
// campos preenchidos com os newValues

export function updateAllFields(inputs: any, newValues: any) {
    const newInputs: any = {};
    for (const attribute in inputs) {
        newInputs[attribute] = { ...inputs[attribute], value: newValues[attribute] };
    }
    return newInputs;
}

// gerar um novo objeto com o campo "invalid para o campo cuji o nome é "name"
export function validateFields(inputs: any, fieldName: string): any {

    if (inputs[fieldName].validation == undefined) {
        return inputs; // não altera o campo input se não estiver definida a função validation para aquele campo
    }

    const isInvalid: boolean = !inputs[fieldName].validation(inputs[fieldName].value);
    return {
        ...inputs,
        [fieldName]: { ...inputs[fieldName], invalid: isInvalid.toString() }
    };
}