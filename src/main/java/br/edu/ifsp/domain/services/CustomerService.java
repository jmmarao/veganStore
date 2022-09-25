package br.edu.ifsp.domain.services;

import br.edu.ifsp.application.repositories.CustomerRepository;
import br.edu.ifsp.domain.dtos.CustomerDTO;
import br.edu.ifsp.domain.entities.Customer;
import br.edu.ifsp.domain.services.exceptions.CustomerAlreadyExistException;
import br.edu.ifsp.domain.services.exceptions.CustomerDoesNotExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public void addCustomer(CustomerDTO customerDTO) {
        validateCustomer(customerDTO);

        Customer customer = new Customer(customerDTO);
        customerRepository.save(customer);
    }

    private void validateCustomer(CustomerDTO customerDTO) {
        Customer customerToFindCpf = customerRepository.findCustomerByCpf(customerDTO.getCpf());
        Customer customerToFindEmail = customerRepository.findCustomerByEmail(customerDTO.getEmail());

        if (customerToFindCpf != null) {
            throw new CustomerAlreadyExistException("Cliente já existente! Para mais informações procure pelo " +
                    "CPF " + customerToFindCpf.getCpf());
        }

        if (customerToFindEmail != null) {
            throw new CustomerAlreadyExistException("Cliente já existente! Para mais informações procure pelo " +
                    "email " + customerDTO.getEmail());
        }
    }

    @Transactional(readOnly = true)
    public CustomerDTO findByCPFOrEmail(String customerToFInd) {
        Customer customerToFind = customerRepository.queryToFindByCPFOrEmail(customerToFInd);

        if (customerToFind == null)
            throw new CustomerDoesNotExistException("Cliente não encontrado no sistema! Tente novamente");

        return new CustomerDTO(customerToFind);
    }
}
