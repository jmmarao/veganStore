package br.edu.ifsp.domain.dtos;

import br.edu.ifsp.domain.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Integer id;
    private String name;
    private String description;
    private Double costPrice;
    private Double salePrice;
    private String provider;

    public ProductDTO(Product entity) {
        id = entity.getId();
        name = entity.getName();
        description = entity.getDescription();
        costPrice = entity.getCostPrice();
        salePrice = entity.getSalePrice();
        provider = entity.getProvider();
    }
}
