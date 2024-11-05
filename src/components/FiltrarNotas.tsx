import { useState } from "react";

interface FiltrarNotasProps {
    agregarFiltro: (filtro: string) => void;
}

export const FiltrarNotas: React.FC<FiltrarNotasProps> = ({ agregarFiltro }) => {
    const [nuevoFiltro, setNuevoFiltro] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNuevoFiltro(value);
        agregarFiltro(value);
    };

    return (
        <div className="filterNotas">
            <input
                className="input"
                type="text"
                name="filter"
                placeholder="Filtrar notas..."
                value={nuevoFiltro}
                onChange={handleChange}
            />
        </div>
    );
};
