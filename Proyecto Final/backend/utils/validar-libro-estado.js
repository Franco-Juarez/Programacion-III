const CustomError = require("./custom-error");

function validarLibroEstado(libro) {
    // Verificar si el libro está leído o en proceso de lectura
    if (libro.estado !== 'read' && libro.estado !== 'reading') {
        throw new CustomError("El libro debe estar leído o en proceso de lectura para comentar", 400);
    }
}

module.exports = { validarLibroEstado };