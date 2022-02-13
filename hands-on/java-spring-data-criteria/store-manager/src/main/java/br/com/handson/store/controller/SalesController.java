package br.com.handson.store.controller;

import br.com.handson.store.dto.ProductsDto;
import br.com.handson.store.dto.SalesDto;
import br.com.handson.store.model.Sales;
import br.com.handson.store.service.SalesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sales")
public class SalesController {

    private final SalesService salesService = new SalesService();

    @PostMapping
    public ResponseEntity<SalesDto> createProduct(@RequestBody List<ProductsDto> productsDtos) {
        return ResponseEntity.ok(salesService.create(productsDtos));
    }

}
