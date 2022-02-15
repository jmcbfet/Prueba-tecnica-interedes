package com.example.demo.dao;

import java.util.List;

import com.example.demo.models.HistorialDivisa;

public interface HistorialDivisaDAO {

	public List<HistorialDivisa> listar();
	public void agregarResultado(HistorialDivisa historialDivisa);
	public void eliminarResultado(int id);
	
}
