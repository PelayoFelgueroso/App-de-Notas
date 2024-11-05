import { Nota } from "../App";

interface ListaNotasProps {
    notas: Nota[];
    filter: string;
    eliminarNota: (index: number) => void;
}

export const ListaNotas: React.FC<ListaNotasProps> = ({ notas, filter, eliminarNota }) => {
    return (
        <>
            {notas && (
                <div className="divListaNotas">
                    <ul className="listaNotas">
                        {filter === ""
                            ? notas.map((nota, index) => (
                                  <li key={index}>
                                      <p>{nota.content}</p>
                                      <button className="rmvBtn" onClick={() => eliminarNota(index)}>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="lucide lucide-trash2 h-4 w-4"
                                              data-id="10"
                                          >
                                              <path d="M3 6h18"></path>
                                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                              <line x1="10" x2="10" y1="11" y2="17"></line>
                                              <line x1="14" x2="14" y1="11" y2="17"></line>
                                          </svg>
                                      </button>
                                  </li>
                              ))
                            : notas
                                  .filter((nota) => nota.content.toLowerCase().includes(filter.toLowerCase()))
                                  .map((nota, index) => (
                                      <li key={index}>
                                          <p>{nota.content}</p>
                                          <button className="rmvBtn" onClick={() => eliminarNota(index)}>
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="lucide lucide-trash2 h-4 w-4"
                                                  data-id="10"
                                              >
                                                  <path d="M3 6h18"></path>
                                                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                                  <line x1="10" x2="10" y1="11" y2="17"></line>
                                                  <line x1="14" x2="14" y1="11" y2="17"></line>
                                              </svg>
                                          </button>
                                      </li>
                                  ))}
                    </ul>
                </div>
            )}
        </>
    );
};
