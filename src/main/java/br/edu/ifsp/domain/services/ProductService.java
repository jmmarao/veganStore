package br.edu.ifsp.domain.services;

import br.edu.ifsp.application.repositories.ProductRepository;
import br.edu.ifsp.domain.dtos.ProductDTO;
import br.edu.ifsp.domain.entities.Product;
import br.edu.ifsp.domain.services.exceptions.ProductDoesNotExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public void addProduct(ProductDTO productDTO) {
        Product product = new Product(productDTO);
        productRepository.save(product);
    }

    @Transactional(readOnly = true)
    public List<ProductDTO> findByNameOrProvider(String stringToFind) {
        List<Product> productsToFind = productRepository.queryToFindByNameOrProvider(stringToFind);

        if (productsToFind.isEmpty())
            throw new ProductDoesNotExistException("Produto e provedor não encontrados no sistema! Tente novamente");

        List<ProductDTO> products = new ArrayList<>();
        for (Product product : productsToFind) {
            products.add(new ProductDTO(product));
        }
        return products;
    }
}
