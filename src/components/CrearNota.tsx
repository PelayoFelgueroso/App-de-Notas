import { useState } from "react";
import { Nota } from "../App";

interface CrearNotaProps {
    agregarNota: (nota: Nota) => void;
    notas: Nota[]
}

export const CrearNota: React.FC<CrearNotaProps> = ({ agregarNota, notas }) => {
    const [nuevaNota, setNuevaNota] = useState<string>("");

    const crearNota = () => {
        if (nuevaNota.trim()) {
            const nuevaNotaObj: Nota = { id: notas.length + 1, content: nuevaNota };
            agregarNota(nuevaNotaObj);
            setNuevaNota("");
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        crearNota();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNuevaNota(e.target.value);
    };

    return (
        <div className="addNota">
            <form onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <input
                        className="input"
                        type="text"
                        name="nuevaNota"
                        placeholder="Escribe una nueva nota..."
                        value={nuevaNota}
                        onChange={handleChange}
                    />
                </div>
                <div className="buttonDiv">
                    <button className="btn" type="submit">
                        <span>+</span>Agregar
                    </button>
                </div>
            </form>
        </div>
    );
};
