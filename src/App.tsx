import { useEffect, useState } from "react";
import { CrearNota } from "./components/CrearNota";
import { ListaNotas } from "./components/ListaNotas";
import { FiltrarNotas } from "./components/FiltrarNotas";
import './App.css';
import { useThemeContext } from "./components/themeContext/ThemeContext";
import { Header } from "./components/header/Header";

export interface Nota {
    id: number;
    content: string;
}

export const AppNotas: React.FC = () => {
    const [notas, setNotas] = useState<Nota[]>(() => {
        const notasFromStorage = window.localStorage.getItem("notasSaved");
        return notasFromStorage ? JSON.parse(notasFromStorage) : [];
    });
    const [filter, setFilter] = useState<string>("");
    const { isBrightMode } = useThemeContext();

    useEffect(() => {
        window.localStorage.setItem("notasSaved", JSON.stringify(notas));
    }, [notas]);

    useEffect(() => {
        document.body.className = isBrightMode ? "lightMode" : "darkMode";
    }, [isBrightMode]);

    const agregarFiltro = (nuevoFiltro: string) => {
        setFilter(nuevoFiltro);
    };

    const agregarNota = (nuevaNota: Nota) => {
        setNotas([...notas, nuevaNota]);
    };

    const eliminarNota = (index: number) => {
        const nuevasNotas = notas.filter((_, i) => i !== index);
        setNotas(nuevasNotas);
    };

    return (
        <>
            <Header />
            <section className="main-root">
                <h1>Aplicación de Notas</h1>
                <div className="contenedorFuncional">
                    <CrearNota agregarNota={agregarNota} notas={notas} />
                    <FiltrarNotas agregarFiltro={agregarFiltro} />
                </div>
                <ListaNotas filter={filter} notas={notas} eliminarNota={eliminarNota} />
            </section>
        </>
    );
};
