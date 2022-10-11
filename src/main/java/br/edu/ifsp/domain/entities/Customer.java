package br.edu.ifsp.domain.entities;

import br.edu.ifsp.domain.dtos.CustomerDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String cpf;

    private String name;

    @OneToOne
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    private Order order;

    public Customer(CustomerDTO customerDTO) {
        email = customerDTO.getEmail();
        cpf = customerDTO.getCpf();
        name = customerDTO.getName();
        order = customerDTO.getOrder();
    }
}
