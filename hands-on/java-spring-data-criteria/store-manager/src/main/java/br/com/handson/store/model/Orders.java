package br.com.handson.store.model;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(cascade=CascadeType.PERSIST)
    @JoinColumn(name = "sale_id")
    private Sales salesId;

    @ManyToOne(cascade=CascadeType.PERSIST)
    @JoinColumn(name = "product_id")
    private Products productsId;

    private Integer soldAmount;

}
