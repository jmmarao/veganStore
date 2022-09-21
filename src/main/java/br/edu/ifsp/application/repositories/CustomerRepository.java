package br.edu.ifsp.application.repositories;

import br.edu.ifsp.domain.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
