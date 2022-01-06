package br.com.handson.store.service;

import br.com.handson.store.dto.ProductsDto;
import br.com.handson.store.model.Products;
import br.com.handson.store.repository.ProductsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductsService {

    private final ProductsRepository productsRepository;

    public ProductsDto createProduct(ProductsDto productsDto) {
        Products products = new Products();
        products.setName(productsDto.getName());
        products.setQuantity(productsDto.getQuantity());

        Integer id = productsRepository.save(products).getId();

        productsDto.setId(id);

        return productsDto;
    }

    public List<ProductsDto> listProducts() {
        List<Products> products = new ArrayList<>();
        products = productsRepository.findAll();

        List<ProductsDto> productsDtos = new ArrayList<>();

        return productsDtos;
    }
}
