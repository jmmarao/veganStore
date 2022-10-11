package br.edu.ifsp.domain.dtos;

import br.edu.ifsp.domain.entities.Customer;
import br.edu.ifsp.domain.entities.Order;
import br.edu.ifsp.domain.entities.OrderStatus;
import br.edu.ifsp.domain.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private Integer id;
    private Set<Product> product;
    private OrderStatus orderStatus;
    private Customer customer;
    private Double totalValue;

    public OrderDTO(Order entity) {
        id = entity.getId();
        product = entity.getProduct();
        orderStatus = entity.getOrderStatus();
        customer = entity.getCustomer();
        totalValue = entity.getTotalValue();
    }
}
