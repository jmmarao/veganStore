package br.edu.ifsp.domain.dtos;

import br.edu.ifsp.domain.entities.Customer;
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
    private String password;
    private String cpf;

    public CustomerDTO(Customer entity) {
        id = entity.getId();
        name = entity.getName();
        email = entity.getEmail();
        password = entity.getPassword();
        cpf = entity.getCpf();
    }
}
