package br.edu.ifsp.domain.services;

import br.edu.ifsp.application.repositories.CustomerRepository;
import br.edu.ifsp.domain.dtos.CustomerDTO;
import br.edu.ifsp.domain.entities.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Transactional(readOnly = true)
    public Customer findByCpf(String email) {
        return customerRepository.findByCpf(email);
    }

    @Transactional(readOnly = true)
    public Customer findByEmail(String email) {
        return customerRepository.findByEmail(email);
    }

    @Transactional
    public void addCustomer(CustomerDTO customerDTO) {
        customerRepository.save(new Customer(customerDTO));
//        if (isCustomer(customerDTO)) {
//            System.out.println("Cliente já existente! Para mais informações procure pelo" +
//                    "\n   - CPF: " + customerDTO.getCpf() + "\n   - Email: " + customerDTO.getEmail());
//
//        } else {
//            customerRepository.save(new Customer(customerDTO));
//        }
    }

    private boolean isCustomer(CustomerDTO customerDTO) {
        return findByCpf(customerDTO.getCpf()) != null || findByEmail(customerDTO.getEmail()) != null;
    }
}
