package br.com.handson.store.controller;

import br.com.handson.store.dto.ProductsDto;
import br.com.handson.store.service.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductsController {

    private final ProductsService productsService;

    @PostMapping
    public ResponseEntity<ProductsDto> createProduct(@RequestBody ProductsDto productsDto) {
        return ResponseEntity.ok(productsService.createProduct(productsDto));
    }

}
