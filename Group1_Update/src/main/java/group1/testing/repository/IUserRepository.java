package group1.testing.repository;

import group1.testing.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IUserRepository extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User> {
    User findById(int id);

    User findByUsername(String username);

    User findByEmail(String email);

}
