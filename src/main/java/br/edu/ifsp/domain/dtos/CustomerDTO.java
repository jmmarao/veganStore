package br.edu.ifsp.domain.dtos;

import br.edu.ifsp.domain.entities.Customer;
import br.edu.ifsp.domain.entities.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO {
    private Integer id;
    private String name;
    private String email;
    private String cpf;
    private Order order;

    public CustomerDTO(Customer entity) {
        id = entity.getId();
        email = entity.getEmail();
        cpf = entity.getCpf();
        name = entity.getName();
        order = entity.getOrder();
    }
}
