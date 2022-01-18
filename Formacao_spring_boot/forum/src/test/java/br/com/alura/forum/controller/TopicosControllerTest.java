package br.com.alura.forum.controller;

import java.net.URI;
import java.net.URISyntaxException;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import br.com.alura.forum.controller.dto.DetalhesDoTopicoDto;
import br.com.alura.forum.modelo.Curso;
import br.com.alura.forum.modelo.Topico;
import io.restassured.http.ContentType;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.*;
import static org.mockito.Mockito.when;


@WebMvcTest
public class TopicosControllerTest {
	
	@MockBean
	private TopicosController topicosController;
	

	
// Faz o test trabalhar somente com a instancia do topicosController
	@Before
	public void setup() {
		standaloneSetup(topicosController);
	}
	

	@Test
	public void testReturnSuccess_WhenDetalharTopicos() {
				
		Curso curso = new Curso();
		curso.setNome("Spring Boot");
		curso.setCategoria("Programação");
		curso.setId(1L);
		Topico topico = new Topico("Dúvida", "Erro ao criar projeto", curso);
		ResponseEntity<DetalhesDoTopicoDto> r = new ResponseEntity(HttpStatus.ACCEPTED);
		
		when(this.topicosController.detalhar(1L))
			.thenReturn(r.ok(new DetalhesDoTopicoDto(topico)));

			
		given()
			.accept(ContentType.JSON)
		.when()
			.get("/topicos/{id}", 1L)
		.then()
			.statusCode(HttpStatus.OK.value());		
	}

}
