import React, { useState, useEffect } from 'react';
import { Navbar, Input, Select, ErrorMsg } from '../components';
import { listarMonedas, sacarResultado, agregarResultado } from "../api/conversion";

const ConversionPage = () => {

  const [form, setForm] = useState({
    monto: "",
    moneda_origen: "",
    moneda_objetivo: ""
  });

  const [monedas, setMonedas] = useState([]);
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    listarMonedas(setMonedas);
  }, [])

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { monto, moneda_origen, moneda_objetivo } = form;

    if (monto === '') {
      setError("El monto es obligatorio");
      return;
    }
    if (parseInt(monto) < 0 || parseInt(monto) === 0) {
      setError("Por favor digita un monto valido");
      return;
    }

    if (moneda_objetivo === "") {
      setError("Seleccione la moneda objetivo");
      return;
    }

    sacarResultado(moneda_objetivo, monto, setResultado);

  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>

        {error ? <ErrorMsg msg={error} /> : null}

        <Input
          name={"monto"}
          label={"Monto"}
          type={"number"}
          onChange={onChange}
        />

        <Select
          name={"moneda_objetivo"}
          label={"Convertir USD a:"}
          monedas={monedas}
          onChange={onChange}
        />

        <button type='submit' className='btn btn-success'>Convertir</button>

        {resultado ?
          <div className="alert alert-primary" role="alert">
            {form.monto} USD = {resultado} {form.moneda_objetivo}
          </div>
          : null}

      </form>
    </>
  )
}

export default ConversionPage