package group1.testing.repository;

import group1.testing.entity.UserItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

public interface IUserItemRepository extends JpaRepository<UserItem, Integer> {

    UserItem findByUserIdAndItemId(int userId, int itemId);

    @Transactional
    @Modifying
    void deleteByUserIdAndItemId(int userId, int itemId);
}
