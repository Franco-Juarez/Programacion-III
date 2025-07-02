const OutlineButton = ({ onClick, text }) => {
    return (
        <button className="outline-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default OutlineButton;