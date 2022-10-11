package br.edu.ifsp.domain.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @OneToMany(mappedBy="order")
    private Set<Product> product;

    private OrderStatus orderStatus;

    @OneToOne(mappedBy = "order")
    private Customer customer;

    private Double totalValue;
}
