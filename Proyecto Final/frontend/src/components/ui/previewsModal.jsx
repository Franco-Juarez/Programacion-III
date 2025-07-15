import { useEffect, useState } from "react";

const PreviewsModal = ({ libroId, open, onClose }) => {
    const [comentarios, setComentarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (open) {
            fetch(`http://localhost:3001/api/comentarios/libro/${libroId}`)
                .then(res => res.json())
                .then(data => {
                    setComentarios(data);
                    setLoading(false);
                });
        }
    }, [libroId, open]);

    if (!open) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h4>Reseñas</h4>
                {loading ? <p>Cargando...</p> : (
                    comentarios.length > 0 ? comentarios.map((c, i) => (
                        <div key={i}><strong>{c.usuario || "Anónimo"}:</strong> {c.texto}</div>
                    )) : <p>Todavía no hay reseñas.</p>
                )}
            </div>
        </div>
    );
};

export default PreviewsModal;