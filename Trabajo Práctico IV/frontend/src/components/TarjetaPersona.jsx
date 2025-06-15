import { Calendar, IdCard, Mail } from 'lucide-react';

const TarjetaPersona = ({ persona }) => {
    return (
        <div className="persona-card">
            <h2>{persona.nombre} {persona.apellido}</h2>
            <span className="persona-info">
                <IdCard
                    color="#475569"
                    size={20}
                />
                <p>{persona.id}</p>
            </span>
            <span className="persona-info">
                <Calendar
                    color="#475569"
                    size={20}
                />
                <p>{persona.edad}</p>
            </span>
            <span className="persona-info">
                <Mail
                    color="#475569"
                    size={20}
                />
                <p>{persona.email}</p>
            </span>
        </div>
    );
}

export default TarjetaPersona;