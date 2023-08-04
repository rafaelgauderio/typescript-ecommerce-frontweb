import './styles.css';

type Props = {
    name: string;
};

export default function ProductCategory({name} : Props) {

    return (
        <span className="ec-categories">
            {name}
        </span>

    );
}