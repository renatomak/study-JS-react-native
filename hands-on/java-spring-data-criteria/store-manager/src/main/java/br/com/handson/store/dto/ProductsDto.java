package br.com.handson.store.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.util.Objects;

@Data
public class ProductsDto {

    private Integer id;

    @NotNull(message = "The 'name' field is mandatory.")
    @NotEmpty(message = "O campo 'name' não pode ser vazio")
    @Size(min = 5, message
            = "'name' length must be at least 5")
    private String name;

    @Positive(message = "'quantity' must be larger than or equal to 1")
    @NotNull(message = "The 'quantity' field is mandatory.")
    private Integer quantity;

    public ProductsDto() {
    }

    public ProductsDto(Integer id, String name, Integer quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }

    public ProductsDto setId(Integer id) {
        this.id = id;
        return this;
    }

    public static class Builder {
        ProductsDto productsDto = new ProductsDto();

        public ProductsDto.Builder withName(String name) {
            productsDto.name = name;
            return this;
        }

        public ProductsDto.Builder withQuantity(Integer quantity) {
            productsDto.quantity = quantity;
            return this;
        }
        public ProductsDto build() { return productsDto; }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductsDto that = (ProductsDto) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
