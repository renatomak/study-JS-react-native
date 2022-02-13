package br.com.handson.store.controller;

import br.com.handson.store.dto.ProductsDto;
import br.com.handson.store.model.Products;
import br.com.handson.store.service.ProductsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ProductsControllerTest {

    public static final int QUANTITY = 10;
    public static final String NAME = "Celular sansung";
    public static final Integer ID = 1;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ProductsController productsController;

    @MockBean
    private final ProductsService productsService;

    private ProductsDto productsDto;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        startProducts();
    }


    private void startProducts() {
        productsDto = new ProductsDto(ID, NAME, QUANTITY);
    }

}


















//import br.com.handson.store.dto.ProductsDto;
//
//import br.com.handson.store.service.ProductsService;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.hamcrest.Matchers;
//import org.junit.jupiter.api.Test;
//
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.*;
//
//@SpringBootTest
//@AutoConfigureMockMvc
//public class ProductsControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private ProductsController productsController;
//
//    @MockBean
//    private ProductsService productsService;
//
//    private final ObjectMapper mapper = new ObjectMapper();
//
//    @Test
//    public void testShouldGetProduct() throws Exception {
//
//        ProductsDto productsDto = createProduct();
//        Integer id = 1;
//
//        when(productsService.getProduct(eq(id))).thenReturn(productsDto);
//
//        mockMvc.perform(
//                get("/products/" + productsDto.setId(1).getId())
//                        .accept(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.name", Matchers.is(productsDto.getName())))
//                .andExpect(jsonPath("$.quantity", Matchers.is(productsDto.getQuantity())));
//    }
//
//
//    @Test
//    public void testShouldGetAllProduct() throws Exception {
//
//        ProductsDto productsDto = createProduct();
//
//        when(productsService.listProducts()).thenReturn(List.of(productsDto));
//
//        List<ProductsDto> response = productsController.listProducts().getBody();
//
//       assertEquals(ProductsDto.class, response.get(0).getClass());
//       assertEquals(productsDto.getName(), response.get(0).getName());
//       assertEquals(productsDto.getQuantity(), response.get(0).getQuantity());
//    }
//
//
//
//    private ProductsDto createProduct() {
//        return new ProductsDto.Builder()
//                .withName("Celular sansung")
//                .withQuantity(10)
//                .build();
//    }
//
//}
















//import br.com.handson.store.dto.ProductsDto;
//import br.com.handson.store.model.Products;
//import br.com.handson.store.service.ProductsService;
//import io.restassured.http.ContentType;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.HttpStatus;
//
//import static io.restassured.module.mockmvc.RestAssuredMockMvc.*;
//
//import static org.mockito.Mockito.when;
//
//@WebMvcTest
//public class ProductsControllerTest {
//
//    @Autowired
//    private ProductsController productsController;
//
//    @MockBean
//    private ProductsService productsService;
//
//    @BeforeEach
//    public void setup() {
//        standaloneSetup(this.productsController);
//    }
//
//    @Test
//    public void testReturnSuccess_WhenDetalharTopicos() {
//
//        when(this.productsController.getProduct(1))
//                .thenReturn(new ProductsDto(1, "celular sansung", 10));
//
//
//        given()
//                .accept(ContentType.JSON)
//                .when()
//                .get("/products/{id}", 1)
//                .then()
//                .statusCode(HttpStatus.OK.value());
//    }
//
//}
