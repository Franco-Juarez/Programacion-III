import { set } from "lodash";

export const EditBookModal = ({ onClose, editingBook, setEditingBook, onSave, isOpen }) => {

    if (!isOpen || !editingBook) {
        return null;
    }
    const handleChange = (field, value) => {
        if (field === "estado" && value === "read") {
            setEditingBook({
                ...editingBook,
                [field]: value,
                calificacion: 0
            })
        } else {
            setEditingBook({
                ...editingBook,
                [field]: value
            });
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Editar libro</h2>
                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input id="titulo" value={editingBook.titulo} onChange={(e) => handleChange('titulo', e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="autor">Autor</label>
                    <input id="author" value={editingBook.autor} onChange={(e) => handleChange('autor', e.target.value)} />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="anioPublicacion">Año de Publicación</label>
                        <input id="anioPublicacion" type="number" value={editingBook.anioPublicacion} onChange={(e) => handleChange('anioPublicacion', e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="genero">Género</label>
                        <input id="genero" value={editingBook.genero} onChange={(e) => handleChange('genero', e.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea id="descripcion" value={editingBook.descripcion} onChange={(e) => handleChange('descripcion', e.target.value)} rows={4} />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="estado">Estado</label>
                        <select id="estado" value={editingBook.estado} onChange={(e) => handleChange('estado', e.target.value)}>
                            <option value="read">Leído</option>
                            <option value="reading">Leyendo</option>
                            <option value="unread">No leído</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="calificacion">Calificación</label>
                        <select id="calificacion" value={editingBook.calificacion} disabled={editingBook.estado === "unread"} onChange={(e) => handleChange('calificacion', e.target.value)}>
                            <option value="0">0 estrellas</option>
                            <option value="1">1 estrella</option>
                            <option value="2">2 estrellas</option>
                            <option value="3">3 estrellas</option>
                            <option value="4">4 estrellas</option>
                            <option value="5">5 estrellas</option>

                        </select>
                    </div>
                </div>
                <div className="modal-actions">
                    <button className="cancel" onClick={onClose}>Cancelar</button>
                    <button className="save" onClick={onSave}>Guardar libro</button>
                </div>
            </div>
        </div>
    )
}

export default EditBookModal