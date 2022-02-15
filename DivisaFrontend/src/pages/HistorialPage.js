import React, { useEffect, useState } from 'react';
import { Navbar } from '../components';
import { listarResultados, eliminarResultado } from '../api/historial'

const HistorialPage = () => {

  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    listarResultados(setHistorial);
  }, [])

  const eliminarRegistro = (id) => {
    eliminarResultado(id);
    setHistorial(historial.filter(item => item.id !== id));
  }

  return (
    <>
      <Navbar />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Mod. Origen</th>
            <th scope="col">Mod. Objetivo</th>
            <th scope="col">Monto</th>
            <th scope="col">Valor</th>
            <th scope="col">Fecha</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {historial.map(data => (
            <tr key={data.id}>
              <th>{data.moneda_origen}</th>
              <td>{data.moneda_objetivo}</td>
              <td>{data.monto}</td>
              <td>{data.valor_conversion}</td>
              <td>{data.fecha_conversion}</td>
              <td>
                <button className="btn btn-danger" onClick={() => eliminarRegistro(data.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default HistorialPage