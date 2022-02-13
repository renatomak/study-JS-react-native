package br.com.handson.store.model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer quantity = 0;

    public Products(String name, Integer quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    public Products(Integer id, String name, Integer quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }

    public Products() {
        super();
    }

    public Products setId(Integer id) {
        this.id = id;
        return this;
    }

    public static class Builder {
        Products products = new Products();

        public Builder withName(String name) {
            products.name = name;
            return this;
        }

        public Builder withQuantity(Integer quantity) {
            products.quantity = quantity;
            return this;
        }
        public Products build() { return products; }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Products products = (Products) o;
        return id != null && Objects.equals(id, products.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
