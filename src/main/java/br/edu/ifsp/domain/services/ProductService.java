package br.edu.ifsp.domain.services;

import br.edu.ifsp.application.repositories.ProductRepository;
import br.edu.ifsp.domain.dtos.ProductDTO;
import br.edu.ifsp.domain.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public void addProduct(ProductDTO productDTO) {
        Product product = new Product(productDTO);
        productRepository.save(product);
    }
}
