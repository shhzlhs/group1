package group1.testing.repository;


import group1.testing.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IItemRepository extends JpaRepository<Item,Integer>, JpaSpecificationExecutor<Item> {
    Item findById(int id);
}
