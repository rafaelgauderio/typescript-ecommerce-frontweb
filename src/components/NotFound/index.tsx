import './styles.css';

const NotFound = () => {
    return (

        <main style={{
            padding: "1rem 1rem",
            margin: "20px",
            border: "1px solid black",
            borderRadius: "10px",
            fontFamily: "Arial",
            minHeight: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div className="ec-card-general">
                <h1>400</h1>
                <h2>Page do not fount</h2>
            </div>
        </main>
    );
};

export default NotFound;
