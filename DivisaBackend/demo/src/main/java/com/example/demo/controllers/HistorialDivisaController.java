package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.HistorialDivisaDAO;
import com.example.demo.models.HistorialDivisa;

@RestController
public class HistorialDivisaController {

	@Autowired
	HistorialDivisaDAO historialDivisaDAO;
	
	@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
	@GetMapping("/listar")
	public ResponseEntity<?> listar() {
		try {
			List<HistorialDivisa> historial = historialDivisaDAO.listar();
			return new ResponseEntity<>(historial, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Hubo un problema", HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
	@PostMapping("/agregar")
	public ResponseEntity<?> agregarResultado(@RequestBody HistorialDivisa historialDivisa) {
		try {
			historialDivisaDAO.agregarResultado(historialDivisa);
			return new ResponseEntity<>("El resultado se agrego", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Hubo un problema", HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
	@DeleteMapping("/eliminar/{id}")
	public ResponseEntity<?> eliminarResultado(@PathVariable("id") int id) {
		try {
			historialDivisaDAO.eliminarResultado(id);
			return new ResponseEntity<>("El resultado se ha eliminado", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Hubo un problema", HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
}
