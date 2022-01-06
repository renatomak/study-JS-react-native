package br.com.handson.store.dto;

import lombok.Data;

import javax.validation.constraints.*;

@Data
public class ProductsDto {

    private Integer id;

    @NotNull(message = "O campo é obrigatório")
    @NotEmpty(message = "O campo 'name' não pode ser vazio")
    @Size(min = 5, max = 250, message
            = "O nome do produto deve ter no minimo 5 e no maximo 250 caracteres")
    private String name;

    @Positive(message = "O campo quantidade deve ser maior que zero")
    @NotNull(message = "O campo quantidade é obrigatório")
    private Integer quantity;
}
