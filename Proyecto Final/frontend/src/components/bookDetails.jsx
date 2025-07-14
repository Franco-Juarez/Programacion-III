import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/libros/${id}`);
        if (!response.ok) throw new Error("No se pudo cargar el libro");
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setBook(null);
      } finally {
        setLoading(false);
      }
    };
    const fetchComment = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/comentarios/libro/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setComments(data)
          console.log(comments)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchComment();
    fetchBook();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!book) return <div>No se encontró el libro.</div>;


  function verifyStatus(status) {
    if (status === "read") {
      return "Leído";
    } else if (status === "reading") {
      return "Leyendo";
    } else {
      return "No leído";
    }
  }

  return (
    <div>
      <h2>{book.titulo}</h2>
      <p><b>Autor:</b> {book.autor}</p>
      <p><b>Género:</b> {book.genero}</p>
      <p><b>Año de publicación:</b> {book.anioPublicacion}</p>
      <p><b>Estado:</b> {verifyStatus(book.estado)}</p>
      <p><b>Descripción:</b> {book.descripcion}</p>
      <div>
        <h4>Comentarios:</h4>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <p key={comment.id}>· {comment.texto}</p>
          ))
        ) : (
          <p>No hay comentarios</p>
        )}
      </div>
    </div>
  );
};
