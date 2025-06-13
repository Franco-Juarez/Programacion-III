const TarjetaPersona = ({ persona }) => { 
    return (
        <div className="persona-card">
            <h2>Nombre: {persona.nombre} {persona.apellido}</h2>
            <p>Edad: {persona.edad}</p>
            <p>Email: {persona.email}</p>
        </div>
    );
}

export default TarjetaPersona;