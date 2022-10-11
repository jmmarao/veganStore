package br.edu.ifsp.domain.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum OrderStatus {
    PAID_OUT("Pago"),
    PAYABLE("A pagar");

    private String status;
}
