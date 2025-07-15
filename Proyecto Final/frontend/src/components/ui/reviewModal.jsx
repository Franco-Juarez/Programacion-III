import { useState } from "react";

const ReviewModal = ({ libroId, reviewModal, onClose }) => {
    const [comentario, setComentario] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:3001/api/comentarios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ texto: comentario, libroId }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error del backend:", errorData);
                throw new Error(errorData.message || "Error al enviar el comentario");
            }
            alert("Reseña guardada correctamente");
            setComentario("");
            onClose();
        } catch (err) {
            console.error(err)
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!reviewModal) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h4>Escribí un comentario</h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="comentario">Comentario</label>
                    <textarea
                        id="comentario"
                        name="comentario"
                        placeholder="Escribí tu comentario"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        required
                        maxLength={200}
                        rows={4}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Enviando..." : "Enviar"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;