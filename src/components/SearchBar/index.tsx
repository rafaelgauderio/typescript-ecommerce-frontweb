import './styles.css';

export default function SearchBar() {

    return (
        <form className="ec-search-bar ec-box-shadow">
            <button type="submit">
                <p>&#128270;</p>
                <span className="ec-search">Pesquisar</span>
            </button>
            <input type="text" placeholder="Nome do eletrônico" />
            <button type="reset">
                <p>&#128473;</p>
                <span className="ec-clean">Limpar</span>
            </button>
        </form>
    );
}
