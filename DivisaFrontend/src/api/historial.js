import axios from "axios";

export const listarResultados = (state) => {
    axios.get(`http://localhost:8080/listar`)
        .then(response => {
            state(response.data)
        })
        .catch(e => {
            console.log(e);
        })
}

export const eliminarResultado = (id, state) => {
    axios.delete(`http://localhost:8080/eliminar/${id}`)
        .then(response => {
            console.log("El resultado se elimino")
        })
        .catch(e => {
            console.log(e);
        })
}