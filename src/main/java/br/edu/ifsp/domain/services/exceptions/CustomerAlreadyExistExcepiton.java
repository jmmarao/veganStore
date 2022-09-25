package br.edu.ifsp.domain.services.exceptions;

public class CustomerAlreadyExistExcepiton extends RuntimeException {
    public CustomerAlreadyExistExcepiton(String message) {
        super(message);
    }
}
