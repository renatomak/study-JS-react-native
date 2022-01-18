package br.com.handson.store.service;

import br.com.handson.store.dto.ProductsDto;
import br.com.handson.store.model.Products;
import br.com.handson.store.repository.ProductsRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@SpringBootTest
class ProductsServiceTest {

    public static final int QUANTITY = 10;
    public static final String NAME = "Celular sansung";
    public static final Integer ID = 1;

    @Autowired
    private ProductsService productsService;

    @MockBean
    private ProductsRepository productsRepository;

    private Products products;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        startProducts();
    }


    @Test
    void listProducts() {
        when(productsRepository.findAll()).thenReturn(List.of(products));
        List<ProductsDto> response = productsService.listProducts();
        assertNotNull(response);
        assertEquals(1, response.size());
        assertEquals(ProductsDto.class, response.get(0).getClass());
        assertEquals(ID, response.get(0).getId());
        assertEquals(NAME, response.get(0).getName());
        assertEquals(QUANTITY, response.get(0).getQuantity());
        assertEquals(ArrayList.class, response.getClass());
    }

    @Test
    void whenGetProductThenReturnAnProductInstance() {
        when(productsRepository.getById(eq(ID))).thenReturn(products);

        ProductsDto response = productsService.getProduct(ID);

        Assertions.assertEquals(ProductsDto.class, response.getClass());
        assertEquals(ProductsDto.class, response.getClass());
        assertEquals(ID, response.getId());
        assertEquals(NAME, response.getName());
        assertEquals(QUANTITY, response.getQuantity());
    }


    private void startProducts() {
        products = new Products(ID, NAME, QUANTITY);
    }
}