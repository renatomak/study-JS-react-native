package br.com.handson.store.controller;

import br.com.handson.store.dto.ProductsDto;
import br.com.handson.store.service.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductsController {

    private final ProductsService productsService;

    // TODO: Pesquisar como fazer validações dos atributos
    @PostMapping
    public ResponseEntity<ProductsDto> createProduct(@RequestBody @Valid ProductsDto productsDto) {
        return ResponseEntity.ok(productsService.createProduct(productsDto));
    }

    @GetMapping
    public ResponseEntity<List<ProductsDto>> listProducts() {
        return ResponseEntity.ok(productsService.listProducts());
    }

}
