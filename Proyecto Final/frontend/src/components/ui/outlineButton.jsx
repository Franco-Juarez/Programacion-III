const OutlineButton = ({ onClick, text, width }) => {
    return (
        <button className="outline-button" onClick={onClick} style={{ width: width || 'auto' }}>
            {text}
        </button>
    );
}

export default OutlineButton;