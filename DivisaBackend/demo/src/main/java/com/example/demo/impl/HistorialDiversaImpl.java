package com.example.demo.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.example.demo.dao.HistorialDivisaDAO;
import com.example.demo.models.HistorialDivisa;

@Service
public class HistorialDiversaImpl implements HistorialDivisaDAO {
	
	@Autowired
	JdbcTemplate jdbc;
	
	RowMapper<HistorialDivisa> rowMapper = (rs, rowNum) -> {
		HistorialDivisa historialDivisa = new HistorialDivisa();
		historialDivisa.setId(rs.getInt("id"));
		historialDivisa.setMoneda_origen(rs.getString("moneda_origen"));
		historialDivisa.setMoneda_objetivo(rs.getString("moneda_objetivo"));
		historialDivisa.setMonto(rs.getFloat("monto"));
		historialDivisa.setValor_conversion(rs.getFloat("valor_conversion"));
		historialDivisa.setFecha_conversion(rs.getDate("fecha_conversion"));
		
		return historialDivisa;
	};

	@Override
	public List<HistorialDivisa> listar() {
		String sql = "SELECT id, moneda_origen, moneda_objetivo, monto, valor_conversion, fecha_conversion FROM historial_divisa ORDER BY fecha_conversion DESC";
		return jdbc.query(sql, rowMapper);
	};

	@Override
	public void agregarResultado(HistorialDivisa historialDivisa) {
		String sql = "INSERT INTO historial_divisa(moneda_origen, moneda_objetivo, monto, valor_conversion, fecha_conversion) VALUES (?, ?, ?, ?, now())";
		jdbc.update(sql, 
				historialDivisa.getMoneda_origen(),
				historialDivisa.getMoneda_objetivo(),
				historialDivisa.getMonto(),
				historialDivisa.getValor_conversion());
	};

	@Override
	public void eliminarResultado(int id) {
		String sql = "DELETE FROM historial_divisa WHERE id = ?";
		jdbc.update(sql, id);
	};
	

}
