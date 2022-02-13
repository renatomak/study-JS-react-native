package br.com.handson.store.service;

import br.com.handson.store.dto.ProductsDto;
import br.com.handson.store.dto.SalesDto;
import br.com.handson.store.model.Products;
import br.com.handson.store.model.Sales;
import br.com.handson.store.repository.SalesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SalesService {

    private final SalesRepository salesRepository;
    private final  ProductsService productsService;

    public SalesDto create(List<ProductsDto> productsDtos) {
        Sales sales = new Sales();

        List<Products> products = new ArrayList<>();

        for(ProductsDto productsDto : productsDtos) {
            products.add(productsService.convertToModel(productsDto));
        }

        sales.setListProducts(products);

        Sales newSales = salesRepository.save(sales);

        SalesDto salesDto = new SalesDto();
        salesDto.setId(newSales.getId());
        salesDto.setProductsDtos(productsDtos);

        return salesDto;
    }
}
