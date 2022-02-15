import React from 'react';

const Select = ({ monedas, label, name, onChange }) => {
    return (
        <>
            <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
            <select className="form-select" name={name} onChange={onChange}>
                <option value="">Selecciona ...</option>
                {monedas.map(moneda => (
                    <option key={moneda.id} value={moneda.sigla}>{moneda.nombre} ({moneda.sigla})</option>
                ))}
            </select>
        </>

    )
}

export default Select