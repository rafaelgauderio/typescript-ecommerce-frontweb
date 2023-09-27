import { useState } from 'react';
import './styles.css';

type Args = {
    eventOnSearch: Function;
}



export default function SearchBar({ eventOnSearch }: Args) {

    const [textSearchBar, setTextSearchBar] = useState("");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(event: any) {
        event.preventDefault();
        eventOnSearch(textSearchBar);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleChangeInput(event: any) {
        setTextSearchBar(event.target.value);
    }

    // limpar o campo input do formulario (fazer a busca com um string vazia e retornar todos os produtos)
    function handleResetClick() {
        setTextSearchBar("");
        eventOnSearch(textSearchBar); // refazer a busca com o texto como sendo um string vazia
    }


    // use effect fica escutando o estado do handleSearchBar e reage as alterações

    return (
        <form className="ec-search-bar ec-box-shadow" onSubmit={handleSubmit}>
            <button type="submit">
                <p>&#128270;</p>
                <span className="ec-search">Pesquisar</span>
            </button>
            <input
                type="text"
                value={textSearchBar}
                onChange={handleChangeInput} // tem que ter esse evento para permitir digitar no input
                placeholder="Nome do eletrônico" />
            <button
                // type="reset"
                onClick={handleResetClick}>
                <p>&#128473;</p>
                <span className="ec-clean">Limpar</span>
            </button>
        </form>
    );
}
