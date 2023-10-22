package group1.testing.repository;

import group1.testing.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface IPostRepository extends JpaRepository<Post,Integer>, JpaSpecificationExecutor<Post> {
    Post findById(int id);
    List<Post> findAllByUserUsername(String username);

}
