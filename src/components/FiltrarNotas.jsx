import { useState } from "react"
import PropTypes from "prop-types"

export const FiltrarNotas = ({ agregarFiltro }) => {
    const [nuevoFiltro, setNuevoFiltro] = useState("")

    const handleChange = (e) => {
        const value = e.target.value

        setNuevoFiltro(value)
        agregarFiltro(value)
    }

    return (
        <div className="filterNotas">
            <input className="input" type="text" name="filter" placeholder="Filtrar notas..." value={nuevoFiltro} onChange={handleChange} />
        </div>
    )
}

FiltrarNotas.propTypes = {
    agregarFiltro: PropTypes.func.isRequired,
}