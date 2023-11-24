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

export function addFieldDirty(inputs: any, fieldName: string) {
    return {
        ...inputs, [fieldName]: { ...inputs[fieldName], dirty: "true" }
    };
}

export function updateAndValidateFields(inputs: any, fieldName: string, newValue: any) {
    const updatedData = updateInputFields(inputs, fieldName, newValue);
    const validatedData = validateFields(updatedData, fieldName);
    return validatedData
}

export function addFieldDirtyAndValidatedData(inputs: any, fieldName: string) {
    const dirtyData = addFieldDirty(inputs, fieldName);
    const validatedData = validateFields(dirtyData, fieldName);
    return validatedData;
}

export function turnAllFieldsDirty(inputs: any): any {
    const newDirtyInputs: any = {};
    for (const fieldName in inputs) {
        newDirtyInputs[fieldName] = {
            ...inputs[fieldName], dirty: "true"
        };
    }
    return newDirtyInputs;
}

export function validateAllFields(inputs: any): any {
    const newValidadeInputs: any = {};
    for (const fieldName in inputs) {
        if (inputs[fieldName].validation != undefined) {
            // verifica se o valor do input no campo fieldname é valido
            const isFieldInvalid: boolean = !inputs[fieldName].validation(inputs[fieldName].value);
            // adiciona o valor invalid ao novo objeto
            newValidadeInputs[fieldName] = { ...inputs[fieldName], invalid: isFieldInvalid.toString() };
        } else {
            // senão estiver definido o campo validation, o novo objeto vai ser o objeto inputs anterior sem alterar nada
            newValidadeInputs[fieldName] = {
                ...inputs[fieldName]
            }
        }
    }
    return newValidadeInputs;
}

export function validateAllFieldsAfterDirtyAllFiedls(inputs: any): any {
    // validar os campos após adicionar o campo dirty = true deles
    const inputsValidateAfterDirty: any = validateAllFields(turnAllFieldsDirty(inputs));
    return inputsValidateAfterDirty;
}

// após fazer a validação depois de sujar (adicionar field dirty: true), tem que testar se ainda resta algum 
// campo inválido antes de enviar o formulário

export function hasAnyInvalidFieldAfterValidateAll(inputs: any): any {
    for (const fieldName in inputs) {
        if (inputs[fieldName].invalid === "true" && inputs[fieldName].dirty === "true") {
            return true;
        }
    }
    return false;
}
