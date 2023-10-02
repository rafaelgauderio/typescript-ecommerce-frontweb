// definir o dado do componente global a função set que altera esse dado
import { createContext } from "react";

// padrão observable : não precisa alterar a página para visualizar a alteração do valor do componente
export type GlobalContextCartNumberType = {
    globalContextCartNumber: number;
    setGlobalContextCartNumber: (globalContextCartNumber: number) => void;
};

export const ContextCartNumber = createContext<GlobalContextCartNumberType>({
    // definir os valores iniciais
    globalContextCartNumber: 0,
    setGlobalContextCartNumber: () => {}
});

