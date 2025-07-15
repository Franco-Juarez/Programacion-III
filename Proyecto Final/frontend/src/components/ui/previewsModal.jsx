import { useEffect, useState } from "react";

const PreviewsModal = ({ libroId, open, onClose }) => {
    const [comentarios, setComentarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (open) {
            const fetchComentarios = async () => {
                setLoading(true);
                try {
                  const res = await fetch(`http://localhost:3001/api/comentarios/libro/${libroId}`);
                  const data = await res.json();
                  setComentarios(data);
                } catch (error) {
                  console.error("Error al cargar comentarios:", error);
                  setComentarios([]);
                } finally {
                  setLoading(false);
                }
              };
              fetchComentarios();
        }
    }, [libroId, open]);

    if (!open) return null;
    return (
        <div className="modal-overlay">
           <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h4>Reseñas</h4>
                {loading ? (
                <p>Cargando...</p>
                ) : (
                comentarios.length > 0 ? (
                    <ul>
                    {comentarios.map((comentario) => (
                        <li key={comentario.id}>
                        {comentario.texto}
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p>Todavía no hay reseñas.</p>
                )
                )}
            </div>
        </div>
    );
};

export default PreviewsModal;