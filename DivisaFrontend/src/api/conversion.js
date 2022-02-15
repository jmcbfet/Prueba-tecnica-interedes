import axios from "axios";
import { v4 as uuid } from 'uuid';

export const listarMonedas = (state) => {
    axios.get(`https://openexchangerates.org/api/currencies.json?app_id=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            let data = []
            for (let obj in response.data) {
                let moneda = {};
                const unique_id = uuid();
                moneda.id = unique_id;
                moneda.sigla = obj;
                moneda.nombre = response.data[obj]
                data.push(moneda);
            }
            state(data);
        })
        .catch(e => {
            console.log(e);
        })
}

export const sacarResultado = (moneda_objetivo, monto, state) => {
    axios.get(`https://openexchangerates.org/api/latest.json?app_id=${process.env.REACT_APP_API_KEY}&symbols=${moneda_objetivo}`)
        .then(response => {
            let operacion = monto * response.data.rates[moneda_objetivo];
            agregarResultado({
                moneda_origen: "USD",
                moneda_objetivo: moneda_objetivo,
                monto: monto,
                valor_conversion: operacion
            })
            state(operacion)
        })
        .catch(e => {
            console.log(e);
        })
}

const agregarResultado = (data) => {

    axios.post(`http://localhost:8080/agregar`, data)
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.log(e);
        })
}