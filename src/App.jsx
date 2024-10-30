import { useEffect, useState } from "react"
import { CrearNota } from "./components/CrearNota"
import { ListaNotas } from "./components/ListaNotas"
import { FiltrarNotas } from "./components/FiltrarNotas"
import './App.css'

export const AppNotas = () => {
    const [notas, setNotas] = useState(() => {
        const notasFromStorage = window.localStorage.getItem("notasSaved")
        return notasFromStorage ? JSON.parse(notasFromStorage) : Array(0)
    })
    const [filter, setFilter] = useState("")

    useEffect (() => {
        window.localStorage.setItem("notasSaved", JSON.stringify(notas))
    },[notas])

    const agregarFiltro = (nuevoFiltro) => {
        setFilter(nuevoFiltro)
    }

    const agregarNota = (nuevaNota) => {
        setNotas([...notas, nuevaNota])
    }
    const eliminarNota = (index) => {
        const nuevasNotas = notas.filter((_, i) => i !== index)
        setNotas(nuevasNotas)
    }

    return (
        <section className="main-root">
            <h1>Aplicación de Notas</h1>
            <div className="contenedorFuncional">
              <CrearNota agregarNota={agregarNota} />
              <FiltrarNotas agregarFiltro={agregarFiltro} />
            </div>
            <ListaNotas filter={filter} notas={notas} eliminarNota={eliminarNota} />
        </section>
    )
}