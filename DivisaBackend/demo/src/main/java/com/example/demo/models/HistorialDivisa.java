package com.example.demo.models;

import java.util.Date;

public class HistorialDivisa {

	private int id;
	private String moneda_origen;
	private String moneda_objetivo;
	private float monto;
	private float valor_conversion;
	private Date fecha_conversion;
	
	public HistorialDivisa() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMoneda_origen() {
		return moneda_origen;
	}

	public void setMoneda_origen(String moneda_origen) {
		this.moneda_origen = moneda_origen;
	}

	public String getMoneda_objetivo() {
		return moneda_objetivo;
	}

	public void setMoneda_objetivo(String moneda_objetivo) {
		this.moneda_objetivo = moneda_objetivo;
	}

	public float getMonto() {
		return monto;
	}

	public void setMonto(float monto) {
		this.monto = monto;
	}

	public float getValor_conversion() {
		return valor_conversion;
	}

	public void setValor_conversion(float valor_conversion) {
		this.valor_conversion = valor_conversion;
	}

	public Date getFecha_conversion() {
		return fecha_conversion;
	}

	public void setFecha_conversion(Date fecha_conversion) {
		this.fecha_conversion = fecha_conversion;
	}

}
