import { useState } from "react"
import PropTypes from "prop-types"

export const CrearNota = ({ agregarNota }) => {
    const [nuevaNota, setNuevaNota] = useState("")

    const crearNota = () => {
        if (nuevaNota.trim()) {
            agregarNota(nuevaNota)
            setNuevaNota("")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        setNuevaNota(nuevaNota)
        crearNota()
    }
    const handleChange = (e) => {
        setNuevaNota(e.target.value)
    }

    return (
        <div className="addNota">
            <form onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <input className="input" type="text" name="nuevaNota" placeholder="Escribe una nueva nota..." value={nuevaNota} onChange={handleChange} />
                </div>
                <div className="buttonDiv">
                    <button className="btn" type="submit"><span>+</span>Agregar</button>
                </div>
            </form>
        </div>
    )
}

CrearNota.propTypes = {
    agregarNota: PropTypes.func.isRequired,
}
