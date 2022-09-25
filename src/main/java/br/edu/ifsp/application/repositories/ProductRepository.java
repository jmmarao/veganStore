package br.edu.ifsp.application.repositories;

import br.edu.ifsp.domain.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(nativeQuery = true, value =
            "SELECT * FROM products p " +
                    "WHERE LOWER(p.name) LIKE ('%' || :stringToFind || '%') OR " +
                    "LOWER(p.provider) LIKE LOWER('%' || :stringToFind || '%')")
    public List<Product> queryToFindByNameOrProvider(String stringToFind);
}
